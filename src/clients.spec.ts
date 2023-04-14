import { describe, it, expect } from 'vitest'
import { tenderly } from './clients'
import { simulateMainnetProposal } from './findProposal'

describe('clients', () => {
  describe('tenderly', () => {
    it('should return correct trace result', async () => {
      const trace = await tenderly.trace(137, '0x194fd06ff2ac09ff29faa59fdce77577f12809101184394e9bd7899bc0e4724a')
      expect(trace).toMatchSnapshot()
    })

    it.only('should return correct simulation result', async () => {
      // const simulation = await tenderly.simulate()
      const result = await simulateMainnetProposal(6n)

      expect(result).toMatchSnapshot()
    })
  })
})
