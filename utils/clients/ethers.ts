import { providers } from 'ethers'
import { RPC_MAINNET, RPC_POLYGON, RPC_OPTIMISM, RPC_ARBITRUM } from '../constants'

export const provider = new providers.StaticJsonRpcProvider(RPC_MAINNET)

export const polygonProvider = new providers.StaticJsonRpcProvider(RPC_POLYGON)

export const optimismProvider = new providers.StaticJsonRpcProvider(RPC_OPTIMISM)

export const arbitrumProvider = new providers.StaticJsonRpcProvider(RPC_ARBITRUM)
