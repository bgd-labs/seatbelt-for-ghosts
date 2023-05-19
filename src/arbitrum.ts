/**
 * 1. fetch & cache Queued logs
 * 2. fetch & cache Executed logs
 * 3. figure out if message was queued already
 * 4. figure out if executed already
 */
import { getContract } from 'viem'
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book'
import { ARBITRUM_BRIDGE_EXECUTOR_ABI, ARBITRUM_BRIDGE_EXECUTOR_START_BLOCK } from './abis/ArbitrumBridgeExecutor'
import { arbitrumClient } from './clients'
import { getLogs } from './utils/logFilter'

const arbitrumExecutorContract = getContract({
  address: AaveGovernanceV2.ARBITRUM_BRIDGE_EXECUTOR,
  abi: ARBITRUM_BRIDGE_EXECUTOR_ABI,
  publicClient: arbitrumClient,
})

export async function cacheArbitrumLogs() {
  const queuedFilter = await arbitrumExecutorContract.createEventFilter.ActionsSetQueued(
    {},
    { fromBlock: ARBITRUM_BRIDGE_EXECUTOR_START_BLOCK }
  )
  const queuedEvents = await getLogs(arbitrumClient, queuedFilter)

  const executedFilter = await arbitrumExecutorContract.createEventFilter.ActionsSetExecuted(
    {},
    { fromBlock: ARBITRUM_BRIDGE_EXECUTOR_START_BLOCK }
  )
  const executedEvents = await getLogs(arbitrumClient, executedFilter)

  return { queuedEvents, executedEvents }
}
