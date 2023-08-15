import { defaultAbiCoder } from 'ethers/lib/utils'
import { Hex, encodeAbiParameters, fromHex, keccak256, pad, toHex, trim } from 'viem'

/**
 * @notice Returns an object containing various AaveGovernanceV2 slots
 * @param id Proposal ID
 */
export function getAaveGovernanceV2Slots(proposalId: bigint | number) {
  // TODO generalize this for other storage layouts

  // struct Proposal {
  //   uint256 id;
  //   address creator;
  //   IExecutorWithTimelock executor;
  //   address[] targets;
  //   uint256[] values;
  //   string[] signatures;
  //   bytes[] calldatas;
  //   bool[] withDelegatecalls;
  //   uint256 startBlock;
  //   uint256 endBlock;
  //   uint256 executionTime;
  //   uint256 forVotes;
  //   uint256 againstVotes;
  //   bool executed;
  //   bool canceled;
  //   address strategy;
  //   bytes32 ipfsHash;
  //   mapping(address => Vote) votes;
  // }

  const etaOffset = 10n
  const forVotesOffset = 11n
  const againstVotesOffset = 12n
  const canceledSlotOffset = 13n // this is packed with `executed`

  // Compute and return slot numbers
  const proposalsMapSlot = '0x4' // proposals ID to proposal struct mapping
  const proposalSlot = getSolidityStorageSlotUint(proposalsMapSlot, proposalId)
  return {
    votingStrategySlot: '0x1', // slot of voting strategy
    proposalsMap: proposalsMapSlot,
    proposal: proposalSlot,
    canceled: pad(toHex(fromHex(proposalSlot, { to: 'bigint' }) + canceledSlotOffset), { size: 32 }),
    eta: pad(toHex(fromHex(proposalSlot, { to: 'bigint' }) + etaOffset), { size: 32 }),
    forVotes: pad(toHex(fromHex(proposalSlot, { to: 'bigint' }) + forVotesOffset), { size: 32 }),
    againstVotes: pad(toHex(fromHex(proposalSlot, { to: 'bigint' }) + againstVotesOffset), { size: 32 }),
  }
}

/**
 * @notice Returns the storage slot for a Solidity mapping with bytes32 keys, given the slot of the mapping itself
 * @dev Read more at https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#mappings-and-dynamic-arrays
 * @param mappingSlot Mapping slot in storage
 * @param key Mapping key to find slot for
 * @returns Storage slot
 */
export function getSolidityStorageSlotBytes(mappingSlot: Hex, key: number | bigint) {
  const slot = pad(mappingSlot, { size: 32 })
  return trim(keccak256(encodeAbiParameters([{ type: 'bytes32' }, { type: 'uint256' }], [key, slot])))
}

/**
 * @notice Returns the storage slot for a Solidity mapping with uint keys, given the slot of the mapping itself
 * @dev Read more at https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#mappings-and-dynamic-arrays
 * @param mappingSlot Mapping slot in storage
 * @param key Mapping key to find slot for
 * @returns Storage slot
 */
export function getSolidityStorageSlotUint(mappingSlot: Hex, key: number | bigint) {
  // this will also work for address types, since address and uints are encoded the same way
  const slot = pad(mappingSlot, { size: 32 })
  return trim(keccak256(encodeAbiParameters([{ type: 'uint256' }, { type: 'uint256' }], [key, slot])))
}
