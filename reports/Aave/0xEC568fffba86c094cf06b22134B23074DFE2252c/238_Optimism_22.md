## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/8a562ce8-4e9f-4f39-8db7-9ce4ee93cbd2](https://dashboard.tenderly.co/me/simulator/8a562ce8-4e9f-4f39-8db7-9ce4ee93cbd2)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ `s_upkeep` key `"2644198306353233154445573060213895807978508598208963942704092322563145107595"`.balance @@
- 16726350870600878897
+ 16708211051525347165
@@ `s_upkeep` key `"2644198306353233154445573060213895807978508598208963942704092322563145107595"`.lastKeeper @@
- 0xa6101ebd36c861f9da6b3b8f1974882a2faa0830
+ 0xa7f0ccf1d96626baa7e96d8a14a7dc9951412a8d
@@ `s_upkeep` key `"2644198306353233154445573060213895807978508598208963942704092322563145107595"`.amountSpent @@
- 675814990505041103
+ null
@@ `s_upkeep` key `"2644198306353233154445573060213895807978508598208963942704092322563145107595"`.admin @@
- 0xe3fd707583932a99513a5c65c8463de769f5dadf
+ 0x0000000000000000000000000000000000000000

@@ `s_keeperInfo` key `0xa7f0ccf1d96626baa7e96d8a14a7dc9951412a8d`.balance @@
- 46209360793204695709
+ 46227500612280227441

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`
@@ Slot `0x1d70cb806c8648a5cff3f5c8e2359f0ed5c6c17466a16848db13e82a035534b2` @@
- "0x0000b532b800000000000003e800073f7800002625a007d0151229041f401d4c"
+ "0x0000b532b800000000000003e800073f7800002625a007d0851229041f401d4c"
```

```diff
# OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0xf816017d8eaf3301ae3b79413324583871123d6217bd936603360fd4f3fe36b0` @@
- true
+ false

