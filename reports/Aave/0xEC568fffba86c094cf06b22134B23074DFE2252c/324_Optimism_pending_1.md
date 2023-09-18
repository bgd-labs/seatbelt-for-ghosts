## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/86992a74-d3c5-4b10-a68a-b1599fac5161](https://dashboard.tenderly.co/me/simulator/86992a74-d3c5-4b10-a68a-b1599fac5161)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`
@@ _nextDistributionId @@
- 0
+ 1
@@ `_distributions` key `"0"`.token @@
- 0x0000000000000000000000000000000000000000
+ 0x7f5c764cbc14f9669b88837ca1490cca17c31607

@@ Slot `0xa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4a` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x056e6f6aa4c02ebecce9feda88005ba404ed49db9b1a974df40f97e9bc0406ad"
```

```diff
# OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_actionsSets` key `"34"`.executed @@
- false
+ true

@@ `_queuedActions` key `0xa4a38864cb9784973b33988496f90289af52e57987518424776f2aa7c83cb91f` @@
- true
+ false

```

```diff
# OVMFiatToken (Bridged USD Coin (Optimism)) at `0x7F5c764cBc14f9669B88837ca1490cCa17c31607`
@@ `_balances` key `0x1685d81212580dd4cda287616c2f6f4794927e18` @@
- 0
+ 44428421035

@@ `_balances` key `0x794a61358d6845594f94dc1db02a252b5b4814ad` @@
- 44428421035
+ 0

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`
    - `DistributionAdded(token: 0x7f5c764cbc14f9669b88837ca1490cca17c31607, merkleRoot: 0x056e6f6aa4c02ebecce9feda88005ba404ed49db9b1a974df40f97e9bc0406ad, distributionId: 0)`
  - OVMFiatToken (Bridged USD Coin (Optimism)) at `0x7F5c764cBc14f9669B88837ca1490cCa17c31607`
    - `Transfer(from: 0x794a61358d6845594f94dc1db02a252b5b4814ad, to: 0x1685d81212580dd4cda287616c2f6f4794927e18, value: 44428421035)`
  - OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 34, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x7B74938583Eb03e06042fcB651046BaF0bf15644: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)
  - 0x7b74938583eb03e06042fcb651046baf0bf15644: Contract (verified) (OptRescueMissionPayload)
  - 0x1685d81212580dd4cda287616c2f6f4794927e18: Contract (verified) (AaveMerkleDistributor)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x764594f8e9757ede877b75716f8077162b251460: Contract (verified) (L2Pool)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0xd5256981e08492afc543af2a779af989e9f9f7e7: Contract (not verified)
  - 0x7f5c764cbc14f9669b88837ca1490cca17c31607: Contract (verified) (OVMFiatToken)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
<summary>View warnings for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
<summary>View warnings for OptRescueMissionPayload at `0x7B74938583Eb03e06042fcB651046BaF0bf15644`</summary>

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
<summary>View warnings for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

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
<summary>View warnings for OVMFiatToken (Bridged USD Coin (Optimism)) at `0x7F5c764cBc14f9669B88837ca1490cCa17c31607`</summary>

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
<summary>View warnings for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

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
<summary>View warnings for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

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

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
ERROR:root:Error in 0x1685d81212580dd4cda287616c2f6f4794927e18
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
<summary>Slither report for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
ERROR:root:Error in 0x764594f8e9757ede877b75716f8077162b251460
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
ERROR:root:Error in 0x794a61358d6845594f94dc1db02a252b5b4814ad
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
<summary>Slither report for OptRescueMissionPayload at `0x7B74938583Eb03e06042fcB651046BaF0bf15644`</summary>

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
ERROR:root:Error in 0x7b74938583eb03e06042fcb651046baf0bf15644
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
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

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
ERROR:root:Error in 0x7d9103572be58ffe99dc390e8246f02dcae6f611
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
<summary>Slither report for OVMFiatToken (Bridged USD Coin (Optimism)) at `0x7F5c764cBc14f9669B88837ca1490cCa17c31607`</summary>

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
ERROR:root:Error in 0x7f5c764cbc14f9669b88837ca1490cca17c31607
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
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

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
ERROR:root:Error in 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b
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
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

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
ERROR:root:Error in 0xa97684ead0e402dc232d5a977953df7ecbab3cdb
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

</details>
