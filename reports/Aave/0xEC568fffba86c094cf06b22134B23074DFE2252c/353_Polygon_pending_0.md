## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/fcfde322-fc57-4408-88e1-7c57ece80800](https://dashboard.tenderly.co/me/simulator/fcfde322-fc57-4408-88e1-7c57ece80800)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`
@@ `_reserves` key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`.configuration.data @@
- 103302132214538358495588
+ 112525504251393134303588

# decoded configuration.data for key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270` (symbol: WMATIC)
@@ configuration.data.reserveFactor @@
- 5600
+ 6100

@@ `_reserves` key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6`.configuration.data @@
- 129127571102981996419928
+ 138350943139836772227928

# decoded configuration.data for key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6` (symbol: WBTC)
@@ configuration.data.reserveFactor @@
- 7000
+ 7500

@@ `_reserves` key `0x2791bca1f2de4661ed88a30c99a7a9449aa84174`.configuration.data @@
- 70097989502014059716416
+ 79321361538868835524416

# decoded configuration.data for key `0x2791bca1f2de4661ed88a30c99a7a9449aa84174` (symbol: USDC)
@@ configuration.data.reserveFactor @@
- 3800
+ 4300

@@ `_reserves` key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619`.configuration.data @@
- 110680829841874777415488
+ 119904201878729553223488

# decoded configuration.data for key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619` (symbol: WETH)
@@ configuration.data.reserveFactor @@
- 6000
+ 6500

@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.configuration.data @@
- 66408644064971837152588
+ 75632016101826612960588

# decoded configuration.data for key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063` (symbol: DAI)
@@ configuration.data.reserveFactor @@
- 3600
+ 4100

@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.configuration.data @@
- 86700206663387674052560
+ 95923578700242449860560

# decoded configuration.data for key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3` (symbol: BAL)
@@ configuration.data.reserveFactor @@
- 4700
+ 5200

@@ `_reserves` key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f`.configuration.data @@
- 68253315049545390882816
+ 77476687086400166690816

# decoded configuration.data for key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f` (symbol: USDT)
@@ configuration.data.reserveFactor @@
- 3700
+ 4200

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_actionsSets` key `"70"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x23c5d8cd4e3118a50835c07d7b91a463157f237046f53ec34acb06b156eb534f` @@
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
    - `ReserveFactorChanged(asset: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, factor: 4100)`
    - `ReserveFactorChanged(asset: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, factor: 4300)`
    - `ReserveFactorChanged(asset: 0xc2132d05d31c914a87c6611c10748aeb04b58e8f, factor: 4200)`
    - `ReserveFactorChanged(asset: 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6, factor: 7500)`
    - `ReserveFactorChanged(asset: 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619, factor: 6500)`
    - `ReserveFactorChanged(asset: 0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270, factor: 6100)`
    - `ReserveFactorChanged(asset: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, factor: 5200)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 70, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x53Af3E66dfd8182f1084d8f36d4c1085a3962B7a: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0x53af3e66dfd8182f1084d8f36d4c1085a3962b7a: Contract (not verified)
  - 0x26db2b833021583566323e3b8985999981b9f1f3: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xf70a4d422e772926852ba9044026f169e6ad9492: Contract (verified) (LendingPoolConfigurator)
  - 0xd05e3e715d945b59290df0ae8ef85c1bdb684744: Contract (verified) (LendingPoolAddressesProvider)
  - 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1685d81212580dd4cda287616c2f6f4794927e18: Contract (verified) (LendingPool)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`</summary>

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
<summary>View warnings for LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

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
<summary>Slither report for LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
<summary>Slither report for LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`</summary>

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
<summary>Slither report for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

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
<summary>Slither report for LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

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
