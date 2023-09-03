## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/95e7031f-65c4-49ba-83b6-f09364833557](https://dashboard.tenderly.co/me/simulator/95e7031f-65c4-49ba-83b6-f09364833557)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
@@ s_expectedLinkBalance @@
- 11730725288151586163061
+ 11755725288151586163061
@@ `s_upkeep` key `"5270433258472149004463739312507691937285233476849983113005055156517680660709"`.balance @@
- 3558540917441704007
+ 28558540917441704007

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000036` @@
- "0x000000000000000000000000000000000000000000005036350cc2761d400677"
+ "0x000000000000000000000000000000000000000000005034dcff0098d047c4d8"
@@ Slot `0x3f050af1308620d61c829677deeedc243021f589998699459ebed084b4d4e0ad` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000034221900947a30df89ce96500000000000000000000000000000000"
@@ Slot `0xaf561f020a8f8c4f072d325aff6aad11decebb5083af314fbbf9748a44965847` @@
- "0x0000000003422068b362ceb41166aebe00000000000000222249a0912c3cdcab"
+ "0x00000000034221900947a30df89ce9650000000000000020ca3bdeb3df449b0c"
```

```diff
# ChildERC20 (Chainlink) at `0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39`
@@ `_balances` key `0x191c10aa4af7c30e871e70c95db0e4eb77237530` @@
- 363026100893652347574561
+ 363001100893652347574561

@@ `_balances` key `0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b` @@
- 83819087124790141990504
+ 83844087124790141990504

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`
@@ Slot `0x7106c69342d46bbeee5f28f376a6e3d96f0a8e1d092c714a8fe8243ea96d0a1b` @@
- "0x00000000000040d570c615e1b8f91b86000000000342219001abdf595363724e"
+ "0x00000000000040d79d1fb2c4c9b5739c00000000034221900947a30df89ce965"
@@ Slot `0x7106c69342d46bbeee5f28f376a6e3d96f0a8e1d092c714a8fe8243ea96d0a1c` @@
- "0x00000000000661dfb017e3446abbf8ca00000000035c7e928f56e8adec5024a7"
+ "0x00000000000661fb1225513a1805453700000000035c7e935523dbc97dcd2248"
@@ Slot `0x7106c69342d46bbeee5f28f376a6e3d96f0a8e1d092c714a8fe8243ea96d0a1d` @@
- "0x00000000000000000000010064f3d59400000000004a723dc6b40b8a9a000000"
+ "0x00000000000000000000010064f3d5cc00000000004a723dc6b40b8a9a000000"
@@ Slot `0x7106c69342d46bbeee5f28f376a6e3d96f0a8e1d092c714a8fe8243ea96d0a22` @@
- "0x000000000000000000000000000000000000000000000000045494462307f667"
+ "0x0000000000000000000000000000000000000000000000000454c319693de2b5"
```

```diff
# PegSwap at `0xAA1DC356dc4B18f30C347798FD5379F3D77ABC5b`
@@ `s_swappableAmount` key `0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39`.0xb0897686c545045afc77cf20ec7a532e3120e0f1 @@
- 32628483968148553033883
+ 32603483968148553033883

@@ `s_swappableAmount` key `0xb0897686c545045afc77cf20ec7a532e3120e0f1`.0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39 @@
- 83817992024928342588091
+ 83842992024928342588091

```

```diff
# LinkToken at `0xb0897686c545045aFc77CF20eC7A532E3120E0F1`
@@ `balances` key `0x02777053d6764996e594c3e88af1d58d5363a2e6` @@
- 11730725288151586163061
+ 11755725288151586163061

@@ `balances` key `0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b` @@
- 32672483968148553033883
+ 32647483968148553033883

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_queuedActions` key `0x49e10fe197dd9eea4e219cb1afc6635cb97960902769a9530581941f9fb9c71e` @@
- true
+ false

@@ `_actionsSets` key `"60"`.executed @@
- false
+ true

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE`
    - `Transfer(from: 0x0000000000000000000000000000000000000000, to: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 3430374231688891)`
    - `Mint(caller: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, onBehalfOf: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 3430374231688891, balanceIncrease: 3430374231688891, index: 1008402628652364394261178725)`
    - `Transfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 25000000000000000000)`
    - `BalanceTransfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 24791684679967719839, index: 1008402628652364394261178725)`
    - `Transfer(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0x0000000000000000000000000000000000000000, value: 25000000000000000000)`
    - `Burn(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, target: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 25000000000000000000, balanceIncrease: 0, index: 1008402628652364394261178725)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`
    - `ReserveUsedAsCollateralEnabled(reserve: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `ReserveDataUpdated(reserve: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, liquidityRate: 306208826844051347436444, stableBorrowRate: 90000000000000000000000000, variableBorrowRate: 7716255906829208505369911, liquidityIndex: 1008402628652364394261178725, variableBorrowIndex: 1040273940851790276702577224)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `Withdraw(reserve: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, amount: 25000000000000000000)`
  - ChildERC20 (Chainlink) at `0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39`
    - `Transfer(from: 0x191c10aa4af7c30e871e70c95db0e4eb77237530, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 25000000000000000000)`
    - `Approval(owner: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, spender: 0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b, value: 25000000000000000000)`
    - `Transfer(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b, value: 25000000000000000000)`
    - `Approval(owner: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, spender: 0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b, value: 0)`
  - PegSwap at `0xAA1DC356dc4B18f30C347798FD5379F3D77ABC5b`
    - `LiquidityUpdated(amount: 32603483968148553033883, source: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, target: 0xb0897686c545045afc77cf20ec7a532e3120e0f1)`
    - `LiquidityUpdated(amount: 83842992024928342588091, source: 0xb0897686c545045afc77cf20ec7a532e3120e0f1, target: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39)`
    - `TokensSwapped(amount: 25000000000000000000, source: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, target: 0xb0897686c545045afc77cf20ec7a532e3120e0f1, caller: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
  - LinkToken at `0xb0897686c545045aFc77CF20eC7A532E3120E0F1`
    - `Transfer(from: 0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 25000000000000000000)`
    - `Approval(owner: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, spender: 0x4e8984d11a47ff89cd67c7651ecab6c00a74b4a9, value: 25000000000000000000)`
    - `Transfer(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0x4e8984d11a47ff89cd67c7651ecab6c00a74b4a9, value: 25000000000000000000)`
    - `Approval(owner: 0x4e8984d11a47ff89cd67c7651ecab6c00a74b4a9, spender: 0x02777053d6764996e594c3e88af1d58d5363a2e6, value: 25000000000000000000)`
    - `Transfer(from: 0x4e8984d11a47ff89cd67c7651ecab6c00a74b4a9, to: 0x02777053d6764996e594c3e88af1d58d5363a2e6, value: 25000000000000000000)`
  - KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
    - `FundsAdded(id: 5270433258472149004463739312507691937285233476849983113005055156517680660709, from: 0x4e8984d11a47ff89cd67c7651ecab6c00a74b4a9, amount: 25000000000000000000)`
  - AaveCLRobotOperator at `0x4e8984D11A47Ff89CD67c7651eCaB6C00a74B4A9`
    - `KeeperRefilled(id: 5270433258472149004463739312507691937285233476849983113005055156517680660709, from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, amount: 25000000000000000000)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 60, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xdDE20B20E21a6F3b7080e740b684CDf5b764B80D: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0xdde20b20e21a6f3b7080e740b684cdf5b764b80d: Contract (verified) (ProposalPayloadPolygonRobot)
  - 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x230e0321cf38f09e247e50afc7801ea2351fe56f: Contract (verified) (Collector)
  - 0x191c10aa4af7c30e871e70c95db0e4eb77237530: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xcf85ff1c37c594a10195f7a9ab85cbb0a03f69de: Contract (verified) (AToken)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xb77fc84a549ecc0b410d6fa15159c2df207545a3: Contract (verified) (Pool)
  - 0x929ec64c34a17401f460460d4b9390518e5b473e: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x5f4d15d761528c57a5c30c43c1dab26fc5452731: Contract (verified) (RewardsController)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0x39df4b1329d41a9ae20e17beff39aabd2f049128: Contract (verified) (SupplyLogic)
  - 0x953a573793604af8d41f306feb8274190db4ae0e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x79b5e91037ae441de0d9e6fd3fd85b96b83d4e93: Contract (verified) (VariableDebtToken)
  - 0x89d976629b7055ff1ca02b927ba3e020f22a44e4: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x50ddd0cd4266299527d25de9cbb55fe0eb8dac30: Contract (verified) (StableDebtToken)
  - 0x03733f4e008d36f2e37f0080ff1c8df756622e6f: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39: Contract (verified) (ChildERC20)
  - 0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b: Contract (verified) (PegSwap)
  - 0xb0897686c545045afc77cf20ec7a532e3120e0f1: Contract (verified) (LinkToken)
  - 0x4e8984d11a47ff89cd67c7651ecab6c00a74b4a9: Contract (verified) (AaveCLRobotOperator)
  - 0x02777053d6764996e594c3e88af1d58d5363a2e6: Contract (verified) (KeeperRegistry)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x02777053d6764996e594c3e88af1d58d5363a2e6-KeeperRegistry' running
