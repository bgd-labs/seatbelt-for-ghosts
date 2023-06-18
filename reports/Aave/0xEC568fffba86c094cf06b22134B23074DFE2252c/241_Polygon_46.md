## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/b06db069-c096-4982-8a6a-7bd8a8eb2640](https://dashboard.tenderly.co/me/simulator/b06db069-c096-4982-8a6a-7bd8a8eb2640)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
@@ `s_upkeep` key `"59004534399919487726050348266959936260154145654847903814887020424644065605379"`.lastKeeper @@
- 0xa7d87d93fc879c5ec959ebdc4a058bc906be42ec
+ 0xd9a31dc8347284a6bea9598d49d8dacbfd5774f1

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`
@@ `_reserves` key `0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4`.configuration.data @@
- 759706822513525964738584667950849776406433229968264
+ 759706823178139962631042604402753306546605517968264

# decoded configuration.data for key `0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4` (symbol: stMATIC)
@@ configuration.data.supplyCap @@
- 32000000
+ 40000000

@@ `_reserves` key `0xfa68fb4628dff1028cfec22b4162fccd0d45efb6`.configuration.data @@
- 753997831518394900931933384782530714377442376292008
+ 753997832241162623639981390673975803404879739492008

# decoded configuration.data for key `0xfa68fb4628dff1028cfec22b4162fccd0d45efb6` (symbol: MaticX)
@@ configuration.data.supplyCap @@
- 29300000
+ 38000000

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_queuedActions` key `0x668a9d8f96b9433be5bf74f95a6bc7737cdde5813e8084c39fe9dc01deb0cff5` @@
- true
+ false

@@ `_actionsSets` key `"46"`.executed @@
- false
+ true

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`
    - `SupplyCapChanged(asset: 0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4, oldSupplyCap: 32000000, newSupplyCap: 40000000)`
    - `SupplyCapChanged(asset: 0xfa68fb4628dff1028cfec22b4162fccd0d45efb6, oldSupplyCap: 29300000, newSupplyCap: 38000000)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 46, initiatorExecution: 0x7d0219c7037819b3f5d73e235c595189c3f8c224, returnedData: 0x)`
  - KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
    - `UpkeepPerformed(id: 59004534399919487726050348266959936260154145654847903814887020424644065605379, success: true, from: 0xd9a31dc8347284a6bea9598d49d8dacbfd5774f1, payment: 0, performData: 0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002e)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd9a31dc8347284a6bea9598d49d8dacbfd5774f1: EOA (verification not applicable)
  - 0x02777053d6764996e594c3e88af1d58d5363a2e6: Contract (verified) (KeeperRegistry)
  - 0xf824ea79774e8698e6c6d156c60ab054794c9b18: Contract (verified) (EACAggregatorProxy)
  - 0x828a123d84e1aecf6d604048a4beaabe14fb0e39: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x5787befdc0ecd210dfa948264631cd53e68f7802: Contract (verified) (EACAggregatorProxy)
  - 0x817c00afc51e6574acaa718336fb4414ebc87fdb: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x7d0219c7037819b3f5d73e235c595189c3f8c224: Contract (verified) (L2RobotKeeper)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0x76884cafecf1f7d4146da6c4053b18b76bf6ed14: Contract (verified) (AaveV3PolCapsUpdates_20230610_Payload)
  - 0xe202f2fc4b6a37ba53cfd15be42a762a645fca07: Contract (verified) (AaveV3ConfigEngine)
  - 0x8145edddf43f50276641b55bd3ad95944510021e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xadf86b537ef08591c2777e144322e8b0ca7e82a7: Contract (verified) (PoolConfigurator)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xb77fc84a549ecc0b410d6fa15159c2df207545a3: Contract (verified) (Pool)

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
<summary>View warnings for EACAggregatorProxy at `0x5787BefDc0ECd210Dfa948264631CD53E68F7802`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for AaveV3PolCapsUpdates_20230610_Payload at `0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

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
<summary>View warnings for PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

<details>
<summary>View warnings for Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
<summary>View warnings for AaveV3ConfigEngine at `0xE202F2fc4b6A37Ba53cfD15bE42a762A645FCA07`</summary>

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
<summary>Slither report for EACAggregatorProxy at `0x5787BefDc0ECd210Dfa948264631CD53E68F7802`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for AaveV3PolCapsUpdates_20230610_Payload at `0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

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
<summary>Slither report for PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

<details>
<summary>Slither report for Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
<summary>Slither report for AaveV3ConfigEngine at `0xE202F2fc4b6A37Ba53cfD15bE42a762A645FCA07`</summary>

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
