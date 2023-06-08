## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/41f9398c-a1ff-43c4-bdfb-a68017d2cd2b](https://dashboard.tenderly.co/me/simulator/41f9398c-a1ff-43c4-bdfb-a68017d2cd2b)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
@@ `s_upkeep` key `"59004534399919487726050348266959936260154145654847903814887020424644065605379"`.lastKeeper @@
- 0xd7260522aa6ad6e755bc80f753e084c8931aca43
+ 0xd1be7fce9c87f22e3715d257fce92f7595018b67

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`
@@ `_reserves` key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`.interestRateStrategyAddress @@
- 0x553b64567de5392f6b189f6ac89581342dad12f9
+ 0x78fe5d0427e669ba9f964c3495ff381a805a0487

@@ `_reserves` key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6`.interestRateStrategyAddress @@
- 0xd10e8a63ec6cfc6fe74b369d29d2765944d23505
+ 0x142dcaec322aaa25141b2597bf348487adbd596d

@@ `_reserves` key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619`.interestRateStrategyAddress @@
- 0xcdac94de1cf4e8e25b6c61df6481c344c5e88f44
+ 0x492dcef1fc5253413fc5576b9522840a1a774dce

@@ `_reserves` key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f`.interestRateStrategyAddress @@
- 0xe7a516f340a3f794a3b2fd0f74a7242b326b9f33
+ 0xf4d1352b3e9e99fca6aa20f62fe95192a26c9527

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_actionsSets` key `"37"`.executed @@
- false
+ true

@@ `_queuedActions` key `0xd7ebdcfb601bbaed0538de594c3fa8b0558c890c1ea26b40ab38515d6f604c34` @@
- true
+ false

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`
    - `ReserveInterestRateStrategyChanged(asset: 0xc2132d05d31c914a87c6611c10748aeb04b58e8f, strategy: 0xf4d1352b3e9e99fca6aa20f62fe95192a26c9527)`
    - `ReserveInterestRateStrategyChanged(asset: 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6, strategy: 0x142dcaec322aaa25141b2597bf348487adbd596d)`
    - `ReserveInterestRateStrategyChanged(asset: 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619, strategy: 0x492dcef1fc5253413fc5576b9522840a1a774dce)`
    - `ReserveInterestRateStrategyChanged(asset: 0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270, strategy: 0x78fe5d0427e669ba9f964c3495ff381a805a0487)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 37, initiatorExecution: 0x7d0219c7037819b3f5d73e235c595189c3f8c224, returnedData: 0x)`
  - KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
    - `UpkeepPerformed(id: 59004534399919487726050348266959936260154145654847903814887020424644065605379, success: true, from: 0xd1be7fce9c87f22e3715d257fce92f7595018b67, payment: 0, performData: 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000025)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xF22c8255eA615b3Da6CA5CF5aeCc8956bfF07Aa8: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd1be7fce9c87f22e3715d257fce92f7595018b67: EOA (verification not applicable)
  - 0x02777053d6764996e594c3e88af1d58d5363a2e6: Contract (verified) (KeeperRegistry)
  - 0xf824ea79774e8698e6c6d156c60ab054794c9b18: Contract (verified) (EACAggregatorProxy)
  - 0x828a123d84e1aecf6d604048a4beaabe14fb0e39: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x5787befdc0ecd210dfa948264631cd53e68f7802: Contract (verified) (EACAggregatorProxy)
  - 0x817c00afc51e6574acaa718336fb4414ebc87fdb: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x7d0219c7037819b3f5d73e235c595189c3f8c224: Contract (verified) (L2RobotKeeper)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0xf22c8255ea615b3da6ca5cf5aecc8956bff07aa8: Contract (verified) (AaveV2PolygonUpdate20230507Payload)
  - 0x26db2b833021583566323e3b8985999981b9f1f3: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xf70a4d422e772926852ba9044026f169e6ad9492: Contract (verified) (LendingPoolConfigurator)
  - 0xd05e3e715d945b59290df0ae8ef85c1bdb684744: Contract (verified) (LendingPoolAddressesProvider)
  - 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x6a8730f54b8c69ab096c43ff217ca0a350726ac7: Contract (verified) (LendingPool)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0x5787BefDc0ECd210Dfa948264631CD53E68F7802`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for L2RobotKeeper at `0x7D0219C7037819B3F5d73E235C595189C3F8c224`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x817C00aFc51e6574ACaA718336FB4414eBC87Fdb`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x828a123D84E1aecF6d604048A4BeaAbe14FB0e39`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AaveV2PolygonUpdate20230507Payload at `0xF22c8255eA615b3Da6CA5CF5aeCc8956bfF07Aa8`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0xf824eA79774E8698E6C6D156c60ab054794C9B18`</summary>

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
<summary>Slither report for KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for EACAggregatorProxy at `0x5787BefDc0ECd210Dfa948264631CD53E68F7802`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for L2RobotKeeper at `0x7D0219C7037819B3F5d73E235C595189C3F8c224`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x817C00aFc51e6574ACaA718336FB4414eBC87Fdb`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x828a123D84E1aecF6d604048A4BeaAbe14FB0e39`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AaveV2PolygonUpdate20230507Payload at `0xF22c8255eA615b3Da6CA5CF5aeCc8956bfF07Aa8`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for EACAggregatorProxy at `0xf824eA79774E8698E6C6D156c60ab054794C9B18`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

</details>
