require('dotenv').config()
import { DAO_NAME } from '../utils/constants'
import { aaveGovernanceContract } from '../utils/contracts/aave-governance-v2'

async function generateMatrix() {
  const proposalsCount = await aaveGovernanceContract.getProposalsCount()
  const proposals = [...Array(Number(proposalsCount)).keys()]
  const json = { include: [] as { DAO_NAME: string; proposals: string; cacheKey: string }[] }
  const chunkSize = 10
  for (let i = 0; i < proposals.length; i += chunkSize) {
    const chunk = proposals.slice(i, i + chunkSize)
    // we need to use _ instead of, so we can use it as a cache identifier
    json.include.push({
      DAO_NAME: DAO_NAME as string,
      proposals: chunk.toString().replace(/,/g, '_'),
      cacheKey: [...Array(Number(chunkSize)).keys()]
        .map((n) => n + i)
        .toString()
        .replace(/,/g, '_'),
    })
  }
  console.log(`::set-output name=matrix::${JSON.stringify(json)}`)
}

generateMatrix()
