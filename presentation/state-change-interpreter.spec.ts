import { decodeReserveDataV2, decodeReserveDataV3, getBits } from './state-change-interpreter'

describe('stateChangeInterpreter', () => {
  it('should properly decode the data field on aave-v2 stETH', () => {
    const params = decodeReserveDataV2(18446821244024599616244n)
    expect(params.ltv).toBe('6900')
    expect(params.liquidationThreshold).toBe('8100')
    expect(params.liquidationBonus).toBe('10750')
    expect(params.decimals).toBe('18')
    expect(params.active).toBe(true)
    expect(params.frozen).toBe(false)
    expect(params.borrowingEnabled).toBe(false)
    expect(params.reserveFactor).toBe('1000')
  })
  it('should properly decode the data field on aave-v2 AAVE', () => {
    const data = '77171388684964744'
    const ltv = getBits(data, 0n, 15n)
    const liquidationThreshold = getBits(data, 16n, 31n)
    const liquidationBonus = getBits(data, 32n, 47n)
    const decimals = getBits(data, 48n, 55n)
    const active = Number(getBits(data, 56n, 56n))
    const frozen = Number(getBits(data, 57n, 57n))
    const borrowingEnabled = Number(getBits(data, 58n, 58n))
    const reserveFactor = getBits(data, 64n, 79n)
    expect(ltv).toBe('5000')
    expect(liquidationThreshold).toBe('6500')
    expect(liquidationBonus).toBe('11000')
    expect(decimals).toBe('18')
    expect(active).toBe(1)
    expect(frozen).toBe(0)
    expect(borrowingEnabled).toBe(0)
    expect(reserveFactor).toBe('0')
  })
})
