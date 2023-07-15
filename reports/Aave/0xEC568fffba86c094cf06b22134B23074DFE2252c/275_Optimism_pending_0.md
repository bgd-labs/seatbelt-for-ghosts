## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/6886d9fd-af7e-45a9-906a-c051726c92f6](https://dashboard.tenderly.co/me/simulator/6886d9fd-af7e-45a9-906a-c051726c92f6)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# unknown contract name at `0x724dc807b04555b71ed48a6896b6F41593b8C637`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x41617665204f7074696d69736d20724554480000000000000000000000000024"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000038` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x614f707472455448000000000000000000000000000000000000000000000010"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000039` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xb4e748dce115158cc943a146ad6c239b88fb852a9a7a658f7774e715d46bcae9"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000b2289e329d2f85f1ed31adbb30ea345278f21bcf"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000009bcef72be871e61ed4fbbc7630889bee758eb81d"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000bcb167bdcf14a8f791d6f4a6edd964aed2f8813b"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`
@@ _maxStableRateBorrowSizePercent @@
- 2500
+ 2500
@@ _reservesCount @@
- 12
+ 13
@@ `_reserves` key `0x9bcef72be871e61ed4fbbc7630889bee758eb81d`.configuration.data @@
- 0
+ 753997829084744594142939992135143641673271702198828

# decoded configuration.data for key `0x9bcef72be871e61ed4fbbc7630889bee758eb81d` (symbol: rETH)
@@ configuration.data.ltv @@
- 0
+ 6700
@@ configuration.data.liquidationThreshold @@
- 0
+ 7400
@@ configuration.data.liquidationBonus @@
- 0
+ 10750
@@ configuration.data.decimals @@
- 0
+ 18
@@ configuration.data.active @@
- false
+ true
@@ configuration.data.borrowingEnabled @@
- false
+ true
@@ configuration.data.reserveFactor @@
- 0
+ 1500
@@ configuration.data.borrowCap @@
- 0
+ 720
@@ configuration.data.supplyCap @@
- 0
+ 6000
@@ configuration.data.liquidationProtocolFee @@
- 0
+ 1000
@@ configuration.data.eModeCategory @@
- 0
+ 2
@@ configuration.data.unbackedMintCap @@
- 0
+ 0
@@ configuration.data.debtCeiling @@
- 0
+ 0
@@ configuration.data.flashloaningEnabled @@
- false
+ true

@@ Slot `0x8cee8bbd821b6580e77e2af658f032b95735f4513ee645cc11dcce6d3c18cc5c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000"
@@ Slot `0x8cee8bbd821b6580e77e2af658f032b95735f4513ee645cc11dcce6d3c18cc5d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000"
@@ Slot `0x8cee8bbd821b6580e77e2af658f032b95735f4513ee645cc11dcce6d3c18cc5e` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000c000000000000000000000000000000000000000000"
@@ Slot `0x8cee8bbd821b6580e77e2af658f032b95735f4513ee645cc11dcce6d3c18cc5f` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000724dc807b04555b71ed48a6896b6f41593b8c637"
@@ Slot `0x8cee8bbd821b6580e77e2af658f032b95735f4513ee645cc11dcce6d3c18cc60` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000dc1fad70953bb3918592b6fcc374fe05f5811b6a"
@@ Slot `0x8cee8bbd821b6580e77e2af658f032b95735f4513ee645cc11dcce6d3c18cc61` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000f611aeb5013fd2c0511c9cd55c7dc5c1140741a6"
@@ Slot `0x8cee8bbd821b6580e77e2af658f032b95735f4513ee645cc11dcce6d3c18cc62` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000003b57b081da6af5e2759a57bd3211932cb6176997"
@@ Slot `0x92d84fededc02335b4a53878577884cac3dba8d31e2d3d7ceaf95b0eca339acf` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000009bcef72be871e61ed4fbbc7630889bee758eb81d"
```

```diff
# OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_actionsSets` key `"26"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x74d9a9584c2349cd8f24a6310474c42539aff2e612d5044aea255abd5f408fd4` @@
- true
+ false

