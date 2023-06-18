## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/91cb2430-057a-4a15-9c0e-e73275fc9e94](https://dashboard.tenderly.co/me/simulator/91cb2430-057a-4a15-9c0e-e73275fc9e94)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# unknown contract name at `0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000001"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x00000000000000000000000081387c40eb75acb02757c1ae55d5936e78c9ded3"
+ "0x0000000000000000000000005e76e98e0963ecdc6a065d1435f84065b7523f39"
```

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ `s_upkeep` key `"111517909269514636348543717696303188955558448015882347765009177537012203412379"`.amountSpent @@
- null
+ 1572381848750710678
@@ `s_upkeep` key `"111517909269514636348543717696303188955558448015882347765009177537012203412379"`.admin @@
- 0x0000000000000000000000000000000000000000
+ 0xe3fd707583932a99513a5c65c8463de769f5dadf

@@ `s_keeperInfo` key `0x976f07a571f9ab358c1e5f9bff5b4950dbeca327`.balance @@
- 432436577236067189595
+ 432489844961212021256

```

```diff
# unknown contract name at `0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000001"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x00000000000000000000000052a1ceb68ee6b7b5d13e0376a1e0e4423a8ce26e"
+ "0x0000000000000000000000000c2c95b24529664fe55d4437d7a31175cfe6c4f7"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
@@ Slot `0xb0e3bbf6dc47aaad7ffe22e90e56bf657905c58305d5bde848a2f17771a9426d` @@
- "0x00007270e000000000000003e8000493e00000249f0007d0151229041f401d4c"
+ "0x00007270e000000000000003e8000493e00000249f0007d0851229041f401d4c"
```

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0x9d66d34b3ca51a33a93da234c1969f1046a829f5d160d54167d3e6ec3e066d01` @@
- true
+ false

@@ `_actionsSets` key `"24"`.executed @@
- false
+ true

```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x000000000000000000000000000000000000000000000000000000000094d62e"
+ "0x000000000000000000000000000000000000000000000000000000000094eb43"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x00000000000000000000000000000000000000000000000025cb583bda590e6e"
+ "0x00000000000000000000000000000000000000000000000025cb8be0773f7b6e"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA` with implementation AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`
@@ lastInitializedRevision @@
- 1
+ 2
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x000000000000000000000000a5ba6e5ec19a1bf23c857991c857db62b2aa187b"
+ "0x0000000000000000000000001be1798b70aee431c2986f7ff48d9d1fa350786a"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy at `0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA` with implementation AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`
    - `Upgraded(implementation: 0x1be1798b70aee431c2986f7ff48d9d1fa350786a)`
    - `Initialized(underlyingAsset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, treasury: 0x053d55f9b5af8694c503eb288a1b7e552f590710, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, aTokenDecimals: 18, aTokenName: Aave Arbitrum MAI, aTokenSymbol: aArbMAI, params: 0x)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`
    - `ATokenUpgraded(asset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, proxy: 0xc45a479877e1e9dfe9fcd4056c699575a1045daa, implementation: 0x1be1798b70aee431c2986f7ff48d9d1fa350786a)`
    - `StableDebtTokenUpgraded(asset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, proxy: 0x78246294a4c6fbf614ed73ccc9f8b875ca8ee841, implementation: 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7)`
    - `VariableDebtTokenUpgraded(asset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, proxy: 0x34e2ed44ef7466d5f9e0b782b5c08b57475e7907, implementation: 0x5e76e98e0963ecdc6a065d1435f84065b7523f39)`
    - `ReservePaused(asset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, paused: false)`
    - `ReserveFlashLoaning(asset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, enabled: true)`
  - unknown contract name at `0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841`
    - `Upgraded(implementation: 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7)`
    - `Initialized(underlyingAsset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Arbitrum Stable Debt MAI, debtTokenSymbol: stableDebtArbMAI, params: 0x)`
  - unknown contract name at `0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907`
    - `Upgraded(implementation: 0x5e76e98e0963ecdc6a065d1435f84065b7523f39)`
    - `Initialized(underlyingAsset: 0x3f56e0c36d275367b8c502090edf38289b3dea0d, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Arbitrum Variable Debt MAI, debtTokenSymbol: variableDebtArbMAI, params: 0x)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 24, initiatorExecution: 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6, returnedData: 0x)`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `UpkeepPerformed(id: 111517909269514636348543717696303188955558448015882347765009177537012203412379, success: true, from: 0x976f07a571f9ab358c1e5f9bff5b4950dbeca327, payment: 53267725144831661, performData: 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000018)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x9441B65EE553F70df9C77d45d3283B6BC24F222d: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0x976f07a571f9ab358c1e5f9bff5b4950dbeca327: EOA (verification not applicable)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0x0aaf77e9c3f3ffc4771579af3b4921a740876392: Contract (not verified)
  - 0x4972f152c975cb4962f79643e938151750e85b2f: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb7c8fb1db45007f98a68da0588e1aa524c317f27: Contract (not verified)
  - 0xa136978a2c8a92ec5eacc5179642aa2e1c1eae18: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x000000000000000000000000000000000000006c: Contract (not verified)
  - 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6: Contract (verified) (L2RobotKeeper)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0x9441b65ee553f70df9c77d45d3283b6bc24f222d: Contract (verified) (AaveV3ARBMAIFixes_20230606)
  - 0x8145edddf43f50276641b55bd3ad95944510021e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x04a8d477ee202adce1682f5902e1160455205b12: Contract (not verified)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0: Contract (not verified)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (L2Pool)
  - 0xc45a479877e1e9dfe9fcd4056c699575a1045daa: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1be1798b70aee431c2986f7ff48d9d1fa350786a: Contract (verified) (AToken)
  - 0x78246294a4c6fbf614ed73ccc9f8b875ca8ee841: Contract (not verified)
  - 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7: Contract (not verified)
  - 0x34e2ed44ef7466d5f9e0b782b5c08b57475e7907: Contract (not verified)
  - 0x5e76e98e0963ecdc6a065d1435f84065b7523f39: Contract (verified) (VariableDebtToken)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x4972F152c975CB4962F79643e938151750E85B2f`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for VariableDebtToken at `0x5E76E98E0963EcDC6A065d1435F84065b7523f39`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for L2RobotKeeper at `0x943AcD0c93d7a8Bee7dA5Fd0DC3d0028237074d6`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AaveV3ARBMAIFixes_20230606 at `0x9441B65EE553F70df9C77d45d3283B6BC24F222d`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0xa136978a2c8a92ec5EacC5179642AA2E1c1Eae18`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for L2Pool at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA` with implementation AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x4972F152c975CB4962F79643e938151750E85B2f`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for VariableDebtToken at `0x5E76E98E0963EcDC6A065d1435F84065b7523f39`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for L2RobotKeeper at `0x943AcD0c93d7a8Bee7dA5Fd0DC3d0028237074d6`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AaveV3ARBMAIFixes_20230606 at `0x9441B65EE553F70df9C77d45d3283B6BC24F222d`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0xa136978a2c8a92ec5EacC5179642AA2E1c1Eae18`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for L2Pool at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA` with implementation AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

</details>
