## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/751af538-10d1-49c3-814d-9f9b3336e145](https://dashboard.tenderly.co/me/simulator/751af538-10d1-49c3-814d-9f9b3336e145)

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
+ "0xc8509acba8447178ab2e8d6ed1071f6d0b6be0fc1bc72eb9bfbbe7fbc10ee8d1"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000093b346b6bc2548da6a1e7d98e9a421b42541425b"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x4161766520417262697472756d20537461626c652044656274204c555344003c"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x737461626c65446562744172624c555344000000000000000000000000000022"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000c2c95b24529664fe55d4437d7a31175cfe6c4f7"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
@@ _reservesCount @@
- 10
+ 11
@@ _maxStableRateBorrowSizePercent @@
- 2500
+ 2500
@@ `_reserves` key `0x93b346b6bc2548da6a1e7d98e9a421b42541425b`.configuration.data @@
- 0
+ 74769074763989551106948646198271117623296

# decoded configuration.data for key `0x93b346b6bc2548da6a1e7d98e9a421b42541425b` (symbol: LUSD)
@@ configuration.data.ltv @@
- 0
+ 0
@@ configuration.data.liquidationThreshold @@
- 0
+ 0
@@ configuration.data.liquidationBonus @@
- 0
+ 0
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
+ 1000
@@ configuration.data.borrowCap @@
- 0
+ 900000
@@ configuration.data.supplyCap @@
- 0
+ 900000
@@ configuration.data.liquidationProtocolFee @@
- 0
+ 0
@@ configuration.data.eModeCategory @@
- 0
+ 0
@@ configuration.data.unbackedMintCap @@
- 0
+ 0
@@ configuration.data.debtCeiling @@
- 0
+ 0

@@ Slot `0x55c53001d0df544c3a6d6fa7010e0b101b0ce7f5c4d0177061aa390617e35e85` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000"
@@ Slot `0x55c53001d0df544c3a6d6fa7010e0b101b0ce7f5c4d0177061aa390617e35e86` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000"
@@ Slot `0x55c53001d0df544c3a6d6fa7010e0b101b0ce7f5c4d0177061aa390617e35e87` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000a000000000000000000000000000000000000000000"
@@ Slot `0x55c53001d0df544c3a6d6fa7010e0b101b0ce7f5c4d0177061aa390617e35e88` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008eb270e296023e9d92081fdf967ddd7878724424"
@@ Slot `0x55c53001d0df544c3a6d6fa7010e0b101b0ce7f5c4d0177061aa390617e35e89` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000003ef10dff4928279c004308ebadc4db8b7620d6fc"
@@ Slot `0x55c53001d0df544c3a6d6fa7010e0b101b0ce7f5c4d0177061aa390617e35e8a` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ce186f6cccb0c955445bb9d10c59cae488fea559"
@@ Slot `0x55c53001d0df544c3a6d6fa7010e0b101b0ce7f5c4d0177061aa390617e35e8b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000c82df96432346cfb632473eb619db3b8ac280234"
@@ Slot `0x76aacc2028d991243e90f9a326795e305ddcc7830dc0c1d3a776810a5954c285` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000093b346b6bc2548da6a1e7d98e9a421b42541425b"
```

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0x2c8ae1174083abe1d724e17223478d8b2700777826f2d3bd01345e87e37548aa` @@
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
+ "0x4161766520417262697472756d204c5553440000000000000000000000000024"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000038` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x614172624c555344000000000000000000000000000000000000000000000010"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000039` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xd06987d0b88b6eb135b91c2c1a3549af71b67a2909a53bc14ef14d73dced11ba"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000053d55f9b5af8694c503eb288a1b7e552f590710"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000093b346b6bc2548da6a1e7d98e9a421b42541425b"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000001be1798b70aee431c2986f7ff48d9d1fa350786a"
```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x0000000000000000000000000000000000000000000000000000000000dbf239"
+ "0x0000000000000000000000000000000000000000000000000000000000dbfd75"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x0000000000000000000000000000000000000000000000002805e3cc5fecfc48"
+ "0x0000000000000000000000000000000000000000000000002805ff05e1710648"
```

