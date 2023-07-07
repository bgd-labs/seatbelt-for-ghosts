## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/1ead6973-338e-413d-a611-4f97d18e3f9d](https://dashboard.tenderly.co/me/simulator/1ead6973-338e-413d-a611-4f97d18e3f9d)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# AaveOracle at `0xb023e699F5a33916Ea823A16485e259257cA8Bd1`
@@ `assetsSources` key `0x03b54a6e9a984069379fae1a4fc4dbae93b3bccd` @@
- 0xa2508729b1282cc70dd33ed311d4a9a37383035b
+ 0xe34949a48cd2e6f5cd41753e449bd2d43993c9ac

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_queuedActions` key `0x40879d280890a2d5426a04aaeea6b65cc845991c4da034a14168e15a99df4afd` @@
- true
+ false

@@ `_actionsSets` key `"48"`.executed @@
- false
+ true

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveOracle at `0xb023e699F5a33916Ea823A16485e259257cA8Bd1`
    - `AssetSourceUpdated(asset: 0x03b54a6e9a984069379fae1a4fc4dbae93b3bccd, source: 0xe34949a48cd2e6f5cd41753e449bd2d43993c9ac)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 48, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xdBb0236007FD3697B03A88b4B550b422F57894CF: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0xdbb0236007fd3697b03a88b4b550b422f57894cf: Contract (verified) (AaveV3PolPriceFeedsUpdate_20230626_Payload)
  - 0xe202f2fc4b6a37ba53cfd15be42a762a645fca07: Contract (verified) (AaveV3ConfigEngine)
  - 0xe34949a48cd2e6f5cd41753e449bd2d43993c9ac: Contract (verified) (CLSynchronicityPriceAdapterPegToBase)
  - 0x3ea1ec855fbda8ba0396975ec260ad2e9b2bc01c: Contract (not verified)
  - 0x874fd3b6f91d1dff7850ec39acc1172006c3c7a3: Contract (not verified)
  - 0xf9680d99d6c9589e2a93a78a04a279e509205945: Contract (verified) (EACAggregatorProxy)
  - 0x4dd6655ad5ed7c06c882f496e3f42ace5766cb89: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb023e699f5a33916ea823a16485e259257ca8bd1: Contract (verified) (AaveOracle)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x4dD6655Ad5ed7C06c882f496E3f42acE5766cb89`</summary>

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
<summary>View warnings for AaveOracle at `0xb023e699F5a33916Ea823A16485e259257cA8Bd1`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV3PolPriceFeedsUpdate_20230626_Payload at `0xdBb0236007FD3697B03A88b4B550b422F57894CF`</summary>

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
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xe202f2fc4b6a37ba53cfd15be42a762a645fca07-AaveV3ConfigEngine' running
```

</details>

<details>
<summary>View warnings for CLSynchronicityPriceAdapterPegToBase at `0xe34949A48cd2E6f5CD41753e449bd2d43993C9AC`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0xF9680D99D6C9589e2a93a78A04A279e509205945`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts' running
WARNING:CryticCompile:Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:273:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:263:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:274:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:264:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:275:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:265:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:276:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:266:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:321:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:311:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:322:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:312:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:323:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:313:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:324:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:314:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:503:5: Warning: This declaration shadows an existing declaration.
    uint16 phaseId = uint16(_roundId >> PHASE_OFFSET);
    ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:515:7: Warning: This declaration shadows an existing declaration.
      uint16 phaseId
      ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:485:3: Warning: Function state mutability can be restricted to pure
  function addPhase(
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:496:3: Warning: Function state mutability can be restricted to pure
  function parseIds(
  ^ (Relevant source part starts here and spans across multiple lines).


```

</details>

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x4dD6655Ad5ed7C06c882f496E3f42acE5766cb89`</summary>

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
ERROR:root:Error in 0x4dd6655ad5ed7c06c882f496e3f42ace5766cb89
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
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

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
ERROR:root:Error in 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b
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
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

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
ERROR:root:Error in 0xa97684ead0e402dc232d5a977953df7ecbab3cdb
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
<summary>Slither report for AaveOracle at `0xb023e699F5a33916Ea823A16485e259257cA8Bd1`</summary>

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
ERROR:root:Error in 0xb023e699f5a33916ea823a16485e259257ca8bd1
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
<summary>Slither report for AaveV3PolPriceFeedsUpdate_20230626_Payload at `0xdBb0236007FD3697B03A88b4B550b422F57894CF`</summary>

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
ERROR:root:Error in 0xdbb0236007fd3697b03a88b4b550b422f57894cf
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
<summary>Slither report for AaveV3ConfigEngine at `0xE202F2fc4b6A37Ba53cfD15bE42a762A645FCA07`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xe202f2fc4b6a37ba53cfd15be42a762a645fca07-AaveV3ConfigEngine' running
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 102, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 135, in __init__
    self._init_parsing_and_analyses(kwargs.get("skip_analyze", False))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 145, in _init_parsing_and_analyses
    raise e
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 141, in _init_parsing_and_analyses
    parser.parse_contracts()
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 447, in parse_contracts
    raise InheritanceResolutionError(
slither.solc_parsing.slither_compilation_unit_solc.InheritanceResolutionError: Could not resolve contract inheritance. This is likely caused by an import renaming that collides with existing names (see https://github.com/crytic/slither/issues/1758).
 Try changing `contract IACLManager` (lib/aave-address-book/src/AaveV3.sol#75-87) to a unique name.
ERROR:root:Error:
ERROR:root:Could not resolve contract inheritance. This is likely caused by an import renaming that collides with existing names (see https://github.com/crytic/slither/issues/1758).
 Try changing `contract IACLManager` (lib/aave-address-book/src/AaveV3.sol#75-87) to a unique name.
ERROR:root:Please report an issue to https://github.com/crytic/slither/issues
```

