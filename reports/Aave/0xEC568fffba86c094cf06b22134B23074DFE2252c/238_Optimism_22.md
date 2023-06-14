## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/b290e5f3-87e6-4c5c-a76e-77170b25e056](https://dashboard.tenderly.co/me/simulator/b290e5f3-87e6-4c5c-a76e-77170b25e056)

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
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x1C9213DCC6762EfdFf500a2d3f8Df4508B37636a`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for OVM_GasPriceOracle at `0x420000000000000000000000000000000000000F`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for StableDebtToken (STABLE_DEBT_TOKEN_IMPL) at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ConfiguratorLogic at `0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0`</summary>

```
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
<summary>View warnings for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8ffDf2DE812095b1D19CB146E4c004587C0A0692` with implementation AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for L2RobotKeeper at `0x943AcD0c93d7a8Bee7dA5Fd0DC3d0028237074d6`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "aave-address-book/AaveGovernanceV2.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/EthRobotKeeper.sol:4:1:
  |
4 | import {IAaveGovernanceV2} from 'aave-address-book/AaveGovernanceV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/Ownable.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/EthRobotKeeper.sol:7:1:
  |
7 | import {Ownable} from 'solidity-utils/contracts/oz-common/Ownable.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "chainlink-brownie-contracts/interfaces/AutomationCompatibleInterface.sol" not found: File not found. Searched the following locations: "".
 --> src/interfaces/IGovernanceRobotKeeper.sol:4:1:
  |
4 | import {AutomationCompatibleInterface} from 'chainlink-brownie-contracts/interfaces/AutomationCompatibleInterface.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveGovernanceV2.sol" not found: File not found. Searched the following locations: "".
 --> src/interfaces/IProposalValidator.sol:5:1:
  |
5 | import {IAaveGovernanceV2} from 'aave-address-book/AaveGovernanceV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



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
<summary>View warnings for AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0xE67a10DA53Fcd59fae7e47F155c290cb5Defb4B0`</summary>

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
<summary>Slither report for AaveV3OPMAIFixes_20230606 at `0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7`</summary>

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
ERROR:root:Error in 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7
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
<summary>Slither report for AccessControlledOffchainAggregator at `0x1C9213DCC6762EfdFf500a2d3f8Df4508B37636a`</summary>

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
ERROR:root:Error in 0x1c9213dcc6762efdff500a2d3f8df4508b37636a
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
<summary>Slither report for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

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
ERROR:root:Error in 0x29081f7ab5a644716efcdc10d5c926c5fee9f72b
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
<summary>Slither report for OVM_GasPriceOracle at `0x420000000000000000000000000000000000000F`</summary>

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
ERROR:root:Error in 0x420000000000000000000000000000000000000f
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
<summary>Slither report for StableDebtToken (STABLE_DEBT_TOKEN_IMPL) at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

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
ERROR:root:Error in 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e
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
<summary>Slither report for ConfiguratorLogic at `0x7406aba1Aa5fE5cd71d958CE10fc28c416a33aA0`</summary>

```
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
INFO:Slither:0x7406aba1aa5fe5cd71d958ce10fc28c416a33aa0 analyzed (16 contracts with 79 detectors), 63 result(s) found
```

</details>

<details>
<summary>Slither report for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

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
ERROR:root:Error in 0x75c0530885f385721fdda23c539af3701d6183d4
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
<summary>Slither report for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
ERROR:root:Error in 0x764594f8e9757ede877b75716f8077162b251460
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8ffDf2DE812095b1D19CB146E4c004587C0A0692` with implementation AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
ERROR:root:Error in 0x8ffdf2de812095b1d19cb146e4c004587c0a0692
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
<summary>Slither report for L2RobotKeeper at `0x943AcD0c93d7a8Bee7dA5Fd0DC3d0028237074d6`</summary>

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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveGovernanceV2.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/EthRobotKeeper.sol:4:1:
  |
4 | import {IAaveGovernanceV2} from 'aave-address-book/AaveGovernanceV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/Ownable.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/EthRobotKeeper.sol:7:1:
  |
7 | import {Ownable} from 'solidity-utils/contracts/oz-common/Ownable.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "chainlink-brownie-contracts/interfaces/AutomationCompatibleInterface.sol" not found: File not found. Searched the following locations: "".
 --> src/interfaces/IGovernanceRobotKeeper.sol:4:1:
  |
4 | import {AutomationCompatibleInterface} from 'chainlink-brownie-contracts/interfaces/AutomationCompatibleInterface.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveGovernanceV2.sol" not found: File not found. Searched the following locations: "".
 --> src/interfaces/IProposalValidator.sol:5:1:
  |
5 | import {IAaveGovernanceV2} from 'aave-address-book/AaveGovernanceV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6
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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveGovernanceV2.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/EthRobotKeeper.sol:4:1:
  |
4 | import {IAaveGovernanceV2} from 'aave-address-book/AaveGovernanceV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/Ownable.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/EthRobotKeeper.sol:7:1:
  |
7 | import {Ownable} from 'solidity-utils/contracts/oz-common/Ownable.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "chainlink-brownie-contracts/interfaces/AutomationCompatibleInterface.sol" not found: File not found. Searched the following locations: "".
 --> src/interfaces/IGovernanceRobotKeeper.sol:4:1:
  |
4 | import {AutomationCompatibleInterface} from 'chainlink-brownie-contracts/interfaces/AutomationCompatibleInterface.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveGovernanceV2.sol" not found: File not found. Searched the following locations: "".
 --> src/interfaces/IProposalValidator.sol:5:1:
  |
5 | import {IAaveGovernanceV2} from 'aave-address-book/AaveGovernanceV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




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
<summary>Slither report for AToken (ATOKEN_IMPL) at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0xE67a10DA53Fcd59fae7e47F155c290cb5Defb4B0`</summary>

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
ERROR:root:Error in 0xe67a10da53fcd59fae7e47f155c290cb5defb4b0
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
