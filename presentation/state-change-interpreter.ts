import { ProposalData } from '../types'
import { erc20Contract } from '../utils/contracts/erc-20'
import * as pools from '@bgd-labs/aave-address-book'
import { Hex, fromHex, pad, size, slice, toHex } from 'viem'

export function deepDiff(
  before: Record<string, any> | string,
  after: Record<string, any> | string,
  prefix?: string
): string {
  if (typeof before !== 'object' || typeof after !== 'object') {
    return `${prefix ? `@@ ${prefix} @@\n` : ''}- ${before}
+ ${after}\n`
  }
  return Object.keys(before).reduce((acc, key) => {
    if (before[key] === after[key]) return acc
    if (typeof before[key] === 'object') return deepDiff(before[key], after[key], prefix ? `${prefix}.${key}` : key)
    return (
      acc +
      `@@ ${prefix ? `${prefix}.${key}` : key} @@
- ${before[key]}
+ ${after[key]}\n`
    )
  }, '')
}

export async function interpretStateChange(
  contractAddress: string,
  name: string = '',
  original: Record<string, any>,
  dirty: Record<string, any>,
  key: Hex,
  deps: ProposalData
) {
  if (name === '_reserves' && (original.configuration.data || dirty.configuration.data))
    return await reserveConfigurationChanged(contractAddress, original, dirty, key, deps)
  return undefined
}

// struct ReserveConfigurationMap {
//   //bit 0-15: LTV
//   //bit 16-31: Liq. threshold
//   //bit 32-47: Liq. bonus
//   //bit 48-55: Decimals
//   //bit 56: Reserve is active
//   //bit 57: reserve is frozen
//   //bit 58: borrowing is enabled
//   //bit 59: stable rate borrowing enabled
//   //bit 60-63: reserved
//   //bit 64-79: reserve factor
//   uint256 data;
// }
/**
 * @returns value between bit range
 */
export function getBits(_bigIntValue: bigint | number | string, startBit: bigint, endBit: bigint) {
  const bigIntValue = BigInt(_bigIntValue)
  if (startBit > endBit) {
    throw new Error('Invalid bit range: startBit must be less than or equal to endBit')
  }

  const bitLength = BigInt(bigIntValue.toString(2)).toString().length
  if (endBit >= bitLength) {
    endBit = BigInt(bitLength - 1)
  }

  const mask = (1n << (endBit - startBit + 1n)) - 1n
  const maskedValue = (bigIntValue >> startBit) & mask
  return maskedValue.toString()
}

async function reserveConfigurationChanged(
  contractAddress: string,
  original: Record<string, any>,
  dirty: Record<string, any>,
  key: Hex,
  deps: ProposalData
) {
  const configurationBefore = getDecodedReserveData(contractAddress, original.configuration.data)
  const configurationAfter = getDecodedReserveData(contractAddress, dirty.configuration.data)
  let symbol = 'unknown'
  try {
    symbol = await erc20Contract(key, deps.provider).read.symbol()
  } catch (e) {}
  // const symbol =
  return `# decoded configuration.data for key \`${key}\` (symbol: ${symbol})
${deepDiff(configurationBefore, configurationAfter, 'configuration.data')}`
}

function getDecodedReserveData(contractAddress: string, data?: bigint) {
  if (!data) return {}
  if (
    [pools.AaveV2EthereumAMM.POOL, pools.AaveV2Ethereum.POOL, pools.AaveV2Polygon.POOL, pools.AaveV2Avalanche.POOL]
      .map((address) => address.toLowerCase())
      .includes(contractAddress.toLowerCase())
  )
    return decodeReserveDataV2(data)
  return decodeReserveDataV3(data)
}

export function decodeReserveDataV2(data: bigint) {
  const ltv = getBits(data, 0n, 15n)
  const liquidationThreshold = getBits(data, 16n, 31n)
  const liquidationBonus = getBits(data, 32n, 47n)
  const decimals = getBits(data, 48n, 55n)
  const active = Number(getBits(data, 56n, 56n))
  const frozen = Number(getBits(data, 57n, 57n))
  const borrowingEnabled = Number(getBits(data, 58n, 58n))
  const reserveFactor = getBits(data, 64n, 79n)
  return {
    ltv,
    liquidationThreshold,
    liquidationBonus,
    decimals,
    active: !!active,
    frozen: !!frozen,
    borrowingEnabled: !!borrowingEnabled,
    reserveFactor,
  }
}

export function decodeReserveDataV3(data: bigint) {
  const ltv = getBits(data, 0n, 15n)
  const liquidationThreshold = getBits(data, 16n, 31n)
  const liquidationBonus = getBits(data, 32n, 47n)
  const decimals = getBits(data, 48n, 55n)
  const active = Number(getBits(data, 56n, 56n))
  const frozen = Number(getBits(data, 57n, 57n))
  const borrowingEnabled = Number(getBits(data, 58n, 58n))
  const stableRateBorrowingEnabled = Number(getBits(data, 59n, 59n))
  const paused = Number(getBits(data, 60n, 60n))
  const borrowingInIsolation = Number(getBits(data, 61n, 61n))
  const siloedBorrowingEnabled = Number(getBits(data, 62n, 62n))
  const flashloaningEnabled = Number(getBits(data, 63n, 63n))
  const reserveFactor = getBits(data, 64n, 79n)
  const borrowCap = getBits(data, 80n, 115n)
  const supplyCap = getBits(data, 116n, 151n)
  const liquidationProtocolFee = getBits(data, 152n, 167n)
  const eModeCategory = getBits(data, 168n, 175n)
  const unbackedMintCap = getBits(data, 176n, 211n)
  const debtCeiling = getBits(data, 212n, 251n)

  return {
    ltv,
    liquidationThreshold,
    liquidationBonus,
    decimals,
    active: !!active,
    frozen: !!frozen,
    borrowingEnabled: !!borrowingEnabled,
    stableRateBorrowingEnabled,
    paused,
    borrowingInIsolation,
    reserveFactor,
    borrowCap,
    supplyCap,
    liquidationProtocolFee,
    eModeCategory,
    unbackedMintCap,
    debtCeiling,
    siloedBorrowingEnabled: !!siloedBorrowingEnabled,
    flashloaningEnabled: !!flashloaningEnabled,
  }
}