```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x03733F4E008d36f2e37F0080fF1c8DF756622E6F`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x230e0321cf38f09e247e50afc7801ea2351fe56f-CLSynchronicityPriceAdapterPegToBase' running
```

</details>

<details>
<summary>View warnings for SupplyLogic at `0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x39df4b1329d41a9ae20e17beff39aabd2f049128-SupplyLogic' running
WARNING:CryticCompile:Warning: Warning: This declaration shadows an existing declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:27:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                           ^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:81:3:
   |
81 |   function name() public view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:47:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                               ^^^^^^^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:86:3:
   |
86 |   function symbol() external view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:69:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                                                     ^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:91:3:
   |
91 |   function decimals() external view override returns (uint8) {
   |   ^ (Relevant source part starts here and spans across multiple lines).



```

</details>

<details>
<summary>View warnings for AaveCLRobotOperator at `0x4e8984D11A47Ff89CD67c7651eCaB6C00a74B4A9`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for StableDebtToken at `0x50ddd0Cd4266299527d25De9CBb55fE0EB8dAc30`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ChildERC20 (Chainlink) at `0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x5f4d15d761528c57a5c30c43c1dab26fc5452731-CLSynchronicityPriceAdapterPegToBase' running
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for VariableDebtToken at `0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4` with implementation StableDebtToken at `0x50ddd0Cd4266299527d25De9CBb55fE0EB8dAc30`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e` with implementation RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e` with implementation VariableDebtToken at `0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for PegSwap at `0xAA1DC356dc4B18f30C347798FD5379F3D77ABC5b`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for LinkToken at `0xb0897686c545045aFc77CF20eC7A532E3120E0F1`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts' running
WARNING:CryticCompile:Warning: crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol:1081:3: Warning: Function state mutability can be restricted to pure
  function calculate(int256[] memory _list)
  ^ (Relevant source part starts here and spans across multiple lines).


```

</details>

<details>
<summary>View warnings for Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AToken at `0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ProposalPayloadPolygonRobot at `0xdDE20B20E21a6F3b7080e740b684CDf5b764B80D`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x02777053d6764996e594c3e88af1d58d5363a2e6-KeeperRegistry' running
INFO:Detectors:
KeeperRegistry.addFunds(uint256,uint96) (contracts/v0.8/KeeperRegistry.sol#297-302) ignores return value by LINK.transferFrom(msg.sender,address(this),amount) (contracts/v0.8/KeeperRegistry.sol#300)
KeeperRegistry.withdrawFunds(uint256,address) (contracts/v0.8/KeeperRegistry.sol#331-355) ignores return value by LINK.transfer(to,amountToWithdraw) (contracts/v0.8/KeeperRegistry.sol#354)
KeeperRegistry.withdrawOwnerFunds() (contracts/v0.8/KeeperRegistry.sol#360-368) ignores return value by LINK.transfer(msg.sender,amount) (contracts/v0.8/KeeperRegistry.sol#367)
KeeperRegistry.recoverFunds() (contracts/v0.8/KeeperRegistry.sol#389-392) ignores return value by LINK.transfer(msg.sender,total - s_expectedLinkBalance) (contracts/v0.8/KeeperRegistry.sol#391)
KeeperRegistry.withdrawPayment(address,address) (contracts/v0.8/KeeperRegistry.sol#399-408) ignores return value by LINK.transfer(to,keeper.balance) (contracts/v0.8/KeeperRegistry.sol#407)
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) ignores return value by LINK.transfer(destination,totalBalanceRemaining) (contracts/v0.8/KeeperRegistry.sol#682)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unchecked-transfer
INFO:Detectors:
KeeperBase.preventExecution() (contracts/v0.8/KeeperBase.sol#11-15) uses tx.origin for authorization: tx.origin != address(0) (contracts/v0.8/KeeperBase.sol#12)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dangerous-usage-of-txorigin
INFO:Detectors:
KeeperRegistry.cancelUpkeep(uint256) (contracts/v0.8/KeeperRegistry.sol#273-289) ignores return value by s_upkeepIDs.remove(id) (contracts/v0.8/KeeperRegistry.sol#286)
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) ignores return value by s_upkeepIDs.remove(id) (contracts/v0.8/KeeperRegistry.sol#670)
KeeperRegistry._createUpkeep(uint256,address,uint32,address,uint96,bytes) (contracts/v0.8/KeeperRegistry.sol#723-745) ignores return value by s_upkeepIDs.add(id) (contracts/v0.8/KeeperRegistry.sol#744)
KeeperRegistry._getFeedData() (contracts/v0.8/KeeperRegistry.sol#753-771) ignores return value by (None,feedValue,None,timestamp,None) = FAST_GAS_FEED.latestRoundData() (contracts/v0.8/KeeperRegistry.sol#758)
KeeperRegistry._getFeedData() (contracts/v0.8/KeeperRegistry.sol#753-771) ignores return value by (None,feedValue,None,timestamp,None) = LINK_ETH_FEED.latestRoundData() (contracts/v0.8/KeeperRegistry.sol#764)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
Reentrancy in KeeperRegistry.addFunds(uint256,uint96) (contracts/v0.8/KeeperRegistry.sol#297-302):
	External calls:
	- LINK.transferFrom(msg.sender,address(this),amount) (contracts/v0.8/KeeperRegistry.sol#300)
	Event emitted after the call(s):
	- FundsAdded(id,msg.sender,amount) (contracts/v0.8/KeeperRegistry.sol#301)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
KeeperRegistry._getFeedData() (contracts/v0.8/KeeperRegistry.sol#753-771) uses timestamp for comparisons
	Dangerous comparisons:
	- (staleFallback && stalenessSeconds < block.timestamp - timestamp) || feedValue <= 0 (contracts/v0.8/KeeperRegistry.sol#759)
	- (staleFallback && stalenessSeconds < block.timestamp - timestamp) || feedValue <= 0 (contracts/v0.8/KeeperRegistry.sol#765)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#block-timestamp
INFO:Detectors:
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#201-221) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#213-216)
EnumerableSet.values(EnumerableSet.AddressSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#274-283) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#278-280)
EnumerableSet.values(EnumerableSet.UintSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#347-356) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#351-353)
KeeperRegistry._callWithExactGas(uint256,address,bytes) (contracts/v0.8/KeeperRegistry.sol#792-817) uses assembly
	- INLINE ASM (contracts/v0.8/KeeperRegistry.sol#797-815)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) has costly operations inside a loop:
	- delete s_upkeep[id] (contracts/v0.8/KeeperRegistry.sol#668)
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) has costly operations inside a loop:
	- delete s_checkData[id] (contracts/v0.8/KeeperRegistry.sol#669)
KeeperRegistry._createUpkeep(uint256,address,uint32,address,uint96,bytes) (contracts/v0.8/KeeperRegistry.sol#723-745) has costly operations inside a loop:
	- s_expectedLinkBalance = s_expectedLinkBalance + balance (contracts/v0.8/KeeperRegistry.sol#742)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#costly-operations-inside-a-loop
INFO:Detectors:
Address.functionCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#85-87) is never used and should be removed
Address.functionCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#95-101) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (@openzeppelin/contracts/utils/Address.sol#114-120) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#128-139) is never used and should be removed
Address.functionDelegateCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#174-176) is never used and should be removed
Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#184-193) is never used and should be removed
Address.functionStaticCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#147-149) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#157-166) is never used and should be removed
Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#60-65) is never used and should be removed
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#201-221) is never used and should be removed
Context._msgData() (@openzeppelin/contracts/utils/Context.sol#21-23) is never used and should be removed
EnumerableSet._values(EnumerableSet.Set) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#142-144) is never used and should be removed
EnumerableSet.add(EnumerableSet.AddressSet,address) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#224-226) is never used and should be removed
EnumerableSet.add(EnumerableSet.Bytes32Set,bytes32) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#158-160) is never used and should be removed
EnumerableSet.at(EnumerableSet.AddressSet,uint256) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#262-264) is never used and should be removed
EnumerableSet.at(EnumerableSet.Bytes32Set,uint256) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#196-198) is never used and should be removed
EnumerableSet.contains(EnumerableSet.AddressSet,address) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#241-243) is never used and should be removed
EnumerableSet.contains(EnumerableSet.Bytes32Set,bytes32) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#175-177) is never used and should be removed
EnumerableSet.contains(EnumerableSet.UintSet,uint256) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#314-316) is never used and should be removed
EnumerableSet.length(EnumerableSet.AddressSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#248-250) is never used and should be removed
EnumerableSet.length(EnumerableSet.Bytes32Set) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#182-184) is never used and should be removed
EnumerableSet.remove(EnumerableSet.AddressSet,address) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#234-236) is never used and should be removed
EnumerableSet.remove(EnumerableSet.Bytes32Set,bytes32) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#168-170) is never used and should be removed
EnumerableSet.values(EnumerableSet.AddressSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#274-283) is never used and should be removed
EnumerableSet.values(EnumerableSet.Bytes32Set) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#208-210) is never used and should be removed
EnumerableSet.values(EnumerableSet.UintSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#347-356) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#60-65):
	- (success) = recipient.call{value: amount}() (@openzeppelin/contracts/utils/Address.sol#63)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#128-139):
	- (success,returndata) = target.call{value: value}(data) (@openzeppelin/contracts/utils/Address.sol#137)
Low level call in Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#157-166):
	- (success,returndata) = target.staticcall(data) (@openzeppelin/contracts/utils/Address.sol#164)
Low level call in Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#184-193):
	- (success,returndata) = target.delegatecall(data) (@openzeppelin/contracts/utils/Address.sol#191)
Low level call in KeeperRegistry.checkUpkeep(uint256,address) (contracts/v0.8/KeeperRegistry.sol#226-252):
	- (success,result) = upkeep.target.call{gas: s_storage.checkGasLimit}(callData) (contracts/v0.8/KeeperRegistry.sol#241)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Variable ConfirmedOwnerWithProposal.s_owner (contracts/v0.8/ConfirmedOwnerWithProposal.sol#11) is not in mixedCase
Variable ConfirmedOwnerWithProposal.s_pendingOwner (contracts/v0.8/ConfirmedOwnerWithProposal.sol#12) is not in mixedCase
Variable KeeperRegistry.s_keeperList (contracts/v0.8/KeeperRegistry.sol#48) is not in mixedCase
Variable KeeperRegistry.s_upkeepIDs (contracts/v0.8/KeeperRegistry.sol#49) is not in mixedCase
Variable KeeperRegistry.s_upkeep (contracts/v0.8/KeeperRegistry.sol#50) is not in mixedCase
Variable KeeperRegistry.s_keeperInfo (contracts/v0.8/KeeperRegistry.sol#51) is not in mixedCase
Variable KeeperRegistry.s_proposedPayee (contracts/v0.8/KeeperRegistry.sol#52) is not in mixedCase
Variable KeeperRegistry.s_checkData (contracts/v0.8/KeeperRegistry.sol#53) is not in mixedCase
Variable KeeperRegistry.s_peerRegistryMigrationPermission (contracts/v0.8/KeeperRegistry.sol#54) is not in mixedCase
Variable KeeperRegistry.s_storage (contracts/v0.8/KeeperRegistry.sol#55) is not in mixedCase
Variable KeeperRegistry.s_fallbackGasPrice (contracts/v0.8/KeeperRegistry.sol#56) is not in mixedCase
Variable KeeperRegistry.s_fallbackLinkPrice (contracts/v0.8/KeeperRegistry.sol#57) is not in mixedCase
Variable KeeperRegistry.s_ownerLinkBalance (contracts/v0.8/KeeperRegistry.sol#58) is not in mixedCase
Variable KeeperRegistry.s_expectedLinkBalance (contracts/v0.8/KeeperRegistry.sol#59) is not in mixedCase
Variable KeeperRegistry.s_transcoder (contracts/v0.8/KeeperRegistry.sol#60) is not in mixedCase
Variable KeeperRegistry.s_registrar (contracts/v0.8/KeeperRegistry.sol#61) is not in mixedCase
Variable KeeperRegistry.LINK (contracts/v0.8/KeeperRegistry.sol#63) is not in mixedCase
Variable KeeperRegistry.LINK_ETH_FEED (contracts/v0.8/KeeperRegistry.sol#64) is not in mixedCase
Variable KeeperRegistry.FAST_GAS_FEED (contracts/v0.8/KeeperRegistry.sol#65) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Loop condition `< s_keeperList.length; ` (contracts/v0.8/KeeperRegistry.sol#488) should use cached array length instead of referencing `length` member of the storage array.
 Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#cache-array-length
INFO:Slither:0x02777053d6764996e594c3e88af1d58d5363a2e6 analyzed (20 contracts with 82 detectors), 72 result(s) found
```

</details>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x03733F4E008d36f2e37F0080fF1c8DF756622E6F`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x03733f4e008d36f2e37f0080ff1c8df756622e6f
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x191c10aa4af7c30e871e70c95db0e4eb77237530
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x230e0321cf38f09e247e50afc7801ea2351fe56f-CLSynchronicityPriceAdapterPegToBase' running
INFO:Detectors:
Variable CLSynchronicityPriceAdapterPegToBase.PEG_TO_BASE (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#19) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.ASSET_TO_PEG (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#24) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DECIMALS (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#29) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DENOMINATOR (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#35) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x230e0321cf38f09e247e50afc7801ea2351fe56f analyzed (3 contracts with 82 detectors), 4 result(s) found
```

</details>

<details>
<summary>Slither report for SupplyLogic at `0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x39df4b1329d41a9ae20e17beff39aabd2f049128-SupplyLogic' running
Warning: Warning: This declaration shadows an existing declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:27:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                           ^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:81:3:
   |
81 |   function name() public view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:47:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                               ^^^^^^^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:86:3:
   |
86 |   function symbol() external view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:69:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                                                     ^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:91:3:
   |
91 |   function decimals() external view override returns (uint8) {
   |   ^ (Relevant source part starts here and spans across multiple lines).



INFO:Detectors:
IncentivizedERC20._totalSupply (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#57) is never initialized. It is used in:
	- IncentivizedERC20.totalSupply() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#96-98)
	- IncentivizedERC20._transfer(address,address,uint128) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#185-199)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-state-variables
INFO:Detectors:
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) performs a multiplication on the result of a division:
	- basePowerTwo = rate.rayMul(rate) / (SECONDS_PER_YEAR * SECONDS_PER_YEAR) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#71)
	- secondTerm = exp * expMinusOne * basePowerTwo (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#75)
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) performs a multiplication on the result of a division:
	- basePowerThree = basePowerTwo.rayMul(rate) / SECONDS_PER_YEAR (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#72)
	- thirdTerm = exp * expMinusOne * expMinusTwo * basePowerThree (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#79)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#divide-before-multiply
INFO:Detectors:
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) uses a dangerous strict equality:
	- exp == 0 (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#58)
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) uses a dangerous strict equality:
	- vars.eModeAssetPrice != 0 && params.userEModeCategory == vars.eModeAssetCategory (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#116-119)
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) uses a dangerous strict equality:
	- (vars.totalDebtInBaseCurrency == 0) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#172-176)
ReserveLogic.getNormalizedDebt(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#71-86) uses a dangerous strict equality:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#77)
ReserveLogic.getNormalizedIncome(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#47-62) uses a dangerous strict equality:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#53)
ReserveLogic.updateState(DataTypes.ReserveData,DataTypes.ReserveCache) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#93-108) uses a dangerous strict equality:
	- reserve.lastUpdateTimestamp == uint40(block.timestamp) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#99)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dangerous-strict-equalities
INFO:Detectors:
ReserveLogic.updateInterestRates(DataTypes.ReserveData,DataTypes.ReserveCache,address,uint256,uint256).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#179) is a local variable never initialized
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#147) is a local variable never initialized
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#74) is a local variable never initialized
ReserveLogic.cache(DataTypes.ReserveData).reserveCache (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#328) is a local variable never initialized
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#501) is a local variable never initialized
ReserveLogic._accrueToTreasury(DataTypes.ReserveData,DataTypes.ReserveCache).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#236) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
EModeLogic.executeSetUserEMode(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),mapping(address => uint8),DataTypes.UserConfigurationMap,DataTypes.ExecuteSetUserEModeParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/EModeLogic.sol#42-75) ignores return value by ValidationLogic.validateHealthFactor(reservesData,reservesList,eModeCategories,userConfig,msg.sender,params.categoryId,params.reservesCount,params.oracle) (lib/aave-v3-core/contracts/protocol/libraries/logic/EModeLogic.sol#63-72)
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) ignores return value by (vars.ltv,vars.liquidationThreshold,None,vars.decimals,None,vars.eModeAssetCategory) = currentReserve.configuration.getParams() (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#103-110)
ValidationLogic.validateSupply(DataTypes.ReserveCache,DataTypes.ReserveData,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#66-88) ignores return value by (isActive,isFrozen,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#73-75)
ValidationLogic.validateWithdraw(DataTypes.ReserveCache,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#96-107) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#104)
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#139-311) ignores return value by (vars.userCollateralInBaseCurrency,vars.userDebtInBaseCurrency,vars.currentLtv,None,vars.healthFactor,None) = GenericLogic.calculateUserAccountData(reservesData,reservesList,eModeCategories,DataTypes.CalculateUserAccountDataParams(params.userConfig,params.reservesCount,params.userAddress,params.oracle,params.userEModeCategory)) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#222-240)
ValidationLogic.validateRepay(DataTypes.ReserveCache,uint256,DataTypes.InterestRateMode,address,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#322-345) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#336)
ValidationLogic.validateSwapRateMode(DataTypes.ReserveData,DataTypes.ReserveCache,DataTypes.UserConfigurationMap,uint256,uint256,DataTypes.InterestRateMode) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#356-393) ignores return value by (isActive,isFrozen,stableRateEnabled,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#364-366)
ValidationLogic.validateRebalanceStableBorrowRate(DataTypes.ReserveData,DataTypes.ReserveCache,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#403-436) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#408)
ValidationLogic.validateRebalanceStableBorrowRate(DataTypes.ReserveData,DataTypes.ReserveCache,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#403-436) ignores return value by (liquidityRateVariableDebtOnly) = IReserveInterestRateStrategy(reserve.interestRateStrategyAddress).calculateInterestRates(DataTypes.CalculateInterestRatesParams(reserve.unbacked,0,0,0,totalDebt,0,reserveCache.reserveFactor,reserveAddress,reserveCache.aTokenAddress)) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#415-429)
ValidationLogic.validateSetUseReserveAsCollateral(DataTypes.ReserveCache,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#443-452) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#449)
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#496-534) ignores return value by (vars.collateralReserveActive,None,None,None,vars.collateralReservePaused) = collateralReserve.configuration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#503-505)
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#496-534) ignores return value by (vars.principalReserveActive,None,None,None,vars.principalReservePaused) = params.debtReserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#507-510)
ValidationLogic.validateHealthFactor(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.UserConfigurationMap,address,uint8,uint256,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#547-577) ignores return value by (healthFactor,hasZeroLtvCollateral) = GenericLogic.calculateUserAccountData(reservesData,reservesList,eModeCategories,DataTypes.CalculateUserAccountDataParams(userConfig,reservesCount,user,oracle,userEModeCategory)) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#557-569)
ValidationLogic.validateUseAsCollateral(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),DataTypes.UserConfigurationMap,DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#708-723) ignores return value by (isolationModeActive) = userConfig.getIsolationModeState(reservesData,reservesList) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#720)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
IncentivizedERC20.constructor(IPool,string,string,uint8).name (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#72) shadows:
	- IncentivizedERC20.name() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#81-83) (function)
	- IERC20Detailed.name() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol#7) (function)
IncentivizedERC20.constructor(IPool,string,string,uint8).symbol (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#72) shadows:
	- IncentivizedERC20.symbol() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#86-88) (function)
	- IERC20Detailed.symbol() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol#9) (function)
IncentivizedERC20.constructor(IPool,string,string,uint8).decimals (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#72) shadows:
	- IncentivizedERC20.decimals() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#91-93) (function)
	- IERC20Detailed.decimals() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol#11) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
Reentrancy in SupplyLogic.executeSupply(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),DataTypes.UserConfigurationMap,DataTypes.ExecuteSupplyParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#52-92):
	External calls:
	- isFirstSupply = IAToken(reserveCache.aTokenAddress).mint(msg.sender,params.onBehalfOf,params.amount,reserveCache.nextLiquidityIndex) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#69-74)
	Event emitted after the call(s):
	- ReserveUsedAsCollateralEnabled(params.asset,params.onBehalfOf) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#87)
	- Supply(params.asset,msg.sender,params.onBehalfOf,params.amount,params.referralCode) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#91)
Reentrancy in SupplyLogic.executeWithdraw(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.UserConfigurationMap,DataTypes.ExecuteWithdrawParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#106-163):
	External calls:
	- IAToken(reserveCache.aTokenAddress).burn(msg.sender,params.to,amountToWithdraw,reserveCache.nextLiquidityIndex) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#139-144)
	Event emitted after the call(s):
	- Withdraw(params.asset,msg.sender,params.to,amountToWithdraw) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#160)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
ReserveLogic.getNormalizedIncome(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#47-62) uses timestamp for comparisons
	Dangerous comparisons:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#53)
ReserveLogic.getNormalizedDebt(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#71-86) uses timestamp for comparisons
	Dangerous comparisons:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#77)
ReserveLogic.updateState(DataTypes.ReserveData,DataTypes.ReserveCache) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#93-108) uses timestamp for comparisons
	Dangerous comparisons:
	- reserve.lastUpdateTimestamp == uint40(block.timestamp) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#99)
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) uses timestamp for comparisons
	Dangerous comparisons:
	- exp == 0 (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#58)
	- exp > 2 (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#69)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#block-timestamp
INFO:Detectors:
GPv2SafeERC20.safeTransfer(IERC20,address,uint256) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#12-29) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#16-26)
GPv2SafeERC20.safeTransferFrom(IERC20,address,address,uint256) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#33-51) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#37-48)
GPv2SafeERC20.getLastTransferResult(IERC20) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#56-114) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#64-113)
GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage() (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77-83) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77-83)
Address.isContract(address) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#25-36) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#32-34)
PercentageMath.percentMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#25-39) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#27-38)
PercentageMath.percentDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#48-60) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#50-59)
WadRayMath.wadMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#29-38) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#31-37)
WadRayMath.wadDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#47-56) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#49-55)
WadRayMath.rayMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#65-74) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#67-73)
WadRayMath.rayDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#83-92) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#85-91)
WadRayMath.rayToWad(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#100-108) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#101-107)
WadRayMath.wadToRay(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#116-125) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#118-124)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) has a high cyclomatic complexity (14).
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#cyclomatic-complexity
INFO:Detectors:
Address.isContract(address) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#25-36) is never used and should be removed
Address.sendValue(address,uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#54-60) is never used and should be removed
Context._msgData() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol#19-22) is never used and should be removed
GPv2SafeERC20.safeTransfer(IERC20,address,uint256) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#12-29) is never used and should be removed
GenericLogic.calculateAvailableBorrows(uint256,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#195-208) is never used and should be removed
IncentivizedERC20._setDecimals(uint8) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#232-234) is never used and should be removed
IncentivizedERC20._setName(string) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#216-218) is never used and should be removed
IncentivizedERC20._setSymbol(string) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#224-226) is never used and should be removed
PercentageMath.percentDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#48-60) is never used and should be removed
ReserveConfiguration.getActive(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#183-185) is never used and should be removed
ReserveConfiguration.getBorrowCap(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#383-387) is never used and should be removed
ReserveConfiguration.getBorrowableInIsolation(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#254-258) is never used and should be removed
ReserveConfiguration.getBorrowingEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#306-310) is never used and should be removed
ReserveConfiguration.getCaps(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#601-610) is never used and should be removed
ReserveConfiguration.getFlashLoanEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#541-545) is never used and should be removed
ReserveConfiguration.getFrozen(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#203-205) is never used and should be removed
ReserveConfiguration.getLiquidationBonus(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#136-140) is never used and should be removed
ReserveConfiguration.getLiquidationProtocolFee(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#463-468) is never used and should be removed
ReserveConfiguration.getLiquidationThreshold(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#109-113) is never used and should be removed
ReserveConfiguration.getSiloedBorrowing(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#281-285) is never used and should be removed
ReserveConfiguration.getStableRateBorrowingEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#331-335) is never used and should be removed
ReserveConfiguration.getUnbackedMintCap(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#491-495) is never used and should be removed
ReserveConfiguration.setActive(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#172-176) is never used and should be removed
ReserveConfiguration.setBorrowCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#369-376) is never used and should be removed
ReserveConfiguration.setBorrowableInIsolation(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#236-243) is never used and should be removed
ReserveConfiguration.setBorrowingEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#292-299) is never used and should be removed
ReserveConfiguration.setDebtCeiling(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#419-426) is never used and should be removed
ReserveConfiguration.setDecimals(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#147-154) is never used and should be removed
ReserveConfiguration.setEModeCategory(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#502-509) is never used and should be removed
ReserveConfiguration.setFlashLoanEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#527-534) is never used and should be removed
ReserveConfiguration.setFrozen(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#192-196) is never used and should be removed
ReserveConfiguration.setLiquidationBonus(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#120-129) is never used and should be removed
ReserveConfiguration.setLiquidationProtocolFee(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#444-456) is never used and should be removed
ReserveConfiguration.setLiquidationThreshold(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#93-102) is never used and should be removed
ReserveConfiguration.setLtv(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#73-77) is never used and should be removed
ReserveConfiguration.setPaused(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#212-216) is never used and should be removed
ReserveConfiguration.setReserveFactor(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#342-351) is never used and should be removed
ReserveConfiguration.setSiloedBorrowing(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#266-273) is never used and should be removed
ReserveConfiguration.setStableRateBorrowingEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#317-324) is never used and should be removed
ReserveConfiguration.setSupplyCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#394-401) is never used and should be removed
ReserveConfiguration.setUnbackedMintCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#475-484) is never used and should be removed
ReserveLogic.cumulateToLiquidityIndex(DataTypes.ReserveData,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#118-130) is never used and should be removed
ReserveLogic.init(DataTypes.ReserveData,address,address,address,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#140-155) is never used and should be removed
SafeCast.toInt128(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#151-157) is never used and should be removed
SafeCast.toInt16(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#214-220) is never used and should be removed
SafeCast.toInt256(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#250-254) is never used and should be removed
SafeCast.toInt32(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#193-199) is never used and should be removed
SafeCast.toInt64(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#172-178) is never used and should be removed
SafeCast.toInt8(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#235-241) is never used and should be removed
SafeCast.toUint16(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#106-109) is never used and should be removed
SafeCast.toUint224(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#31-34) is never used and should be removed
SafeCast.toUint256(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#133-136) is never used and should be removed
SafeCast.toUint32(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#91-94) is never used and should be removed
SafeCast.toUint64(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#76-79) is never used and should be removed
SafeCast.toUint8(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#121-124) is never used and should be removed
SafeCast.toUint96(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#61-64) is never used and should be removed
UserConfiguration.getSiloedBorrowingState(DataTypes.UserConfigurationMap,mapping(address => DataTypes.ReserveData),mapping(uint256 => address)) (lib/aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol#200-214) is never used and should be removed
UserConfiguration.isBorrowingOne(DataTypes.UserConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol#143-146) is never used and should be removed
UserConfiguration.setBorrowing(DataTypes.UserConfigurationMap,uint256,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol#27-41) is never used and should be removed
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#139-311) is never used and should be removed
ValidationLogic.validateDropReserve(mapping(uint256 => address),DataTypes.ReserveData,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#635-651) is never used and should be removed
ValidationLogic.validateFlashloan(mapping(address => DataTypes.ReserveData),address[],uint256[]) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#460-469) is never used and should be removed
ValidationLogic.validateFlashloanSimple(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#475-480) is never used and should be removed
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#496-534) is never used and should be removed
ValidationLogic.validateRebalanceStableBorrowRate(DataTypes.ReserveData,DataTypes.ReserveCache,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#403-436) is never used and should be removed
ValidationLogic.validateRepay(DataTypes.ReserveCache,uint256,DataTypes.InterestRateMode,address,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#322-345) is never used and should be removed
ValidationLogic.validateSwapRateMode(DataTypes.ReserveData,DataTypes.ReserveCache,DataTypes.UserConfigurationMap,uint256,uint256,DataTypes.InterestRateMode) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#356-393) is never used and should be removed
WadRayMath.rayToWad(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#100-108) is never used and should be removed
WadRayMath.wadMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#29-38) is never used and should be removed
WadRayMath.wadToRay(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#116-125) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#54-60):
	- (success) = recipient.call{value: amount}() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#58)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Parameter GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage().length_getLastTransferResult_asm_0_revertWithMessage (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77) is not in mixedCase
Parameter GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage().message_getLastTransferResult_asm_0_revertWithMessage (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77) is not in mixedCase
Function IACLManager.ADDRESSES_PROVIDER() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#16) is not in mixedCase
Function IACLManager.POOL_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#22) is not in mixedCase
Function IACLManager.EMERGENCY_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#28) is not in mixedCase
Function IACLManager.RISK_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#34) is not in mixedCase
Function IACLManager.FLASH_BORROWER_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#40) is not in mixedCase
Function IACLManager.BRIDGE_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#46) is not in mixedCase
Function IACLManager.ASSET_LISTING_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#52) is not in mixedCase
Function IAToken.UNDERLYING_ASSET_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IAToken.sol#109) is not in mixedCase
Function IAToken.RESERVE_TREASURY_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IAToken.sol#115) is not in mixedCase
Function IAToken.DOMAIN_SEPARATOR() (lib/aave-v3-core/contracts/interfaces/IAToken.sol#122) is not in mixedCase
Function IPool.ADDRESSES_PROVIDER() (lib/aave-v3-core/contracts/interfaces/IPool.sol#621) is not in mixedCase
Function IPool.MAX_STABLE_RATE_BORROW_SIZE_PERCENT() (lib/aave-v3-core/contracts/interfaces/IPool.sol#684) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TOTAL() (lib/aave-v3-core/contracts/interfaces/IPool.sol#690) is not in mixedCase
Function IPool.BRIDGE_PROTOCOL_FEE() (lib/aave-v3-core/contracts/interfaces/IPool.sol#696) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TO_PROTOCOL() (lib/aave-v3-core/contracts/interfaces/IPool.sol#702) is not in mixedCase
Function IPool.MAX_NUMBER_RESERVES() (lib/aave-v3-core/contracts/interfaces/IPool.sol#708) is not in mixedCase
Function IPriceOracleGetter.BASE_CURRENCY() (lib/aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol#15) is not in mixedCase
Function IPriceOracleGetter.BASE_CURRENCY_UNIT() (lib/aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol#22) is not in mixedCase
Function IPriceOracleSentinel.ADDRESSES_PROVIDER() (lib/aave-v3-core/contracts/interfaces/IPriceOracleSentinel.sol#28) is not in mixedCase
Function IStableDebtToken.UNDERLYING_ASSET_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IStableDebtToken.sol#138) is not in mixedCase
Function IVariableDebtToken.UNDERLYING_ASSET_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IVariableDebtToken.sol#45) is not in mixedCase
Variable IncentivizedERC20._userState (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#52) is not in mixedCase
Variable IncentivizedERC20._totalSupply (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#57) is not in mixedCase
Variable IncentivizedERC20._incentivesController (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#61) is not in mixedCase
Variable IncentivizedERC20._addressesProvider (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#62) is not in mixedCase
Variable IncentivizedERC20.POOL (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#63) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Redundant expression "this (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol#20)" inContext (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol#14-23)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#redundant-statements
INFO:Slither:0x39df4b1329d41a9ae20e17beff39aabd2f049128 analyzed (33 contracts with 82 detectors), 152 result(s) found
```

</details>

<details>
<summary>Slither report for AaveCLRobotOperator at `0x4e8984D11A47Ff89CD67c7651eCaB6C00a74B4A9`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x4e8984d11a47ff89cd67c7651ecab6c00a74b4a9
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for StableDebtToken at `0x50ddd0Cd4266299527d25De9CBb55fE0EB8dAc30`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x50ddd0cd4266299527d25de9cbb55fe0eb8dac30
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for ChildERC20 (Chainlink) at `0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x5f4d15d761528c57a5c30c43c1dab26fc5452731-CLSynchronicityPriceAdapterPegToBase' running
INFO:Detectors:
Variable CLSynchronicityPriceAdapterPegToBase.PEG_TO_BASE (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#19) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.ASSET_TO_PEG (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#24) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DECIMALS (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#29) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DENOMINATOR (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#35) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x5f4d15d761528c57a5c30c43c1dab26fc5452731 analyzed (3 contracts with 82 detectors), 4 result(s) found
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x794a61358d6845594f94dc1db02a252b5b4814ad
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for VariableDebtToken at `0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x79b5e91037ae441de0d9e6fd3fd85b96b83d4e93
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4` with implementation StableDebtToken at `0x50ddd0Cd4266299527d25De9CBb55fE0EB8dAc30`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x89d976629b7055ff1ca02b927ba3e020f22a44e4
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e` with implementation RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x929ec64c34a17401f460460d4b9390518e5b473e
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e` with implementation VariableDebtToken at `0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x953a573793604af8d41f306feb8274190db4ae0e
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xa97684ead0e402dc232d5a977953df7ecbab3cdb
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for PegSwap at `0xAA1DC356dc4B18f30C347798FD5379F3D77ABC5b`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xaa1dc356dc4b18f30c347798fd5379f3d77abc5b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for LinkToken at `0xb0897686c545045aFc77CF20eC7A532E3120E0F1`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts' running
Warning: crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol:1081:3: Warning: Function state mutability can be restricted to pure
  function calculate(int256[] memory _list)
  ^ (Relevant source part starts here and spans across multiple lines).


INFO:Detectors:
Reentrancy in ChainlinkClient.sendChainlinkRequestTo(address,Chainlink.Request,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#782-794):
	External calls:
	- require(bool,string)(link.transferAndCall(_oracle,_payment,encodeRequest(_req)),unable to transferAndCall to oracle) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#790)
	State variables written after the call(s):
	- requestCount += 1 (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#791)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-1
INFO:Detectors:
Buffer.fromBytes(bytes).buf (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#52) is a local variable never initialized
ChainlinkClient.buildChainlinkRequest(bytes32,address,bytes4).req (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#754) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendUint8(uint8((major << 5) | value)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#323)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendUint8(uint8((major << 5) | 24)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#325)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendInt(value,1) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#326)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendUint8(uint8((major << 5) | 25)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#328)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendInt(value,2) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#329)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendUint8(uint8((major << 5) | 26)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#331)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendInt(value,4) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#332)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendUint8(uint8((major << 5) | 27)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#334)
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) ignores return value by buf.appendInt(value,8) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#335)
CBOR.encodeIndefiniteLengthType(Buffer.buffer,uint8) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#339-341) ignores return value by buf.appendUint8(uint8((major << 5) | 31)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#340)
CBOR.encodeBytes(Buffer.buffer,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#355-358) ignores return value by buf.append(value) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#357)
CBOR.encodeString(Buffer.buffer,string) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#360-363) ignores return value by buf.append(bytes(value)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#362)
Chainlink.initialize(Chainlink.Request,bytes32,address,bytes4) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#409-420) ignores return value by Buffer.init(self.buf,defaultBufferSize) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#415)
Chainlink.setBuffer(Chainlink.Request,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#428-433) ignores return value by Buffer.init(self.buf,_data.length) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#431)
Chainlink.setBuffer(Chainlink.Request,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#428-433) ignores return value by Buffer.append(self.buf,_data) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#432)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
Reentrancy in PreCoordinator.createRequests(bytes32,bytes32,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1446-1460):
	External calls:
	- outoingRequestId = sendChainlinkRequestTo(sa.oracles[i],request,sa.payments[i]) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1456)
		- require(bool,string)(link.transferAndCall(_oracle,_payment,encodeRequest(_req)),unable to transferAndCall to oracle) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#790)
	State variables written after the call(s):
	- requests[outoingRequestId] = _incomingRequestId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1457)
	- serviceAgreementRequests[outoingRequestId] = _saId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1458)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-2
INFO:Detectors:
Buffer.init(Buffer.buffer,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#30-43) uses assembly
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#36-41)
Buffer.truncate(Buffer.buffer) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#76-82) uses assembly
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#77-80)
Buffer.write(Buffer.buffer,uint256,bytes,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#93-134) uses assembly
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#102-114)
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#118-120)
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#127-131)
Buffer.writeUint8(Buffer.buffer,uint256,uint8) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#167-186) uses assembly
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#172-184)
Buffer.write(Buffer.buffer,uint256,bytes32,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#208-228) uses assembly
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#216-226)
Buffer.writeInt(Buffer.buffer,uint256,uint256,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#273-291) uses assembly
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#279-289)
LinkTokenReceiver.onTokenTransfer(address,uint256,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#986-1005) uses assembly
	- INLINE ASM (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#996-1001)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
Buffer.append(Buffer.buffer,bytes,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#144-146) is never used and should be removed
Buffer.appendBytes20(Buffer.buffer,bytes20) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#249-251) is never used and should be removed
Buffer.appendBytes32(Buffer.buffer,bytes32) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#260-262) is never used and should be removed
Buffer.appendInt(Buffer.buffer,uint256,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#300-302) is never used and should be removed
Buffer.appendUint8(Buffer.buffer,uint8) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#195-197) is never used and should be removed
Buffer.fromBytes(bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#51-56) is never used and should be removed
Buffer.truncate(Buffer.buffer) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#76-82) is never used and should be removed
Buffer.write(Buffer.buffer,uint256,bytes32,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#208-228) is never used and should be removed
Buffer.writeBytes20(Buffer.buffer,uint256,bytes20) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#238-240) is never used and should be removed
Buffer.writeInt(Buffer.buffer,uint256,uint256,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#273-291) is never used and should be removed
Buffer.writeUint8(Buffer.buffer,uint256,uint8) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#167-186) is never used and should be removed
CBOR.encodeBytes(Buffer.buffer,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#355-358) is never used and should be removed
CBOR.encodeIndefiniteLengthType(Buffer.buffer,uint8) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#339-341) is never used and should be removed
CBOR.encodeInt(Buffer.buffer,int256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#347-353) is never used and should be removed
CBOR.encodeString(Buffer.buffer,string) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#360-363) is never used and should be removed
CBOR.encodeType(Buffer.buffer,uint8,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#321-337) is never used and should be removed
CBOR.encodeUInt(Buffer.buffer,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#343-345) is never used and should be removed
CBOR.endSequence(Buffer.buffer) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#373-375) is never used and should be removed
CBOR.startArray(Buffer.buffer) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#365-367) is never used and should be removed
CBOR.startMap(Buffer.buffer) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#369-371) is never used and should be removed
Chainlink.add(Chainlink.Request,string,string) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#441-446) is never used and should be removed
Chainlink.addBytes(Chainlink.Request,string,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#454-459) is never used and should be removed
Chainlink.addInt(Chainlink.Request,string,int256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#467-472) is never used and should be removed
Chainlink.addStringArray(Chainlink.Request,string,string[]) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#493-502) is never used and should be removed
Chainlink.addUint(Chainlink.Request,string,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#480-485) is never used and should be removed
ChainlinkClient.addChainlinkExternalRequest(address,bytes32) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#874-879) is never used and should be removed
ChainlinkClient.chainlinkOracleAddress() (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#860-866) is never used and should be removed
ChainlinkClient.sendChainlinkRequest(Chainlink.Request,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#765-770) is never used and should be removed
ChainlinkClient.setChainlinkOracle(address) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#824-826) is never used and should be removed
ChainlinkClient.updateChainlinkOracleWithENS() (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#902-908) is never used and should be removed
ChainlinkClient.useChainlinkWithENS(address,bytes32) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#887-896) is never used and should be removed
ChainlinkClient.validateChainlinkCallback(bytes32) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#939-943) is never used and should be removed
SafeMath.mod(uint256,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#697-700) is never used and should be removed
SafeMath.mul(uint256,uint256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#652-664) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in LinkTokenReceiver.onTokenTransfer(address,uint256,bytes) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#986-1005):
	- (success) = address(this).delegatecall(_data) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1003)
Low level call in PreCoordinator.chainlinkCallback(bytes32,int256) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1469-1489):
	- (success) = req.callbackAddress.call(abi.encodeWithSelector(req.callbackFunctionId,cbRequestId,result)) (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1485)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Struct Buffer.buffer (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#19-22) is not in CapWords
Parameter Chainlink.initialize(Chainlink.Request,bytes32,address,bytes4)._id (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#411) is not in mixedCase
Parameter Chainlink.initialize(Chainlink.Request,bytes32,address,bytes4)._callbackAddress (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#412) is not in mixedCase
Parameter Chainlink.initialize(Chainlink.Request,bytes32,address,bytes4)._callbackFunction (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#413) is not in mixedCase
Parameter Chainlink.setBuffer(Chainlink.Request,bytes)._data (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#428) is not in mixedCase
Parameter Chainlink.add(Chainlink.Request,string,string)._key (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#441) is not in mixedCase
Parameter Chainlink.add(Chainlink.Request,string,string)._value (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#441) is not in mixedCase
Parameter Chainlink.addBytes(Chainlink.Request,string,bytes)._key (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#454) is not in mixedCase
Parameter Chainlink.addBytes(Chainlink.Request,string,bytes)._value (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#454) is not in mixedCase
Parameter Chainlink.addInt(Chainlink.Request,string,int256)._key (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#467) is not in mixedCase
Parameter Chainlink.addInt(Chainlink.Request,string,int256)._value (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#467) is not in mixedCase
Parameter Chainlink.addUint(Chainlink.Request,string,uint256)._key (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#480) is not in mixedCase
Parameter Chainlink.addUint(Chainlink.Request,string,uint256)._value (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#480) is not in mixedCase
Parameter Chainlink.addStringArray(Chainlink.Request,string,string[])._key (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#493) is not in mixedCase
Parameter Chainlink.addStringArray(Chainlink.Request,string,string[])._values (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#493) is not in mixedCase
Constant Chainlink.defaultBufferSize (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#388) is not in UPPER_CASE_WITH_UNDERSCORES
Parameter ChainlinkClient.buildChainlinkRequest(bytes32,address,bytes4)._specId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#750) is not in mixedCase
Parameter ChainlinkClient.buildChainlinkRequest(bytes32,address,bytes4)._callbackAddress (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#751) is not in mixedCase
Parameter ChainlinkClient.buildChainlinkRequest(bytes32,address,bytes4)._callbackFunctionSignature (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#752) is not in mixedCase
Parameter ChainlinkClient.sendChainlinkRequest(Chainlink.Request,uint256)._req (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#765) is not in mixedCase
Parameter ChainlinkClient.sendChainlinkRequest(Chainlink.Request,uint256)._payment (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#765) is not in mixedCase
Parameter ChainlinkClient.sendChainlinkRequestTo(address,Chainlink.Request,uint256)._oracle (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#782) is not in mixedCase
Parameter ChainlinkClient.sendChainlinkRequestTo(address,Chainlink.Request,uint256)._req (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#782) is not in mixedCase
Parameter ChainlinkClient.sendChainlinkRequestTo(address,Chainlink.Request,uint256)._payment (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#782) is not in mixedCase
Parameter ChainlinkClient.cancelChainlinkRequest(bytes32,uint256,bytes4,uint256)._requestId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#807) is not in mixedCase
Parameter ChainlinkClient.cancelChainlinkRequest(bytes32,uint256,bytes4,uint256)._payment (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#808) is not in mixedCase
Parameter ChainlinkClient.cancelChainlinkRequest(bytes32,uint256,bytes4,uint256)._callbackFunc (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#809) is not in mixedCase
Parameter ChainlinkClient.cancelChainlinkRequest(bytes32,uint256,bytes4,uint256)._expiration (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#810) is not in mixedCase
Parameter ChainlinkClient.setChainlinkOracle(address)._oracle (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#824) is not in mixedCase
Parameter ChainlinkClient.setChainlinkToken(address)._link (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#832) is not in mixedCase
Parameter ChainlinkClient.addChainlinkExternalRequest(address,bytes32)._oracle (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#874) is not in mixedCase
Parameter ChainlinkClient.addChainlinkExternalRequest(address,bytes32)._requestId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#874) is not in mixedCase
Parameter ChainlinkClient.useChainlinkWithENS(address,bytes32)._ens (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#887) is not in mixedCase
Parameter ChainlinkClient.useChainlinkWithENS(address,bytes32)._node (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#887) is not in mixedCase
Parameter ChainlinkClient.encodeRequest(Chainlink.Request)._req (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#917) is not in mixedCase
Parameter ChainlinkClient.validateChainlinkCallback(bytes32)._requestId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#939) is not in mixedCase
Parameter LinkTokenReceiver.onTokenTransfer(address,uint256,bytes)._data (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#989) is not in mixedCase
Parameter SignedSafeMath.add(int256,int256)._a (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1053) is not in mixedCase
Parameter SignedSafeMath.add(int256,int256)._b (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1053) is not in mixedCase
Parameter Median.calculate(int256[])._list (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1081) is not in mixedCase
Parameter Median.quickselect(int256[],uint256)._a (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1103) is not in mixedCase
Parameter Median.quickselect(int256[],uint256)._k (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1103) is not in mixedCase
Parameter Median.swap(int256[],int256[])._a (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1149) is not in mixedCase
Parameter Median.swap(int256[],int256[])._b (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1149) is not in mixedCase
Parameter Median.copy(int256[])._list (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1161) is not in mixedCase
Parameter PreCoordinator.createServiceAgreement(uint256,address[],bytes32[],uint256[])._minResponses (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1321) is not in mixedCase
Parameter PreCoordinator.createServiceAgreement(uint256,address[],bytes32[],uint256[])._oracles (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1322) is not in mixedCase
Parameter PreCoordinator.createServiceAgreement(uint256,address[],bytes32[],uint256[])._jobIds (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1323) is not in mixedCase
Parameter PreCoordinator.createServiceAgreement(uint256,address[],bytes32[],uint256[])._payments (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1324) is not in mixedCase
Parameter PreCoordinator.getServiceAgreement(bytes32)._saId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1350) is not in mixedCase
Parameter PreCoordinator.deleteServiceAgreement(bytes32)._saId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1379) is not in mixedCase
Parameter PreCoordinator.oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)._sender (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1410) is not in mixedCase
Parameter PreCoordinator.oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)._payment (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1411) is not in mixedCase
Parameter PreCoordinator.oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)._saId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1412) is not in mixedCase
Parameter PreCoordinator.oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)._callbackAddress (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1413) is not in mixedCase
Parameter PreCoordinator.oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)._callbackFunctionId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1414) is not in mixedCase
Parameter PreCoordinator.oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)._nonce (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1415) is not in mixedCase
Parameter PreCoordinator.oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)._data (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1417) is not in mixedCase
Parameter PreCoordinator.createRequests(bytes32,bytes32,bytes)._saId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1446) is not in mixedCase
Parameter PreCoordinator.createRequests(bytes32,bytes32,bytes)._incomingRequestId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1446) is not in mixedCase
Parameter PreCoordinator.createRequests(bytes32,bytes32,bytes)._data (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1446) is not in mixedCase
Parameter PreCoordinator.chainlinkCallback(bytes32,int256)._requestId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1469) is not in mixedCase
Parameter PreCoordinator.chainlinkCallback(bytes32,int256)._data (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1469) is not in mixedCase
Parameter PreCoordinator.cancelOracleRequest(bytes32,uint256,bytes4,uint256)._requestId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1510) is not in mixedCase
Parameter PreCoordinator.cancelOracleRequest(bytes32,uint256,bytes4,uint256)._payment (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1511) is not in mixedCase
Parameter PreCoordinator.cancelOracleRequest(bytes32,uint256,bytes4,uint256)._callbackFunctionId (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1512) is not in mixedCase
Parameter PreCoordinator.cancelOracleRequest(bytes32,uint256,bytes4,uint256)._expiration (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1513) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
ChainlinkClient.LINK (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#723) is never used in PreCoordinator (crytic-export/etherscan-contracts/0xb0897686c545045afc77cf20ec7a532e3120e0f1-PreCoordinator.sol#1258-1546)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-state-variable
INFO:Slither:0xb0897686c545045afc77cf20ec7a532e3120e0f1 analyzed (15 contracts with 82 detectors), 130 result(s) found
```

</details>

<details>
<summary>Slither report for Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xb77fc84a549ecc0b410d6fa15159c2df207545a3
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for AToken at `0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xcf85ff1c37c594a10195f7a9ab85cbb0a03f69de
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xdc9a35b16db4e126cfedc41322b3a36454b1f772
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for ProposalPayloadPolygonRobot at `0xdDE20B20E21a6F3b7080e740b684CDf5b764B80D`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xdde20b20e21a6f3b7080e740b684cdf5b764b80d
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

</details>
