## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/3fa4f8b3-6ee5-4a0e-9be0-b1d5ff936636](https://dashboard.tenderly.co/me/simulator/3fa4f8b3-6ee5-4a0e-9be0-b1d5ff936636)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# unknown contract name at `0x3EF10DFf4928279c004308EbADc4Db8B7620d6fc`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000035` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x26a33981d213dc3843b98be3e259b06d587db378c3e3a76f928be8098e37aa78"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x4161766520417262697472756d20537461626c6520446562742072455448003c"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x737461626c654465627441726272455448000000000000000000000000000022"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000c2c95b24529664fe55d4437d7a31175cfe6c4f7"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
@@ _maxStableRateBorrowSizePercent @@
- 2500
+ 2500
@@ _reservesCount @@
- 10
+ 11
@@ `_reserves` key `0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8`.configuration.data @@
- 0
+ 5708990770850839467897627767840711253215117056556

# decoded configuration.data for key `0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8` (symbol: rETH)
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
+ 85
@@ configuration.data.supplyCap @@
- 0
+ 325
@@ configuration.data.liquidationProtocolFee @@
- 0
+ 1000
@@ configuration.data.eModeCategory @@
- 0
+ 0
@@ configuration.data.unbackedMintCap @@
- 0
+ 0
@@ configuration.data.debtCeiling @@
- 0
+ 0
@@ configuration.data.flashloaningEnabled @@
- false
+ true

@@ Slot `0x36ce690a3e41633995fb479a7fd89cf51578df5d336828d9f194d6be37a2ee3a` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000"
@@ Slot `0x36ce690a3e41633995fb479a7fd89cf51578df5d336828d9f194d6be37a2ee3b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000"
@@ Slot `0x36ce690a3e41633995fb479a7fd89cf51578df5d336828d9f194d6be37a2ee3c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000a000000000000000000000000000000000000000000"
@@ Slot `0x36ce690a3e41633995fb479a7fd89cf51578df5d336828d9f194d6be37a2ee3d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008eb270e296023e9d92081fdf967ddd7878724424"
@@ Slot `0x36ce690a3e41633995fb479a7fd89cf51578df5d336828d9f194d6be37a2ee3e` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000003ef10dff4928279c004308ebadc4db8b7620d6fc"
@@ Slot `0x36ce690a3e41633995fb479a7fd89cf51578df5d336828d9f194d6be37a2ee3f` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ce186f6cccb0c955445bb9d10c59cae488fea559"
@@ Slot `0x36ce690a3e41633995fb479a7fd89cf51578df5d336828d9f194d6be37a2ee40` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000c82df96432346cfb632473eb619db3b8ac280234"
@@ Slot `0x76aacc2028d991243e90f9a326795e305ddcc7830dc0c1d3a776810a5954c285` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8"
```

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0x93c2fa7e18300a7bb7553012d2c19de90044e08e7726351da9d1a8893c5c8993` @@
- true
+ false

@@ `_actionsSets` key `"25"`.executed @@
- false
+ true

```

```diff
# unknown contract name at `0x8Eb270e296023E9D92081fdF967dDd7878724424`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x4161766520417262697472756d20724554480000000000000000000000000024"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000038` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x6141726272455448000000000000000000000000000000000000000000000010"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000039` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x3c903e271f1338511826c47303f554ccd6b0fa037432ecbcdae21066ab7d14e2"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000053d55f9b5af8694c503eb288a1b7e552f590710"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000001be1798b70aee431c2986f7ff48d9d1fa350786a"
```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x0000000000000000000000000000000000000000000000000000000002075d2d"
+ "0x0000000000000000000000000000000000000000000000000000000002076869"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x000000000000000000000000000000000000000000000000280fcb4dfa39e098"
+ "0x000000000000000000000000000000000000000000000000280fe74ce08f4898"
```

```diff
# AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
@@ `assetsSources` key `0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8` @@
- 0x0000000000000000000000000000000000000000
+ 0x04c28d6fe897859153ea753f986cc249bf064f71

```

