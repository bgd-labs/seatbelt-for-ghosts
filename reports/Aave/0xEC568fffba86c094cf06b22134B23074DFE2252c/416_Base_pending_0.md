## Base

- Simulation: [https://dashboard.tenderly.co/me/simulator/ed75ddb4-973f-45bb-97b5-4ff3d8f6d57d](https://dashboard.tenderly.co/me/simulator/ed75ddb4-973f-45bb-97b5-4ff3d8f6d57d)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# ParaSwapLiquiditySwapAdapter at `0x2E549104c516b8657A7D888494DfbAbD7C70b464`
@@ _owner @@
- 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45
+ 0x9390b1735def18560c509e2d0bc090e9d6ba257a
```

```diff
# ParaSwapWithdrawSwapAdapter at `0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9`
@@ _owner @@
- 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45
+ 0x9390b1735def18560c509e2d0bc090e9d6ba257a
```

```diff
# ParaSwapRepayAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`
@@ _owner @@
- 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45
+ 0x9390b1735def18560c509e2d0bc090e9d6ba257a
```

```diff
# OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
@@ `_actionsSets` key `"4"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x674bc5a59eb7f46307ab67a54953ac125711e9f73cecc97dc4bdf3c15c8d1fef` @@
- true
+ false

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - ParaSwapLiquiditySwapAdapter at `0x2E549104c516b8657A7D888494DfbAbD7C70b464`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - ParaSwapRepayAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - ParaSwapWithdrawSwapAdapter at `0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9`
    - `OwnershipTransferred(previousOwner: 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45, newOwner: 0x9390b1735def18560c509e2d0bc090e9d6ba257a)`
  - OptimismBridgeExecutor at `0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45`
    - `ActionsSetExecuted(id: 4, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x44B4221c950fCf23A40e68dEa29feD0bB88893a9: EOA (verification not applicable)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xa9f30e6ed4098e9439b2ac8aea2d3fc26bcebb45: Contract (verified) (OptimismBridgeExecutor)
  - 0x44b4221c950fcf23a40e68dea29fed0bb88893a9: EOA (verification not applicable)
  - 0x2e549104c516b8657a7d888494dfbabd7c70b464: Contract (verified) (ParaSwapLiquiditySwapAdapter)
  - 0x78f8bd884c3d738b74b420540659c82f392820e0: Contract (verified) (ParaSwapRepayAdapter)
  - 0x5598bbfa2f4fe8151f45bba0a3ede1b54b51a0a9: Contract (verified) (ParaSwapWithdrawSwapAdapter)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for ParaSwapLiquiditySwapAdapter at `0x2E549104c516b8657A7D888494DfbAbD7C70b464`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ParaSwapWithdrawSwapAdapter at `0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ParaSwapRepayAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x78f8bd884c3d738b74b420540659c82f392820e0-ParaSwapWithdrawSwapAdapter' running
WARNING:CryticCompile:Warning: Warning: Unreachable code.
  --> @aave/periphery-v3/contracts/dependencies/openzeppelin/ReentrancyGuard.sol:60:5:
   |
60 |     _status = _NOT_ENTERED;
   |     ^^^^^^^^^^^^^^^^^^^^^^



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
<summary>Slither report for ParaSwapLiquiditySwapAdapter at `0x2E549104c516b8657A7D888494DfbAbD7C70b464`</summary>

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
<summary>Slither report for ParaSwapWithdrawSwapAdapter at `0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9`</summary>

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
<summary>Slither report for ParaSwapRepayAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x78f8bd884c3d738b74b420540659c82f392820e0-ParaSwapWithdrawSwapAdapter' running
Warning: Warning: Unreachable code.
  --> @aave/periphery-v3/contracts/dependencies/openzeppelin/ReentrancyGuard.sol:60:5:
   |
60 |     _status = _NOT_ENTERED;
   |     ^^^^^^^^^^^^^^^^^^^^^^



INFO:Detectors:
BaseParaSwapAdapter._pullATokenAndWithdraw(address,IERC20WithPermit,address,uint256,BaseParaSwapAdapter.PermitSignature) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapAdapter.sol#106-131) uses a dangerous strict equality:
	- require(bool,string)(POOL.withdraw(reserve,amount,address(this)) == amount,UNEXPECTED_AMOUNT_WITHDRAWN) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapAdapter.sol#130)
BaseParaSwapSellAdapter._sellOnParaSwap(uint256,bytes,IParaSwapAugustus,IERC20Detailed,IERC20Detailed,uint256,uint256) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#45-109) uses a dangerous strict equality:
	- require(bool,string)(assetToSwapFrom.balanceOf(address(this)) == balanceBeforeAssetFrom - amountToSwap,WRONG_BALANCE_AFTER_SWAP) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#101-104)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dangerous-strict-equalities
INFO:Detectors:
ParaSwapWithdrawSwapAdapter.constructor(IPoolAddressesProvider,IParaSwapAugustusRegistry,address).owner (@aave/periphery-v3/contracts/adapters/paraswap/ParaSwapWithdrawSwapAdapter.sol#19) shadows:
	- Ownable.owner() (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Ownable.sol#36-38) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
Reentrancy in BaseParaSwapSellAdapter._sellOnParaSwap(uint256,bytes,IParaSwapAugustus,IERC20Detailed,IERC20Detailed,uint256,uint256) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#45-109):
	External calls:
	- assetToSwapFrom.safeApprove(tokenTransferProxy,0) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#76)
	- assetToSwapFrom.safeApprove(tokenTransferProxy,amountToSwap) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#77)
	- (success) = address(augustus).call(swapCalldata) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#93)
	Event emitted after the call(s):
	- Swapped(address(assetToSwapFrom),address(assetToSwapTo),amountToSwap,amountReceived) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#108)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
GPv2SafeERC20.safeTransfer(IERC20,address,uint256) (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#12-29) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#16-26)
GPv2SafeERC20.safeTransferFrom(IERC20,address,address,uint256) (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#33-51) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#37-48)
GPv2SafeERC20.getLastTransferResult(IERC20) (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#56-114) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#64-113)
GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage() (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77-83) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77-83)
Address.isContract(address) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#27-37) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#33-35)
Address.verifyCallResult(bool,bytes,string) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#199-219) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#211-214)
PercentageMath.percentMul(uint256,uint256) (@aave/core-v3/contracts/protocol/libraries/math/PercentageMath.sol#25-39) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/protocol/libraries/math/PercentageMath.sol#27-38)
PercentageMath.percentDiv(uint256,uint256) (@aave/core-v3/contracts/protocol/libraries/math/PercentageMath.sol#48-60) uses assembly
	- INLINE ASM (@aave/core-v3/contracts/protocol/libraries/math/PercentageMath.sol#50-59)
BaseParaSwapSellAdapter._sellOnParaSwap(uint256,bytes,IParaSwapAugustus,IERC20Detailed,IERC20Detailed,uint256,uint256) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#45-109) uses assembly
	- INLINE ASM (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#89-91)
	- INLINE ASM (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#96-99)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
Address.functionCall(address,bytes) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#80-82) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#109-115) is never used and should be removed
Address.functionDelegateCall(address,bytes) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#172-174) is never used and should be removed
Address.functionDelegateCall(address,bytes,string) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#182-191) is never used and should be removed
Address.functionStaticCall(address,bytes) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#142-147) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#155-164) is never used and should be removed
Address.sendValue(address,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#55-60) is never used and should be removed
BaseParaSwapAdapter._pullATokenAndWithdraw(address,address,uint256,BaseParaSwapAdapter.PermitSignature) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapAdapter.sol#86-96) is never used and should be removed
Context._msgData() (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Context.sol#19-22) is never used and should be removed
PercentageMath.percentDiv(uint256,uint256) (@aave/core-v3/contracts/protocol/libraries/math/PercentageMath.sol#48-60) is never used and should be removed
SafeERC20.safeDecreaseAllowance(IERC20,address,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/SafeERC20.sol#58-68) is never used and should be removed
SafeERC20.safeIncreaseAllowance(IERC20,address,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/SafeERC20.sol#50-56) is never used and should be removed
SafeERC20.safeTransfer(IERC20,address,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/SafeERC20.sol#21-23) is never used and should be removed
SafeERC20.safeTransferFrom(IERC20,address,address,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/SafeERC20.sol#25-30) is never used and should be removed
SafeMath.add(uint256,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/SafeMath.sol#11-15) is never used and should be removed
SafeMath.sub(uint256,uint256,string) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/SafeMath.sol#32-36) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#55-60):
	- (success) = recipient.call{value: amount}() (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#58)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#123-134):
	- (success,returndata) = target.call{value: value}(data) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#132)
Low level call in Address.functionStaticCall(address,bytes,string) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#155-164):
	- (success,returndata) = target.staticcall(data) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#162)
Low level call in Address.functionDelegateCall(address,bytes,string) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#182-191):
	- (success,returndata) = target.delegatecall(data) (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Address.sol#189)
Low level call in BaseParaSwapSellAdapter._sellOnParaSwap(uint256,bytes,IParaSwapAugustus,IERC20Detailed,IERC20Detailed,uint256,uint256) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#45-109):
	- (success) = address(augustus).call(swapCalldata) (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#93)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Parameter GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage().length_getLastTransferResult_asm_0_revertWithMessage (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77) is not in mixedCase
Parameter GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage().message_getLastTransferResult_asm_0_revertWithMessage (@aave/core-v3/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77) is not in mixedCase
Variable FlashLoanSimpleReceiverBase.ADDRESSES_PROVIDER (@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol#14) is not in mixedCase
Variable FlashLoanSimpleReceiverBase.POOL (@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol#15) is not in mixedCase
Function IFlashLoanSimpleReceiver.ADDRESSES_PROVIDER() (@aave/core-v3/contracts/flashloan/interfaces/IFlashLoanSimpleReceiver.sol#33) is not in mixedCase
Function IFlashLoanSimpleReceiver.POOL() (@aave/core-v3/contracts/flashloan/interfaces/IFlashLoanSimpleReceiver.sol#35) is not in mixedCase
Function IPool.ADDRESSES_PROVIDER() (@aave/core-v3/contracts/interfaces/IPool.sol#621) is not in mixedCase
Function IPool.MAX_STABLE_RATE_BORROW_SIZE_PERCENT() (@aave/core-v3/contracts/interfaces/IPool.sol#684) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TOTAL() (@aave/core-v3/contracts/interfaces/IPool.sol#690) is not in mixedCase
Function IPool.BRIDGE_PROTOCOL_FEE() (@aave/core-v3/contracts/interfaces/IPool.sol#696) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TO_PROTOCOL() (@aave/core-v3/contracts/interfaces/IPool.sol#702) is not in mixedCase
Function IPool.MAX_NUMBER_RESERVES() (@aave/core-v3/contracts/interfaces/IPool.sol#708) is not in mixedCase
Function IPriceOracleGetter.BASE_CURRENCY() (@aave/core-v3/contracts/interfaces/IPriceOracleGetter.sol#15) is not in mixedCase
Function IPriceOracleGetter.BASE_CURRENCY_UNIT() (@aave/core-v3/contracts/interfaces/IPriceOracleGetter.sol#22) is not in mixedCase
Variable BaseParaSwapAdapter.ORACLE (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapAdapter.sol#37) is not in mixedCase
Variable BaseParaSwapSellAdapter.AUGUSTUS_REGISTRY (@aave/periphery-v3/contracts/adapters/paraswap/BaseParaSwapSellAdapter.sol#23) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Redundant expression "this (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Context.sol#20)" inContext (@aave/core-v3/contracts/dependencies/openzeppelin/contracts/Context.sol#14-23)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#redundant-statements
INFO:Slither:0x78f8bd884c3d738b74b420540659c82f392820e0 analyzed (22 contracts with 87 detectors), 51 result(s) found
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

</details>
