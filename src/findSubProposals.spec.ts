import { describe, it, expect } from 'vitest'
import { findCrossDomainMessages } from './findSubProposals'
import arbitrumProposal from './mocks/219_mainnet_arbitrum.json'
import optimismProposal from './mocks/218_mainnet_optimism.json'
import polygonProposal from './mocks/210_mainnet_polygon.json'

describe('findSubProposals', () => {
  it('should find arbitrum proposals', () => {
    const subProposals = findCrossDomainMessages(arbitrumProposal)

    expect(subProposals.length).toBe(1)
    expect(subProposals).toMatchSnapshot()
  })

  it('should find optimism proposals', () => {
    const subProposals = findCrossDomainMessages(optimismProposal)

    expect(subProposals.length).toBe(1)
    expect(subProposals).toMatchSnapshot()
  })

  it('should find polygon proposals', () => {
    const subProposals = findCrossDomainMessages(polygonProposal)
    expect(subProposals.length).toBe(1)
    expect(subProposals).toMatchSnapshot()
  })
})
