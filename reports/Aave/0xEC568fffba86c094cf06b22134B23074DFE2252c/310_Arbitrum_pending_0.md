## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/06b0ce41-aece-49e6-8188-3e549c407a8a](https://dashboard.tenderly.co/me/simulator/06b0ce41-aece-49e6-8188-3e549c407a8a)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000036` @@
- "0x000000000000000000000000000000000000000000009d798acf6dcd3d1fb69c"
+ "0x000000000000000000000000000000000000000000009d7830cc06cc2786a00e"
@@ Slot `0x246d7438c5a99950099e92f45a9221b48a1cfd540bed5c21d95ec94fe3175064` @@
- "0x00000000033d57d68e441fafd4d0ac92000000000000002e9dd8a5d3cc32fa48"
+ "0x00000000033d68405bb456acd012ecd8000000000000002d43d53ed2b699e3ba"
@@ Slot `0x59fd213b3ef132513db1538f7476087cf9b73235c85a7f017a34537afd9783ff` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000033d68405bb456acd012ecd800000000000000000000000000000000"
```

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000012` @@
- "0x00000000000000000000000000000000000000000000011f7563f69aa5fc23da"
+ "0x000000000000000000000000000000000000000000000120d055ce25fec023da"
@@ Slot `0xf375c4cc6508675b3ed20b403223790e343eef70a0ef7da990b9ac4c2082ecac` @@
- "0x663392b728ce212c50c92e5f4abb09395d4ec377000000008b8a34617017e54a"
+ "0x663392b728ce212c50c92e5f4abb09395d4ec37700000001e67c0becc8dbe54a"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9bc` @@
- "0x000000000004383c7645876b28cb737200000000033d681f4a029806acd8d4be"
+ "0x0000000000043850a98607375ee8db1e00000000033d68405bb456acd012ecd8"
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9bd` @@
- "0x00000000001a0d412179f6a9c5ba245a00000000034d569e24eee4c420f99aa3"
+ "0x00000000001a0d7f7c8b20899ee787c000000000034d576e3b36ad7b5860cce6"
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9be` @@
- "0x00000000000000000000010064f1fe5800000000004a723dc6b40b8a9a000000"
+ "0x00000000000000000000010064f20d0900000000004a723dc6b40b8a9a000000"
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9c3` @@
- "0x000000000000000000000000000000000000000000000002635672ae68ec720a"
+ "0x00000000000000000000000000000000000000000000000264e84e4194ddc4a4"
```

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_actionsSets` key `"36"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x7add1d0f44fce1396355f3eb0f26649eb418d5192849fbc80df55d0d1d2e6729` @@
- true
+ false

```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x00000000000000000000000000000000000000000000000000000000010895a4"
+ "0x000000000000000000000000000000000000000000000000000000000108a0e0"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x0000000000000000000000000000000000000000000000002141bb39c2778220"
+ "0x0000000000000000000000000000000000000000000000002141fdf9571c1420"
```

