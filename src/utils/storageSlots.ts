import { Hex, pad } from 'viem'
/**
 * @notice Returns the storage slot for a Solidity mapping with bytes32 keys, given the slot of the mapping itself
 * @dev Read more at https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#mappings-and-dynamic-arrays
 * @param mappingSlot Mapping slot in storage
 * @param key Mapping key to find slot for
 * @returns Storage slot
 */
export function getSolidityStorageSlotBytes(mappingSlot: Hex, key: BigNumberish) {
  const slot = pad(mappingSlot, 32)
  return hexStripZeros(keccak256(defaultAbiCoder.encode(['bytes32', 'uint256'], [key, slot])))
}

/**
 * @notice Returns the storage slot for a Solidity mapping with uint keys, given the slot of the mapping itself
 * @dev Read more at https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#mappings-and-dynamic-arrays
 * @param mappingSlot Mapping slot in storage
 * @param key Mapping key to find slot for
 * @returns Storage slot
 */
export function getSolidityStorageSlotUint(mappingSlot: string, key: BigNumberish) {
  // this will also work for address types, since address and uints are encoded the same way
  const slot = pad(mappingSlot, 32)
  return hexStripZeros(keccak256(defaultAbiCoder.encode(['uint256', 'uint256'], [key, slot])))
}