```

```diff
# AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`
@@ `assetsSources` key `0x9bcef72be871e61ed4fbbc7630889bee758eb81d` @@
- 0x0000000000000000000000000000000000000000
+ 0x52d5f9f884ca21c27e2100735d793c6771eab793

```

```diff
# unknown contract name at `0xDC1fad70953Bb3918592b6fCc374fe05F5811B6a`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000035` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xf71956f77256eaf9b97e6fe5e241634edf4b2af4b2c83bc96dcdf15d6bc16487"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000009bcef72be871e61ed4fbbc7630889bee758eb81d"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x41617665204f7074696d69736d20537461626c6520446562742072455448003c"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x737461626c65446562744f707472455448000000000000000000000000000022"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000006b4e260b765b3ca1514e618c0215a6b7839ff93e"
```

```diff
# unknown contract name at `0xDd81E6F85358292075B78fc8D5830BE8434aF8BA`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x0000000000000000000000000000000000000000000000000000000000000009"
+ "0x000000000000000000000000000000000000000000000000000000000000000a"
@@ Slot `0x316a66ca8f8dc60643a99c790dae2de5ee7f8d02c1c027f54ff97844cfbd5acb` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000003b57b081da6af5e2759a57bd3211932cb6176997"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad7` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000003b57b081da6af5e2759a57bd3211932cb6176997"
```

```diff
# unknown contract name at `0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000035` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xdd39c0ad179d540f4a85683667eb325d8ae643e202d301047bcab827bd1e2a95"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000009bcef72be871e61ed4fbbc7630889bee758eb81d"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000041"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x7661726961626c65446562744f70747245544800000000000000000000000026"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000004a8d477ee202adce1682f5902e1160455205b12"
@@ Slot `0xbbe3212124853f8b0084a66a2d057c2966e251e132af3691db153ab65f0d1a4d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x41617665204f7074696d69736d205661726961626c6520446562742072455448"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`
    - `AssetSourceUpdated(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, source: 0x52d5f9f884ca21c27e2100735d793c6771eab793)`
  - unknown contract name at `0xDd81E6F85358292075B78fc8D5830BE8434aF8BA`
    - `RateStrategyCreated(strategy: 0x3b57b081da6af5e2759a57bd3211932cb6176997, hashedParam: 0x8bd7198e5057d20afd3b1b802eade0258767903f6eb636f6476e81614e22f849, params: [object Object])`
  - unknown contract name at `0x724dc807b04555b71ed48a6896b6F41593b8C637`
    - `Initialized(underlyingAsset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, treasury: 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, aTokenDecimals: 18, aTokenName: Aave Optimism rETH, aTokenSymbol: aOptrETH, params: 0x)`
  - unknown contract name at `0xDC1fad70953Bb3918592b6fCc374fe05F5811B6a`
    - `Initialized(underlyingAsset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Optimism Stable Debt rETH, debtTokenSymbol: stableDebtOptrETH, params: 0x)`
  - unknown contract name at `0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6`
    - `Initialized(underlyingAsset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Optimism Variable Debt rETH, debtTokenSymbol: variableDebtOptrETH, params: 0x)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`
    - `ReserveInitialized(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, aToken: 0x724dc807b04555b71ed48a6896b6f41593b8c637, stableDebtToken: 0xdc1fad70953bb3918592b6fcc374fe05f5811b6a, variableDebtToken: 0xf611aeb5013fd2c0511c9cd55c7dc5c1140741a6, interestRateStrategyAddress: 0x3b57b081da6af5e2759a57bd3211932cb6176997)`
    - `SupplyCapChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, oldSupplyCap: 0, newSupplyCap: 6000)`
    - `BorrowCapChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, oldBorrowCap: 0, newBorrowCap: 720)`
    - `ReserveBorrowing(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, enabled: true)`
    - `ReserveStableRateBorrowing(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, enabled: false)`
    - `BorrowableInIsolationChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, borrowable: false)`
    - `SiloedBorrowingChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, oldState: false, newState: false)`
    - `ReserveFactorChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, oldReserveFactor: 0, newReserveFactor: 1500)`
    - `ReserveFlashLoaning(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, enabled: true)`
    - `CollateralConfigurationChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, ltv: 6700, liquidationThreshold: 7400, liquidationBonus: 10750)`
    - `LiquidationProtocolFeeChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, oldFee: 0, newFee: 1000)`
    - `DebtCeilingChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, oldDebtCeiling: 0, newDebtCeiling: 0)`
    - `EModeAssetCategoryChanged(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, oldCategoryId: 0, newCategoryId: 2)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`
    - `IsolationModeTotalDebtUpdated(asset: 0x9bcef72be871e61ed4fbbc7630889bee758eb81d, totalDebt: 0)`
  - OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 26, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x853844459106feefd8C7C4cC34066bFBC0531722: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)
  - 0x853844459106feefd8c7c4cc34066bfbc0531722: Contract (verified) (AaveV3OPListings_20230710_Payload)
  - 0x7a9a9c14b35e58ffa1cc84ab421ace0fdcd289e3: Contract (verified) (AaveV3ConfigEngine)
  - 0x52d5f9f884ca21c27e2100735d793c6771eab793: Contract (not verified)
  - 0x22f3727be377781d1579b7c9222382b21c9d1a8f: Contract (not verified)
  - 0xa57074aca7fca1a3ce8e79ecfe31c2c11be80982: Contract (not verified)
  - 0x13e3ee699d1909e989722e753853ae30b17e08c5: Contract (verified) (EACAggregatorProxy)
  - 0x02f5e9e9dcc66ba6392f6904d5fcf8625d9b19c9: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xd81eb3728a631871a7ebbad631b5f424909f0c77: Contract (verified) (AaveOracle)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0xdd81e6f85358292075b78fc8d5830be8434af8ba: Contract (not verified)
  - 0x85fb6dff5f59695d77cc61898e60d040165b1923: Contract (verified) (V3RateStrategyFactory)
  - 0x3b57b081da6af5e2759a57bd3211932cb6176997: EOA (verification not applicable)
  - 0x9bcef72be871e61ed4fbbc7630889bee758eb81d: Contract (verified) (L2StandardERC20)
  - 0x8145edddf43f50276641b55bd3ad95944510021e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x29081f7ab5a644716efcdc10d5c926c5fee9f72b: Contract (verified) (PoolConfigurator)
  - 0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0: Contract (verified) (ConfiguratorLogic)
  - 0x724dc807b04555b71ed48a6896b6f41593b8c637: Contract (not verified)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (AToken)
  - 0xdc1fad70953bb3918592b6fcc374fe05f5811b6a: Contract (not verified)
  - 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e: Contract (verified) (StableDebtToken)
  - 0xf611aeb5013fd2c0511c9cd55c7dc5c1140741a6: Contract (not verified)
  - 0x04a8d477ee202adce1682f5902e1160455205b12: Contract (not verified)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x764594f8e9757ede877b75716f8077162b251460: Contract (verified) (L2Pool)
  - 0xd5256981e08492afc543af2a779af989e9f9f7e7: Contract (not verified)
  - 0xd9ca4878dd38b021583c1b669905592eae76e044: Contract (verified) (AaveProtocolDataProvider)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x02f5E9e9dcc66ba6392f6904D5Fcf8625d9B19C9`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0x13e3Ee699D1909E989722E753853AE30b17e08c5`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for StableDebtToken (STABLE_DEBT_TOKEN_IMPL) at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for ConfiguratorLogic at `0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0-ConfiguratorLogic' running
WARNING:CryticCompile:Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol:23:15:
   |
23 |   constructor(address admin) {
   |               ^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol:39:3:
   |
39 |   function admin() external ifAdmin returns (address) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol:11:1:
   |
11 | contract InitializableUpgradeabilityProxy is BaseUpgradeabilityProxy {
   | ^ (Relevant source part starts here and spans across multiple lines).
Note: The payable fallback function is defined here.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol:17:3:
   |
17 |   fallback() external payable {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol:16:1:
   |
16 | contract BaseImmutableAdminUpgradeabilityProxy is BaseUpgradeabilityProxy {
   | ^ (Relevant source part starts here and spans across multiple lines).
Note: The payable fallback function is defined here.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol:17:3:
   |
17 |   fallback() external payable {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol:13:1:
   |
13 | contract InitializableImmutableAdminUpgradeabilityProxy is
   | ^ (Relevant source part starts here and spans across multiple lines).
Note: The payable fallback function is defined here.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol:17:3:
   |
17 |   fallback() external payable {
   |   ^ (Relevant source part starts here and spans across multiple lines).



```