```diff
# AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
@@ `assetsSources` key `0x93b346b6bc2548da6a1e7d98e9a421b42541425b` @@
- 0x0000000000000000000000000000000000000000
+ 0x0411d28c94d85a36bc72cb0f875dfa8371d8ffff

```

```diff
# unknown contract name at `0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x0000000000000000000000000000000000000000000000000000000000000009"
+ "0x000000000000000000000000000000000000000000000000000000000000000a"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad7` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000c82df96432346cfb632473eb619db3b8ac280234"
@@ Slot `0x9965d88f8f23facc90714459d1d79c870eb94a66c0a6f803e932c58749350d28` @@
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
+ "0xe6e843ab80e10e529705373c11ee752bd553eefea2ff115e19b043658a8048c4"
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000037` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000093b346b6bc2548da6a1e7d98e9a421b42541425b"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000041"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x7661726961626c65446562744172624c55534400000000000000000000000026"
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000003d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000929ec64c34a17401f460460d4b9390518e5b473e12"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000005e76e98e0963ecdc6a065d1435f84065b7523f39"
@@ Slot `0xbbe3212124853f8b0084a66a2d057c2966e251e132af3691db153ab65f0d1a4d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x4161766520417262697472756d205661726961626c652044656274204c555344"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
    - `AssetSourceUpdated(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, source: 0x0411d28c94d85a36bc72cb0f875dfa8371d8ffff)`
  - unknown contract name at `0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896`
    - `RateStrategyCreated(strategy: 0xc82df96432346cfb632473eb619db3b8ac280234, hashedParam: 0xdfd9bf0bded3d9b867ff70cea02cd6d55b60b7fdc117fbd875742ebd9e0e73d4, params: [object Object])`
  - unknown contract name at `0x8Eb270e296023E9D92081fdF967dDd7878724424`
    - `Initialized(underlyingAsset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, treasury: 0x053d55f9b5af8694c503eb288a1b7e552f590710, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, aTokenDecimals: 18, aTokenName: Aave Arbitrum LUSD, aTokenSymbol: aArbLUSD, params: 0x)`
  - unknown contract name at `0x3EF10DFf4928279c004308EbADc4Db8B7620d6fc`
    - `Initialized(underlyingAsset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Arbitrum Stable Debt LUSD, debtTokenSymbol: stableDebtArbLUSD, params: 0x)`
  - unknown contract name at `0xCE186F6Cccb0c955445bb9d10C59caE488Fea559`
    - `Initialized(underlyingAsset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, pool: 0x794a61358d6845594f94dc1db02a252b5b4814ad, incentivesController: 0x929ec64c34a17401f460460d4b9390518e5b473e, debtTokenDecimals: 18, debtTokenName: Aave Arbitrum Variable Debt LUSD, debtTokenSymbol: variableDebtArbLUSD, params: 0x)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`
    - `ReserveInitialized(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, aToken: 0x8eb270e296023e9d92081fdf967ddd7878724424, stableDebtToken: 0x3ef10dff4928279c004308ebadc4db8b7620d6fc, variableDebtToken: 0xce186f6cccb0c955445bb9d10c59cae488fea559, interestRateStrategyAddress: 0xc82df96432346cfb632473eb619db3b8ac280234)`
    - `SupplyCapChanged(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, oldSupplyCap: 0, newSupplyCap: 900000)`
    - `BorrowCapChanged(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, oldBorrowCap: 0, newBorrowCap: 900000)`
    - `ReserveBorrowing(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, enabled: true)`
    - `ReserveStableRateBorrowing(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, enabled: false)`
    - `BorrowableInIsolationChanged(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, borrowable: false)`
    - `SiloedBorrowingChanged(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, oldState: false, newState: false)`
    - `ReserveFactorChanged(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, oldReserveFactor: 0, newReserveFactor: 1000)`
    - `ReserveFlashLoaning(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, enabled: true)`
    - `EModeAssetCategoryChanged(asset: 0x93b346b6bc2548da6a1e7d98e9a421b42541425b, oldCategoryId: 0, newCategoryId: 0)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 25, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x98Bc9dfA3cEcB37F1bdeadc6e774d39082756B19: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0x98bc9dfa3cecb37f1bdeadc6e774d39082756b19: Contract (verified) (AaveV3ArbListings_20230523_Payload)
  - 0x0efdfc1a940de4e7e6acc9bb801481f81b17fd20: Contract (verified) (AaveV3ConfigEngine)
  - 0x0411d28c94d85a36bc72cb0f875dfa8371d8ffff: Contract (not verified)
  - 0x20cd97619a51d1a6f1910ce62d98aceb9a13d5e6: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb56c2f0b653b2e0b10c9b928c8580ac5df02c7c7: Contract (verified) (AaveOracle)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0xcc47c4fe1f7f29ff31a8b62197023ac8553c7896: Contract (not verified)
  - 0x2feb46e48494356955159b9ed8e795add1e1ad7b: Contract (not verified)
  - 0xc82df96432346cfb632473eb619db3b8ac280234: EOA (verification not applicable)
  - 0x93b346b6bc2548da6a1e7d98e9a421b42541425b: Contract (verified) (ClonableBeaconProxy)
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

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AaveV3ConfigEngine at `0x0EfdfC1A940DE4E7E6acC9Bb801481f81B17fd20`</summary>

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
<summary>View warnings for AccessControlledOffchainAggregator at `0x20CD97619A51d1a6f1910ce62d98Aceb9a13d5e6`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ClonableBeaconProxy at `0x93b346b6BC2548dA6A1E7d98E9a421B42541425b`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV3ArbListings_20230523_Payload at `0x98Bc9dfA3cEcB37F1bdeadc6e774d39082756B19`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "@aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/ProposalPayload.sol:4:1:
  |
