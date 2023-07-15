## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/7d4c2c9a-95a8-4a4c-b8a5-c86e7aedf66c](https://dashboard.tenderly.co/me/simulator/7d4c2c9a-95a8-4a4c-b8a5-c86e7aedf66c)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`
@@ `_reserves` key `0x4200000000000000000000000000000000000042`.configuration.data @@
- 1316403645856964833723981055038312762820444070491908350273474025385626552
+ 1316403645856964833723981055037481995323078498071343470860798810025626552

# decoded configuration.data for key `0x4200000000000000000000000000000000000042` (symbol: OP)
@@ configuration.data.supplyCap @@
- 20000000
+ 10000000

```

```diff
# OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0x65e89ce0368048c0f66eca2bf551ba92461246194b8ed3d62b3f6c7ef673fc52` @@
- true
+ false

@@ `_actionsSets` key `"25"`.executed @@
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
    - `SupplyCapChanged(asset: 0x4200000000000000000000000000000000000042, oldSupplyCap: 20000000, newSupplyCap: 10000000)`
  - OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 25, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xE1Dd796dBEB5A67CE37CbC52dCD164D0535c901E: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)
  - 0xe1dd796dbeb5a67ce37cbc52dcd164d0535c901e: Contract (verified) (AaveV3OptimismUpdate20230710Payload)
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
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for AaveV3ConfigEngine at `0x7A9A9c14B35E58ffa1cC84aB421acE0FdcD289E3`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/bin/crytic-compile", line 8, in <module>
    sys.exit(main())
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/__main__.py", line 221, in main
    compilations = compile_all(**vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>View warnings for AaveV3OptimismUpdate20230710Payload at `0xE1Dd796dBEB5A67CE37CbC52dCD164D0535c901E`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xe1dd796dbeb5a67ce37cbc52dcd164d0535c901e-AaveV3EthereumUpdate20230507Payload' running
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
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0x29081f7ab5a644716efcdc10d5c926c5fee9f72b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0x764594f8e9757ede877b75716f8077162b251460
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0x794a61358d6845594f94dc1db02a252b5b4814ad
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for AaveV3ConfigEngine at `0x7A9A9c14B35E58ffa1cC84aB421acE0FdcD289E3`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0x7a9a9c14b35e58ffa1cc84ab421ace0fdcd289e3
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0x7d9103572be58ffe99dc390e8246f02dcae6f611
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0x8145edddf43f50276641b55bd3ad95944510021e
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
ERROR:root:Error in 0xa97684ead0e402dc232d5a977953df7ecbab3cdb
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 814, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 91, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 646, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 323, in compile
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
<summary>Slither report for AaveV3OptimismUpdate20230710Payload at `0xE1Dd796dBEB5A67CE37CbC52dCD164D0535c901E`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xe1dd796dbeb5a67ce37cbc52dcd164d0535c901e-AaveV3EthereumUpdate20230507Payload' running
INFO:Detectors:
AaveV2RateUpdatePayloadBase.execute() (src/AaveV3Update_20230507/AaveV3Update_20230507.sol#19-29) has external calls inside a loop: poolConfigurator.setReserveInterestRateStrategyAddress(rateUpdates[i].asset,rateUpdates[i].interestRateStrategyAddress) (src/AaveV3Update_20230507/AaveV3Update_20230507.sol#24-27)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation/#calls-inside-a-loop
INFO:Detectors:
Function IAaveOracle.WETH() (lib/aave-address-book/src/AaveV2.sol#818) is not in mixedCase
Function IDefaultInterestRateStrategy.EXCESS_UTILIZATION_RATE() (lib/aave-address-book/src/AaveV2.sol#918) is not in mixedCase
Function IDefaultInterestRateStrategy.OPTIMAL_UTILIZATION_RATE() (lib/aave-address-book/src/AaveV2.sol#920) is not in mixedCase
Constant AaveV2AvalancheAssets.WETHe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#62) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WETHe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#64) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WETHe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#66) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WETHe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#68) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WETHe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#70) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WETHe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#72-73) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.DAIe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#75) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.DAIe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#77) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.DAIe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#79) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.DAIe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#81) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.DAIe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#83) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.DAIe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#85-86) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDTe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#88) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDTe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#90) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDTe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#92) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDTe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#94) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDTe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#96) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDTe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#98-99) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDCe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#101) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDCe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#103) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDCe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#105) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDCe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#107) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDCe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#109) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.USDCe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#111-112) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.AAVEe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#114) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.AAVEe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#116) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.AAVEe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#118) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.AAVEe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#120) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.AAVEe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#122) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.AAVEe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#124-125) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WBTCe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#127) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WBTCe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#129) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WBTCe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#131) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WBTCe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#133) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WBTCe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#135) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2AvalancheAssets.WBTCe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#137-138) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.xSUSHI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#344) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.xSUSHI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#346) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.xSUSHI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#348) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.xSUSHI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#350) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.xSUSHI_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#352) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.xSUSHI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#354-355) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.renFIL_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#357) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.renFIL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#359) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.renFIL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#361) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.renFIL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#363) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.renFIL_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#365) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.renFIL_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#367-368) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.stETH_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#445) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.stETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#447) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.stETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#449) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.stETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#451) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.stETH_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#453) is not in UPPER_CASE_WITH_UNDERSCORES
Constant AaveV2EthereumAssets.stETH_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#455-456) is not in UPPER_CASE_WITH_UNDERSCORES
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Variable AaveV2AvalancheAssets.AAVEe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#116) is too similar to AaveV2AvalancheAssets.AAVEe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#120)
Variable AaveV2AvalancheAssets.AAVEe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#116) is too similar to AaveV2AvalancheAssets.AAVEe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#118)
Variable AaveV2AvalancheAssets.AAVEe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#120) is too similar to AaveV2AvalancheAssets.AAVEe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#118)
Variable AaveV2AvalancheAssets.DAIe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#77) is too similar to AaveV2AvalancheAssets.DAIe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#81)
Variable AaveV2AvalancheAssets.DAIe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#77) is too similar to AaveV2AvalancheAssets.DAIe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#79)
Variable AaveV2AvalancheAssets.DAIe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#81) is too similar to AaveV2AvalancheAssets.DAIe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#79)
Variable AaveV2AvalancheAssets.USDCe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#103) is too similar to AaveV2AvalancheAssets.USDCe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#107)
Variable AaveV2AvalancheAssets.USDCe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#103) is too similar to AaveV2AvalancheAssets.USDCe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#105)
Variable AaveV2AvalancheAssets.USDCe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#103) is too similar to AaveV2AvalancheAssets.USDTe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#90)
Variable AaveV2AvalancheAssets.USDCe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#107) is too similar to AaveV2AvalancheAssets.USDCe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#105)
Variable AaveV2AvalancheAssets.USDCe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#107) is too similar to AaveV2AvalancheAssets.USDTe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#94)
Variable AaveV2AvalancheAssets.USDCe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#111-112) is too similar to AaveV2AvalancheAssets.USDTe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#98-99)
Variable AaveV2AvalancheAssets.USDCe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#109) is too similar to AaveV2AvalancheAssets.USDTe_ORACLE (lib/aave-address-book/src/AaveV2Avalanche.sol#96)
Variable AaveV2AvalancheAssets.USDTe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#90) is too similar to AaveV2AvalancheAssets.USDTe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#94)
Variable AaveV2AvalancheAssets.USDCe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#101) is too similar to AaveV2AvalancheAssets.USDTe_UNDERLYING (lib/aave-address-book/src/AaveV2Avalanche.sol#88)
Variable AaveV2AvalancheAssets.USDCe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#105) is too similar to AaveV2AvalancheAssets.USDTe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#92)
Variable AaveV2AvalancheAssets.USDTe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#90) is too similar to AaveV2AvalancheAssets.USDTe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#92)
Variable AaveV2AvalancheAssets.USDTe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#94) is too similar to AaveV2AvalancheAssets.USDTe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#92)
Variable AaveV2AvalancheAssets.WAVAX_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#142) is too similar to AaveV2AvalancheAssets.WAVAX_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#146)
Variable AaveV2AvalancheAssets.WAVAX_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#142) is too similar to AaveV2AvalancheAssets.WAVAX_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#144)
Variable AaveV2AvalancheAssets.WAVAX_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#146) is too similar to AaveV2AvalancheAssets.WAVAX_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#144)
Variable AaveV2AvalancheAssets.WBTCe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#137-138) is too similar to AaveV2AvalancheAssets.WETHe_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Avalanche.sol#72-73)
Variable AaveV2AvalancheAssets.WBTCe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#129) is too similar to AaveV2AvalancheAssets.WBTCe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#133)
Variable AaveV2AvalancheAssets.WBTCe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#133) is too similar to AaveV2AvalancheAssets.WBTCe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#131)
Variable AaveV2AvalancheAssets.WBTCe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#129) is too similar to AaveV2AvalancheAssets.WBTCe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#131)
Variable AaveV2AvalancheAssets.WETHe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#64) is too similar to AaveV2AvalancheAssets.WETHe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#68)
Variable AaveV2AvalancheAssets.WETHe_A_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#64) is too similar to AaveV2AvalancheAssets.WETHe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#66)
Variable AaveV2AvalancheAssets.WETHe_S_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#68) is too similar to AaveV2AvalancheAssets.WETHe_V_TOKEN (lib/aave-address-book/src/AaveV2Avalanche.sol#66)
Variable AaveV2EthereumAssets.AAVE_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#134) is too similar to AaveV2EthereumAssets.AAVE_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#138)
Variable AaveV2EthereumAssets.AAVE_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#134) is too similar to AaveV2EthereumAssets.AAVE_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#136)
Variable AaveV2EthereumAssets.AAVE_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#138) is too similar to AaveV2EthereumAssets.AAVE_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#136)
Variable AaveV2EthereumAssets.AMPL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#384) is too similar to AaveV2EthereumAssets.AMPL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#388)
Variable AaveV2EthereumAssets.AMPL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#384) is too similar to AaveV2EthereumAssets.AMPL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#386)
Variable AaveV2EthereumAssets.AMPL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#388) is too similar to AaveV2EthereumAssets.AMPL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#386)
Variable AaveV2EthereumAssets.BAL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#334) is too similar to AaveV2EthereumAssets.BAL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#338)
Variable AaveV2EthereumAssets.BAL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#334) is too similar to AaveV2EthereumAssets.BAL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#336)
Variable AaveV2EthereumAssets.BAL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#334) is too similar to AaveV2EthereumAssets.BAT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#147)
Variable AaveV2EthereumAssets.BAL_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#342) is too similar to AaveV2EthereumAssets.BAT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#155)
Variable AaveV2EthereumAssets.BAL_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#342) is too similar to AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180)
Variable AaveV2EthereumAssets.BAL_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#342) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.BAL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#338) is too similar to AaveV2EthereumAssets.BAT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#151)
Variable AaveV2EthereumAssets.BAL_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#332) is too similar to AaveV2EthereumAssets.BAT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#145)
Variable AaveV2EthereumAssets.BAL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#338) is too similar to AaveV2EthereumAssets.BAL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#336)
Variable AaveV2EthereumAssets.BAL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#336) is too similar to AaveV2EthereumAssets.BAT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#149)
Variable AaveV2EthereumAssets.BAT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#147) is too similar to AaveV2EthereumAssets.BAT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#151)
Variable AaveV2EthereumAssets.BAT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#147) is too similar to AaveV2EthereumAssets.BAT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#149)
Variable AaveV2EthereumAssets.BAT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#155) is too similar to AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180)
Variable AaveV2EthereumAssets.BAT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#151) is too similar to AaveV2EthereumAssets.BAT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#149)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#309) is too similar to AaveV2EthereumAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#313)
Variable AaveV2EthereumAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#309) is too similar to AaveV2EthereumAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#311)
Variable AaveV2EthereumAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#309) is too similar to AaveV2EthereumAssets.CVX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#484)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#313) is too similar to AaveV2EthereumAssets.CVX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#488)
Variable AaveV2EthereumAssets.CRV_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#307) is too similar to AaveV2EthereumAssets.CVX_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#482)
Variable AaveV2EthereumAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#313) is too similar to AaveV2EthereumAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#311)
Variable AaveV2EthereumAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#311) is too similar to AaveV2EthereumAssets.CVX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#486)
Variable AaveV2EthereumAssets.CVX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#484) is too similar to AaveV2EthereumAssets.CVX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#488)
Variable AaveV2EthereumAssets.CVX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#484) is too similar to AaveV2EthereumAssets.CVX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#486)
Variable AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.CVX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#488) is too similar to AaveV2EthereumAssets.CVX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#486)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#410)
Variable AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176) is too similar to AaveV2EthereumAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#414)
Variable AaveV2EthereumAssets.DAI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#170) is too similar to AaveV2EthereumAssets.DPI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#408)
Variable AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176) is too similar to AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174)
Variable AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174) is too similar to AaveV2EthereumAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#412)
Variable AaveV2EthereumAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#410) is too similar to AaveV2EthereumAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#414)
Variable AaveV2EthereumAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#410) is too similar to AaveV2EthereumAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#412)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#414) is too similar to AaveV2EthereumAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#412)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188) is too similar to AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464)
Variable AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188) is too similar to AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250)
Variable AaveV2EthereumAssets.ENJ_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#182) is too similar to AaveV2EthereumAssets.ENS_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#458)
Variable AaveV2EthereumAssets.ENJ_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#182) is too similar to AaveV2EthereumAssets.REN_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#244)
Variable AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188) is too similar to AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186)
Variable AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186) is too similar to AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462)
Variable AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460) is too similar to AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464)
Variable AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460) is too similar to AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462)
Variable AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460) is too similar to AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464) is too similar to AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250)
Variable AaveV2EthereumAssets.ENS_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#458) is too similar to AaveV2EthereumAssets.REN_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#244)
Variable AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464) is too similar to AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462)
Variable AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.FEI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#435) is too similar to AaveV2EthereumAssets.FEI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#439)
Variable AaveV2EthereumAssets.FEI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#435) is too similar to AaveV2EthereumAssets.FEI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#437)
Variable AaveV2EthereumAssets.FEI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#435) is too similar to AaveV2EthereumAssets.YFI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#98)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.FEI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#439) is too similar to AaveV2EthereumAssets.YFI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#102)
Variable AaveV2EthereumAssets.FEI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#433) is too similar to AaveV2EthereumAssets.YFI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#96)
Variable AaveV2EthereumAssets.FEI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#439) is too similar to AaveV2EthereumAssets.FEI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#437)
Variable AaveV2EthereumAssets.FEI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#437) is too similar to AaveV2EthereumAssets.YFI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#100)
Variable AaveV2EthereumAssets.FRAX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#422) is too similar to AaveV2EthereumAssets.FRAX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#426)
Variable AaveV2EthereumAssets.FRAX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#422) is too similar to AaveV2EthereumAssets.FRAX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#424)
Variable AaveV2EthereumAssets.FRAX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#426) is too similar to AaveV2EthereumAssets.FRAX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#424)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.GUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#321) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.KNC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#196) is too similar to AaveV2EthereumAssets.KNC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#200)
Variable AaveV2EthereumAssets.KNC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#196) is too similar to AaveV2EthereumAssets.KNC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#198)
Variable AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204) is too similar to AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242)
Variable AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.KNC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#200) is too similar to AaveV2EthereumAssets.KNC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#198)
Variable AaveV2EthereumAssets.LINK_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#208) is too similar to AaveV2EthereumAssets.LINK_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#212)
Variable AaveV2EthereumAssets.LINK_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#208) is too similar to AaveV2EthereumAssets.LINK_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#210)
Variable AaveV2EthereumAssets.LINK_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#212) is too similar to AaveV2EthereumAssets.LINK_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#210)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.MANA_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#221) is too similar to AaveV2EthereumAssets.MANA_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#225)
Variable AaveV2EthereumAssets.MANA_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#221) is too similar to AaveV2EthereumAssets.MANA_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#223)
Variable AaveV2EthereumAssets.AAVE_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#142-143) is too similar to AaveV2EthereumAssets.MANA_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#229-230)
Variable AaveV2EthereumAssets.MANA_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#225) is too similar to AaveV2EthereumAssets.MANA_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#223)
Variable AaveV2EthereumAssets.MKR_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#234) is too similar to AaveV2EthereumAssets.MKR_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#238)
Variable AaveV2EthereumAssets.MKR_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#234) is too similar to AaveV2EthereumAssets.MKR_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#236)
Variable AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.MKR_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#238) is too similar to AaveV2EthereumAssets.MKR_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#236)
Variable AaveV2EthereumAssets.ONE_INCH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#496) is too similar to AaveV2EthereumAssets.ONE_INCH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#500)
Variable AaveV2EthereumAssets.ONE_INCH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#496) is too similar to AaveV2EthereumAssets.ONE_INCH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#498)
Variable AaveV2EthereumAssets.ONE_INCH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#500) is too similar to AaveV2EthereumAssets.ONE_INCH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#498)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.RAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#372)
Variable AaveV2EthereumAssets.RAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#372) is too similar to AaveV2EthereumAssets.RAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#376)
Variable AaveV2EthereumAssets.RAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#372) is too similar to AaveV2EthereumAssets.RAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#374)
Variable AaveV2EthereumAssets.BAT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#155) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176) is too similar to AaveV2EthereumAssets.RAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#376)
Variable AaveV2EthereumAssets.DAI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#170) is too similar to AaveV2EthereumAssets.RAI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#370)
Variable AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174) is too similar to AaveV2EthereumAssets.RAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#374)
Variable AaveV2EthereumAssets.RAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#376) is too similar to AaveV2EthereumAssets.RAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#374)
Variable AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246) is too similar to AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250)
Variable AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.SNX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#258) is too similar to AaveV2EthereumAssets.SNX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#262)
Variable AaveV2EthereumAssets.SNX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#258) is too similar to AaveV2EthereumAssets.SNX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#260)
Variable AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.SNX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#262) is too similar to AaveV2EthereumAssets.SNX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#260)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.UNI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#122) is too similar to AaveV2EthereumAssets.UNI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#126)
Variable AaveV2EthereumAssets.UNI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#122) is too similar to AaveV2EthereumAssets.UNI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#124)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.UNI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#126) is too similar to AaveV2EthereumAssets.UNI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#124)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.UST_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#472) is too similar to AaveV2EthereumAssets.UST_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#476)
Variable AaveV2EthereumAssets.UST_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#472) is too similar to AaveV2EthereumAssets.UST_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#474)
Variable AaveV2EthereumAssets.BAT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#155) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.UST_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#476) is too similar to AaveV2EthereumAssets.UST_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#474)
Variable AaveV2EthereumAssets.WBTC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#80-81) is too similar to AaveV2EthereumAssets.WETH_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#93-94)
Variable AaveV2EthereumAssets.WBTC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#72) is too similar to AaveV2EthereumAssets.WBTC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#76)
Variable AaveV2EthereumAssets.WBTC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#72) is too similar to AaveV2EthereumAssets.WBTC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#74)
Variable AaveV2EthereumAssets.WBTC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#76) is too similar to AaveV2EthereumAssets.WBTC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#74)
Variable AaveV2EthereumAssets.WETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#85) is too similar to AaveV2EthereumAssets.WETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#89)
Variable AaveV2EthereumAssets.WETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#85) is too similar to AaveV2EthereumAssets.WETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#87)
Variable AaveV2EthereumAssets.WETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#89) is too similar to AaveV2EthereumAssets.WETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#87)
Variable AaveV2EthereumAssets.YFI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#98) is too similar to AaveV2EthereumAssets.YFI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#102)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.YFI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#98) is too similar to AaveV2EthereumAssets.YFI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#100)
Variable AaveV2EthereumAssets.YFI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#102) is too similar to AaveV2EthereumAssets.YFI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#100)
Variable AaveV2EthereumAssets.ZRX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#110) is too similar to AaveV2EthereumAssets.ZRX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#114)
Variable AaveV2EthereumAssets.ZRX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#110) is too similar to AaveV2EthereumAssets.ZRX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#112)
Variable AaveV2EthereumAssets.ZRX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#114) is too similar to AaveV2EthereumAssets.ZRX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#112)
Variable AaveV2EthereumAssets.renFIL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#359) is too similar to AaveV2EthereumAssets.renFIL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#363)
Variable AaveV2EthereumAssets.renFIL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#359) is too similar to AaveV2EthereumAssets.renFIL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#361)
Variable AaveV2EthereumAssets.renFIL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#363) is too similar to AaveV2EthereumAssets.renFIL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#361)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.stETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#447) is too similar to AaveV2EthereumAssets.stETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#451)
Variable AaveV2EthereumAssets.stETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#447) is too similar to AaveV2EthereumAssets.stETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#449)
Variable AaveV2EthereumAssets.stETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#451) is too similar to AaveV2EthereumAssets.stETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#449)
Variable AaveV2EthereumAssets.xSUSHI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#346) is too similar to AaveV2EthereumAssets.xSUSHI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#350)
Variable AaveV2EthereumAssets.xSUSHI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#346) is too similar to AaveV2EthereumAssets.xSUSHI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#348)
Variable AaveV2EthereumAssets.xSUSHI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#350) is too similar to AaveV2EthereumAssets.xSUSHI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#348)
Variable AaveV2PolygonAssets.AAVE_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#136) is too similar to AaveV2PolygonAssets.AAVE_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#140)
Variable AaveV2PolygonAssets.AAVE_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#136) is too similar to AaveV2PolygonAssets.AAVE_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#138)
Variable AaveV2PolygonAssets.AAVE_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#140) is too similar to AaveV2PolygonAssets.AAVE_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#138)
Variable AaveV2PolygonAssets.BAL_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#162) is too similar to AaveV2PolygonAssets.BAL_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#166)
Variable AaveV2PolygonAssets.BAL_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#162) is too similar to AaveV2PolygonAssets.BAL_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#164)
Variable AaveV2PolygonAssets.BAL_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#170) is too similar to AaveV2PolygonAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#67)
Variable AaveV2PolygonAssets.BAL_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#166) is too similar to AaveV2PolygonAssets.BAL_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#164)
Variable AaveV2PolygonAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#186) is too similar to AaveV2PolygonAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#190)
Variable AaveV2PolygonAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#186) is too similar to AaveV2PolygonAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#188)
Variable AaveV2PolygonAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#190) is too similar to AaveV2PolygonAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#188)
Variable AaveV2PolygonAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#59) is too similar to AaveV2PolygonAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#63)
Variable AaveV2PolygonAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#59) is too similar to AaveV2PolygonAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#61)
Variable AaveV2PolygonAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#63) is too similar to AaveV2PolygonAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#61)
Variable AaveV2PolygonAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#59) is too similar to AaveV2PolygonAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#174)
Variable AaveV2PolygonAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#174) is too similar to AaveV2PolygonAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#178)
Variable AaveV2PolygonAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#174) is too similar to AaveV2PolygonAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#176)
Variable AaveV2PolygonAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#67) is too similar to AaveV2PolygonAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#182)
Variable AaveV2PolygonAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#63) is too similar to AaveV2PolygonAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#178)
Variable AaveV2PolygonAssets.DAI_UNDERLYING (lib/aave-address-book/src/AaveV2Polygon.sol#57) is too similar to AaveV2PolygonAssets.DPI_UNDERLYING (lib/aave-address-book/src/AaveV2Polygon.sol#172)
Variable AaveV2PolygonAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#61) is too similar to AaveV2PolygonAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#176)
Variable AaveV2PolygonAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#178) is too similar to AaveV2PolygonAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#176)
Variable AaveV2PolygonAssets.GHST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#157-158) is too similar to AaveV2PolygonAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#92-93)
Variable AaveV2PolygonAssets.GHST_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#149) is too similar to AaveV2PolygonAssets.GHST_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#153)
Variable AaveV2PolygonAssets.GHST_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#149) is too similar to AaveV2PolygonAssets.GHST_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#151)
Variable AaveV2PolygonAssets.GHST_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#153) is too similar to AaveV2PolygonAssets.GHST_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#151)
Variable AaveV2PolygonAssets.LINK_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#211) is too similar to AaveV2PolygonAssets.LINK_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#215)
Variable AaveV2PolygonAssets.LINK_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#211) is too similar to AaveV2PolygonAssets.LINK_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#213)
Variable AaveV2PolygonAssets.LINK_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#215) is too similar to AaveV2PolygonAssets.LINK_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#213)
Variable AaveV2PolygonAssets.SUSHI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#198) is too similar to AaveV2PolygonAssets.SUSHI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#202)
Variable AaveV2PolygonAssets.SUSHI_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#198) is too similar to AaveV2PolygonAssets.SUSHI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#200)
Variable AaveV2PolygonAssets.SUSHI_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#202) is too similar to AaveV2PolygonAssets.SUSHI_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#200)
Variable AaveV2PolygonAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#71) is too similar to AaveV2PolygonAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#75)
Variable AaveV2PolygonAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#71) is too similar to AaveV2PolygonAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#73)
Variable AaveV2PolygonAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#71) is too similar to AaveV2PolygonAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#84)
Variable AaveV2PolygonAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#79-80) is too similar to AaveV2PolygonAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#92-93)
Variable AaveV2PolygonAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Polygon.sol#77) is too similar to AaveV2PolygonAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Polygon.sol#90)
Variable AaveV2PolygonAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#75) is too similar to AaveV2PolygonAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#88)
Variable AaveV2PolygonAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Polygon.sol#69) is too similar to AaveV2PolygonAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Polygon.sol#82)
Variable AaveV2PolygonAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#75) is too similar to AaveV2PolygonAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#73)
Variable AaveV2PolygonAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#73) is too similar to AaveV2PolygonAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#86)
Variable AaveV2PolygonAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#84) is too similar to AaveV2PolygonAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#88)
Variable AaveV2PolygonAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#84) is too similar to AaveV2PolygonAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#86)
Variable AaveV2PolygonAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#88) is too similar to AaveV2PolygonAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#86)
Variable AaveV2PolygonAssets.WBTC_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#97) is too similar to AaveV2PolygonAssets.WBTC_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#101)
Variable AaveV2PolygonAssets.WBTC_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#97) is too similar to AaveV2PolygonAssets.WBTC_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#99)
Variable AaveV2PolygonAssets.WBTC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#105-106) is too similar to AaveV2PolygonAssets.WETH_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Polygon.sol#118-119)
Variable AaveV2PolygonAssets.WBTC_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#101) is too similar to AaveV2PolygonAssets.WBTC_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#99)
Variable AaveV2PolygonAssets.WETH_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#110) is too similar to AaveV2PolygonAssets.WETH_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#114)
Variable AaveV2PolygonAssets.WETH_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#110) is too similar to AaveV2PolygonAssets.WETH_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#112)
Variable AaveV2PolygonAssets.WETH_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#114) is too similar to AaveV2PolygonAssets.WETH_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#112)
Variable AaveV2PolygonAssets.WMATIC_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#123) is too similar to AaveV2PolygonAssets.WMATIC_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#127)
Variable AaveV2PolygonAssets.WMATIC_A_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#123) is too similar to AaveV2PolygonAssets.WMATIC_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#125)
Variable AaveV2PolygonAssets.WMATIC_S_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#127) is too similar to AaveV2PolygonAssets.WMATIC_V_TOKEN (lib/aave-address-book/src/AaveV2Polygon.sol#125)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#variable-names-too-similar
INFO:Slither:0xe1dd796dbeb5a67ce37cbc52dcd164d0535c901e analyzed (21 contracts with 82 detectors), 517 result(s) found
```

</details>

</details>