</details>

<details>
<summary>Slither report for CLSynchronicityPriceAdapterPegToBase at `0xe34949A48cd2E6f5CD41753e449bd2d43993C9AC`</summary>

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
ERROR:root:Error in 0xe34949a48cd2e6f5cd41753e449bd2d43993c9ac
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
<summary>Slither report for EACAggregatorProxy at `0xF9680D99D6C9589e2a93a78A04A279e509205945`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts' running
Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:273:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:263:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:274:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:264:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:275:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:265:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:276:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:266:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:321:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:311:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:322:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:312:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:323:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:313:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:324:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:314:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:503:5: Warning: This declaration shadows an existing declaration.
    uint16 phaseId = uint16(_roundId >> PHASE_OFFSET);
    ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:515:7: Warning: This declaration shadows an existing declaration.
      uint16 phaseId
      ^------------^
crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:485:3: Warning: Function state mutability can be restricted to pure
  function addPhase(
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol:496:3: Warning: Function state mutability can be restricted to pure
  function parseIds(
  ^ (Relevant source part starts here and spans across multiple lines).


INFO:Detectors:
AggregatorProxy.proposedGetRoundData(uint80) (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#343-357) ignores return value by proposedAggregator.getRoundData(_roundId) (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#356)
AggregatorProxy.proposedLatestRoundData() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#370-384) ignores return value by proposedAggregator.latestRoundData() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#383)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
AggregatorProxy.getAnswer(uint256).phaseId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#185) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.getAnswer(uint256).aggregator (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#186) shadows:
	- AggregatorProxy.aggregator() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#389-395) (function)
AggregatorProxy.getTimestamp(uint256).phaseId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#206) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.getTimestamp(uint256).aggregator (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#207) shadows:
	- AggregatorProxy.aggregator() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#389-395) (function)
AggregatorProxy.getRoundData(uint80).phaseId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#270) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.getRoundData(uint80).roundId_scope_0 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#273) shadows:
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#263) (return variable)
AggregatorProxy.getRoundData(uint80).answer_scope_1 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#274) shadows:
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#264) (return variable)
AggregatorProxy.getRoundData(uint80).startedAt_scope_2 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#275) shadows:
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#265) (return variable)
AggregatorProxy.getRoundData(uint80).updatedAt_scope_3 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#276) shadows:
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#266) (return variable)
AggregatorProxy.latestRoundData().roundId_scope_0 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#321) shadows:
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#311) (return variable)
AggregatorProxy.latestRoundData().answer_scope_1 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#322) shadows:
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#312) (return variable)
AggregatorProxy.latestRoundData().startedAt_scope_2 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#323) shadows:
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#313) (return variable)
AggregatorProxy.latestRoundData().updatedAt_scope_3 (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#324) shadows:
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#314) (return variable)
AggregatorProxy.parseIds(uint256).phaseId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#503) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.addPhaseIds(uint80,int256,uint256,uint256,uint80,uint16).phaseId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#515) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#400-406) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
Owned.transferOwnership(address)._to (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#30) lacks a zero-check on :
		- pendingOwner = _to (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#34)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-zero-address-validation
INFO:Detectors:
Parameter Owned.transferOwnership(address)._to (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#30) is not in mixedCase
Parameter AggregatorProxy.getAnswer(uint256)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#178) is not in mixedCase
Parameter AggregatorProxy.getTimestamp(uint256)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#199) is not in mixedCase
Parameter AggregatorProxy.getRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#257) is not in mixedCase
Parameter AggregatorProxy.proposedGetRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#343) is not in mixedCase
Parameter AggregatorProxy.proposeAggregator(address)._aggregator (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#449) is not in mixedCase
Parameter AggregatorProxy.confirmAggregator(address)._aggregator (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#463) is not in mixedCase
Parameter AggregatorProxy.setAggregator(address)._aggregator (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#477) is not in mixedCase
Parameter AggregatorProxy.addPhase(uint16,uint64)._phase (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#486) is not in mixedCase
Parameter AggregatorProxy.addPhase(uint16,uint64)._originalId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#487) is not in mixedCase
Parameter AggregatorProxy.parseIds(uint256)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#497) is not in mixedCase
Parameter EACAggregatorProxy.setController(address)._accessController (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#572) is not in mixedCase
Parameter EACAggregatorProxy.getAnswer(uint256)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#628) is not in mixedCase
Parameter EACAggregatorProxy.getTimestamp(uint256)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#648) is not in mixedCase
Parameter EACAggregatorProxy.getRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#700) is not in mixedCase
Parameter EACAggregatorProxy.proposedGetRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xf9680d99d6c9589e2a93a78a04a279e509205945-EACAggregatorProxy.sol#766) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0xf9680d99d6c9589e2a93a78a04a279e509205945 analyzed (7 contracts with 82 detectors), 34 result(s) found
```

</details>

</details>