</details>

<details>
<summary>View warnings for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for AaveV3ConfigEngine at `0x7A9A9c14B35E58ffa1cC84aB421acE0FdcD289E3`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for AaveV3OPListings_20230710_Payload at `0x853844459106feefd8C7C4cC34066bFBC0531722`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x853844459106feefd8c7c4cc34066bfbc0531722-DefaultReserveInterestRateStrategy' running
```

</details>

<details>
<summary>View warnings for V3RateStrategyFactory at `0x85FB6dff5F59695d77cc61898e60D040165b1923`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for L2StandardERC20 at `0x9Bcef72be871e61ED4fBbc7630889beE758eb81D`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

<details>
<summary>View warnings for AaveProtocolDataProvider at `0xd9Ca4878dd38B021583c1B669905592EAe76E044`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

</details>

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x02f5E9e9dcc66ba6392f6904D5Fcf8625d9B19C9`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x02f5e9e9dcc66ba6392f6904d5fcf8625d9b19c9
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for EACAggregatorProxy at `0x13e3Ee699D1909E989722E753853AE30b17e08c5`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x13e3ee699d1909e989722e753853ae30b17e08c5
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x29081f7ab5a644716efcdc10d5c926c5fee9f72b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for StableDebtToken (STABLE_DEBT_TOKEN_IMPL) at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for ConfiguratorLogic at `0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0-ConfiguratorLogic' running
Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol:23:15:
   |
23 |   constructor(address admin) {
   |               ^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol:39:3:
   |
39 |   function admin() external ifAdmin returns (address) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol:11:1:
   |
11 | contract InitializableUpgradeabilityProxy is BaseUpgradeabilityProxy {
   | ^ (Relevant source part starts here and spans across multiple lines).
Note: The payable fallback function is defined here.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol:17:3:
   |
17 |   fallback() external payable {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol:16:1:
   |
16 | contract BaseImmutableAdminUpgradeabilityProxy is BaseUpgradeabilityProxy {
   | ^ (Relevant source part starts here and spans across multiple lines).
Note: The payable fallback function is defined here.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol:17:3:
   |
17 |   fallback() external payable {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
  --> lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol:13:1:
   |
13 | contract InitializableImmutableAdminUpgradeabilityProxy is
   | ^ (Relevant source part starts here and spans across multiple lines).
Note: The payable fallback function is defined here.
  --> lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol:17:3:
   |
17 |   fallback() external payable {
   |   ^ (Relevant source part starts here and spans across multiple lines).



INFO:Detectors:
InitializableUpgradeabilityProxy.initialize(address,bytes) (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#20-28) uses delegatecall to a input-controlled function id
	- (success) = _logic.delegatecall(_data) (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#25)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#controlled-delegatecall
INFO:Detectors:
ConfiguratorLogic.executeUpdateAToken(IPool,ConfiguratorInputTypes.UpdateATokenInput) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#130-153) ignores return value by (decimals) = cachedPool.getConfiguration(input.asset).getParams() (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#136)
ConfiguratorLogic.executeUpdateStableDebtToken(IPool,ConfiguratorInputTypes.UpdateDebtTokenInput) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#161-191) ignores return value by (decimals) = cachedPool.getConfiguration(input.asset).getParams() (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#167)
ConfiguratorLogic.executeUpdateVariableDebtToken(IPool,ConfiguratorInputTypes.UpdateDebtTokenInput) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#199-229) ignores return value by (decimals) = cachedPool.getConfiguration(input.asset).getParams() (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#205)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
BaseImmutableAdminUpgradeabilityProxy.constructor(address).admin (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#23) shadows:
	- BaseImmutableAdminUpgradeabilityProxy.admin() (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#39-41) (function)
InitializableImmutableAdminUpgradeabilityProxy.constructor(address).admin (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol#21) shadows:
	- BaseImmutableAdminUpgradeabilityProxy.admin() (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#39-41) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
InitializableUpgradeabilityProxy.initialize(address,bytes)._logic (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#20) lacks a zero-check on :
		- (success) = _logic.delegatecall(_data) (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#25)
BaseImmutableAdminUpgradeabilityProxy.upgradeToAndCall(address,bytes).newImplementation (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#70) lacks a zero-check on :
		- (success) = newImplementation.delegatecall(data) (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#74)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-zero-address-validation
INFO:Detectors:
Modifier BaseImmutableAdminUpgradeabilityProxy.ifAdmin() (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#27-33) does not always execute _; or revertReference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-modifier
INFO:Detectors:
Reentrancy in ConfiguratorLogic.executeInitReserve(IPool,ConfiguratorInputTypes.InitReserveInput) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#50-122):
	External calls:
	- aTokenProxyAddress = _initTokenWithProxy(input.aTokenImpl,abi.encodeWithSelector(IInitializableAToken.initialize.selector,pool,input.treasury,input.underlyingAsset,input.incentivesController,input.underlyingAssetDecimals,input.aTokenName,input.aTokenSymbol,input.params)) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#54-67)
		- proxy.initialize(implementation,initParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#245)
	- stableDebtTokenProxyAddress = _initTokenWithProxy(input.stableDebtTokenImpl,abi.encodeWithSelector(IInitializableDebtToken.initialize.selector,pool,input.underlyingAsset,input.incentivesController,input.underlyingAssetDecimals,input.stableDebtTokenName,input.stableDebtTokenSymbol,input.params)) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#69-81)
		- proxy.initialize(implementation,initParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#245)
	- variableDebtTokenProxyAddress = _initTokenWithProxy(input.variableDebtTokenImpl,abi.encodeWithSelector(IInitializableDebtToken.initialize.selector,pool,input.underlyingAsset,input.incentivesController,input.underlyingAssetDecimals,input.variableDebtTokenName,input.variableDebtTokenSymbol,input.params)) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#83-95)
		- proxy.initialize(implementation,initParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#245)
	- pool.initReserve(input.underlyingAsset,aTokenProxyAddress,stableDebtTokenProxyAddress,variableDebtTokenProxyAddress,input.interestRateStrategyAddress) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#97-103)
	- pool.setConfiguration(input.underlyingAsset,currentConfig) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#113)
	Event emitted after the call(s):
	- ReserveInitialized(input.underlyingAsset,aTokenProxyAddress,stableDebtTokenProxyAddress,variableDebtTokenProxyAddress,input.interestRateStrategyAddress) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#115-121)
Reentrancy in ConfiguratorLogic.executeUpdateAToken(IPool,ConfiguratorInputTypes.UpdateATokenInput) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#130-153):
	External calls:
	- _upgradeTokenImplementation(reserveData.aTokenAddress,input.implementation,encodedCall) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#150)
		- proxy.upgradeToAndCall(implementation,initParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#266)
	Event emitted after the call(s):
	- ATokenUpgraded(input.asset,reserveData.aTokenAddress,input.implementation) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#152)
Reentrancy in ConfiguratorLogic.executeUpdateStableDebtToken(IPool,ConfiguratorInputTypes.UpdateDebtTokenInput) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#161-191):
	External calls:
	- _upgradeTokenImplementation(reserveData.stableDebtTokenAddress,input.implementation,encodedCall) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#180-184)
		- proxy.upgradeToAndCall(implementation,initParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#266)
	Event emitted after the call(s):
	- StableDebtTokenUpgraded(input.asset,reserveData.stableDebtTokenAddress,input.implementation) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#186-190)
Reentrancy in ConfiguratorLogic.executeUpdateVariableDebtToken(IPool,ConfiguratorInputTypes.UpdateDebtTokenInput) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#199-229):
	External calls:
	- _upgradeTokenImplementation(reserveData.variableDebtTokenAddress,input.implementation,encodedCall) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#218-222)
		- proxy.upgradeToAndCall(implementation,initParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#266)
	Event emitted after the call(s):
	- VariableDebtTokenUpgraded(input.asset,reserveData.variableDebtTokenAddress,input.implementation) (lib/aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol#224-228)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
Address.isContract(address) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#25-36) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#32-34)
BaseUpgradeabilityProxy._implementation() (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol#32-38) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol#35-37)
BaseUpgradeabilityProxy._setImplementation(address) (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol#53-65) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol#62-64)
Proxy._delegate(address) (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol#32-56) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol#34-55)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
Address.sendValue(address,uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#54-60) is never used and should be removed
ReserveConfiguration.getActive(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#183-185) is never used and should be removed
ReserveConfiguration.getBorrowCap(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#383-387) is never used and should be removed
ReserveConfiguration.getBorrowableInIsolation(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#254-258) is never used and should be removed
ReserveConfiguration.getBorrowingEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#306-310) is never used and should be removed
ReserveConfiguration.getCaps(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#601-610) is never used and should be removed
ReserveConfiguration.getDebtCeiling(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#433-437) is never used and should be removed
ReserveConfiguration.getDecimals(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#161-165) is never used and should be removed
ReserveConfiguration.getEModeCategory(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#516-520) is never used and should be removed
ReserveConfiguration.getFlags(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#556-568) is never used and should be removed
ReserveConfiguration.getFlashLoanEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#541-545) is never used and should be removed
ReserveConfiguration.getFrozen(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#203-205) is never used and should be removed
ReserveConfiguration.getLiquidationBonus(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#136-140) is never used and should be removed
ReserveConfiguration.getLiquidationProtocolFee(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#463-468) is never used and should be removed
ReserveConfiguration.getLiquidationThreshold(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#109-113) is never used and should be removed
ReserveConfiguration.getLtv(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#84-86) is never used and should be removed
ReserveConfiguration.getPaused(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#223-225) is never used and should be removed
ReserveConfiguration.getReserveFactor(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#358-362) is never used and should be removed
ReserveConfiguration.getSiloedBorrowing(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#281-285) is never used and should be removed
ReserveConfiguration.getStableRateBorrowingEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#331-335) is never used and should be removed
ReserveConfiguration.getSupplyCap(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#408-412) is never used and should be removed
ReserveConfiguration.getUnbackedMintCap(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#491-495) is never used and should be removed
ReserveConfiguration.setBorrowCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#369-376) is never used and should be removed
ReserveConfiguration.setBorrowableInIsolation(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#236-243) is never used and should be removed
ReserveConfiguration.setBorrowingEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#292-299) is never used and should be removed
ReserveConfiguration.setDebtCeiling(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#419-426) is never used and should be removed
ReserveConfiguration.setEModeCategory(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#502-509) is never used and should be removed
ReserveConfiguration.setFlashLoanEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#527-534) is never used and should be removed
ReserveConfiguration.setLiquidationBonus(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#120-129) is never used and should be removed
ReserveConfiguration.setLiquidationProtocolFee(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#444-456) is never used and should be removed
ReserveConfiguration.setLiquidationThreshold(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#93-102) is never used and should be removed
ReserveConfiguration.setLtv(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#73-77) is never used and should be removed
ReserveConfiguration.setReserveFactor(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#342-351) is never used and should be removed
ReserveConfiguration.setSiloedBorrowing(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#266-273) is never used and should be removed
ReserveConfiguration.setStableRateBorrowingEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#317-324) is never used and should be removed
ReserveConfiguration.setSupplyCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#394-401) is never used and should be removed
ReserveConfiguration.setUnbackedMintCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#475-484) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#54-60):
	- (success) = recipient.call{value: amount}() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#58)
Low level call in InitializableUpgradeabilityProxy.initialize(address,bytes) (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#20-28):
	- (success) = _logic.delegatecall(_data) (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#25)
Low level call in BaseImmutableAdminUpgradeabilityProxy.upgradeToAndCall(address,bytes) (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#69-76):
	- (success) = newImplementation.delegatecall(data) (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#74)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Parameter InitializableUpgradeabilityProxy.initialize(address,bytes)._logic (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#20) is not in mixedCase
Parameter InitializableUpgradeabilityProxy.initialize(address,bytes)._data (lib/aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol#20) is not in mixedCase
Function IPool.ADDRESSES_PROVIDER() (lib/aave-v3-core/contracts/interfaces/IPool.sol#621) is not in mixedCase
Function IPool.MAX_STABLE_RATE_BORROW_SIZE_PERCENT() (lib/aave-v3-core/contracts/interfaces/IPool.sol#684) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TOTAL() (lib/aave-v3-core/contracts/interfaces/IPool.sol#690) is not in mixedCase
Function IPool.BRIDGE_PROTOCOL_FEE() (lib/aave-v3-core/contracts/interfaces/IPool.sol#696) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TO_PROTOCOL() (lib/aave-v3-core/contracts/interfaces/IPool.sol#702) is not in mixedCase
Function IPool.MAX_NUMBER_RESERVES() (lib/aave-v3-core/contracts/interfaces/IPool.sol#708) is not in mixedCase
Variable BaseImmutableAdminUpgradeabilityProxy._admin (lib/aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol#17) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0 analyzed (16 contracts with 82 detectors), 66 result(s) found
```

