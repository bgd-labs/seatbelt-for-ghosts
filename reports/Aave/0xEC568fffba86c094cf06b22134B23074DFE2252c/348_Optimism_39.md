## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/033016b5-6cbb-4e5a-9278-15993e08c97c](https://dashboard.tenderly.co/me/simulator/033016b5-6cbb-4e5a-9278-15993e08c97c)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`
@@ `_reserves` key `0x4200000000000000000000000000000000000042`.configuration.data @@
- 5708991601591336890410027389387496498943913626552
+ 5708991601591336890410027389387784729320065338296

# decoded configuration.data for key `0x4200000000000000000000000000000000000042` (symbol: OP)
@@ configuration.data.borrowingEnabled @@
- false
+ true

```

```diff
# OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0xbc1a65d35a1859d61d38951d507d4c3e1aafa11f77d9fb193ed75667a42916b6` @@
- true
+ false

@@ `_actionsSets` key `"39"`.executed @@
- false
+ true

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`
    - `ReserveBorrowing(asset: 0x4200000000000000000000000000000000000042, enabled: true)`
  - OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 39, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x9c11F54bA3c44ED7945D2405C15060bcD209f53e: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)
  - 0x9c11f54ba3c44ed7945d2405c15060bcd209f53e: Contract (not verified)
  - 0x7a9a9c14b35e58ffa1cc84ab421ace0fdcd289e3: Contract (verified) (AaveV3ConfigEngine)
  - 0x8145edddf43f50276641b55bd3ad95944510021e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x29081f7ab5a644716efcdc10d5c926c5fee9f72b: Contract (verified) (PoolConfigurator)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x764594f8e9757ede877b75716f8077162b251460: Contract (verified) (L2Pool)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x29081f7ab5a644716efcdc10d5c926c5fee9f72b-sDAISynchronicityPriceAdapter' running
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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

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

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x29081f7ab5a644716efcdc10d5c926c5fee9f72b-sDAISynchronicityPriceAdapter' running
INFO:Detectors:
Contract sDAISynchronicityPriceAdapter (src/contracts/sDAISynchronicityPriceAdapter.sol#14-76) is not in CapWords
Variable sDAISynchronicityPriceAdapter.DAI_TO_USD (src/contracts/sDAISynchronicityPriceAdapter.sol#18) is not in mixedCase
Variable sDAISynchronicityPriceAdapter.RATE_PROVIDER (src/contracts/sDAISynchronicityPriceAdapter.sol#23) is not in mixedCase
Variable sDAISynchronicityPriceAdapter.DECIMALS (src/contracts/sDAISynchronicityPriceAdapter.sol#33) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x29081f7ab5a644716efcdc10d5c926c5fee9f72b analyzed (4 contracts with 87 detectors), 4 result(s) found
```

</details>

<details>
<summary>Slither report for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/slither", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 727, in main
    main_impl(all_detector_classes=detectors, all_printer_classes=printers)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 103, in __init__
    compilation_unit_slither = SlitherCompilationUnit(self, compilation_unit)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 54, in __init__
    self._language = Language.from_str(crytic_compilation_unit.compiler_version.compiler)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 44, in from_str
    raise ValueError(f"Unknown language: {label}")
ValueError: Unknown language: unknown
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/slither", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 727, in main
    main_impl(all_detector_classes=detectors, all_printer_classes=printers)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 103, in __init__
    compilation_unit_slither = SlitherCompilationUnit(self, compilation_unit)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 54, in __init__
    self._language = Language.from_str(crytic_compilation_unit.compiler_version.compiler)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 44, in from_str
    raise ValueError(f"Unknown language: {label}")
ValueError: Unknown language: unknown
```

</details>

<details>
<summary>Slither report for AaveV3ConfigEngine at `0x7A9A9c14B35E58ffa1cC84aB421acE0FdcD289E3`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/slither", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 727, in main
    main_impl(all_detector_classes=detectors, all_printer_classes=printers)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 103, in __init__
    compilation_unit_slither = SlitherCompilationUnit(self, compilation_unit)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 54, in __init__
    self._language = Language.from_str(crytic_compilation_unit.compiler_version.compiler)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 44, in from_str
    raise ValueError(f"Unknown language: {label}")
ValueError: Unknown language: unknown
```

</details>

<details>
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/slither", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 727, in main
    main_impl(all_detector_classes=detectors, all_printer_classes=printers)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 103, in __init__
    compilation_unit_slither = SlitherCompilationUnit(self, compilation_unit)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 54, in __init__
    self._language = Language.from_str(crytic_compilation_unit.compiler_version.compiler)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 44, in from_str
    raise ValueError(f"Unknown language: {label}")
ValueError: Unknown language: unknown
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/slither", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 727, in main
    main_impl(all_detector_classes=detectors, all_printer_classes=printers)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 103, in __init__
    compilation_unit_slither = SlitherCompilationUnit(self, compilation_unit)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 54, in __init__
    self._language = Language.from_str(crytic_compilation_unit.compiler_version.compiler)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 44, in from_str
    raise ValueError(f"Unknown language: {label}")
ValueError: Unknown language: unknown
```

</details>

<details>
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/slither", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 727, in main
    main_impl(all_detector_classes=detectors, all_printer_classes=printers)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 103, in __init__
    compilation_unit_slither = SlitherCompilationUnit(self, compilation_unit)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 54, in __init__
    self._language = Language.from_str(crytic_compilation_unit.compiler_version.compiler)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 44, in from_str
    raise ValueError(f"Unknown language: {label}")
ValueError: Unknown language: unknown
```

</details>

<details>
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/slither", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 727, in main
    main_impl(all_detector_classes=detectors, all_printer_classes=printers)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 103, in __init__
    compilation_unit_slither = SlitherCompilationUnit(self, compilation_unit)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 54, in __init__
    self._language = Language.from_str(crytic_compilation_unit.compiler_version.compiler)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/compilation_unit.py", line 44, in from_str
    raise ValueError(f"Unknown language: {label}")
ValueError: Unknown language: unknown
```

</details>

</details>
