import { TenderlyResponse, Trace } from './clients'

const ARBITRUM_INBOX = '0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f' // TODO: should probably be on address-book
const OPTIMISM_L1_CROSS_COMAIN_MESSENGER = '0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1'
const POLYGON_FX_ROOT = '0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2'
const MAINNET_ARC_TIMELOCK = '0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218'

/**
 * searches the call trace for calls to the ARC_TIMELOCK on mainnet
 */
export function findArcMessages(calls: TenderlyResponse['call_trace']['calls']): Array<Trace> {
  return calls.reduce((acc, call) => {
    if (call.to?.toLowerCase() === MAINNET_ARC_TIMELOCK.toLowerCase()) {
      return [...acc, call]
    }
    if (call.calls) {
      return [...acc, ...findArcMessages(call.calls)]
    }
    return acc
  }, [] as Array<Trace>)
}

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
 * searches the call trace for calls to the optimism CDM on mainnet
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

/**
 * searches the call trace for calls to the polygon fx_root on mainnet
 */
export function findPolygonMessages(calls: TenderlyResponse['call_trace']['calls']): Array<Trace> {
  return calls.reduce((acc, call) => {
    if (call.to?.toLowerCase() === POLYGON_FX_ROOT.toLowerCase() && call.function_name === 'sendMessageToChild') {
      return [...acc, call]
    }
    if (call.calls) {
      return [...acc, ...findPolygonMessages(call.calls)]
    }
    return acc
  }, [] as Array<Trace>)
}

export function findCrossDomainMessages(simulation: TenderlyResponse) {
  return [
    ...findArcMessages(simulation.call_trace.calls),
    ...findArbitrumMessages(simulation.call_trace.calls),
    ...findOptimismMessages(simulation.call_trace.calls),
    ...findPolygonMessages(simulation.call_trace.calls),
  ]
}
