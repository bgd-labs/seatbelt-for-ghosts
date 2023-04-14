require('dotenv').config()
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

export const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(process.env.RPC_MAINNET),
})

type StateObject = {
  balance?: string
  code?: string
  storage?: Record<string, string>
}

type ContractObject = {
  contractName: string
  source: string
  sourcePath: string
  compiler: {
    name: 'solc'
    version: string
  }
  networks: Record<
    string,
    {
      events?: Record<string, string>
      links?: Record<string, string>
      address: string
      transactionHash?: string
    }
  >
}

export type TenderlyRequest = {
  network_id: string
  block_number?: number
  transaction_index?: number
  from: string
  to: string
  input: string
  gas: number
  gas_price?: string
  value?: string
  simulation_type?: 'full' | 'quick'
  save?: boolean
  save_if_fails?: boolean
  state_objects?: Record<string, StateObject>
  contracts?: ContractObject[]
  block_header?: {
    number?: string
    timestamp?: string
  }
  generate_access_list?: boolean
  root?: string
}

class Tenderly {
  TENDERLY_BASE: string = `https://api.tenderly.co/api/v1`

  ACCESS_TOKEN: string
  ACCOUNT: string
  PROJECT: string

  constructor(accessToken: string, account: string, project: string) {
    this.ACCESS_TOKEN = accessToken
    this.ACCOUNT = account
    this.PROJECT = project
  }

  trace = async (chainId: number, txHash: string) => {
    const response = await fetch(`${this.TENDERLY_BASE}/public-contract/${chainId}/trace/${txHash}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'X-Access-Key': this.ACCESS_TOKEN,
      }),
    })
    return await response.json()
  }

  simulate = async (request: TenderlyRequest) => {
    const response = await fetch(`${this.TENDERLY_BASE}/account/${this.ACCOUNT}/project/${this.PROJECT}/simulate`, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: new Headers({
        'Content-Type': 'application/json',
        'X-Access-Key': this.ACCESS_TOKEN,
      }),
    })
    return await response.json()
  }
}

export const tenderly = new Tenderly(
  process.env.TENDERLY_ACCESS_TOKEN,
  process.env.TENDERLY_ACCOUNT,
  process.env.TENDERLY_PROJECT_SLUG
)
