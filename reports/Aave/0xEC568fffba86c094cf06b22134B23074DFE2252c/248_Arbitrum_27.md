## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/312591d4-4c79-4675-ada3-3ba4015edb82](https://dashboard.tenderly.co/me/simulator/312591d4-4c79-4675-ada3-3ba4015edb82)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_actionsSets` key `"27"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x841125711484c613b6da8d0fb9c4d92af88bacba4cbba69f52b91784d246d93e` @@
- true
+ false

```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x000000000000000000000000000000000000000000000000000000000120056a"
+ "0x00000000000000000000000000000000000000000000000000000000012010a6"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x000000000000000000000000000000000000000000000000267d545c4ba0c844"
+ "0x000000000000000000000000000000000000000000000000267d6ba687879444"
```

```diff
# AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
@@ `assetsSources` key `0x5979d7b546e38e414f7e9822514be443a4800529` @@
- 0x3105c276558dd4cf7e7be71d73be8d33bd18f211
+ 0x945fd405773973d286de54e44649cc0d9e264f78

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveOracle at `0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7`
    - `AssetSourceUpdated(asset: 0x5979d7b546e38e414f7e9822514be443a4800529, source: 0x945fd405773973d286de54e44649cc0d9e264f78)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 27, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x7fc3FCb14eF04A48Bb0c12f0c39CD74C249c37d8: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0x7fc3fcb14ef04a48bb0c12f0c39cd74c249c37d8: Contract (verified) (AaveV3ArbPriceFeedsUpdate_20230613_Payload)
  - 0x0efdfc1a940de4e7e6acc9bb801481f81b17fd20: Contract (verified) (AaveV3ConfigEngine)
  - 0x945fd405773973d286de54e44649cc0d9e264f78: Contract (not verified)
  - 0xb1552c5e96b312d0bf8b554186f846c40614a540: Contract (not verified)
  - 0xb39bfad6295724e01e079ee3aa78a378eff6deb0: Contract (verified) (AccessControlledOffchainAggregator)
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
<summary>View warnings for AccessControlledOffchainAggregator at `0x3607e46698d218B3a5Cae44bF381475C0a5e2ca7`</summary>

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
<summary>View warnings for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AaveV3ArbPriceFeedsUpdate_20230613_Payload at `0x7fc3FCb14eF04A48Bb0c12f0c39CD74C249c37d8`</summary>

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
<summary>View warnings for AccessControlledOffchainAggregator at `0xb39bfAD6295724E01E079Ee3aa78a378Eff6dEB0`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x3607e46698d218B3a5Cae44bF381475C0a5e2ca7`</summary>

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
<summary>Slither report for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AaveV3ArbPriceFeedsUpdate_20230613_Payload at `0x7fc3FCb14eF04A48Bb0c12f0c39CD74C249c37d8`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0xb39bfAD6295724E01E079Ee3aa78a378Eff6dEB0`</summary>

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