```diff
# unknown contract name at `0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x0000000000000000000000000000000000000000000000000000000000000009"
+ "0x000000000000000000000000000000000000000000000000000000000000000a"
@@ Slot `0x316a66ca8f8dc60643a99c790dae2de5ee7f8d02c1c027f54ff97844cfbd5acb` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000c82df96432346cfb632473eb619db3b8ac280234"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad7` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000c82df96432346cfb632473eb619db3b8ac280234"
```

```diff
# unknown contract name at `0xCE186F6Cccb0c955445bb9d10C59caE488Fea559`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000002"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000035` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x7fea505df31887dbf5e9e07d8bea36b3c31fc162159fe0a34daf72dc132bd43a"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000041"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x7661726961626c65446562744172627245544800000000000000000000000026"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000005e76e98e0963ecdc6a065d1435f84065b7523f39"
@@ Slot `0xbbe3212124853f8b0084a66a2d057c2966e251e132af3691db153ab65f0d1a4d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x4161766520417262697472756d205661726961626c6520446562742072455448"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
    - `AssetSourceUpdated(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, source: 0x04c28d6fe897859153ea753f986cc249bf064f71)`
  - unknown contract name at `0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896`
    - `RateStrategyCreated(strategy: 0xc82df96432346cfb632473eb619db3b8ac280234, hashedParam: 0x8bd7198e5057d20afd3b1b802eade0258767903f6eb636f6476e81614e22f849, params: [object Object])`
  - unknown contract name at `0x8Eb270e296023E9D92081fdF967dDd7878724424`
    - `Initialized(underlyingAsset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, treasury: 0x053d55f9b5af8694c503eb288a1b7e552f590710, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, aTokenDecimals: 18, aTokenName: Aave Arbitrum rETH, aTokenSymbol: aArbrETH, params: 0x)`
  - unknown contract name at `0x3EF10DFf4928279c004308EbADc4Db8B7620d6fc`
    - `Initialized(underlyingAsset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Arbitrum Stable Debt rETH, debtTokenSymbol: stableDebtArbrETH, params: 0x)`
  - unknown contract name at `0xCE186F6Cccb0c955445bb9d10C59caE488Fea559`
    - `Initialized(underlyingAsset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Arbitrum Variable Debt rETH, debtTokenSymbol: variableDebtArbrETH, params: 0x)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`
    - `ReserveInitialized(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, aToken: 0x8eb270e296023e9d92081fdf967ddd7878724424, stableDebtToken: 0x3ef10dff4928279c004308ebadc4db8b7620d6fc, variableDebtToken: 0xce186f6cccb0c955445bb9d10c59cae488fea559, interestRateStrategyAddress: 0xc82df96432346cfb632473eb619db3b8ac280234)`
    - `SupplyCapChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, oldSupplyCap: 0, newSupplyCap: 325)`
    - `BorrowCapChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, oldBorrowCap: 0, newBorrowCap: 85)`
    - `ReserveBorrowing(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, enabled: true)`
    - `ReserveStableRateBorrowing(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, enabled: false)`
    - `BorrowableInIsolationChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, borrowable: false)`
    - `SiloedBorrowingChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, oldState: false, newState: false)`
    - `ReserveFactorChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, oldReserveFactor: 0, newReserveFactor: 1500)`
    - `ReserveFlashLoaning(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, enabled: true)`
    - `CollateralConfigurationChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, ltv: 6700, liquidationThreshold: 7400, liquidationBonus: 10750)`
    - `LiquidationProtocolFeeChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, oldFee: 0, newFee: 1000)`
    - `DebtCeilingChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, oldDebtCeiling: 0, newDebtCeiling: 0)`
    - `EModeAssetCategoryChanged(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, oldCategoryId: 0, newCategoryId: 0)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
    - `IsolationModeTotalDebtUpdated(asset: 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8, totalDebt: 0)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 25, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x15066c53340cd87480E3a33046a77EDd4063984F: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0x15066c53340cd87480e3a33046a77edd4063984f: Contract (verified) (AaveV3ArbListings_20230524_Payload)
  - 0x0efdfc1a940de4e7e6acc9bb801481f81b17fd20: Contract (verified) (AaveV3ConfigEngine)
  - 0x04c28d6fe897859153ea753f986cc249bf064f71: Contract (verified) (CLSynchronicityPriceAdapterPegToBase)
  - 0xf3272cafe65b190e76caaf483db13424a3e23dd2: Contract (not verified)
  - 0x0aaafe4278aa9d4514552f2743cbfa5a5bdce04b: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x639fe6ab55c921f74e7fac1ee960c0b6293ba612: Contract (verified) (EACAggregatorProxy)
  - 0x3607e46698d218b3a5cae44bf381475c0a5e2ca7: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb56c2f0b653b2e0b10c9b928c8580ac5df02c7c7: Contract (verified) (AaveOracle)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0xcc47c4fe1f7f29ff31a8b62197023ac8553c7896: Contract (not verified)
  - 0x2feb46e48494356955159b9ed8e795add1e1ad7b: Contract (not verified)
  - 0xc82df96432346cfb632473eb619db3b8ac280234: EOA (verification not applicable)
  - 0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8: Contract (verified) (ClonableBeaconProxy)
  - 0xe72ba9418b5f2ce0a6a40501fe77c6839aa37333: Contract (verified) (UpgradeableBeacon)
  - 0x3f770ac673856f105b586bb393d122721265ad46: Contract (verified) (StandardArbERC20)
  - 0x8145edddf43f50276641b55bd3ad95944510021e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x04a8d477ee202adce1682f5902e1160455205b12: Contract (not verified)
  - 0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0: Contract (not verified)
  - 0x8eb270e296023e9d92081fdf967ddd7878724424: Contract (not verified)
  - 0x1be1798b70aee431c2986f7ff48d9d1fa350786a: Contract (verified) (AToken)
  - 0x3ef10dff4928279c004308ebadc4db8b7620d6fc: Contract (not verified)
  - 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7: Contract (not verified)
  - 0xce186f6cccb0c955445bb9d10c59cae488fea559: Contract (not verified)
  - 0x5e76e98e0963ecdc6a065d1435f84065b7523f39: Contract (verified) (VariableDebtToken)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (L2Pool)
  - 0xd5256981e08492afc543af2a779af989e9f9f7e7: Contract (not verified)
  - 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e: Contract (not verified)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for CLSynchronicityPriceAdapterPegToBase at `0x04c28D6fE897859153eA753f986cc249Bf064f71`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x0AAAFE4278AA9D4514552f2743cBFa5a5Bdce04b`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AaveV3ConfigEngine at `0x0EfdfC1A940DE4E7E6acC9Bb801481f81B17fd20`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AaveV3ArbListings_20230524_Payload at `0x15066c53340cd87480E3a33046a77EDd4063984F`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

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
<summary>View warnings for AccessControlledOffchainAggregator at `0x3607e46698d218B3a5Cae44bF381475C0a5e2ca7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for StandardArbERC20 at `0x3f770Ac673856F105b586bb393d122721265aD46`</summary>

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
<summary>View warnings for EACAggregatorProxy at `0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612`</summary>

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
<summary>View warnings for AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`</summary>

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
<summary>View warnings for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for ClonableBeaconProxy at `0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8`</summary>

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
<summary>Slither report for CLSynchronicityPriceAdapterPegToBase at `0x04c28D6fE897859153eA753f986cc249Bf064f71`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x0AAAFE4278AA9D4514552f2743cBFa5a5Bdce04b`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AaveV3ConfigEngine at `0x0EfdfC1A940DE4E7E6acC9Bb801481f81B17fd20`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AaveV3ArbListings_20230524_Payload at `0x15066c53340cd87480E3a33046a77EDd4063984F`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x3607e46698d218B3a5Cae44bF381475C0a5e2ca7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for StandardArbERC20 at `0x3f770Ac673856F105b586bb393d122721265aD46`</summary>

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
<summary>Slither report for EACAggregatorProxy at `0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612`</summary>

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
<summary>Slither report for AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`</summary>

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
<summary>Slither report for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for ClonableBeaconProxy at `0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

</details>
