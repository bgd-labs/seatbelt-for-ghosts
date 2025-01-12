import {
  checkTargetsVerifiedEtherscan,
  checkTouchedContractsVerifiedEtherscan,
} from './check-targets-verified-etherscan'
import { checkStateChanges } from './check-state-changes'
import { checkLogs } from './check-logs'
import { checkSlither } from './check-slither'
import { ProposalCheck } from '../types'
import { checkSolc } from './check-solc'
import { checkTrace } from './check-trace'

const ALL_CHECKS: {
  [checkId: string]: ProposalCheck
} = {
  checkStateChanges,
  checkTrace,
  checkLogs,
  checkTargetsVerifiedEtherscan,
  checkTouchedContractsVerifiedEtherscan,
  // The solc check must be run before the slither check, because the compilation exports a zip file
  // which is consumed by slither. This prevents us from having to compile the contracts twice.
  checkSolc,
  checkSlither,
} as const

export default ALL_CHECKS
