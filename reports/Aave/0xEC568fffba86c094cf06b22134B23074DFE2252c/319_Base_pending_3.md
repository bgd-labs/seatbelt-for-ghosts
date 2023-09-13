## Base

- Simulation: [https://dashboard.tenderly.co/me/simulator/12b94996-cc6a-46e7-ab45-d21370a2afa3](https://dashboard.tenderly.co/me/simulator/12b94996-cc6a-46e7-ab45-d21370a2afa3)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`
@@ `_roles` key `0x8aa855a911518ecfbe5bc3088c8f3dda7badf130faaf8ace33fdc33828e18167`.members.0x4a4c73d563395ad827511f70097d4ef82e653805 @@
- false
+ true

```

```diff
# OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
@@ `_actionsSets` key `"1"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x3d609e41dd6e2a933bfeb1ede55fc331350428a4d8eaaea38f9cedb39afbb50d` @@
- true
+ false

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`
    - `RoleGranted(role: 0x8aa855a911518ecfbe5bc3088c8f3dda7badf130faaf8ace33fdc33828e18167, account: 0x4a4c73d563395ad827511f70097d4ef82e653805, sender: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45)`
  - OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
    - `ActionsSetExecuted(id: 1, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x889c0cc3283DB588A34E89Ad1E8F25B0fc827b4b: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45: Contract (verified) (OptimismBridgeExecutor)
  - 0x889c0cc3283db588a34e89ad1e8f25b0fc827b4b: Contract (not verified)
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
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 647, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 132, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 554, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 327, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
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
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 647, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 132, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 554, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 327, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden
ERROR:root:Error in 0x43955b0899ab7232e3a454cf84aedd22ad46fd33
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 647, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 132, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 554, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 327, in compile
    with urllib.request.urlopen(req) as response:
  File "/usr/lib/python3.10/urllib/request.py", line 216, in urlopen
    return opener.open(url, data, timeout)
  File "/usr/lib/python3.10/urllib/request.py", line 525, in open
    response = meth(req, response)
  File "/usr/lib/python3.10/urllib/request.py", line 634, in http_response
    response = self.parent.error(
  File "/usr/lib/python3.10/urllib/request.py", line 563, in error
    return self._call_chain(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 496, in _call_chain
    result = func(*args)
  File "/usr/lib/python3.10/urllib/request.py", line 643, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 403: Forbidden

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
