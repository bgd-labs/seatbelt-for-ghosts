## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/43ab7b93-c260-432d-92d1-96af26aec5a1](https://dashboard.tenderly.co/me/simulator/43ab7b93-c260-432d-92d1-96af26aec5a1)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

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
@@ `_queuedActions` key `0x7db4ee4a0c1117da9a99139a8be81ac1ac6ea2c35cc88c3247b1eae9b1684934` @@
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
    - `ActionsSetExecuted(id: 46, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
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
<summary>View warnings for PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV3ConfigEngine at `0xE202F2fc4b6A37Ba53cfD15bE42a762A645FCA07`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:4:1:
  |
4 | import {DataTypes} from 'aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:5:1:
  |
5 | import {ConfiguratorInputTypes} from 'aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:6:1:
  |
6 | import {IPoolAddressesProvider} from 'aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPool.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:7:1:
  |
7 | import {IPool} from 'aave-v3-core/contracts/interfaces/IPool.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolConfigurator.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:8:1:
  |
8 | import {IPoolConfigurator} from 'aave-v3-core/contracts/interfaces/IPoolConfigurator.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:9:1:
  |
9 | import {IPriceOracleGetter} from 'aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IAaveOracle.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:10:1:
   |
10 | import {IAaveOracle} from 'aave-v3-core/contracts/interfaces/IAaveOracle.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IACLManager.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:11:1:
   |
11 | import {IACLManager as BasicIACLManager} from 'aave-v3-core/contracts/interfaces/IACLManager.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:12:1:
   |
12 | import {IPoolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:13:1:
   |
13 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:14:1:
   |
14 | import {IReserveInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:15:1:
   |
15 | import {IPoolDataProvider as IAaveProtocolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:4:1:
  |
4 | import {ConfiguratorInputTypes, DataTypes} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:5:1:
  |
5 | import {ReserveConfiguration} from 'aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:6:1:
  |
6 | import {IERC20Metadata} from 'solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IAaveV3ConfigEngine.sol:4:1:
  |
4 | import {IPool, IPoolConfigurator, IAaveOracle} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:4:1:
  |
4 | import {IPoolAddressesProvider} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:5:1:
  |
5 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



```

</details>

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for AaveV3PolCapsUpdates_20230610_Payload at `0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14`</summary>

```
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 163, in run_solc_standard_json
    solc_json_output = json.loads(stdout)
  File "/usr/lib/python3.10/json/__init__.py", line 346, in loads
    return _default_decoder.decode(s)
  File "/usr/lib/python3.10/json/decoder.py", line 337, in decode
    obj, end = self.raw_decode(s, idx=_w(s, 0).end())
  File "/usr/lib/python3.10/json/decoder.py", line 355, in raw_decode
    raise JSONDecodeError("Expecting value", s, err.value) from None
json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)

During handling of the above exception, another exception occurred:

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
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 193, in run_solc_standard_json
    raise InvalidCompilation(f"Invalid solc compilation {stderr}")
crytic_compile.platform.exceptions.InvalidCompilation: Invalid solc compilation Traceback (most recent call last):
  File "/home/runner/.local/bin/solc", line 8, in <module>
    sys.exit(solc())
  File "/home/runner/.local/lib/python3.10/site-packages/solc_select/__main__.py", line 86, in solc
    subprocess.run(
  File "/usr/lib/python3.10/subprocess.py", line 501, in run
    with Popen(*popenargs, **kwargs) as process:
  File "/usr/lib/python3.10/subprocess.py", line 969, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/usr/lib/python3.10/subprocess.py", line 1845, in _execute_child
    raise child_exception_type(errno_num, err_msg, err_filename)
PermissionError: [Errno 13] Permission denied: '/home/runner/.solc-select/artifacts/solc-0.8.17/solc-0.8.17'

ERROR:root:Error in 0x76884cafecf1f7d4146da6c4053b18b76bf6ed14
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 163, in run_solc_standard_json
    solc_json_output = json.loads(stdout)
  File "/usr/lib/python3.10/json/__init__.py", line 346, in loads
    return _default_decoder.decode(s)
  File "/usr/lib/python3.10/json/decoder.py", line 337, in decode
    obj, end = self.raw_decode(s, idx=_w(s, 0).end())
  File "/usr/lib/python3.10/json/decoder.py", line 355, in raw_decode
    raise JSONDecodeError("Expecting value", s, err.value) from None
json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)

During handling of the above exception, another exception occurred:

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
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 193, in run_solc_standard_json
    raise InvalidCompilation(f"Invalid solc compilation {stderr}")
crytic_compile.platform.exceptions.InvalidCompilation: Invalid solc compilation Traceback (most recent call last):
  File "/home/runner/.local/bin/solc", line 8, in <module>
    sys.exit(solc())
  File "/home/runner/.local/lib/python3.10/site-packages/solc_select/__main__.py", line 86, in solc
    subprocess.run(
  File "/usr/lib/python3.10/subprocess.py", line 501, in run
    with Popen(*popenargs, **kwargs) as process:
  File "/usr/lib/python3.10/subprocess.py", line 969, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/usr/lib/python3.10/subprocess.py", line 1845, in _execute_child
    raise child_exception_type(errno_num, err_msg, err_filename)
PermissionError: [Errno 13] Permission denied: '/home/runner/.solc-select/artifacts/solc-0.8.17/solc-0.8.17'


```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

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
<summary>Slither report for PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

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
ERROR:root:Error in 0xadf86b537ef08591c2777e144322e8b0ca7e82a7
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
<summary>Slither report for Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
ERROR:root:Error in 0xb77fc84a549ecc0b410d6fa15159c2df207545a3
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
<summary>Slither report for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

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
ERROR:root:Error in 0xdc9a35b16db4e126cfedc41322b3a36454b1f772
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
<summary>Slither report for AaveV3ConfigEngine at `0xE202F2fc4b6A37Ba53cfD15bE42a762A645FCA07`</summary>

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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:4:1:
  |
