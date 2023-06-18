## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/db7eca5c-ca22-4b6b-9366-1e75e86695ad](https://dashboard.tenderly.co/me/simulator/db7eca5c-ca22-4b6b-9366-1e75e86695ad)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ `s_keeperInfo` key `0x663392b728ce212c50c92e5f4abb09395d4ec377`.balance @@
- 382823805255468854651
+ 382993729482469416650

@@ `s_upkeep` key `"111517909269514636348543717696303188955558448015882347765009177537012203412379"`.balance @@
- 11562502477158689343
+ 11392578250158127344
@@ `s_upkeep` key `"111517909269514636348543717696303188955558448015882347765009177537012203412379"`.lastKeeper @@
- 0x7d8399d23c9b2ad17054b189a81ae7e8ea028247
+ 0x663392b728ce212c50c92e5f4abb09395d4ec377

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
@@ `_reserves` key `0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f`.interestRateStrategyAddress @@
- 0x9b34e3e183c9b0d1a08ff57a8fb59c821616295f
+ 0x8f183ee74c790cb558232a141099b316d6c8ba6e

@@ `_reserves` key `0xd22a58f79e9481d1a88e00c343885a588b34b68b`.interestRateStrategyAddress @@
- 0xa9f3c3cae095527061e6d270dbe163693e6fda9d
+ 0xcbdc7d7984d7ad59434f0b1999d2006898c40f9a

@@ `_reserves` key `0xff970a61a04b1ca14834a43f5de4533ebddb5cc8`.interestRateStrategyAddress @@
- 0x41b66b4b6b4c9dab039d96528d1b88f7baf8c5a4
+ 0xd9d85499449f26d2a2c240defd75314f23920089

```

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_actionsSets` key `"20"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x555c69a15be8cfa8af6454346d9f7d7688bb2853b4edc1505dc183f981b23fa5` @@
- true
+ false

```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x0000000000000000000000000000000000000000000000000000000001ef1d82"
+ "0x0000000000000000000000000000000000000000000000000000000001ef3297"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x0000000000000000000000000000000000000000000000002c7eeaee4f5e131a"
+ "0x0000000000000000000000000000000000000000000000002c7f75901466051a"
```

