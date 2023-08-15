import { Hex, PublicClient, getContract } from 'viem'

const ERC_20_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as const

export const erc20Contract = (address: Hex, client: PublicClient) =>
  getContract({ address, abi: ERC_20_ABI, publicClient: client })
