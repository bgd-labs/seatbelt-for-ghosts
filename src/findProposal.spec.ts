import { describe, it, expect } from 'vitest'
import { getMainnetExecutedLog, getMainnetProposalState } from './findProposal'
import { ERRORS } from './errors'

describe('findProposal', () => {
  describe('getMainnetProposalState', () => {
    it('should return correct proposalState', async () => {
      const state = await getMainnetProposalState(1n)
      expect(state).toBe(7)
    })
  })

  describe('getMainnetExecutedLog', () => {
    it('should return correct log', async () => {
      const log = await getMainnetExecutedLog(1n)
      expect(log).toEqual({
        address: '0xec568fffba86c094cf06b22134b23074dfe2252c',
        blockHash: '0x9f3c1484d3dbe680763d151c7cd860d8caa63939c2fb5a7c59740e502d56a07b',
        blockNumber: 11576861n,
        data: '0x0000000000000000000000000000000000000000000000000000000000000001',
        logIndex: 125n,
        removed: false,
        topics: [
          '0x9c85b616f29fca57a17eafe71cf9ff82ffef41766e2cf01ea7f8f7878dd3ec24',
          '0x00000000000000000000000046bcf35d96eda5e5f6ec48c7956bb4ed9caba1f2',
        ],
        transactionHash: '0x175a7efaaab136c0969107c7c9293e0e5eb7ee550749107f72ad0d28d6bed44f',
        transactionIndex: 78n,
        args: {
          initiatorExecution: '0x46BCf35D96EdA5E5f6EC48c7956bB4ed9cABa1f2',
          id: 1n,
        },
        eventName: 'ProposalExecuted',
      })
    })
  })

  it('should revert when proposal was not executed', async () => {
    await expect(() => getMainnetExecutedLog(6n)).rejects.toThrowError(ERRORS.NOT_EXECUTED)
  })
})
