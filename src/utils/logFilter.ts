import { PublicClient } from 'viem'
import { Filter } from 'viem/src/types/filter'
import fs from 'fs'
import path from 'path'

/**
 * Fetches the logs and stores them in a cache folder.
 * @param client
 * @param filter
 * @returns logs
 */
export async function getLogs(client: PublicClient, filter: Filter) {
  // create .tmp folder if doesn't exist yet
  const cachePath = path.join(process.cwd(), '.tmp', client.chain!.id.toString())
  const filePath = path.join(cachePath, filter.eventName + '.json')
  if (!fs.existsSync(cachePath)) {
    console.log('creating tmp folder')
    fs.mkdirSync(cachePath, { recursive: true })
  }
  // read stale cache if it exists
  const cache = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : null
  // TODO: filter should start at cache, but viem seems to no properly support this yet
  const logs = await client.getFilterLogs({ filter })
  const combinedCache = [
    ...cache,
    logs.filter((l) => !cache.find((c) => l.transactionHash === c.transactionHash && l.logIndex === c.logIndex)),
  ].sort((a, b) =>
    a.blockNumber !== b.blockNumber
      ? Number(a.blockNumber) - Number(b.blockNumber)
      : Number(a.logIndex) - Number(b.logIndex)
  )
  fs.writeFileSync(
    filePath,
    JSON.stringify(combinedCache, (key, value) => (typeof value === 'bigint' ? value.toString() : value), 2)
  )
  return combinedCache
}