```diff
# unknown contract name at `0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x0000000000000000000000000000000000000000000000000000000000000006"
+ "0x0000000000000000000000000000000000000000000000000000000000000009"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad4` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000cbdc7d7984d7ad59434f0b1999d2006898c40f9a"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad5` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000d9d85499449f26d2a2c240defd75314f23920089"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad6` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008f183ee74c790cb558232a141099b316d6c8ba6e"
@@ Slot `0xb644a0a170dd57ff7d5a99ce0e81f7efd8f944d708876921c6a45bbff9641e31` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008f183ee74c790cb558232a141099b316d6c8ba6e"
@@ Slot `0xbcdfdf5f00a041b2145b1f4510c8f0f2986ef07068bce68625926859a8cc8984` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000cbdc7d7984d7ad59434f0b1999d2006898c40f9a"
@@ Slot `0xcc6c07ef0aec8038e2182eadfab516f969c12dcbb53bf900673b95dc378c64be` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000d9d85499449f26d2a2c240defd75314f23920089"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - unknown contract name at `0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896`
    - `RateStrategyCreated(strategy: 0xcbdc7d7984d7ad59434f0b1999d2006898c40f9a, hashedParam: 0x605d0fec117e7b039ec0a3c01f3e347338d595cef043a970430858dea8eb95b1, params: [object Object])`
    - `RateStrategyCreated(strategy: 0xd9d85499449f26d2a2c240defd75314f23920089, hashedParam: 0x29d96744e989666f0505d8667f01a9259b8217ad8be844500b6fb18557d75882, params: [object Object])`
    - `RateStrategyCreated(strategy: 0x8f183ee74c790cb558232a141099b316d6c8ba6e, hashedParam: 0x66af48a486af083457f3bc88f390334060301e748797eda3b2a1e19fd64046f9, params: [object Object])`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E`
    - `ReserveInterestRateStrategyChanged(asset: 0xd22a58f79e9481d1a88e00c343885a588b34b68b, oldStrategy: 0xa9f3c3cae095527061e6d270dbe163693e6fda9d, newStrategy: 0xcbdc7d7984d7ad59434f0b1999d2006898c40f9a)`
    - `ReserveInterestRateStrategyChanged(asset: 0xff970a61a04b1ca14834a43f5de4533ebddb5cc8, oldStrategy: 0x41b66b4b6b4c9dab039d96528d1b88f7baf8c5a4, newStrategy: 0xd9d85499449f26d2a2c240defd75314f23920089)`
    - `ReserveInterestRateStrategyChanged(asset: 0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f, oldStrategy: 0x9b34e3e183c9b0d1a08ff57a8fb59c821616295f, newStrategy: 0x8f183ee74c790cb558232a141099b316d6c8ba6e)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 20, initiatorExecution: 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6, returnedData: 0x)`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `UpkeepPerformed(id: 111517909269514636348543717696303188955558448015882347765009177537012203412379, success: true, from: 0x663392b728ce212c50c92e5f4abb09395d4ec377, payment: 169924227000561999, performData: 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000014)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xF4d1352b3E9E99FCa6Aa20F62Fe95192A26C9527: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0x663392b728ce212c50c92e5f4abb09395d4ec377: EOA (verification not applicable)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0x0aaf77e9c3f3ffc4771579af3b4921a740876392: Contract (not verified)
  - 0x4972f152c975cb4962f79643e938151750e85b2f: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb7c8fb1db45007f98a68da0588e1aa524c317f27: Contract (not verified)
  - 0xa136978a2c8a92ec5eacc5179642aa2e1c1eae18: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x000000000000000000000000000000000000006c: Contract (not verified)
  - 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6: Contract (verified) (L2RobotKeeper)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0xf4d1352b3e9e99fca6aa20f62fe95192a26c9527: Contract (verified) (AaveV3ArbitrumUpdate20230510Payload)
  - 0x0efdfc1a940de4e7e6acc9bb801481f81b17fd20: Contract (verified) (AaveV3ConfigEngine)
  - 0xcc47c4fe1f7f29ff31a8b62197023ac8553c7896: Contract (not verified)
  - 0x2feb46e48494356955159b9ed8e795add1e1ad7b: Contract (not verified)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (L2Pool)
  - 0xa9f3c3cae095527061e6d270dbe163693e6fda9d: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0x41b66b4b6b4c9dab039d96528d1b88f7baf8c5a4: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0x9b34e3e183c9b0d1a08ff57a8fb59c821616295f: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0xcbdc7d7984d7ad59434f0b1999d2006898c40f9a: Contract (not verified)
  - 0xd9d85499449f26d2a2c240defd75314f23920089: Contract (not verified)
  - 0x8f183ee74c790cb558232a141099b316d6c8ba6e: Contract (not verified)
  - 0x8145edddf43f50276641b55bd3ad95944510021e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x04a8d477ee202adce1682f5902e1160455205b12: Contract (not verified)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
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
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x41B66b4b6b4c9dab039d96528D1b88f7BAF8C5A4`</summary>

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
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x9b34E3e183c9b0d1a08fF57a8fb59c821616295f`</summary>

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
<summary>View warnings for DefaultReserveInterestRateStrategy at `0xA9F3C3caE095527061e6d270DBE163693e6fda9D`</summary>

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
<summary>View warnings for AaveV3ArbitrumUpdate20230510Payload at `0xF4d1352b3E9E99FCa6Aa20F62Fe95192A26C9527`</summary>

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
<summary>Slither report for AaveV3ConfigEngine at `0x0EfdfC1A940DE4E7E6acC9Bb801481f81B17fd20`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x41B66b4b6b4c9dab039d96528D1b88f7BAF8C5A4`</summary>

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
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x9b34E3e183c9b0d1a08fF57a8fb59c821616295f`</summary>

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
<summary>Slither report for DefaultReserveInterestRateStrategy at `0xA9F3C3caE095527061e6d270DBE163693e6fda9D`</summary>

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
<summary>Slither report for AaveV3ArbitrumUpdate20230510Payload at `0xF4d1352b3E9E99FCa6Aa20F62Fe95192A26C9527`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

</details>