4 | import {DataTypes} from 'aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:5:1:
  |
5 | import {ConfiguratorInputTypes} from 'aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:6:1:
  |
6 | import {IPoolAddressesProvider} from 'aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPool.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:7:1:
  |
7 | import {IPool} from 'aave-v3-core/contracts/interfaces/IPool.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolConfigurator.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:8:1:
  |
8 | import {IPoolConfigurator} from 'aave-v3-core/contracts/interfaces/IPoolConfigurator.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:9:1:
  |
9 | import {IPriceOracleGetter} from 'aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IAaveOracle.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:10:1:
   |
10 | import {IAaveOracle} from 'aave-v3-core/contracts/interfaces/IAaveOracle.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IACLManager.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:11:1:
   |
11 | import {IACLManager as BasicIACLManager} from 'aave-v3-core/contracts/interfaces/IACLManager.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:12:1:
   |
12 | import {IPoolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:13:1:
   |
13 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:14:1:
   |
14 | import {IReserveInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:15:1:
   |
15 | import {IPoolDataProvider as IAaveProtocolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:4:1:
  |
4 | import {ConfiguratorInputTypes, DataTypes} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:5:1:
  |
5 | import {ReserveConfiguration} from 'aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:6:1:
  |
6 | import {IERC20Metadata} from 'solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IAaveV3ConfigEngine.sol:4:1:
  |
4 | import {IPool, IPoolConfigurator, IAaveOracle} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:4:1:
  |
4 | import {IPoolAddressesProvider} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:5:1:
  |
5 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0xe202f2fc4b6a37ba53cfd15be42a762a645fca07
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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:4:1:
  |
4 | import {DataTypes} from 'aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:5:1:
  |
5 | import {ConfiguratorInputTypes} from 'aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:6:1:
  |
6 | import {IPoolAddressesProvider} from 'aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPool.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:7:1:
  |
7 | import {IPool} from 'aave-v3-core/contracts/interfaces/IPool.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolConfigurator.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:8:1:
  |
8 | import {IPoolConfigurator} from 'aave-v3-core/contracts/interfaces/IPoolConfigurator.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:9:1:
  |
9 | import {IPriceOracleGetter} from 'aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IAaveOracle.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:10:1:
   |
10 | import {IAaveOracle} from 'aave-v3-core/contracts/interfaces/IAaveOracle.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IACLManager.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:11:1:
   |
11 | import {IACLManager as BasicIACLManager} from 'aave-v3-core/contracts/interfaces/IACLManager.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:12:1:
   |
12 | import {IPoolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:13:1:
   |
13 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:14:1:
   |
14 | import {IReserveInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:15:1:
   |
15 | import {IPoolDataProvider as IAaveProtocolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:4:1:
  |
4 | import {ConfiguratorInputTypes, DataTypes} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:5:1:
  |
5 | import {ReserveConfiguration} from 'aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:6:1:
  |
6 | import {IERC20Metadata} from 'solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IAaveV3ConfigEngine.sol:4:1:
  |
4 | import {IPool, IPoolConfigurator, IAaveOracle} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:4:1:
  |
4 | import {IPoolAddressesProvider} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:5:1:
  |
5 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




```

</details>

</details>
