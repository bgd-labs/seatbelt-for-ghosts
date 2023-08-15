import { createPublicClient, http } from 'viem'
import { arbitrum, base, mainnet, optimism, polygon } from 'viem/chains'

export const mainnetClient = createPublicClient({ chain: mainnet, transport: http(process.env.RPC_MAINNET) })

export const polygonClient = createPublicClient({ chain: polygon, transport: http(process.env.RPC_POLYGON) })

export const optimismClient = createPublicClient({ chain: optimism, transport: http(process.env.RPC_OPTIMISM) })

export const arbitrumClient = createPublicClient({ chain: arbitrum, transport: http(process.env.RPC_ARBITRUM) })

export const baseClient = createPublicClient({ chain: base, transport: http(process.env.RPC_ARBITRUM) })
