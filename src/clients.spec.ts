import { describe, it, expect } from 'vitest'
import fs from 'fs'
import { tenderly } from './clients'
import { simulateMainnetProposal } from './findProposal'

describe('clients', () => {
  describe('tenderly', () => {
    it.skip('should return correct trace result', async () => {
      const trace = await tenderly.trace(137, '0x194fd06ff2ac09ff29faa59fdce77577f12809101184394e9bd7899bc0e4724a')
      expect(trace).toMatchSnapshot()
    })

    it.skip('should return correct simulation result', async () => {
      // const simulation = await tenderly.simulate()
      const result = await simulateMainnetProposal(6n)

      expect(result).toEqual({
        network_id: '1',
        block_number: 12181678,
        from: '0xD73a92Be73EfbFcF3854433A5FcbAbF9c1316073',
        to: '0xEC568fffba86c094cf06b22134B23074DFE2252c',
        input: '0xfe0d94c10000000000000000000000000000000000000000000000000000000000000006',
        gas: 30000000,
        gas_price: '0',
        value: '0',
        save: true,
        generate_access_list: true,
        block_header: { number: '0xb9e0af', timestamp: '0x606c5ddd' },
        state_objects: {
          '0xD73a92Be73EfbFcF3854433A5FcbAbF9c1316073': { balance: '10000000000000000000' },
          '0xEE56e2B3D491590B5b31738cC34d5232F378a8D5': {
            storage: {
              '0x8dc7a4f75c72785ff2f90096d0ca99d657bf4fd6504cab7568a65c51a7a7b839':
                '0x0000000000000000000000000000000000000000000000000000000000000001',
            },
          },
          '0xEC568fffba86c094cf06b22134B23074DFE2252c': {
            storage: {
              '0xc59312466997bb42aaaf719ece141047820e6b34531e1670dc1852a453648f19':
                '0x00000000000000000000000000000000000000000000000000000000606c5ddd',
              '0xc59312466997bb42aaaf719ece141047820e6b34531e1670dc1852a453648f1a':
                '0x0000000000000000000000000000000000000000000043c33c19375648000000',
              '0xc59312466997bb42aaaf719ece141047820e6b34531e1670dc1852a453648f1b':
                '0x0000000000000000000000000000000000000000000000000000000000000000',
              '0xc59312466997bb42aaaf719ece141047820e6b34531e1670dc1852a453648f1c':
                '0x00000000000000000000b7e383ef9B1E9189Fc0F71fb30af8aa14377429e0000',
            },
          },
        },
        root: '934c9832-e955-4fbd-bbe8-0a2723a0debb',
      })
    })

    it.skip('should correctly simulate long proposals', async () => {
      const result = await simulateMainnetProposal(214n)

      console.log(result)
      expect(result).toMatchSnapshot()
    })

    it.skip('mock factory', async () => {
      const result = await simulateMainnetProposal(48n)

      fs.writeFileSync('./src/mocks/48_mainnet_arc.json', JSON.stringify(result, null, 2))
    })
  })
})
