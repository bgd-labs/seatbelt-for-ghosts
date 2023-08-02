## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/ff91aae7-07b7-4308-8b55-d02fd6e3373a](https://dashboard.tenderly.co/me/simulator/ff91aae7-07b7-4308-8b55-d02fd6e3373a)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`
@@ `_reserves` key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`.configuration.data @@
- 75632016103974031071588
+ 84855388140828806879588

# decoded configuration.data for key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270` (symbol: WMATIC)
@@ configuration.data.reserveFactor @@
- 4100
+ 4600

@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.configuration.data @@
- 70098136997049077598160
+ 184449503509974588065744

# decoded configuration.data for key `0x172370d5cd63279efa6d502dab29171933a610af` (symbol: CRV)
@@ configuration.data.reserveFactor @@
- 3800
+ 9999

@@ `_reserves` key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6`.configuration.data @@
- 101457454992417668995928
+ 110680827029272444803928

# decoded configuration.data for key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6` (symbol: WBTC)
@@ configuration.data.reserveFactor @@
- 5500
+ 6000

@@ `_reserves` key `0x2791bca1f2de4661ed88a30c99a7a9449aa84174`.configuration.data @@
- 42427873391449732292416
+ 51651245428304508100416

# decoded configuration.data for key `0x2791bca1f2de4661ed88a30c99a7a9449aa84174` (symbol: USDC)
@@ configuration.data.reserveFactor @@
- 2300
+ 2800

@@ `_reserves` key `0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7`.configuration.data @@
- 110680685729907648498116
+ 184449215280672145410500

# decoded configuration.data for key `0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7` (symbol: GHST)
@@ configuration.data.reserveFactor @@
- 6000
+ 9999

@@ `_reserves` key `0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39`.configuration.data @@
- 92234229884426928788360
+ 184449503508900977316744

# decoded configuration.data for key `0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39` (symbol: LINK)
@@ configuration.data.reserveFactor @@
- 5000
+ 9999

@@ `_reserves` key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619`.configuration.data @@
- 83010713731310449991488
+ 92234085768165225799488

# decoded configuration.data for key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619` (symbol: WETH)
@@ configuration.data.reserveFactor @@
- 4500
+ 5000

@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.configuration.data @@
- 38738527954407509728588
+ 47961899991262285536588

# decoded configuration.data for key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063` (symbol: DAI)
@@ configuration.data.reserveFactor @@
- 2100
+ 2600

@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.configuration.data @@
- 59030090552823346628560
+ 68253462589678122436560

# decoded configuration.data for key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3` (symbol: BAL)
@@ configuration.data.reserveFactor @@
- 3200
+ 3700

@@ `_reserves` key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f`.configuration.data @@
- 40583198938981063458816
+ 49806570975835839266816

# decoded configuration.data for key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f` (symbol: USDT)
@@ configuration.data.reserveFactor @@
- 2200
+ 2700

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_actionsSets` key `"52"`.executed @@
- false
+ true

@@ `_queuedActions` key `0xb8c438e0fabc152680b188787a390c0681e7592af61a0b3996a6e774078bdaaf` @@
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
    - `ReserveFactorChanged(asset: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, factor: 2600)`
    - `ReserveFactorChanged(asset: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, factor: 2800)`
    - `ReserveFactorChanged(asset: 0xc2132d05d31c914a87c6611c10748aeb04b58e8f, factor: 2700)`
    - `ReserveFactorChanged(asset: 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6, factor: 6000)`
    - `ReserveFactorChanged(asset: 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619, factor: 5000)`
    - `ReserveFactorChanged(asset: 0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270, factor: 4600)`
    - `ReserveFactorChanged(asset: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, factor: 3700)`
    - `ReserveFactorChanged(asset: 0x172370d5cd63279efa6d502dab29171933a610af, factor: 9999)`
    - `ReserveFactorChanged(asset: 0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7, factor: 9999)`
    - `ReserveFactorChanged(asset: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, factor: 9999)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 52, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x812dDad273544754d0672A009C27550899e658Aa: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0x812ddad273544754d0672a009c27550899e658aa: Contract (verified) (AaveV2PolygonReserveFactorUpdate_20230717)
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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV2PolygonReserveFactorUpdate_20230717 at `0x812dDad273544754d0672A009C27550899e658Aa`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x26db2b833021583566323e3b8985999981b9f1f3
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x6a8730f54b8c69ab096c43ff217ca0a350726ac7
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for AaveV2PolygonReserveFactorUpdate_20230717 at `0x812dDad273544754d0672A009C27550899e658Aa`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x812ddad273544754d0672a009c27550899e658aa
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xd05e3e715d945b59290df0ae8ef85c1bdb684744
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xdc9a35b16db4e126cfedc41322b3a36454b1f772
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

<details>
<summary>Slither report for LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
Source code not available, try to fetch the bytecode only
ERROR:SlitherSolcParsing:crytic-compile returned an empty AST. If you are trying to analyze a contract from etherscan or similar make sure it has source code available.
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''
ERROR:root:Error in 0xf70a4d422e772926852ba9044026f169e6ad9492
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 115, in __init__
    self.add_source_code(path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/core/slither_core.py", line 172, in add_source_code
    with open(path, encoding="utf8", newline="") as f:
FileNotFoundError: [Errno 2] No such file or directory: ''

```

</details>

</details>
