## Base

- Simulation: [https://dashboard.tenderly.co/me/simulator/58c1c588-b8e7-48aa-9a7d-f752906f41cb](https://dashboard.tenderly.co/me/simulator/58c1c588-b8e7-48aa-9a7d-f752906f41cb)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# WrappedTokenGatewayV3 at `0x18CD499E3d7ed42FEbA981ac9236A278E4Cdc2ee`
@@ _owner @@
- 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45
+ 0x9390b1735def18560c509e2d0bc090e9d6ba257a
```

```diff
# unknown contract name at `0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x000000000000000000000000a9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45"
+ "0x0000000000000000000000009390b1735def18560c509e2d0bc090e9d6ba257a"
```

```diff
# ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`
@@ `_roles` key `0x0000000000000000000000000000000000000000000000000000000000000000`.members.0x9390b1735def18560c509e2d0bc090e9d6ba257a @@
- false
+ true
@@ `_roles` key `0x0000000000000000000000000000000000000000000000000000000000000000`.members.0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45 @@
- true
+ false

@@ `_roles` key `0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b`.members.0x9390b1735def18560c509e2d0bc090e9d6ba257a @@
- false
+ true
@@ `_roles` key `0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b`.members.0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45 @@
- true
+ false

```

```diff
# ParaSwapDebtSwapAdapterV3 at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`
@@ _owner @@
- 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45
+ 0x9390b1735def18560c509e2d0bc090e9d6ba257a
```

```diff
# unknown contract name at `0x6533A273F3aC84Df91DCD654D6EBAbA73687e246`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x000000000000000000000000a9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45"
+ "0x0000000000000000000000009390b1735def18560c509e2d0bc090e9d6ba257a"
```

```diff
# OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
@@ `_actionsSets` key `"3"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x8f62eed3e3a09091f7c56028ca385fc153a4b62163fa01cec234115e296d1aad` @@
- true
+ false

```

```diff
# unknown contract name at `0xBA9424d650A4F5c80a0dA641254d1AcCE2A37057`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000034` @@
- "0x000000000000000000000000a9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45"
+ "0x0000000000000000000000009390b1735def18560c509e2d0bc090e9d6ba257a"
```

```diff
# unknown contract name at `0xc85b1E333aecc99340b2320493Fe2d22b8734795`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x000000000000000000000000a9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45"
+ "0x0000000000000000000000009390b1735def18560c509e2d0bc090e9d6ba257a"
```

```diff
# PoolAddressesProvider at `0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D`
@@ _owner @@
- 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45
+ 0x9390b1735def18560c509e2d0bc090e9d6ba257a
@@ Slot `0xfab167ad2009dcb80ee379700bb4bd029d97c1181ed9d961625632c8a6f051c6` @@
- "0x000000000000000000000000a9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45"
+ "0x0000000000000000000000009390b1735def18560c509e2d0bc090e9d6ba257a"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`
    - `RoleGranted(role: 0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b, account: 0x9390b1735def18560c509e2d0bc090e9d6ba257a, sender: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45)`
    - `RoleRevoked(role: 0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b, account: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, sender: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45)`
    - `RoleGranted(role: 0x0000000000000000000000000000000000000000000000000000000000000000, account: 0x9390b1735def18560c509e2d0bc090e9d6ba257a, sender: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45)`
    - `RoleRevoked(role: 0x0000000000000000000000000000000000000000000000000000000000000000, account: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, sender: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45)`
  - PoolAddressesProvider at `0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D`
    - `ACLAdminUpdated(oldAddress: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newAddress: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - unknown contract name at `0x6533A273F3aC84Df91DCD654D6EBAbA73687e246`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - unknown contract name at `0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - unknown contract name at `0xBA9424d650A4F5c80a0dA641254d1AcCE2A37057`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0xba9424d650a4f5c80a0da641254d1acce2a37057","topics":["0x1ab77a654795da4cfe37c33188e862203ade9a5c7f1a9d4957669b3ccbec9e11","0x0000000000000000000000009390b1735def18560c509e2d0bc090e9d6ba257a"],"data":"0x"},"trace_index":null}`
  - unknown contract name at `0xc85b1E333aecc99340b2320493Fe2d22b8734795`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - WrappedTokenGatewayV3 at `0x18CD499E3d7ed42FEbA981ac9236A278E4Cdc2ee`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - ParaSwapDebtSwapAdapterV3 at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
    - `ActionsSetExecuted(id: 3, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x80a2F9a653d3990878cFf8206588fd66699E7f2a: EOA (verification not applicable)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45: Contract (verified) (OptimismBridgeExecutor)
  - 0x80a2f9a653d3990878cff8206588fd66699e7f2a: EOA (verification not applicable)
  - 0x43955b0899ab7232e3a454cf84aedd22ad46fd33: Contract (verified) (ACLManager)
  - 0xe20fcbdbffc4dd138ce8b2e6fbb6cb49777ad64d: Contract (verified) (PoolAddressesProvider)
  - 0x6533a273f3ac84df91dcd654d6ebaba73687e246: Contract (not verified)
  - 0x2f6571d3eb9a4e350c68c36bcd2afe39530078e2: Contract (not verified)
  - 0xba9424d650a4f5c80a0da641254d1acce2a37057: Contract (not verified)
  - 0xc0885d961a2e3e6236cb3e5fbd1aff72149e5d84: EOA (verification not applicable)
  - 0xc85b1e333aecc99340b2320493fe2d22b8734795: Contract (not verified)
  - 0x18cd499e3d7ed42feba981ac9236a278e4cdc2ee: Contract (verified) (WrappedTokenGatewayV3)
  - 0x5f4d15d761528c57a5c30c43c1dab26fc5452731: Contract (verified) (ParaSwapDebtSwapAdapterV3)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for WrappedTokenGatewayV3 at `0x18CD499E3d7ed42FEbA981ac9236A278E4Cdc2ee`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ParaSwapDebtSwapAdapterV3 at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x5f4d15d761528c57a5c30c43c1dab26fc5452731-CLSynchronicityPriceAdapterPegToBase' running
```

</details>

<details>
<summary>View warnings for OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45-CLwstETHSynchronicityPriceAdapter' running
```

</details>

<details>
<summary>View warnings for PoolAddressesProvider at `0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D`</summary>

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
<summary>Slither report for WrappedTokenGatewayV3 at `0x18CD499E3d7ed42FEbA981ac9236A278E4Cdc2ee`</summary>

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
<summary>Slither report for ACLManager at `0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33`</summary>

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
<summary>Slither report for ParaSwapDebtSwapAdapterV3 at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x5f4d15d761528c57a5c30c43c1dab26fc5452731-CLSynchronicityPriceAdapterPegToBase' running
INFO:Detectors:
Variable CLSynchronicityPriceAdapterPegToBase.PEG_TO_BASE (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#19) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.ASSET_TO_PEG (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#24) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DECIMALS (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#29) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DENOMINATOR (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#35) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x5f4d15d761528c57a5c30c43c1dab26fc5452731 analyzed (3 contracts with 87 detectors), 4 result(s) found
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
INFO:Slither:0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45 analyzed (5 contracts with 87 detectors), 5 result(s) found
```

</details>

<details>
<summary>Slither report for PoolAddressesProvider at `0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D`</summary>

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
