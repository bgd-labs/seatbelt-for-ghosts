import { encodeFunctionData, getContract, parseEther, pad } from 'viem'
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book'
import { AAVE_GOVERNANCE_V2_ABI, PROPOSAL_STATES } from './abis/AaveGovernanceV2'
import { TenderlyRequest, mainnetClient, tenderly } from './clients'
import { ERRORS } from './errors'
import { mainnet } from 'viem/chains'
import { EXECUTOR_ABI } from './abis/Executor'

const aaveGovernanceV2Contract = getContract({
  address: AaveGovernanceV2.GOV,
  abi: AAVE_GOVERNANCE_V2_ABI,
  publicClient: mainnetClient,
})

export async function getMainnetProposalState(proposalId: bigint) {
  return aaveGovernanceV2Contract.read.getProposalState([proposalId])
}

export async function getMainnetExecutedLog(proposalId: bigint) {
  const proposal = await aaveGovernanceV2Contract.read.getProposalById([proposalId])
  if (!proposal.executed) throw new Error(ERRORS.NOT_EXECUTED)

  const filter = await aaveGovernanceV2Contract.createEventFilter.ProposalExecuted(
    {},
    { fromBlock: proposal.endBlock, toBlock: proposal.endBlock + 72000n } // TODO: find rational metric (~10days on mainnet)
  )
  const logs = await mainnetClient.getFilterLogs({ filter })
  return logs.find((log) => log.args.id === proposalId)
}
const FROM = '0xD73a92Be73EfbFcF3854433A5FcbAbF9c1316073'

export async function simulateMainnetProposal(proposalId: bigint) {
  const state = await getMainnetProposalState(proposalId)

  if (state === PROPOSAL_STATES.EXECUTED) {
    /**
     * When the proposal was already executed:
     * we can use trace api to just fetch the actual state changes
     */
    const log = await getMainnetExecutedLog(proposalId)
    const trace = await tenderly.trace(mainnet.id, log?.transactionHash!)
  } else if (
    [PROPOSAL_STATES.ACTIVE, PROPOSAL_STATES.PENDING, PROPOSAL_STATES.SUCCEEDED, PROPOSAL_STATES.QUEUED].includes(state)
  ) {
    /**
     * If the proposal is still ongoing:
     * we can fork off the **current block** & alter
     * - votes
     * - block timestamp
     * to pass the proposal
     */
  } else {
    /**
     * If the proposal has failed:
     * we can fork off the proposal startBlock & alter
     * - votes
     * - block timestamp
     * to pass the proposal
     */
    const proposal = await aaveGovernanceV2Contract.read.getProposalById([proposalId])
    const executorContract = getContract({
      address: proposal.executor,
      abi: EXECUTOR_ABI,
      publicClient: mainnetClient,
    })
    const duration = await executorContract.read.VOTING_DURATION()
    const delay = await executorContract.read.getDelay()
    const startBlock = await mainnetClient.getBlock({ blockNumber: proposal.startBlock })

    // construct earliest possible header for execution
    const blockHeader = {
      timestamp: startBlock.timestamp + duration * 12n + delay,
      number: proposal.startBlock + duration,
    }

    return tenderly.simulate({
      network_id: String(mainnet.id) as TenderlyRequest['network_id'],
      block_number: Number(proposal.startBlock),
      from: FROM,
      to: AaveGovernanceV2.GOV,
      save: true,
      gas_price: '0',
      value: proposal.values.reduce((sum, cur) => sum + cur).toString(),
      gas: 30_000_000,
      input: encodeFunctionData({ abi: AAVE_GOVERNANCE_V2_ABI, functionName: 'execute', args: [proposalId] }),
      block_header: blockHeader,
      state_objects: {
        // Give `from` address 10 ETH to send transaction
        [FROM]: { balance: parseEther('10').toString() },
        // Ensure transactions are queued in the executor
        [proposal.executor]: { storage: executorStorageObj },
      },
    })
  }
}
