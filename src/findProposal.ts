import {
  encodeFunctionData,
  getContract,
  parseEther,
  pad,
  toHex,
  keccak256,
  encodeAbiParameters,
  parseAbiParameters,
  fromHex,
  concat,
} from 'viem'
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book'
import { AAVE_GOVERNANCE_V2_ABI, PROPOSAL_STATES, getAaveGovernanceV2Slots } from './abis/AaveGovernanceV2'
import { TenderlyRequest, mainnetClient, tenderly } from './clients'
import { ERRORS } from './errors'
import { mainnet } from 'viem/chains'
import { EXECUTOR_ABI } from './abis/Executor'
import { getSolidityStorageSlotBytes } from './utils/storageSlots'

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

  /**
   * When the proposal was already executed:
   * we can use trace api to just fetch the actual state changes
   */
  if (state === PROPOSAL_STATES.EXECUTED) {
    const log = await getMainnetExecutedLog(proposalId)
    const trace = await tenderly.trace(mainnet.id, log?.transactionHash!)
    return trace
  }

  const proposal = await aaveGovernanceV2Contract.read.getProposalById([proposalId])
  const slots = getAaveGovernanceV2Slots(proposalId, proposal.executor)
  const executorContract = getContract({
    address: proposal.executor,
    abi: EXECUTOR_ABI,
    publicClient: mainnetClient,
  })
  const duration = await executorContract.read.VOTING_DURATION()
  const delay = await executorContract.read.getDelay()

  /**
   * For proposals that are still pending it might happen that the startBlock is not mined yet.
   * Therefore in this case we need to estimate the startTimestamp.
   */
  const latestBlock = await mainnetClient.getBlock()
  const isStartBlockMinted = latestBlock.number! < proposal.startBlock
  const startTimestamp = isStartBlockMinted
    ? latestBlock.timestamp + (proposal.startBlock - latestBlock.number!) * 12n
    : (await mainnetClient.getBlock({ blockNumber: proposal.startBlock })).timestamp

  const endBlockNumber = proposal.startBlock + duration + 2n
  const isEndBlockMinted = latestBlock.number! > endBlockNumber

  // construct earliest possible header for execution
  const blockHeader = {
    timestamp: toHex(startTimestamp + (duration + 1n) * 12n + delay + 1n),
    number: toHex(endBlockNumber),
  }

  const simulationPayload = {
    network_id: String(mainnet.id) as TenderlyRequest['network_id'],
    block_number: isEndBlockMinted ? endBlockNumber : latestBlock.number,
    from: FROM,
    to: AaveGovernanceV2.GOV,
    save: true,
    generate_access_list: true,
    gas_price: '0',
    value: proposal.values.reduce((sum, cur) => sum + cur).toString(),
    gas: 30_000_000,
    input: encodeFunctionData({ abi: AAVE_GOVERNANCE_V2_ABI, functionName: 'execute', args: [proposalId] }),
    block_header: blockHeader,
    state_objects: {
      // Give `from` address 10 ETH to send transaction
      [FROM]: { balance: parseEther('10').toString() },
      // Ensure transactions are queued in the executor
      [proposal.executor]: {
        storage: proposal.targets.reduce((acc, target, i) => {
          const hash = keccak256(
            encodeAbiParameters(parseAbiParameters('address, uint256, string, bytes, uint256, bool'), [
              target,
              proposal.values[i],
              proposal.signatures[i],
              proposal.calldatas[i],
              fromHex(blockHeader.timestamp, 'bigint'),
              proposal.withDelegatecalls[i],
            ])
          )
          const slot = getSolidityStorageSlotBytes(slots.queuedTxsSlot, hash)
          acc[slot] = pad('0x1', { size: 32 })
          return acc
        }, {}),
      },
      [AaveGovernanceV2.GOV]: {
        storage: {
          [slots.eta]: pad(blockHeader.timestamp, { size: 32 }),
          [slots.forVotes]: pad(toHex(parseEther('3000000')), { size: 32 }),
          [slots.againstVotes]: pad('0x0', { size: 32 }),
          [slots.canceled]: pad(concat([AaveGovernanceV2.GOV_STRATEGY, '0x0000']), { size: 32 }),
        },
      },
    },
  }
  return tenderly.simulate({ ...simulationPayload, block_number: Number(latestBlock.number) })
}