</details>

<details>
<summary>Slither report for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x764594f8e9757ede877b75716f8077162b251460
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x794a61358d6845594f94dc1db02a252b5b4814ad
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for AaveV3ConfigEngine at `0x7A9A9c14B35E58ffa1cC84aB421acE0FdcD289E3`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x7a9a9c14b35e58ffa1cc84ab421ace0fdcd289e3
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x7d9103572be58ffe99dc390e8246f02dcae6f611
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x8145edddf43f50276641b55bd3ad95944510021e
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for AaveV3OPListings_20230710_Payload at `0x853844459106feefd8C7C4cC34066bFBC0531722`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x853844459106feefd8c7c4cc34066bfbc0531722-DefaultReserveInterestRateStrategy' running
INFO:Detectors:
DefaultReserveInterestRateStrategy.calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256).vars (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#182) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).baseVariableBorrowRate (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#60) shadows:
	- DefaultReserveInterestRateStrategy.baseVariableBorrowRate() (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#92-94) (function)
	- IReserveInterestRateStrategy.baseVariableBorrowRate() (lib/protocol-v2/contracts/interfaces/IReserveInterestRateStrategy.sol#10) (function)
DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).variableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#61) shadows:
	- DefaultReserveInterestRateStrategy.variableRateSlope1() (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#76-78) (function)
DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).variableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#62) shadows:
	- DefaultReserveInterestRateStrategy.variableRateSlope2() (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#80-82) (function)
DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).stableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#63) shadows:
	- DefaultReserveInterestRateStrategy.stableRateSlope1() (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#84-86) (function)
DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).stableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#64) shadows:
	- DefaultReserveInterestRateStrategy.stableRateSlope2() (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#88-90) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
PercentageMath.percentDiv(uint256,uint256) (lib/protocol-v2/contracts/protocol/libraries/math/PercentageMath.sol#43-53) is never used and should be removed
SafeMath.div(uint256,uint256) (lib/protocol-v2/contracts/dependencies/openzeppelin/contracts/SafeMath.sol#101-103) is never used and should be removed
SafeMath.div(uint256,uint256,string) (lib/protocol-v2/contracts/dependencies/openzeppelin/contracts/SafeMath.sol#116-127) is never used and should be removed
SafeMath.mod(uint256,uint256) (lib/protocol-v2/contracts/dependencies/openzeppelin/contracts/SafeMath.sol#140-142) is never used and should be removed
SafeMath.mod(uint256,uint256,string) (lib/protocol-v2/contracts/dependencies/openzeppelin/contracts/SafeMath.sol#155-162) is never used and should be removed
SafeMath.mul(uint256,uint256) (lib/protocol-v2/contracts/dependencies/openzeppelin/contracts/SafeMath.sol#76-88) is never used and should be removed
WadRayMath.halfRay() (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#39-41) is never used and should be removed
WadRayMath.halfWad() (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#46-48) is never used and should be removed
WadRayMath.rayToWad(uint256) (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#117-123) is never used and should be removed
WadRayMath.wad() (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#32-34) is never used and should be removed
WadRayMath.wadDiv(uint256,uint256) (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#72-79) is never used and should be removed
WadRayMath.wadMul(uint256,uint256) (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#56-64) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Variable DefaultReserveInterestRateStrategy.OPTIMAL_UTILIZATION_RATE (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#30) is not in mixedCase
Variable DefaultReserveInterestRateStrategy.EXCESS_UTILIZATION_RATE (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#38) is not in mixedCase
Variable DefaultReserveInterestRateStrategy._baseVariableBorrowRate (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#43) is not in mixedCase
Variable DefaultReserveInterestRateStrategy._variableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#46) is not in mixedCase
Variable DefaultReserveInterestRateStrategy._variableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#49) is not in mixedCase
Variable DefaultReserveInterestRateStrategy._stableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#52) is not in mixedCase
Variable DefaultReserveInterestRateStrategy._stableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#55) is not in mixedCase
Constant WadRayMath.halfWAD (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#14) is not in UPPER_CASE_WITH_UNDERSCORES
Constant WadRayMath.halfRAY (lib/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#17) is not in UPPER_CASE_WITH_UNDERSCORES
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Variable DefaultReserveInterestRateStrategy._stableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#52) is too similar to DefaultReserveInterestRateStrategy._stableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#55)
Variable DefaultReserveInterestRateStrategy._variableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#46) is too similar to DefaultReserveInterestRateStrategy._variableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#49)
Variable DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).stableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#63) is too similar to DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).stableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#64)
Variable DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).variableRateSlope1 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#61) is too similar to DefaultReserveInterestRateStrategy.constructor(ILendingPoolAddressesProvider,uint256,uint256,uint256,uint256,uint256,uint256).variableRateSlope2 (lib/protocol-v2/contracts/protocol/lendingpool/DefaultReserveInterestRateStrategy.sol#62)
Variable Errors.LP_INCONSISTENT_FLASHLOAN_PARAMS (lib/protocol-v2/contracts/protocol/libraries/helpers/Errors.sol#55) is too similar to Errors.VL_INCONSISTENT_FLASHLOAN_PARAMS (lib/protocol-v2/contracts/protocol/libraries/helpers/Errors.sol#100)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#variable-names-too-similar
INFO:Slither:0x853844459106feefd8c7c4cc34066bfbc0531722 analyzed (9 contracts with 82 detectors), 32 result(s) found
```

</details>

<details>
<summary>Slither report for V3RateStrategyFactory at `0x85FB6dff5F59695d77cc61898e60D040165b1923`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x85fb6dff5f59695d77cc61898e60d040165b1923
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for L2StandardERC20 at `0x9Bcef72be871e61ED4fBbc7630889beE758eb81D`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x9bcef72be871e61ed4fbbc7630889bee758eb81d
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0xa97684ead0e402dc232d5a977953df7ecbab3cdb
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0xd81eb3728a631871a7ebbad631b5f424909f0c77
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

<details>
<summary>Slither report for AaveProtocolDataProvider at `0xd9Ca4878dd38B021583c1B669905592EAe76E044`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0xd9ca4878dd38b021583c1b669905592eae76e044
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

```

</details>

</details>
