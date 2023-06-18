## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/0411627e-04a3-42b7-ad55-88d627a871c4](https://dashboard.tenderly.co/me/simulator/0411627e-04a3-42b7-ad55-88d627a871c4)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ `s_upkeep` key `"111517909269514636348543717696303188955558448015882347765009177537012203412379"`.balance @@
- 11281724075663706224
+ 11216245556726065961
@@ `s_upkeep` key `"111517909269514636348543717696303188955558448015882347765009177537012203412379"`.amountSpent @@
- 1458239494327755276
+ null
@@ `s_upkeep` key `"111517909269514636348543717696303188955558448015882347765009177537012203412379"`.admin @@
- 0xe3fd707583932a99513a5c65c8463de769f5dadf
+ 0x0000000000000000000000000000000000000000

@@ `s_keeperInfo` key `0x26b0421f47110d8791015afbb65a3c62c32f5317`.balance @@
- 420585185542426755490
+ 420650664061364395753

```

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_actionsSets` key `"23"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x94fd6897fe045d38f1a74c0be9989143039694fded5622708b0277342b71c09d` @@
- true
+ false

```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x0000000000000000000000000000000000000000000000000000000002946207"
+ "0x000000000000000000000000000000000000000000000000000000000294771c"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x00000000000000000000000000000000000000000000000022984555d3f0e1ce"
+ "0x0000000000000000000000000000000000000000000000002298b6ca43649ace"
```

```diff
# AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
@@ `assetsSources` key `0x5979d7b546e38e414f7e9822514be443a4800529` @@
- 0x230e0321cf38f09e247e50afc7801ea2351fe56f
+ 0x3105c276558dd4cf7e7be71d73be8d33bd18f211

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
    - `AssetSourceUpdated(asset: 0x5979d7b546e38e414f7e9822514be443a4800529, source: 0x3105c276558dd4cf7e7be71d73be8d33bd18f211)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 23, initiatorExecution: 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6, returnedData: 0x)`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `UpkeepPerformed(id: 111517909269514636348543717696303188955558448015882347765009177537012203412379, success: true, from: 0x26b0421f47110d8791015afbb65a3c62c32f5317, payment: 65478518937640263, performData: 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000017)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x80f2c02224a2E548FC67c0bF705eBFA825dd5439: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0x26b0421f47110d8791015afbb65a3c62c32f5317: EOA (verification not applicable)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0x0aaf77e9c3f3ffc4771579af3b4921a740876392: Contract (not verified)
  - 0x4972f152c975cb4962f79643e938151750e85b2f: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb7c8fb1db45007f98a68da0588e1aa524c317f27: Contract (not verified)
  - 0xa136978a2c8a92ec5eacc5179642aa2e1c1eae18: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x000000000000000000000000000000000000006c: Contract (not verified)
  - 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6: Contract (verified) (L2RobotKeeper)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0x80f2c02224a2e548fc67c0bf705ebfa825dd5439: Contract (verified) (AaveV3ArbPriceFeedsUpdate_20230504_Payload)
  - 0x0efdfc1a940de4e7e6acc9bb801481f81b17fd20: Contract (verified) (AaveV3ConfigEngine)
  - 0x3105c276558dd4cf7e7be71d73be8d33bd18f211: Contract (verified) (CLSynchronicityPriceAdapterPegToBase)
  - 0xb523ae262d20a936bc152e6023996e46fdc2a95d: Contract (not verified)
  - 0x0e9b5c79e005a30bf3fbb4d8cccb6b0082ac5a17: Contract (not verified)
  - 0x639fe6ab55c921f74e7fac1ee960c0b6293ba612: Contract (verified) (EACAggregatorProxy)
  - 0x3607e46698d218b3a5cae44bf381475c0a5e2ca7: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb56c2f0b653b2e0b10c9b928c8580ac5df02c7c7: Contract (verified) (AaveOracle)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
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
<summary>View warnings for CLSynchronicityPriceAdapterPegToBase at `0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211`</summary>

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
<summary>View warnings for AccessControlledOffchainAggregator at `0x4972F152c975CB4962F79643e938151750E85B2f`</summary>

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
<summary>View warnings for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

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
<summary>View warnings for AaveV3ArbPriceFeedsUpdate_20230504_Payload at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>View warnings for AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`</summary>

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
<summary>Slither report for CLSynchronicityPriceAdapterPegToBase at `0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x4972F152c975CB4962F79643e938151750E85B2f`</summary>

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
<summary>Slither report for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

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
<summary>Slither report for AaveV3ArbPriceFeedsUpdate_20230504_Payload at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

</details>