4 | import {AaveV2Ethereum} from "@aave-address-book/AaveV2Ethereum.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



```

</details>

<details>
<summary>View warnings for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

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
<summary>View warnings for AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`</summary>

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
<summary>View warnings for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

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
<summary>Slither report for AaveV3ConfigEngine at `0x0EfdfC1A940DE4E7E6acC9Bb801481f81B17fd20`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x0efdfc1a940de4e7e6acc9bb801481f81b17fd20
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x1be1798b70aee431c2986f7ff48d9d1fa350786a
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x20CD97619A51d1a6f1910ce62d98Aceb9a13d5e6`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x20cd97619a51d1a6f1910ce62d98aceb9a13d5e6
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for StandardArbERC20 at `0x3f770Ac673856F105b586bb393d122721265aD46`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x3f770ac673856f105b586bb393d122721265ad46
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for VariableDebtToken at `0x5E76E98E0963EcDC6A065d1435F84065b7523f39`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x5e76e98e0963ecdc6a065d1435f84065b7523f39
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x794a61358d6845594f94dc1db02a252b5b4814ad
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x7d9103572be58ffe99dc390e8246f02dcae6f611
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x8145edddf43f50276641b55bd3ad95944510021e
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for ClonableBeaconProxy at `0x93b346b6BC2548dA6A1E7d98E9a421B42541425b`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x93b346b6bc2548da6a1e7d98e9a421b42541425b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AaveV3ArbListings_20230523_Payload at `0x98Bc9dfA3cEcB37F1bdeadc6e774d39082756B19`</summary>

```
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 90, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 643, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 362, in compile
    solc_standard_json.standalone_compile(filenames, compilation_unit, working_dir=working_dir)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 66, in standalone_compile
    targets_json = run_solc_standard_json(
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 181, in run_solc_standard_json
    raise InvalidCompilation(solc_exception_str)
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "@aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/ProposalPayload.sol:4:1:
  |
4 | import {AaveV2Ethereum} from "@aave-address-book/AaveV2Ethereum.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0x98bc9dfa3cecb37f1bdeadc6e774d39082756b19
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 90, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 643, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 362, in compile
    solc_standard_json.standalone_compile(filenames, compilation_unit, working_dir=working_dir)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 66, in standalone_compile
    targets_json = run_solc_standard_json(
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 181, in run_solc_standard_json
    raise InvalidCompilation(solc_exception_str)
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "@aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/ProposalPayload.sol:4:1:
  |
4 | import {AaveV2Ethereum} from "@aave-address-book/AaveV2Ethereum.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




```

</details>

<details>
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xa97684ead0e402dc232d5a977953df7ecbab3cdb
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xb56c2f0b653b2e0b10c9b928c8580ac5df02c7c7
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for L2Pool at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xe72ba9418b5f2ce0a6a40501fe77c6839aa37333
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

</details>