```diff
# ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`
@@ Slot `0x42d0a1298a5abb2ccb2078ebd39d39663c80f3fcd14c47de37b4f4b65adde5f9` @@
- "0x000000000000000000000000000000000000000000007defde6cb07b5c2d2284"
+ "0x000000000000000000000000000000000000000000007dee837ad8f003692284"
@@ Slot `0x616193905e9760e6e9eec593578680e482641fc0599e6d3cb2c462dbf9fac2fe` @@
- "0x00000000000000000000000000000000000000000000011f7563f69aa5fc23da"
+ "0x000000000000000000000000000000000000000000000120d055ce25fec023da"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`
    - `Transfer(from: 0x0000000000000000000000000000000000000000, to: 0x053d55f9b5af8694c503eb288a1b7e552f590710, value: 66652363406162410)`
    - `Mint(caller: 0x053d55f9b5af8694c503eb288a1b7e552f590710, onBehalfOf: 0x053d55f9b5af8694c503eb288a1b7e552f590710, value: 66652363406162410, balanceIncrease: 66652363406162410, index: 1002691817774368599829572824)`
    - `Transfer(from: 0x053d55f9b5af8694c503eb288a1b7e552f590710, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 25000000000000000000)`
    - `BalanceTransfer(from: 0x053d55f9b5af8694c503eb288a1b7e552f590710, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 24932885216408180366, index: 1002691817774368599829572824)`
    - `Transfer(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x0000000000000000000000000000000000000000, value: 25000000000000000000)`
    - `Burn(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, target: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 25000000000000000000, balanceIncrease: 0, index: 1002691817774368599829572824)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
    - `ReserveUsedAsCollateralEnabled(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `ReserveDataUpdated(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, liquidityRate: 5101643756484087280884510, stableBorrowRate: 90000000000000000000000000, variableBorrowRate: 31495813785057482957621184, liquidityIndex: 1002691817774368599829572824, variableBorrowIndex: 1021955196867007862066433254)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `Withdraw(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, amount: 25000000000000000000)`
  - ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`
    - `Transfer(from: 0x191c10aa4af7c30e871e70c95db0e4eb77237530, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 25000000000000000000)`
    - `Approval(owner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, spender: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, value: 25000000000000000000)`
    - `Transfer(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, value: 25000000000000000000)`
    - `Approval(owner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, spender: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, value: 0)`
    - `Approval(owner: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, spender: 0x75c0530885f385721fdda23c539af3701d6183d4, value: 25000000000000000000)`
    - `Transfer(from: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, to: 0x75c0530885f385721fdda23c539af3701d6183d4, value: 25000000000000000000)`
    - `Approval(owner: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, spender: 0x75c0530885f385721fdda23c539af3701d6183d4, value: 0)`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `FundsAdded(id: 99910557623747840434738249049159754336730253966084942174349501874329868147502, from: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, amount: 25000000000000000000)`
  - AaveCLRobotOperator at `0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A`
    - `KeeperRefilled(id: 99910557623747840434738249049159754336730253966084942174349501874329868147502, from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, amount: 25000000000000000000)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 36, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xdDE20B20E21a6F3b7080e740b684CDf5b764B80D: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0xdde20b20e21a6f3b7080e740b684cdf5b764b80d: Contract (verified) (ProposalPayloadArbitrumRobot)
  - 0x053d55f9b5af8694c503eb288a1b7e552f590710: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x981ab570ac289938f296b975c524b66fbf1b8774: Contract (verified) (Collector)
  - 0x191c10aa4af7c30e871e70c95db0e4eb77237530: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1be1798b70aee431c2986f7ff48d9d1fa350786a: Contract (verified) (AToken)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (L2Pool)
  - 0x929ec64c34a17401f460460d4b9390518e5b473e: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x5f4d15d761528c57a5c30c43c1dab26fc5452731: Contract (verified) (RewardsController)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0x39df4b1329d41a9ae20e17beff39aabd2f049128: Contract (verified) (SupplyLogic)
  - 0x953a573793604af8d41f306feb8274190db4ae0e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x5e76e98e0963ecdc6a065d1435f84065b7523f39: Contract (verified) (VariableDebtToken)
  - 0x89d976629b7055ff1ca02b927ba3e020f22a44e4: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7: Contract (verified) (StableDebtToken)
  - 0x9b34e3e183c9b0d1a08ff57a8fb59c821616295f: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0xf97f4df75117a78c1a5a0dbb814af92458539fb4: Contract (verified) (ClonableBeaconProxy)
  - 0xe72ba9418b5f2ce0a6a40501fe77c6839aa37333: Contract (verified) (UpgradeableBeacon)
  - 0x3f770ac673856f105b586bb393d122721265ad46: Contract (verified) (StandardArbERC20)
  - 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a: Contract (verified) (AaveCLRobotOperator)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0x153b383c6f4dfcd27f20bafc15c2be5e5fe327d5: Contract (verified) (KeeperRegistryLogic1_3)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0x053D55f9B5AF8694c503EB288a1B7E552f590710`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for StableDebtToken at `0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for KeeperRegistryLogic1_3 at `0x153b383C6f4DfCd27F20BAfc15C2Be5E5FE327D5`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
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
<summary>View warnings for StandardArbERC20 at `0x3f770Ac673856F105b586bb393d122721265aD46`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for VariableDebtToken at `0x5E76E98E0963EcDC6A065d1435F84065b7523f39`</summary>

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
<summary>View warnings for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for Collector at `0x981AB570aC289938F296b975C524B66FBF1B8774`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x981ab570ac289938f296b975c524b66fbf1b8774-CLwstETHSynchronicityPriceAdapter' running
```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x9b34E3e183c9b0d1a08fF57a8fb59c821616295f`</summary>

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
<summary>View warnings for AaveCLRobotOperator at `0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for L2Pool at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ProposalPayloadArbitrumRobot at `0xdDE20B20E21a6F3b7080e740b684CDf5b764B80D`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x053D55f9B5AF8694c503EB288a1B7E552f590710`</summary>

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
ERROR:root:Error in 0x053d55f9b5af8694c503eb288a1b7e552f590710
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
<summary>Slither report for StableDebtToken at `0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7`</summary>

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
ERROR:root:Error in 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7
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
<summary>Slither report for KeeperRegistryLogic1_3 at `0x153b383C6f4DfCd27F20BAfc15C2Be5E5FE327D5`</summary>

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
ERROR:root:Error in 0x153b383c6f4dfcd27f20bafc15c2be5e5fe327d5
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`</summary>

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
<summary>Slither report for AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

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
ERROR:root:Error in 0x1be1798b70aee431c2986f7ff48d9d1fa350786a
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
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#501) is a local variable never initialized
ReserveLogic.cache(DataTypes.ReserveData).reserveCache (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#328) is a local variable never initialized
ReserveLogic._accrueToTreasury(DataTypes.ReserveData,DataTypes.ReserveCache).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#236) is a local variable never initialized
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#74) is a local variable never initialized
ReserveLogic.updateInterestRates(DataTypes.ReserveData,DataTypes.ReserveCache,address,uint256,uint256).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#179) is a local variable never initialized
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#147) is a local variable never initialized
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
<summary>Slither report for StandardArbERC20 at `0x3f770Ac673856F105b586bb393d122721265aD46`</summary>

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
ERROR:root:Error in 0x3f770ac673856f105b586bb393d122721265ad46
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
<summary>Slither report for VariableDebtToken at `0x5E76E98E0963EcDC6A065d1435F84065b7523f39`</summary>

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
ERROR:root:Error in 0x5e76e98e0963ecdc6a065d1435f84065b7523f39
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
<summary>Slither report for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

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
ERROR:root:Error in 0x75c0530885f385721fdda23c539af3701d6183d4
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`</summary>

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
<summary>Slither report for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

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
ERROR:root:Error in 0x7d9103572be58ffe99dc390e8246f02dcae6f611
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e`</summary>

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
<summary>Slither report for Collector at `0x981AB570aC289938F296b975C524B66FBF1B8774`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x981ab570ac289938f296b975c524b66fbf1b8774-CLwstETHSynchronicityPriceAdapter' running
INFO:Detectors:
Variable CLSynchronicityPriceAdapterPegToBase.PEG_TO_BASE (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#19) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.ASSET_TO_PEG (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#24) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DECIMALS (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#29) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DENOMINATOR (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#35) is not in mixedCase
Variable CLwstETHSynchronicityPriceAdapter.STETH (src/contracts/CLwstETHSynchronicityPriceAdapter.sol#21) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x981ab570ac289938f296b975c524b66fbf1b8774 analyzed (5 contracts with 82 detectors), 5 result(s) found
```

</details>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x9b34E3e183c9b0d1a08fF57a8fb59c821616295f`</summary>

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
ERROR:root:Error in 0x9b34e3e183c9b0d1a08ff57a8fb59c821616295f
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
<summary>Slither report for AaveCLRobotOperator at `0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A`</summary>

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
ERROR:root:Error in 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a
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
<summary>Slither report for L2Pool at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
ERROR:root:Error in 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b
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
<summary>Slither report for ProposalPayloadArbitrumRobot at `0xdDE20B20E21a6F3b7080e740b684CDf5b764B80D`</summary>

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
<summary>Slither report for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

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
ERROR:root:Error in 0xe72ba9418b5f2ce0a6a40501fe77c6839aa37333
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
<summary>Slither report for ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`</summary>

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
ERROR:root:Error in 0xf97f4df75117a78c1a5a0dbb814af92458539fb4
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
