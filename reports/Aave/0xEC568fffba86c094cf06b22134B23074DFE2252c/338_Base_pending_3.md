## Base

- Simulation: [https://dashboard.tenderly.co/me/simulator/0fe8f636-033b-41cb-ba61-7e21614b1a0d](https://dashboard.tenderly.co/me/simulator/0fe8f636-033b-41cb-ba61-7e21614b1a0d)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`
@@ `_roles` key `0x939b8dfb57ecef2aea54a93a15e86768b9d4089f1ba61c245e6ec980695f4ca4`.members.0x5f4d15d761528c57a5c30c43c1dab26fc5452731 @@
- false
+ true

```

```diff
# OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
@@ `_queuedActions` key `0xdc3b69d701be9c423f07c0970461710247034c3277620977dd770bf14131d0ed` @@
- true
+ false

@@ `_actionsSets` key `"3"`.executed @@
- false
+ true

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`
    - `RoleGranted(role: 0x939b8dfb57ecef2aea54a93a15e86768b9d4089f1ba61c245e6ec980695f4ca4, account: 0x5f4d15d761528c57a5c30c43c1dab26fc5452731, sender: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45)`
  - OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
    - `ActionsSetExecuted(id: 3, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xA25d9f14CFA40d3227ED9a48B124667dDFfCFdDD: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45: Contract (verified) (OptimismBridgeExecutor)
  - 0xa25d9f14cfa40d3227ed9a48b124667ddffcfddd: Contract (not verified)
  - 0x43955b0899ab7232e3a454cf84aedd22ad46fd33: Contract (verified) (ACLManager)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45-CLwstETHSynchronicityPriceAdapter' running
```

</details>

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`</summary>

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
ERROR:root:Error in 0x43955b0899ab7232e3a454cf84aedd22ad46fd33
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
<summary>Slither report for OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45-CLwstETHSynchronicityPriceAdapter' running
INFO:Detectors:
Variable CLSynchronicityPriceAdapterPegToBase.PEG_TO_BASE (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#19) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.ASSET_TO_PEG (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#24) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DECIMALS (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#29) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DENOMINATOR (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#35) is not in mixedCase
Variable CLwstETHSynchronicityPriceAdapter.STETH (src/contracts/CLwstETHSynchronicityPriceAdapter.sol#21) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45 analyzed (5 contracts with 82 detectors), 5 result(s) found
```

</details>

</details>
