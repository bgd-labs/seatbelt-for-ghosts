## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/f6429fad-5881-4e37-b23f-8a98bdb639de](https://dashboard.tenderly.co/me/simulator/f6429fad-5881-4e37-b23f-8a98bdb639de)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`
@@ `_reserves` key `0xfa68fb4628dff1028cfec22b4162fccd0d45efb6`.configuration.data @@
- 753997832241162623639981390673975803404879739492008
+ 753997833287929670320602640585723863375651093092008

# decoded configuration.data for key `0xfa68fb4628dff1028cfec22b4162fccd0d45efb6` (symbol: MaticX)
@@ configuration.data.supplyCap @@
- 38000000
+ 50600000

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_queuedActions` key `0xda0fa5c2b0e21508c8d841d02648fb46d680602fa0dd54f5e4afb7ace9e806cd` @@
- true
+ false

@@ `_actionsSets` key `"50"`.executed @@
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
    - `SupplyCapChanged(asset: 0xfa68fb4628dff1028cfec22b4162fccd0d45efb6, oldSupplyCap: 38000000, newSupplyCap: 50600000)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 50, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xbAcBe678e2C59343024Fd5755262c7b0f77867D1: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0xbacbe678e2c59343024fd5755262c7b0f77867d1: Contract (verified) (AaveV3_Pol_CapsUpdates_20231107_Payload)
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
<summary>View warnings for AaveV3_Pol_CapsUpdates_20231107_Payload at `0xbAcBe678e2C59343024Fd5755262c7b0f77867D1`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xbacbe678e2c59343024fd5755262c7b0f77867d1-ProposalPayload' running
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

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
ERROR:root:Error in 0x794a61358d6845594f94dc1db02a252b5b4814ad
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8145eddDf43f50276641b55bd3AD95944510021E` with implementation PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

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
ERROR:root:Error in 0x8145edddf43f50276641b55bd3ad95944510021e
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
<summary>Slither report for PoolConfigurator at `0xADf86b537eF08591c2777E144322E8b0Ca7E82a7`</summary>

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
ERROR:root:Error in 0xadf86b537ef08591c2777e144322e8b0ca7e82a7
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
<summary>Slither report for Pool at `0xb77fc84a549ecc0b410d6fa15159C2df207545a3`</summary>

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
ERROR:root:Error in 0xb77fc84a549ecc0b410d6fa15159c2df207545a3
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
<summary>Slither report for AaveV3_Pol_CapsUpdates_20231107_Payload at `0xbAcBe678e2C59343024Fd5755262c7b0f77867D1`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xbacbe678e2c59343024fd5755262c7b0f77867d1-ProposalPayload' running
INFO:Detectors:
Function IAaveOracle.WETH() (lib/aave-address-book/src/AaveV2.sol#816) is not in mixedCase
Function IDefaultInterestRateStrategy.EXCESS_UTILIZATION_RATE() (lib/aave-address-book/src/AaveV2.sol#916) is not in mixedCase
Function IDefaultInterestRateStrategy.OPTIMAL_UTILIZATION_RATE() (lib/aave-address-book/src/AaveV2.sol#918) is not in mixedCase
Constant AaveV2Ethereum.lendingRateOracle (lib/aave-address-book/src/AaveV2Ethereum.sol#18-19) is not in UPPER_CASE_WITH_UNDERSCORES
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
Variable AaveV2EthereumAssets.BAL_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#342) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.BAL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#338) is too similar to AaveV2EthereumAssets.BAT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#151)
Variable AaveV2EthereumAssets.BAL_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#332) is too similar to AaveV2EthereumAssets.BAT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#145)
Variable AaveV2EthereumAssets.BAL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#338) is too similar to AaveV2EthereumAssets.BAL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#336)
Variable AaveV2EthereumAssets.BAL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#336) is too similar to AaveV2EthereumAssets.BAT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#149)
Variable AaveV2EthereumAssets.BAT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#155) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.BAT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#155) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.BAT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#147) is too similar to AaveV2EthereumAssets.BAT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#151)
Variable AaveV2EthereumAssets.BAT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#151) is too similar to AaveV2EthereumAssets.BAT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#149)
Variable AaveV2EthereumAssets.BAT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#147) is too similar to AaveV2EthereumAssets.BAT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#149)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.BUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#167-168) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.BUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#165) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.BUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#163) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#309) is too similar to AaveV2EthereumAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#313)
Variable AaveV2EthereumAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#309) is too similar to AaveV2EthereumAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#311)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.CRV_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#317) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#313) is too similar to AaveV2EthereumAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#311)
Variable AaveV2EthereumAssets.CRV_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#309) is too similar to AaveV2EthereumAssets.CVX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#484)
Variable AaveV2EthereumAssets.CVX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#484) is too similar to AaveV2EthereumAssets.CVX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#488)
Variable AaveV2EthereumAssets.CVX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#484) is too similar to AaveV2EthereumAssets.CVX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#486)
Variable AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.CRV_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#313) is too similar to AaveV2EthereumAssets.CVX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#488)
Variable AaveV2EthereumAssets.CRV_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#307) is too similar to AaveV2EthereumAssets.CVX_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#482)
Variable AaveV2EthereumAssets.CRV_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#311) is too similar to AaveV2EthereumAssets.CVX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#486)
Variable AaveV2EthereumAssets.CVX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#488) is too similar to AaveV2EthereumAssets.CVX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#486)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#410)
Variable AaveV2EthereumAssets.BAL_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#342) is too similar to AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180)
Variable AaveV2EthereumAssets.BAT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#155) is too similar to AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176) is too similar to AaveV2EthereumAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#414)
Variable AaveV2EthereumAssets.DAI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#170) is too similar to AaveV2EthereumAssets.DPI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#408)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174)
Variable AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176) is too similar to AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174)
Variable AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174) is too similar to AaveV2EthereumAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#412)
Variable AaveV2EthereumAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#410) is too similar to AaveV2EthereumAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#414)
Variable AaveV2EthereumAssets.DPI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#410) is too similar to AaveV2EthereumAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#412)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.DPI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#414) is too similar to AaveV2EthereumAssets.DPI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#412)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.ENJ_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#182) is too similar to AaveV2EthereumAssets.ENS_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#458)
Variable AaveV2EthereumAssets.ENJ_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#182) is too similar to AaveV2EthereumAssets.REN_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#244)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186)
Variable AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188) is too similar to AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186)
Variable AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186) is too similar to AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462)
Variable AaveV2EthereumAssets.ENJ_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#186) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460)
Variable AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460) is too similar to AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464)
Variable AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460) is too similar to AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462)
Variable AaveV2EthereumAssets.ENS_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#460) is too similar to AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188) is too similar to AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464)
Variable AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464) is too similar to AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250)
Variable AaveV2EthereumAssets.ENS_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#458) is too similar to AaveV2EthereumAssets.REN_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#244)
Variable AaveV2EthereumAssets.ENS_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#464) is too similar to AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462)
Variable AaveV2EthereumAssets.ENS_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#462) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.FEI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#435) is too similar to AaveV2EthereumAssets.FEI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#439)
Variable AaveV2EthereumAssets.FEI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#435) is too similar to AaveV2EthereumAssets.FEI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#437)
Variable AaveV2EthereumAssets.FEI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#435) is too similar to AaveV2EthereumAssets.YFI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#98)
Variable AaveV2EthereumAssets.DAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#180) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.ENJ_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#192) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.ENS_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#468) is too similar to AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.FEI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#443) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.FEI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#439) is too similar to AaveV2EthereumAssets.YFI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#102)
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
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.GUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#329-330) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.GUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#327) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.GUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#319) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323)
Variable AaveV2EthereumAssets.GUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#325) is too similar to AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.KNC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#196) is too similar to AaveV2EthereumAssets.KNC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#200)
Variable AaveV2EthereumAssets.KNC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#196) is too similar to AaveV2EthereumAssets.KNC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#198)
Variable AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204) is too similar to AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242)
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
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.LUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#507) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511)
Variable AaveV2EthereumAssets.LUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#513) is too similar to AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.MANA_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#221) is too similar to AaveV2EthereumAssets.MANA_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#225)
Variable AaveV2EthereumAssets.AAVE_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#142-143) is too similar to AaveV2EthereumAssets.MANA_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#229-230)
Variable AaveV2EthereumAssets.MANA_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#221) is too similar to AaveV2EthereumAssets.MANA_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#223)
Variable AaveV2EthereumAssets.MANA_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#225) is too similar to AaveV2EthereumAssets.MANA_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#223)
Variable AaveV2EthereumAssets.MKR_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#234) is too similar to AaveV2EthereumAssets.MKR_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#238)
Variable AaveV2EthereumAssets.MKR_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#234) is too similar to AaveV2EthereumAssets.MKR_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#236)
Variable AaveV2EthereumAssets.MKR_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#238) is too similar to AaveV2EthereumAssets.MKR_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#236)
Variable AaveV2EthereumAssets.ONE_INCH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#496) is too similar to AaveV2EthereumAssets.ONE_INCH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#500)
Variable AaveV2EthereumAssets.ONE_INCH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#496) is too similar to AaveV2EthereumAssets.ONE_INCH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#498)
Variable AaveV2EthereumAssets.ONE_INCH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#500) is too similar to AaveV2EthereumAssets.ONE_INCH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#498)
Variable AaveV2EthereumAssets.DAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#172) is too similar to AaveV2EthereumAssets.RAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#372)
Variable AaveV2EthereumAssets.RAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#372) is too similar to AaveV2EthereumAssets.RAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#376)
Variable AaveV2EthereumAssets.RAI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#372) is too similar to AaveV2EthereumAssets.RAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#374)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242) is too similar to AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.DAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#176) is too similar to AaveV2EthereumAssets.RAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#376)
Variable AaveV2EthereumAssets.DAI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#170) is too similar to AaveV2EthereumAssets.RAI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#370)
Variable AaveV2EthereumAssets.DAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#174) is too similar to AaveV2EthereumAssets.RAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#374)
Variable AaveV2EthereumAssets.RAI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#376) is too similar to AaveV2EthereumAssets.RAI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#374)
Variable AaveV2EthereumAssets.ENJ_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#184) is too similar to AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246)
Variable AaveV2EthereumAssets.KNC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#204) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254)
Variable AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254) is too similar to AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266)
Variable AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.ENJ_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#188) is too similar to AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250)
Variable AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246) is too similar to AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250)
Variable AaveV2EthereumAssets.REN_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#250) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.REN_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#246) is too similar to AaveV2EthereumAssets.REN_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#248)
Variable AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266) is too similar to AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130)
Variable AaveV2EthereumAssets.SNX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#258) is too similar to AaveV2EthereumAssets.SNX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#262)
Variable AaveV2EthereumAssets.SNX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#262) is too similar to AaveV2EthereumAssets.SNX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#260)
Variable AaveV2EthereumAssets.SNX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#258) is too similar to AaveV2EthereumAssets.SNX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#260)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.UNI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#122) is too similar to AaveV2EthereumAssets.UNI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#126)
Variable AaveV2EthereumAssets.UNI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#122) is too similar to AaveV2EthereumAssets.UNI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#124)
Variable AaveV2EthereumAssets.UNI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#126) is too similar to AaveV2EthereumAssets.UNI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#124)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298)
Variable AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305) is too similar to AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406)
Variable AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302) is too similar to AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403)
Variable AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401)
Variable AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294) is too similar to AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395)
Variable AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401) is too similar to AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399)
Variable AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59)
Variable AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305) is too similar to AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68)
Variable AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302) is too similar to AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63)
Variable AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63) is too similar to AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.USDP_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#395) is too similar to AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57)
Variable AaveV2EthereumAssets.USDT_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#57) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.UST_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#472) is too similar to AaveV2EthereumAssets.UST_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#476)
Variable AaveV2EthereumAssets.UST_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#472) is too similar to AaveV2EthereumAssets.UST_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#474)
Variable AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130) is too similar to AaveV2EthereumAssets.UST_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#480)
Variable AaveV2EthereumAssets.UST_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#476) is too similar to AaveV2EthereumAssets.UST_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#474)
Variable AaveV2EthereumAssets.WBTC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#72) is too similar to AaveV2EthereumAssets.WBTC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#76)
Variable AaveV2EthereumAssets.WBTC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#72) is too similar to AaveV2EthereumAssets.WBTC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#74)
Variable AaveV2EthereumAssets.WBTC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#76) is too similar to AaveV2EthereumAssets.WBTC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#74)
Variable AaveV2EthereumAssets.WBTC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#80-81) is too similar to AaveV2EthereumAssets.WETH_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#93-94)
Variable AaveV2EthereumAssets.WETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#85) is too similar to AaveV2EthereumAssets.WETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#89)
Variable AaveV2EthereumAssets.WETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#85) is too similar to AaveV2EthereumAssets.WETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#87)
Variable AaveV2EthereumAssets.WETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#89) is too similar to AaveV2EthereumAssets.WETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#87)
Variable AaveV2EthereumAssets.YFI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#98) is too similar to AaveV2EthereumAssets.YFI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#102)
Variable AaveV2EthereumAssets.YFI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#98) is too similar to AaveV2EthereumAssets.YFI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#100)
Variable AaveV2EthereumAssets.DPI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#418) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.UNI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#130) is too similar to AaveV2EthereumAssets.YFI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#106)
Variable AaveV2EthereumAssets.FEI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#433) is too similar to AaveV2EthereumAssets.YFI_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#96)
Variable AaveV2EthereumAssets.YFI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#102) is too similar to AaveV2EthereumAssets.YFI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#100)
Variable AaveV2EthereumAssets.CVX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#492) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.MKR_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#242) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.RAI_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#380) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.REN_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#254) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.SNX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#266) is too similar to AaveV2EthereumAssets.ZRX_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#118)
Variable AaveV2EthereumAssets.ZRX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#110) is too similar to AaveV2EthereumAssets.ZRX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#114)
Variable AaveV2EthereumAssets.ZRX_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#114) is too similar to AaveV2EthereumAssets.ZRX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#112)
Variable AaveV2EthereumAssets.ZRX_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#110) is too similar to AaveV2EthereumAssets.ZRX_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#112)
Variable AaveV2EthereumAssets.renFIL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#359) is too similar to AaveV2EthereumAssets.renFIL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#363)
Variable AaveV2EthereumAssets.renFIL_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#359) is too similar to AaveV2EthereumAssets.renFIL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#361)
Variable AaveV2EthereumAssets.renFIL_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#363) is too similar to AaveV2EthereumAssets.renFIL_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#361)
Variable AaveV2EthereumAssets.BUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#159) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.LUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#509) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.TUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#283) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.USDC_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#296) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.USDP_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#397) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.USDT_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#59) is too similar to AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270)
Variable AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.LUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#517-518) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.TUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#291-292) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.USDC_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#304-305) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.USDP_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#405-406) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.USDT_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#67-68) is too similar to AaveV2EthereumAssets.sUSD_INTEREST_RATE_STRATEGY (lib/aave-address-book/src/AaveV2Ethereum.sol#278-279)
Variable AaveV2EthereumAssets.LUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#515) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.TUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#289) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.USDC_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#302) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.USDP_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#403) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.USDT_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#65) is too similar to AaveV2EthereumAssets.sUSD_ORACLE (lib/aave-address-book/src/AaveV2Ethereum.sol#276)
Variable AaveV2EthereumAssets.TUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#287) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.USDC_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#300) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.USDP_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#401) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.USDT_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#63) is too similar to AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274)
Variable AaveV2EthereumAssets.BUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#157) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.TUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#281) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.USDC_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#294) is too similar to AaveV2EthereumAssets.sUSD_UNDERLYING (lib/aave-address-book/src/AaveV2Ethereum.sol#268)
Variable AaveV2EthereumAssets.BUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#161) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.GUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#323) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.LUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#511) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.TUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#285) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.USDC_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#298) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.USDP_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#399) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.USDT_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#61) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.sUSD_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#270) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.sUSD_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#274) is too similar to AaveV2EthereumAssets.sUSD_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#272)
Variable AaveV2EthereumAssets.stETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#447) is too similar to AaveV2EthereumAssets.stETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#451)
Variable AaveV2EthereumAssets.stETH_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#447) is too similar to AaveV2EthereumAssets.stETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#449)
Variable AaveV2EthereumAssets.stETH_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#451) is too similar to AaveV2EthereumAssets.stETH_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#449)
Variable AaveV2EthereumAssets.xSUSHI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#346) is too similar to AaveV2EthereumAssets.xSUSHI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#350)
Variable AaveV2EthereumAssets.xSUSHI_A_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#346) is too similar to AaveV2EthereumAssets.xSUSHI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#348)
Variable AaveV2EthereumAssets.xSUSHI_S_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#350) is too similar to AaveV2EthereumAssets.xSUSHI_V_TOKEN (lib/aave-address-book/src/AaveV2Ethereum.sol#348)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#variable-names-too-similar
INFO:Slither:0xbacbe678e2c59343024fd5755262c7b0f77867d1 analyzed (12 contracts with 82 detectors), 400 result(s) found
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

</details>
