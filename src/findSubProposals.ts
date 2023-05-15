import { TenderlyResponse, Trace } from './clients'

const ARBITRUM_INBOX = '0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f' // TODO: should probably be on address-book
const OPTIMISM_L1_CROSS_COMAIN_MESSENGER = '0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1'

/**
 * searches the call trace for calls to the arbitrum inbox on mainnet
 */
export function findArbitrumMessages(calls: TenderlyResponse['call_trace']['calls']): Array<Trace> {
  return calls.reduce((acc, call) => {
    if (
      call.to?.toLowerCase() === ARBITRUM_INBOX.toLowerCase() &&
      call.function_name === 'unsafeCreateRetryableTicket'
    ) {
      return [...acc, call]
    }
    if (call.calls) {
      return [...acc, ...findArbitrumMessages(call.calls)]
    }
    return acc
  }, [] as Array<Trace>)
}

/**
 * searches the call trace for calls to the arbitrum inbox on mainnet
 */
export function findOptimismMessages(calls: TenderlyResponse['call_trace']['calls']): Array<Trace> {
  return calls.reduce((acc, call) => {
    if (call.to?.toLowerCase() === OPTIMISM_L1_CROSS_COMAIN_MESSENGER.toLowerCase()) {
      return [...acc, call]
    }
    if (call.calls) {
      return [...acc, ...findOptimismMessages(call.calls)]
    }
    return acc
  }, [] as Array<Trace>)
}

export function findCrossDomainMessages(simulation: TenderlyResponse) {
  return [...findArbitrumMessages(simulation.call_trace.calls), ...findOptimismMessages(simulation.call_trace.calls)]
}
