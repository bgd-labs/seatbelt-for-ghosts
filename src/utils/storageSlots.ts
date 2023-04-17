import { Hex, pad, keccak256, encodeAbiParameters, parseAbiParameters, trim } from 'viem'
/**
 * @notice Returns the storage slot for a Solidity mapping with bytes32 keys, given the slot of the mapping itself
 * @dev Read more at https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#mappings-and-dynamic-arrays
 * @param mappingSlot Mapping slot in storage
 * @param key Mapping key to find slot for
 * @returns Storage slot
 */
export function getSolidityStorageSlotBytes(mappingSlot: Hex, key: Hex) {
  const slot = pad(mappingSlot, { size: 32 })
  return trim(keccak256(encodeAbiParameters(parseAbiParameters('bytes32, uint256'), [key, BigInt(slot)])))
}

/**
 * @notice Returns the storage slot for a Solidity mapping with uint keys, given the slot of the mapping itself
 * @dev Read more at https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#mappings-and-dynamic-arrays
 * @param mappingSlot Mapping slot in storage
 * @param key Mapping key to find slot for
 * @returns Storage slot
 */
export function getSolidityStorageSlotUint(mappingSlot: Hex, key: Hex) {
  // this will also work for address types, since address and uints are encoded the same way
  const slot = pad(mappingSlot, { size: 32 })
  return trim(keccak256(encodeAbiParameters(parseAbiParameters('uint256, uint256'), [BigInt(key), BigInt(slot)])))
}
