## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/712616bf-384e-47eb-bf56-f77500d9325a](https://dashboard.tenderly.co/me/simulator/712616bf-384e-47eb-bf56-f77500d9325a)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ `s_upkeep` key `"2644198306353233154445573060213895807978508598208963942704092322563145107595"`.amountSpent @@
- null
+ 675697081759151419
@@ `s_upkeep` key `"2644198306353233154445573060213895807978508598208963942704092322563145107595"`.admin @@
- 0x0000000000000000000000000000000000000000
+ 0xe3fd707583932a99513a5c65c8463de769f5dadf

@@ `s_keeperInfo` key `0xa6101ebd36c861f9da6b3b8f1974882a2faa0830`.balance @@
- 50405637498179690457
+ 50524711561246974322

```

```diff
# OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0xb0c4de74aece3ed54a01211f6e815043a9866b9d733e3dac5505dfb4feb734a7` @@
- true
+ false

@@ `_actionsSets` key `"21"`.executed @@
- false
+ true

```

```diff
# PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`
@@ Slot `0x0d2c1bcee56447b4f46248272f34207a580a5c40f666a31f4e2fbb470ea53ab8` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000b1ba0787ca0a45f086f8ca03c97e7593636e47d5"
```

```diff
# AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`
@@ `assetsSources` key `0x1f32b1c2345538c0c6f582fcb022739c4a194ebb` @@
- 0x698b585cbc4407e2d54aa898b2600b53c68958f7
+ 0x05225cd708bca9253789c1374e4337a019e99d56

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`
    - `PriceOracleSentinelUpdated(oldAddress: 0x0000000000000000000000000000000000000000, newAddress: 0xb1ba0787ca0a45f086f8ca03c97e7593636e47d5)`
  - AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`
    - `AssetSourceUpdated(asset: 0x1f32b1c2345538c0c6f582fcb022739c4a194ebb, source: 0x05225cd708bca9253789c1374e4337a019e99d56)`
  - OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 21, initiatorExecution: 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6, returnedData: 0x)`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `UpkeepPerformed(id: 2644198306353233154445573060213895807978508598208963942704092322563145107595, success: true, from: 0xa6101ebd36c861f9da6b3b8f1974882a2faa0830, payment: 119074063067283865, performData: 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000015)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xa6101ebd36c861f9da6b3b8f1974882a2faa0830: EOA (verification not applicable)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0xe9b80c60a2333dca98c483a8a1efafaf17c5d4ac: Contract (not verified)
  - 0x1c9213dcc6762efdff500a2d3f8df4508b37636a: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x464a1515adc20de946f8d0deb99cead8ceae310d: Contract (not verified)
  - 0xe67a10da53fcd59fae7e47f155c290cb5defb4b0: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x420000000000000000000000000000000000000f: Contract (verified) (OVM_GasPriceOracle)
  - 0x943acd0c93d7a8bee7da5fd0dc3d0028237074d6: Contract (verified) (L2RobotKeeper)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)
  - 0x3105c276558dd4cf7e7be71d73be8d33bd18f211: Contract (verified) (AaveV3OptPriceFeedsSentinelUpdate_20230504_Payload)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0x7a9a9c14b35e58ffa1cc84ab421ace0fdcd289e3: Contract (verified) (AaveV3ConfigEngine)
  - 0x05225cd708bca9253789c1374e4337a019e99d56: Contract (not verified)
  - 0x524299ab0987a7c4b3c8022a35669ddcdc715a10: Contract (not verified)
  - 0x034f1d70092e81b7738459f02f409a5c5c4b8189: Contract (not verified)
  - 0x13e3ee699d1909e989722e753853ae30b17e08c5: Contract (verified) (EACAggregatorProxy)
  - 0x02f5e9e9dcc66ba6392f6904d5fcf8625d9b19c9: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xd81eb3728a631871a7ebbad631b5f424909f0c77: Contract (verified) (AaveOracle)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x02f5E9e9dcc66ba6392f6904D5Fcf8625d9B19C9`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0x13e3Ee699D1909E989722E753853AE30b17e08c5`</summary>

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
<summary>View warnings for AaveV3OptPriceFeedsSentinelUpdate_20230504_Payload at `0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/mainnet/AaveV2SwapxSushiPriceFeedPayload.sol:4:1:
  |
4 | import {AaveV2Ethereum, AaveV2EthereumAssets} from 'aave-address-book/AaveV2Ethereum.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



```

</details>

<details>
<summary>View warnings for OVM_GasPriceOracle at `0x420000000000000000000000000000000000000F`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV3ConfigEngine at `0x7A9A9c14B35E58ffa1cC84aB421acE0FdcD289E3`</summary>

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
<summary>View warnings for AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x02f5E9e9dcc66ba6392f6904D5Fcf8625d9B19C9`</summary>

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
ERROR:root:Error in 0x02f5e9e9dcc66ba6392f6904d5fcf8625d9b19c9
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
<summary>Slither report for EACAggregatorProxy at `0x13e3Ee699D1909E989722E753853AE30b17e08c5`</summary>

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
ERROR:root:Error in 0x13e3ee699d1909e989722e753853ae30b17e08c5
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
<summary>Slither report for AaveV3OptPriceFeedsSentinelUpdate_20230504_Payload at `0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211`</summary>

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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/mainnet/AaveV2SwapxSushiPriceFeedPayload.sol:4:1:
  |
4 | import {AaveV2Ethereum, AaveV2EthereumAssets} from 'aave-address-book/AaveV2Ethereum.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0x3105c276558dd4cf7e7be71d73be8d33bd18f211
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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/contracts/mainnet/AaveV2SwapxSushiPriceFeedPayload.sol:4:1:
  |
4 | import {AaveV2Ethereum, AaveV2EthereumAssets} from 'aave-address-book/AaveV2Ethereum.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




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
<summary>Slither report for AaveV3ConfigEngine at `0x7A9A9c14B35E58ffa1cC84aB421acE0FdcD289E3`</summary>

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
ERROR:root:Error in 0x7a9a9c14b35e58ffa1cc84ab421ace0fdcd289e3
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
<summary>Slither report for AaveOracle at `0xD81eb3728a631871a7eBBaD631b5f424909f0c77`</summary>

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
ERROR:root:Error in 0xd81eb3728a631871a7ebbad631b5f424909f0c77
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