@@ `_actionsSets` key `"22"`.executed @@
- false
+ true

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x8ffDf2DE812095b1D19CB146E4c004587C0A0692` with implementation AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`
@@ lastInitializedRevision @@
- 1
+ 2
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x000000000000000000000000a5ba6e5ec19a1bf23c857991c857db62b2aa187b"
+ "0x000000000000000000000000bcb167bdcf14a8f791d6f4a6edd964aed2f8813b"
```

```diff
# unknown contract name at `0xa5e408678469d23efDB7694b1B0A85BB0669e8bd`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000001"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x00000000000000000000000052a1ceb68ee6b7b5d13e0376a1e0e4423a8ce26e"
+ "0x0000000000000000000000006b4e260b765b3ca1514e618c0215a6b7839ff93e"
```

```diff
# unknown contract name at `0xA8669021776Bc142DfcA87c21b4A52595bCbB40a`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000001"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x00000000000000000000000081387c40eb75acb02757c1ae55d5936e78c9ded3"
+ "0x00000000000000000000000004a8d477ee202adce1682f5902e1160455205b12"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8ffDf2DE812095b1D19CB146E4c004587C0A0692` with implementation AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`
    - `Upgraded(implementation: 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b)`
    - `Initialized(underlyingAsset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, treasury: 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, aTokenDecimals: 18, aTokenName: Aave Optimism MAI, aTokenSymbol: aOptMAI, params: 0x)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`
    - `ATokenUpgraded(asset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, proxy: 0x8ffdf2de812095b1d19cb146e4c004587c0a0692, implementation: 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b)`
    - `StableDebtTokenUpgraded(asset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, proxy: 0xa5e408678469d23efdb7694b1b0a85bb0669e8bd, implementation: 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e)`
    - `VariableDebtTokenUpgraded(asset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, proxy: 0xa8669021776bc142dfca87c21b4a52595bcbb40a, implementation: 0x04a8d477ee202adce1682f5902e1160455205b12)`
    - `ReservePaused(asset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, paused: false)`
    - `ReserveFlashLoaning(asset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, enabled: true)`
  - unknown contract name at `0xa5e408678469d23efDB7694b1B0A85BB0669e8bd`
    - `Upgraded(implementation: 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e)`
    - `Initialized(underlyingAsset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Optimism Stable Debt MAI, debtTokenSymbol: stableDebtOptMAI, params: 0x)`
  - unknown contract name at `0xA8669021776Bc142DfcA87c21b4A52595bCbB40a`
    - `Upgraded(implementation: 0x04a8d477ee202adce1682f5902e1160455205b12)`
    - `Initialized(underlyingAsset: 0xdfa46478f9e5ea86d57387849598dbfb2e964b02, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Optimism Variable Debt MAI, debtTokenSymbol: variableDebtOptMAI, params: 0x)`
  - OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 22, initiatorExecution: 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6, returnedData: 0x)`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `UpkeepPerformed(id: 2644198306353233154445573060213895807978508598208963942704092322563145107595, success: true, from: 0xa7f0ccf1d96626baa7e96d8a14a7dc9951412a8d, payment: 18139819075531732, performData: 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000016)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xa7f0ccf1d96626baa7e96d8a14a7dc9951412a8d: EOA (verification not applicable)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0xe9b80c60a2333dca98c483a8a1efafaf17c5d4ac: Contract (not verified)
  - 0x1c9213dcc6762efdff500a2d3f8df4508b37636a: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x464a1515adc20de946f8d0deb99cead8ceae310d: Contract (not verified)
  - 0xe67a10da53fcd59fae7e47f155c290cb5defb4b0: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x420000000000000000000000000000000000000f: Contract (verified) (OVM_GasPriceOracle)
  - 0xc0d3c0d3c0d3c0d3c0d3c0d3c0d3c0d3c0d3000f: Contract (not verified)
  - 0x4200000000000000000000000000000000000015: Contract (not verified)
  - 0xc0d3c0d3c0d3c0d3c0d3c0d3c0d3c0d3c0d30015: Contract (not verified)
  - 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6: Contract (verified) (L2RobotKeeper)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)
  - 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7: Contract (verified) (AaveV3OPMAIFixes_20230606)
  - 0x8145edddf43f50276641b55bd3ad95944510021e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x29081f7ab5a644716efcdc10d5c926c5fee9f72b: Contract (verified) (PoolConfigurator)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0: Contract (verified) (ConfiguratorLogic)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x764594f8e9757ede877b75716f8077162b251460: Contract (verified) (L2Pool)
  - 0x8ffdf2de812095b1d19cb146e4c004587c0a0692: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (AToken)
  - 0xa5e408678469d23efdb7694b1b0a85bb0669e8bd: Contract (not verified)
  - 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e: Contract (verified) (StableDebtToken)
  - 0xa8669021776bc142dfca87c21b4a52595bcbb40a: Contract (not verified)
  - 0x04a8d477ee202adce1682f5902e1160455205b12: Contract (not verified)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AaveV3OPMAIFixes_20230606 at `0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x1C9213DCC6762EfdFf500a2d3f8Df4508B37636a`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for OVM_GasPriceOracle at `0x420000000000000000000000000000000000000F`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for StableDebtToken (STABLE_DEBT_TOKEN_IMPL) at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for ConfiguratorLogic at `0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0`</summary>

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
<summary>View warnings for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8ffDf2DE812095b1D19CB146E4c004587C0A0692` with implementation AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
<summary>View warnings for AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0xE67a10DA53Fcd59fae7e47F155c290cb5Defb4B0`</summary>

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
<summary>Slither report for AaveV3OPMAIFixes_20230606 at `0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x1C9213DCC6762EfdFf500a2d3f8Df4508B37636a`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for OVM_GasPriceOracle at `0x420000000000000000000000000000000000000F`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for StableDebtToken (STABLE_DEBT_TOKEN_IMPL) at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for ConfiguratorLogic at `0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0`</summary>

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
<summary>Slither report for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8ffDf2DE812095b1D19CB146E4c004587C0A0692` with implementation AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
<summary>Slither report for AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0xE67a10DA53Fcd59fae7e47F155c290cb5Defb4B0`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

</details>
