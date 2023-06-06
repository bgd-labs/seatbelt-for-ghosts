## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/13476ed5-71c1-409f-a578-a913106487ef](https://dashboard.tenderly.co/me/simulator/13476ed5-71c1-409f-a578-a913106487ef)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
@@ `s_upkeep` key `"59004534399919487726050348266959936260154145654847903814887020424644065605379"`.lastKeeper @@
- 0x71dd101432fd1041dfd7b718b1c0adeb1ce13d60
+ 0x8abe586e96745d4aca358bae11e71f5a59434f47

```

```diff
# AaveOracle at `0xb023e699F5a33916Ea823A16485e259257cA8Bd1`
@@ `assetsSources` key `0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4` @@
- 0x97371df4492605486e23da797fa68e55fc38a13f
+ 0xee96b77129cf54581b5a8fecccc50a6a067034a1

@@ `assetsSources` key `0xfa68fb4628dff1028cfec22b4162fccd0d45efb6` @@
- 0x5d37e4b374e6907de8fc7fb33ee3b0af403c7403
+ 0x0e1120524e14bd7ad96ea76a1b1dd699913e2a45

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_queuedActions` key `0xfcb20199a31408354be6ded34348cb9a11dc13d60d1ee90f552fc5d97fec39ee` @@
- true
+ false

@@ `_actionsSets` key `"45"`.executed @@
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
    - `AssetSourceUpdated(asset: 0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4, source: 0xee96b77129cf54581b5a8fecccc50a6a067034a1)`
    - `AssetSourceUpdated(asset: 0xfa68fb4628dff1028cfec22b4162fccd0d45efb6, source: 0x0e1120524e14bd7ad96ea76a1b1dd699913e2a45)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 45, initiatorExecution: 0x7d0219c7037819b3f5d73e235c595189c3f8c224, returnedData: 0x)`
  - KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`
    - `UpkeepPerformed(id: 59004534399919487726050348266959936260154145654847903814887020424644065605379, success: true, from: 0x8abe586e96745d4aca358bae11e71f5a59434f47, payment: 0, performData: 0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002d)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x6acCc155626E0CF8bFe97e68A17a567394D51238: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0x8abe586e96745d4aca358bae11e71f5a59434f47: EOA (verification not applicable)
  - 0x02777053d6764996e594c3e88af1d58d5363a2e6: Contract (verified) (KeeperRegistry)
  - 0xf824ea79774e8698e6c6d156c60ab054794c9b18: Contract (verified) (EACAggregatorProxy)
  - 0x828a123d84e1aecf6d604048a4beaabe14fb0e39: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x5787befdc0ecd210dfa948264631cd53e68f7802: Contract (verified) (EACAggregatorProxy)
  - 0x817c00afc51e6574acaa718336fb4414ebc87fdb: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x7d0219c7037819b3f5d73e235c595189c3f8c224: Contract (verified) (L2RobotKeeper)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0x6accc155626e0cf8bfe97e68a17a567394d51238: Contract (verified) (AaveV3PolPriceFeedsUpdate_20230504_Payload)
  - 0xe202f2fc4b6a37ba53cfd15be42a762a645fca07: Contract (verified) (AaveV3ConfigEngine)
  - 0xee96b77129cf54581b5a8fecccc50a6a067034a1: Contract (verified) (MaticSynchronicityPriceAdapter)
  - 0xab594600376ec9fd91f8e885dadf0ce036862de0: Contract (verified) (EACAggregatorProxy)
  - 0x1278c74c3b2f8c3bca0089b4e128faf023615ecf: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xded6c522d803e35f65318a9a4d7333a22d582199: Contract (verified) (RateProvider)
  - 0x0833f5bd45803e05ef54e119a77e463ce6b1a963: Contract (verified) (FxStateChildTunnel)
  - 0x0e1120524e14bd7ad96ea76a1b1dd699913e2a45: Contract (verified) (MaticSynchronicityPriceAdapter)
  - 0xee652bbf72689aa59f0b8f981c9c90e2a8af8d8f: Contract (verified) (RateProvider)
  - 0x97e58a6950d86d751082d5e1d350e74c19047570: Contract (verified) (FxStateChildTunnel)
  - 0xb023e699f5a33916ea823a16485e259257ca8bd1: Contract (verified) (AaveOracle)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for MaticSynchronicityPriceAdapter at `0x0e1120524e14Bd7aD96Ea76A1b1dD699913e2a45`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x1278C74c3B2f8c3BcA0089b4E128fAf023615ECf`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0x5787BefDc0ECd210Dfa948264631CD53E68F7802`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV3PolPriceFeedsUpdate_20230504_Payload at `0x6acCc155626E0CF8bFe97e68A17a567394D51238`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for L2RobotKeeper at `0x7D0219C7037819B3F5d73E235C595189C3F8c224`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x817C00aFc51e6574ACaA718336FB4414eBC87Fdb`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x828a123D84E1aecF6d604048A4BeaAbe14FB0e39`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for FxStateChildTunnel at `0x97E58a6950D86d751082D5e1d350e74c19047570`</summary>

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
<summary>View warnings for EACAggregatorProxy at `0xAB594600376Ec9fD91F8e885dADF0CE036862dE0`</summary>

```
WARNING:CryticCompile:Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:273:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:263:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:274:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:264:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:275:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:265:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:276:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:266:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:321:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:311:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:322:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:312:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:323:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:313:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:324:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:314:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:503:5: Warning: This declaration shadows an existing declaration.
    uint16 phaseId = uint16(_roundId >> PHASE_OFFSET);
    ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:515:7: Warning: This declaration shadows an existing declaration.
      uint16 phaseId
      ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:485:3: Warning: Function state mutability can be restricted to pure
  function addPhase(
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:496:3: Warning: Function state mutability can be restricted to pure
  function parseIds(
  ^ (Relevant source part starts here and spans across multiple lines).


```

</details>

<details>
<summary>View warnings for AaveOracle at `0xb023e699F5a33916Ea823A16485e259257cA8Bd1`</summary>

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
<summary>View warnings for RateProvider at `0xdEd6C522d803E35f65318a9a4d7333a22d582199`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV3ConfigEngine at `0xE202F2fc4b6A37Ba53cfD15bE42a762A645FCA07`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:4:1:
  |
4 | import {DataTypes} from 'aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:5:1:
  |
5 | import {ConfiguratorInputTypes} from 'aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:6:1:
  |
6 | import {IPoolAddressesProvider} from 'aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPool.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:7:1:
  |
7 | import {IPool} from 'aave-v3-core/contracts/interfaces/IPool.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolConfigurator.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:8:1:
  |
8 | import {IPoolConfigurator} from 'aave-v3-core/contracts/interfaces/IPoolConfigurator.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:9:1:
  |
9 | import {IPriceOracleGetter} from 'aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IAaveOracle.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:10:1:
   |
10 | import {IAaveOracle} from 'aave-v3-core/contracts/interfaces/IAaveOracle.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IACLManager.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:11:1:
   |
11 | import {IACLManager as BasicIACLManager} from 'aave-v3-core/contracts/interfaces/IACLManager.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:12:1:
   |
12 | import {IPoolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:13:1:
   |
13 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:14:1:
   |
14 | import {IReserveInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:15:1:
   |
15 | import {IPoolDataProvider as IAaveProtocolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:4:1:
  |
4 | import {ConfiguratorInputTypes, DataTypes} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:5:1:
  |
5 | import {ReserveConfiguration} from 'aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:6:1:
  |
6 | import {IERC20Metadata} from 'solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IAaveV3ConfigEngine.sol:4:1:
  |
4 | import {IPool, IPoolConfigurator, IAaveOracle} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:4:1:
  |
4 | import {IPoolAddressesProvider} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:5:1:
  |
5 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



```

</details>

<details>
<summary>View warnings for MaticSynchronicityPriceAdapter at `0xEe96b77129cF54581B5a8FECCcC50A6A067034a1`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0xf824eA79774E8698E6C6D156c60ab054794C9B18`</summary>

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
<summary>Slither report for KeeperRegistry at `0x02777053d6764996e594c3E88AF1D58D5363a2e6`</summary>

```
INFO:Detectors:
KeeperRegistry.addFunds(uint256,uint96) (contracts/v0.8/KeeperRegistry.sol#297-302) ignores return value by LINK.transferFrom(msg.sender,address(this),amount) (contracts/v0.8/KeeperRegistry.sol#300)
KeeperRegistry.withdrawFunds(uint256,address) (contracts/v0.8/KeeperRegistry.sol#331-355) ignores return value by LINK.transfer(to,amountToWithdraw) (contracts/v0.8/KeeperRegistry.sol#354)
KeeperRegistry.withdrawOwnerFunds() (contracts/v0.8/KeeperRegistry.sol#360-368) ignores return value by LINK.transfer(msg.sender,amount) (contracts/v0.8/KeeperRegistry.sol#367)
KeeperRegistry.recoverFunds() (contracts/v0.8/KeeperRegistry.sol#389-392) ignores return value by LINK.transfer(msg.sender,total - s_expectedLinkBalance) (contracts/v0.8/KeeperRegistry.sol#391)
KeeperRegistry.withdrawPayment(address,address) (contracts/v0.8/KeeperRegistry.sol#399-408) ignores return value by LINK.transfer(to,keeper.balance) (contracts/v0.8/KeeperRegistry.sol#407)
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) ignores return value by LINK.transfer(destination,totalBalanceRemaining) (contracts/v0.8/KeeperRegistry.sol#682)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unchecked-transfer
INFO:Detectors:
KeeperBase.preventExecution() (contracts/v0.8/KeeperBase.sol#11-15) uses tx.origin for authorization: tx.origin != address(0) (contracts/v0.8/KeeperBase.sol#12)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dangerous-usage-of-txorigin
INFO:Detectors:
KeeperRegistry.cancelUpkeep(uint256) (contracts/v0.8/KeeperRegistry.sol#273-289) ignores return value by s_upkeepIDs.remove(id) (contracts/v0.8/KeeperRegistry.sol#286)
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) ignores return value by s_upkeepIDs.remove(id) (contracts/v0.8/KeeperRegistry.sol#670)
KeeperRegistry._createUpkeep(uint256,address,uint32,address,uint96,bytes) (contracts/v0.8/KeeperRegistry.sol#723-745) ignores return value by s_upkeepIDs.add(id) (contracts/v0.8/KeeperRegistry.sol#744)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
Reentrancy in KeeperRegistry.addFunds(uint256,uint96) (contracts/v0.8/KeeperRegistry.sol#297-302):
	External calls:
	- LINK.transferFrom(msg.sender,address(this),amount) (contracts/v0.8/KeeperRegistry.sol#300)
	Event emitted after the call(s):
	- FundsAdded(id,msg.sender,amount) (contracts/v0.8/KeeperRegistry.sol#301)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
KeeperRegistry._getFeedData() (contracts/v0.8/KeeperRegistry.sol#753-771) uses timestamp for comparisons
	Dangerous comparisons:
	- (staleFallback && stalenessSeconds < block.timestamp - timestamp) || feedValue <= 0 (contracts/v0.8/KeeperRegistry.sol#759)
	- (staleFallback && stalenessSeconds < block.timestamp - timestamp) || feedValue <= 0 (contracts/v0.8/KeeperRegistry.sol#765)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#block-timestamp
INFO:Detectors:
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#201-221) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#213-216)
EnumerableSet.values(EnumerableSet.AddressSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#274-283) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#278-280)
EnumerableSet.values(EnumerableSet.UintSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#347-356) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#351-353)
KeeperRegistry._callWithExactGas(uint256,address,bytes) (contracts/v0.8/KeeperRegistry.sol#792-817) uses assembly
	- INLINE ASM (contracts/v0.8/KeeperRegistry.sol#797-815)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) has costly operations inside a loop:
	- delete s_upkeep[id] (contracts/v0.8/KeeperRegistry.sol#668)
KeeperRegistry.migrateUpkeeps(uint256[],address) (contracts/v0.8/KeeperRegistry.sol#648-683) has costly operations inside a loop:
	- delete s_checkData[id] (contracts/v0.8/KeeperRegistry.sol#669)
KeeperRegistry._createUpkeep(uint256,address,uint32,address,uint96,bytes) (contracts/v0.8/KeeperRegistry.sol#723-745) has costly operations inside a loop:
	- s_expectedLinkBalance = s_expectedLinkBalance + balance (contracts/v0.8/KeeperRegistry.sol#742)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#costly-operations-inside-a-loop
INFO:Detectors:
Address.functionCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#85-87) is never used and should be removed
Address.functionCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#95-101) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (@openzeppelin/contracts/utils/Address.sol#114-120) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#128-139) is never used and should be removed
Address.functionDelegateCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#174-176) is never used and should be removed
Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#184-193) is never used and should be removed
Address.functionStaticCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#147-149) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#157-166) is never used and should be removed
Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#60-65) is never used and should be removed
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#201-221) is never used and should be removed
Context._msgData() (@openzeppelin/contracts/utils/Context.sol#21-23) is never used and should be removed
EnumerableSet._values(EnumerableSet.Set) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#142-144) is never used and should be removed
EnumerableSet.add(EnumerableSet.AddressSet,address) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#224-226) is never used and should be removed
EnumerableSet.add(EnumerableSet.Bytes32Set,bytes32) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#158-160) is never used and should be removed
EnumerableSet.at(EnumerableSet.AddressSet,uint256) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#262-264) is never used and should be removed
EnumerableSet.at(EnumerableSet.Bytes32Set,uint256) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#196-198) is never used and should be removed
EnumerableSet.contains(EnumerableSet.AddressSet,address) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#241-243) is never used and should be removed
EnumerableSet.contains(EnumerableSet.Bytes32Set,bytes32) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#175-177) is never used and should be removed
EnumerableSet.contains(EnumerableSet.UintSet,uint256) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#314-316) is never used and should be removed
EnumerableSet.length(EnumerableSet.AddressSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#248-250) is never used and should be removed
EnumerableSet.length(EnumerableSet.Bytes32Set) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#182-184) is never used and should be removed
EnumerableSet.remove(EnumerableSet.AddressSet,address) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#234-236) is never used and should be removed
EnumerableSet.remove(EnumerableSet.Bytes32Set,bytes32) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#168-170) is never used and should be removed
EnumerableSet.values(EnumerableSet.AddressSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#274-283) is never used and should be removed
EnumerableSet.values(EnumerableSet.Bytes32Set) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#208-210) is never used and should be removed
EnumerableSet.values(EnumerableSet.UintSet) (@openzeppelin/contracts/utils/structs/EnumerableSet.sol#347-356) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#60-65):
	- (success) = recipient.call{value: amount}() (@openzeppelin/contracts/utils/Address.sol#63)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#128-139):
	- (success,returndata) = target.call{value: value}(data) (@openzeppelin/contracts/utils/Address.sol#137)
Low level call in Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#157-166):
	- (success,returndata) = target.staticcall(data) (@openzeppelin/contracts/utils/Address.sol#164)
Low level call in Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#184-193):
	- (success,returndata) = target.delegatecall(data) (@openzeppelin/contracts/utils/Address.sol#191)
Low level call in KeeperRegistry.checkUpkeep(uint256,address) (contracts/v0.8/KeeperRegistry.sol#226-252):
	- (success,result) = upkeep.target.call{gas: s_storage.checkGasLimit}(callData) (contracts/v0.8/KeeperRegistry.sol#241)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Variable ConfirmedOwnerWithProposal.s_owner (contracts/v0.8/ConfirmedOwnerWithProposal.sol#11) is not in mixedCase
Variable ConfirmedOwnerWithProposal.s_pendingOwner (contracts/v0.8/ConfirmedOwnerWithProposal.sol#12) is not in mixedCase
Variable KeeperRegistry.s_keeperList (contracts/v0.8/KeeperRegistry.sol#48) is not in mixedCase
Variable KeeperRegistry.s_upkeepIDs (contracts/v0.8/KeeperRegistry.sol#49) is not in mixedCase
Variable KeeperRegistry.s_upkeep (contracts/v0.8/KeeperRegistry.sol#50) is not in mixedCase
Variable KeeperRegistry.s_keeperInfo (contracts/v0.8/KeeperRegistry.sol#51) is not in mixedCase
Variable KeeperRegistry.s_proposedPayee (contracts/v0.8/KeeperRegistry.sol#52) is not in mixedCase
Variable KeeperRegistry.s_checkData (contracts/v0.8/KeeperRegistry.sol#53) is not in mixedCase
Variable KeeperRegistry.s_peerRegistryMigrationPermission (contracts/v0.8/KeeperRegistry.sol#54) is not in mixedCase
Variable KeeperRegistry.s_storage (contracts/v0.8/KeeperRegistry.sol#55) is not in mixedCase
Variable KeeperRegistry.s_fallbackGasPrice (contracts/v0.8/KeeperRegistry.sol#56) is not in mixedCase
Variable KeeperRegistry.s_fallbackLinkPrice (contracts/v0.8/KeeperRegistry.sol#57) is not in mixedCase
Variable KeeperRegistry.s_ownerLinkBalance (contracts/v0.8/KeeperRegistry.sol#58) is not in mixedCase
Variable KeeperRegistry.s_expectedLinkBalance (contracts/v0.8/KeeperRegistry.sol#59) is not in mixedCase
Variable KeeperRegistry.s_transcoder (contracts/v0.8/KeeperRegistry.sol#60) is not in mixedCase
Variable KeeperRegistry.s_registrar (contracts/v0.8/KeeperRegistry.sol#61) is not in mixedCase
Variable KeeperRegistry.LINK (contracts/v0.8/KeeperRegistry.sol#63) is not in mixedCase
Variable KeeperRegistry.LINK_ETH_FEED (contracts/v0.8/KeeperRegistry.sol#64) is not in mixedCase
Variable KeeperRegistry.FAST_GAS_FEED (contracts/v0.8/KeeperRegistry.sol#65) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x02777053d6764996e594c3e88af1d58d5363a2e6 analyzed (20 contracts with 79 detectors), 69 result(s) found
```

</details>

<details>
<summary>Slither report for FxStateChildTunnel at `0x0833f5bD45803E05ef54E119a77E463cE6b1a963`</summary>

```
INFO:Detectors:
ERC1967Upgrade._upgradeToAndCall(address,bytes,bool) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#63-69) ignores return value by Address.functionDelegateCall(newImplementation,data) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#67)
ERC1967Upgrade._upgradeToAndCallSecure(address,bytes,bool) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#76-104) ignores return value by Address.functionDelegateCall(newImplementation,data) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#82)
ERC1967Upgrade._upgradeToAndCallSecure(address,bytes,bool) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#76-104) ignores return value by Address.functionDelegateCall(newImplementation,abi.encodeWithSignature(upgradeTo(address),oldImplementation)) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#90-96)
ERC1967Upgrade._upgradeBeaconToAndCall(address,bytes,bool) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#112-118) ignores return value by Address.functionDelegateCall(IBeacon(newBeacon).implementation(),data) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#116)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
AdminUpgradeabilityProxy.constructor(address,address,bytes).admin (contracts/import.sol#10) shadows:
	- TransparentUpgradeableProxy.admin() (@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol#58-60) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
Modifier TransparentUpgradeableProxy.ifAdmin() (@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol#41-47) does not always execute _; or revertReference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-modifier
INFO:Detectors:
Reentrancy in ERC1967Upgrade._upgradeToAndCallSecure(address,bytes,bool) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#76-104):
	External calls:
	- Address.functionDelegateCall(newImplementation,data) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#82)
	- Address.functionDelegateCall(newImplementation,abi.encodeWithSignature(upgradeTo(address),oldImplementation)) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#90-96)
	Event emitted after the call(s):
	- Upgraded(newImplementation) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#102)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
Proxy._delegate(address) (@openzeppelin/contracts/proxy/Proxy.sol#21-41) uses assembly
	- INLINE ASM (@openzeppelin/contracts/proxy/Proxy.sol#23-40)
Address.isContract(address) (@openzeppelin/contracts/utils/Address.sol#26-35) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#33)
Address._verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#171-188) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#180-183)
StorageSlot.getAddressSlot(bytes32) (@openzeppelin/contracts/utils/StorageSlot.sol#51-55) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/StorageSlot.sol#52-54)
StorageSlot.getBooleanSlot(bytes32) (@openzeppelin/contracts/utils/StorageSlot.sol#60-64) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/StorageSlot.sol#61-63)
StorageSlot.getBytes32Slot(bytes32) (@openzeppelin/contracts/utils/StorageSlot.sol#69-73) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/StorageSlot.sol#70-72)
StorageSlot.getUint256Slot(bytes32) (@openzeppelin/contracts/utils/StorageSlot.sol#78-82) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/StorageSlot.sol#79-81)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
Address.functionCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#79-81) is never used and should be removed
Address.functionCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#89-91) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (@openzeppelin/contracts/utils/Address.sol#104-106) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#114-121) is never used and should be removed
Address.functionStaticCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#129-131) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#139-145) is never used and should be removed
Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#53-59) is never used and should be removed
Context._msgData() (@openzeppelin/contracts/utils/Context.sol#20-23) is never used and should be removed
ERC1967Upgrade._getBeacon() (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#171-173) is never used and should be removed
ERC1967Upgrade._setBeacon(address) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#178-188) is never used and should be removed
ERC1967Upgrade._upgradeBeaconToAndCall(address,bytes,bool) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#112-118) is never used and should be removed
ERC1967Upgrade._upgradeTo(address) (@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol#53-56) is never used and should be removed
StorageSlot.getBytes32Slot(bytes32) (@openzeppelin/contracts/utils/StorageSlot.sol#69-73) is never used and should be removed
StorageSlot.getUint256Slot(bytes32) (@openzeppelin/contracts/utils/StorageSlot.sol#78-82) is never used and should be removed
TransparentUpgradeableProxy._admin() (@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol#109-111) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in ProxyAdmin.getProxyImplementation(TransparentUpgradeableProxy) (@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol#21-27):
	- (success,returndata) = address(proxy).staticcall(0x5c60da1b) (@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol#24)
Low level call in ProxyAdmin.getProxyAdmin(TransparentUpgradeableProxy) (@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol#36-42):
	- (success,returndata) = address(proxy).staticcall(0xf851a440) (@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol#39)
Low level call in Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#53-59):
	- (success) = recipient.call{value: amount}() (@openzeppelin/contracts/utils/Address.sol#57)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#114-121):
	- (success,returndata) = target.call{value: value}(data) (@openzeppelin/contracts/utils/Address.sol#119)
Low level call in Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#139-145):
	- (success,returndata) = target.staticcall(data) (@openzeppelin/contracts/utils/Address.sol#143)
Low level call in Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#163-169):
	- (success,returndata) = target.delegatecall(data) (@openzeppelin/contracts/utils/Address.sol#167)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Redundant expression "this (@openzeppelin/contracts/utils/Context.sol#21)" inContext (@openzeppelin/contracts/utils/Context.sol#15-24)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#redundant-statements
INFO:Slither:0x0833f5bd45803e05ef54e119a77e463ce6b1a963 analyzed (14 contracts with 79 detectors), 36 result(s) found
```

</details>

<details>
<summary>Slither report for MaticSynchronicityPriceAdapter at `0x0e1120524e14Bd7aD96Ea76A1b1dD699913e2a45`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x0e1120524e14bd7ad96ea76a1b1dd699913e2a45
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x1278C74c3B2f8c3BcA0089b4E128fAf023615ECf`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x1278c74c3b2f8c3bca0089b4e128faf023615ecf
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for EACAggregatorProxy at `0x5787BefDc0ECd210Dfa948264631CD53E68F7802`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x5787befdc0ecd210dfa948264631cd53e68f7802
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AaveV3PolPriceFeedsUpdate_20230504_Payload at `0x6acCc155626E0CF8bFe97e68A17a567394D51238`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x6accc155626e0cf8bfe97e68a17a567394d51238
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for L2RobotKeeper at `0x7D0219C7037819B3F5d73E235C595189C3F8c224`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x7d0219c7037819b3f5d73e235c595189c3f8c224
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x817C00aFc51e6574ACaA718336FB4414eBC87Fdb`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x817c00afc51e6574acaa718336fb4414ebc87fdb
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AccessControlledOffchainAggregator at `0x828a123D84E1aecF6d604048A4BeaAbe14FB0e39`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x828a123d84e1aecf6d604048a4beaabe14fb0e39
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for FxStateChildTunnel at `0x97E58a6950D86d751082D5e1d350e74c19047570`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0x97e58a6950d86d751082d5e1d350e74c19047570
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xa97684ead0e402dc232d5a977953df7ecbab3cdb
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for EACAggregatorProxy at `0xAB594600376Ec9fD91F8e885dADF0CE036862dE0`</summary>

```
Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:273:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:263:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:274:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:264:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:275:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:265:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:276:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:266:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:321:7: Warning: This declaration shadows an existing declaration.
      uint80 roundId,
      ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:311:7: The shadowed declaration is here:
      uint80 roundId,
      ^------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:322:7: Warning: This declaration shadows an existing declaration.
      int256 answer,
      ^-----------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:312:7: The shadowed declaration is here:
      int256 answer,
      ^-----------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:323:7: Warning: This declaration shadows an existing declaration.
      uint256 startedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:313:7: The shadowed declaration is here:
      uint256 startedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:324:7: Warning: This declaration shadows an existing declaration.
      uint256 updatedAt,
      ^---------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:314:7: The shadowed declaration is here:
      uint256 updatedAt,
      ^---------------^

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:503:5: Warning: This declaration shadows an existing declaration.
    uint16 phaseId = uint16(_roundId >> PHASE_OFFSET);
    ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:515:7: Warning: This declaration shadows an existing declaration.
      uint16 phaseId
      ^------------^
crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:400:3: The shadowed declaration is here:
  function phaseId()
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:485:3: Warning: Function state mutability can be restricted to pure
  function addPhase(
  ^ (Relevant source part starts here and spans across multiple lines).

Warning: crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol:496:3: Warning: Function state mutability can be restricted to pure
  function parseIds(
  ^ (Relevant source part starts here and spans across multiple lines).


INFO:Detectors:
AggregatorProxy.getRoundData(uint80).updatedAt_scope_3 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#276) is a local variable never initialized
AggregatorProxy.latestRoundData().roundId_scope_0 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#321) is a local variable never initialized
AggregatorProxy.getRoundData(uint80).startedAt_scope_2 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#275) is a local variable never initialized
AggregatorProxy.latestRoundData().updatedAt_scope_3 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#324) is a local variable never initialized
AggregatorProxy.getRoundData(uint80).roundId_scope_0 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#273) is a local variable never initialized
AggregatorProxy.latestRoundData().answer_scope_1 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#322) is a local variable never initialized
AggregatorProxy.getRoundData(uint80).answer_scope_1 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#274) is a local variable never initialized
AggregatorProxy.latestRoundData().startedAt_scope_2 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#323) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
AggregatorProxy.getAnswer(uint256).phaseId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#185) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.getAnswer(uint256).aggregator (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#186) shadows:
	- AggregatorProxy.aggregator() (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#389-395) (function)
AggregatorProxy.getTimestamp(uint256).phaseId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#206) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.getTimestamp(uint256).aggregator (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#207) shadows:
	- AggregatorProxy.aggregator() (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#389-395) (function)
AggregatorProxy.getRoundData(uint80).phaseId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#270) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.getRoundData(uint80).roundId_scope_0 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#273) shadows:
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#263) (return variable)
	- AggregatorProxy.getRoundData(uint80).roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#263) (return variable)
AggregatorProxy.getRoundData(uint80).answer_scope_1 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#274) shadows:
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#264) (return variable)
	- AggregatorProxy.getRoundData(uint80).answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#264) (return variable)
AggregatorProxy.getRoundData(uint80).startedAt_scope_2 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#275) shadows:
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#265) (return variable)
	- AggregatorProxy.getRoundData(uint80).startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#265) (return variable)
AggregatorProxy.getRoundData(uint80).updatedAt_scope_3 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#276) shadows:
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#266) (return variable)
	- AggregatorProxy.getRoundData(uint80).updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#266) (return variable)
AggregatorProxy.latestRoundData().roundId_scope_0 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#321) shadows:
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#311) (return variable)
	- AggregatorProxy.latestRoundData().roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#311) (return variable)
AggregatorProxy.latestRoundData().answer_scope_1 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#322) shadows:
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#312) (return variable)
	- AggregatorProxy.latestRoundData().answer (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#312) (return variable)
AggregatorProxy.latestRoundData().startedAt_scope_2 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#323) shadows:
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#313) (return variable)
	- AggregatorProxy.latestRoundData().startedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#313) (return variable)
AggregatorProxy.latestRoundData().updatedAt_scope_3 (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#324) shadows:
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#314) (return variable)
	- AggregatorProxy.latestRoundData().updatedAt (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#314) (return variable)
AggregatorProxy.parseIds(uint256).phaseId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#503) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#400-406) (function)
AggregatorProxy.addPhaseIds(uint80,int256,uint256,uint256,uint80,uint16).phaseId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#515) shadows:
	- AggregatorProxy.phaseId() (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#400-406) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
Owned.transferOwnership(address)._to (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#30) lacks a zero-check on :
		- pendingOwner = _to (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#34)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-zero-address-validation
INFO:Detectors:
Parameter Owned.transferOwnership(address)._to (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#30) is not in mixedCase
Parameter AggregatorProxy.getAnswer(uint256)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#178) is not in mixedCase
Parameter AggregatorProxy.getTimestamp(uint256)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#199) is not in mixedCase
Parameter AggregatorProxy.getRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#257) is not in mixedCase
Parameter AggregatorProxy.proposedGetRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#343) is not in mixedCase
Parameter AggregatorProxy.proposeAggregator(address)._aggregator (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#449) is not in mixedCase
Parameter AggregatorProxy.confirmAggregator(address)._aggregator (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#463) is not in mixedCase
Parameter AggregatorProxy.setAggregator(address)._aggregator (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#477) is not in mixedCase
Parameter AggregatorProxy.addPhase(uint16,uint64)._phase (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#486) is not in mixedCase
Parameter AggregatorProxy.addPhase(uint16,uint64)._originalId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#487) is not in mixedCase
Parameter AggregatorProxy.parseIds(uint256)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#497) is not in mixedCase
Parameter EACAggregatorProxy.setController(address)._accessController (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#572) is not in mixedCase
Parameter EACAggregatorProxy.getAnswer(uint256)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#628) is not in mixedCase
Parameter EACAggregatorProxy.getTimestamp(uint256)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#648) is not in mixedCase
Parameter EACAggregatorProxy.getRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#700) is not in mixedCase
Parameter EACAggregatorProxy.proposedGetRoundData(uint80)._roundId (crytic-export/etherscan-contracts/0xab594600376ec9fd91f8e885dadf0ce036862de0-EACAggregatorProxy.sol#766) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0xab594600376ec9fd91f8e885dadf0ce036862de0 analyzed (7 contracts with 79 detectors), 40 result(s) found
```

</details>

<details>
<summary>Slither report for AaveOracle at `0xb023e699F5a33916Ea823A16485e259257cA8Bd1`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xb023e699f5a33916ea823a16485e259257ca8bd1
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xdc9a35b16db4e126cfedc41322b3a36454b1f772
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for RateProvider at `0xdEd6C522d803E35f65318a9a4d7333a22d582199`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xded6c522d803e35f65318a9a4d7333a22d582199
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for AaveV3ConfigEngine at `0xE202F2fc4b6A37Ba53cfD15bE42a762A645FCA07`</summary>

```
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 90, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 643, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 362, in compile
    solc_standard_json.standalone_compile(filenames, compilation_unit, working_dir=working_dir)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 66, in standalone_compile
    targets_json = run_solc_standard_json(
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 181, in run_solc_standard_json
    raise InvalidCompilation(solc_exception_str)
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:4:1:
  |
4 | import {DataTypes} from 'aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:5:1:
  |
5 | import {ConfiguratorInputTypes} from 'aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:6:1:
  |
6 | import {IPoolAddressesProvider} from 'aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPool.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:7:1:
  |
7 | import {IPool} from 'aave-v3-core/contracts/interfaces/IPool.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolConfigurator.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:8:1:
  |
8 | import {IPoolConfigurator} from 'aave-v3-core/contracts/interfaces/IPoolConfigurator.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:9:1:
  |
9 | import {IPriceOracleGetter} from 'aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IAaveOracle.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:10:1:
   |
10 | import {IAaveOracle} from 'aave-v3-core/contracts/interfaces/IAaveOracle.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IACLManager.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:11:1:
   |
11 | import {IACLManager as BasicIACLManager} from 'aave-v3-core/contracts/interfaces/IACLManager.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:12:1:
   |
12 | import {IPoolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:13:1:
   |
13 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:14:1:
   |
14 | import {IReserveInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:15:1:
   |
15 | import {IPoolDataProvider as IAaveProtocolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:4:1:
  |
4 | import {ConfiguratorInputTypes, DataTypes} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:5:1:
  |
5 | import {ReserveConfiguration} from 'aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:6:1:
  |
6 | import {IERC20Metadata} from 'solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IAaveV3ConfigEngine.sol:4:1:
  |
4 | import {IPool, IPoolConfigurator, IAaveOracle} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:4:1:
  |
4 | import {IPoolAddressesProvider} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:5:1:
  |
5 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0xe202f2fc4b6a37ba53cfd15be42a762a645fca07
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 90, in process_all
    compilations = compile_all(target, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 643, in compile_all
    compilations.append(CryticCompile(target, **kwargs))
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 131, in __init__
    self._compile(**kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/crytic_compile.py", line 553, in _compile
    self._platform.compile(self, **kwargs)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/etherscan.py", line 362, in compile
    solc_standard_json.standalone_compile(filenames, compilation_unit, working_dir=working_dir)
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 66, in standalone_compile
    targets_json = run_solc_standard_json(
  File "/home/runner/.local/lib/python3.10/site-packages/crytic_compile/platform/solc_standard_json.py", line 181, in run_solc_standard_json
    raise InvalidCompilation(solc_exception_str)
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:4:1:
  |
4 | import {DataTypes} from 'aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:5:1:
  |
5 | import {ConfiguratorInputTypes} from 'aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:6:1:
  |
6 | import {IPoolAddressesProvider} from 'aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPool.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:7:1:
  |
7 | import {IPool} from 'aave-v3-core/contracts/interfaces/IPool.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolConfigurator.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:8:1:
  |
8 | import {IPoolConfigurator} from 'aave-v3-core/contracts/interfaces/IPoolConfigurator.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol" not found: File not found. Searched the following locations: "".
 --> lib/aave-address-book/src/AaveV3.sol:9:1:
  |
9 | import {IPriceOracleGetter} from 'aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IAaveOracle.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:10:1:
   |
10 | import {IAaveOracle} from 'aave-v3-core/contracts/interfaces/IAaveOracle.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IACLManager.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:11:1:
   |
11 | import {IACLManager as BasicIACLManager} from 'aave-v3-core/contracts/interfaces/IACLManager.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:12:1:
   |
12 | import {IPoolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:13:1:
   |
13 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:14:1:
   |
14 | import {IReserveInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IPoolDataProvider.sol" not found: File not found. Searched the following locations: "".
  --> lib/aave-address-book/src/AaveV3.sol:15:1:
   |
15 | import {IPoolDataProvider as IAaveProtocolDataProvider} from 'aave-v3-core/contracts/interfaces/IPoolDataProvider.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:4:1:
  |
4 | import {ConfiguratorInputTypes, DataTypes} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:5:1:
  |
5 | import {ReserveConfiguration} from 'aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/AaveV3ConfigEngine.sol:6:1:
  |
6 | import {IERC20Metadata} from 'solidity-utils/contracts/oz-common/interfaces/IERC20Metadata.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IAaveV3ConfigEngine.sol:4:1:
  |
4 | import {IPool, IPoolConfigurator, IAaveOracle} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV3.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:4:1:
  |
4 | import {IPoolAddressesProvider} from 'aave-address-book/AaveV3.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol" not found: File not found. Searched the following locations: "".
 --> src/v3-config-engine/IV3RateStrategyFactory.sol:5:1:
  |
5 | import {IDefaultInterestRateStrategy} from 'aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




```

</details>

<details>
<summary>Slither report for RateProvider at `0xeE652bbF72689AA59F0B8F981c9c90e2A8Af8d8f`</summary>

```
INFO:Detectors:
Reentrancy in MaticX.claimWithdrawal() (contracts/MaticX.sol#183-223):
	External calls:
	- unstakeClaimTokens_new(currentRequest.validatorAddress,currentRequest.validatorNonce) (contracts/MaticX.sol#194-197)
		- IValidatorShare(_validatorShare).unstakeClaimTokens_new(_unbondNonce) (contracts/MaticX.sol#298)
	State variables written after the call(s):
	- delete userWithdrawalRequests[msg.sender] (contracts/MaticX.sol#203)
	MaticX.userWithdrawalRequests (contracts/MaticX.sol#48) can be used in cross function reentrancies:
	- MaticX.claimWithdrawal() (contracts/MaticX.sol#183-223)
	- MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177)
Reentrancy in MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177):
	External calls:
	- sellVoucher_new(validatorShare,amount2WithdrawFromValidator,type()(uint256).max) (contracts/MaticX.sol#157-161)
		- IValidatorShare(_validatorShare).sellVoucher_new(_claimAmount,_maximumSharesToBurn) (contracts/MaticX.sol#283-286)
	State variables written after the call(s):
	- _burn(msg.sender,_amount) (contracts/MaticX.sol#174)
		- _totalSupply -= amount (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#295)
	ERC20Upgradeable._totalSupply (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#41) can be used in cross function reentrancies:
	- ERC20Upgradeable._burn(address,uint256) (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#285-300)
	- ERC20Upgradeable._mint(address,uint256) (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#262-272)
	- ERC20Upgradeable.totalSupply() (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#99-101)
	- userWithdrawalRequests[msg.sender].push(WithdrawalRequest(IValidatorShare(validatorShare).unbondNonces(address(this)),stakeManager.epoch() + stakeManager.withdrawalDelay(),validatorShare)) (contracts/MaticX.sol#163-168)
	MaticX.userWithdrawalRequests (contracts/MaticX.sol#48) can be used in cross function reentrancies:
	- MaticX.claimWithdrawal() (contracts/MaticX.sol#183-223)
	- MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-1
INFO:Detectors:
MaticX.initialize(address,address,address,address,address,address)._manager (contracts/MaticX.sol#61) lacks a zero-check on :
		- manager = _manager (contracts/MaticX.sol#70)
MaticX.initialize(address,address,address,address,address,address)._treasury (contracts/MaticX.sol#62) lacks a zero-check on :
		- treasury = _treasury (contracts/MaticX.sol#75)
MaticX.initialize(address,address,address,address,address,address)._token (contracts/MaticX.sol#60) lacks a zero-check on :
		- token = _token (contracts/MaticX.sol#76)
MaticX.initialize(address,address,address,address,address,address)._insurance (contracts/MaticX.sol#63) lacks a zero-check on :
		- insurance = _insurance (contracts/MaticX.sol#77)
MaticX.setTreasuryAddress(address)._address (contracts/MaticX.sol#443) lacks a zero-check on :
		- treasury = _address (contracts/MaticX.sol#444)
MaticX.setInsuranceAddress(address)._address (contracts/MaticX.sol#452) lacks a zero-check on :
		- insurance = _address (contracts/MaticX.sol#457)
MaticX.proposeManagerAddress(address)._address (contracts/MaticX.sol#465) lacks a zero-check on :
		- proposed_manager = _address (contracts/MaticX.sol#466)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-zero-address-validation
INFO:Detectors:
MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177) has external calls inside a loop: validatorShare = stakeManager.getValidatorContract(validatorId) (contracts/MaticX.sol#149)
MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177) has external calls inside a loop: (validatorBalance) = IValidatorShare(validatorShare).getTotalStake(address(this)) (contracts/MaticX.sol#150)
MaticX.sellVoucher_new(address,uint256,uint256) (contracts/MaticX.sol#278-287) has external calls inside a loop: IValidatorShare(_validatorShare).sellVoucher_new(_claimAmount,_maximumSharesToBurn) (contracts/MaticX.sol#283-286)
MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177) has external calls inside a loop: userWithdrawalRequests[msg.sender].push(WithdrawalRequest(IValidatorShare(validatorShare).unbondNonces(address(this)),stakeManager.epoch() + stakeManager.withdrawalDelay(),validatorShare)) (contracts/MaticX.sol#163-168)
MaticX.claimWithdrawal() (contracts/MaticX.sol#183-223) has external calls inside a loop: stakeManager.epoch() < currentRequest.requestEpoch (contracts/MaticX.sol#191)
MaticX.unstakeClaimTokens_new(address,uint256) (contracts/MaticX.sol#294-299) has external calls inside a loop: IValidatorShare(_validatorShare).unstakeClaimTokens_new(_unbondNonce) (contracts/MaticX.sol#298)
MaticX.restake() (contracts/MaticX.sol#228-237) has external calls inside a loop: validatorShare = stakeManager.getValidatorContract(validatorId) (contracts/MaticX.sol#233)
MaticX.restake(address) (contracts/MaticX.sol#305-307) has external calls inside a loop: IValidatorShare(_validatorShare).restake() (contracts/MaticX.sol#306)
MaticX.getTotalStakeAcrossAllValidators() (contracts/MaticX.sol#333-351) has external calls inside a loop: validatorShare = stakeManager.getValidatorContract(validators[i]) (contracts/MaticX.sol#342)
MaticX.getTotalStake(IValidatorShare) (contracts/MaticX.sol#314-321) has external calls inside a loop: _validatorShare.getTotalStake(address(this)) (contracts/MaticX.sol#320)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation/#calls-inside-a-loop
INFO:Detectors:
Reentrancy in MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177):
	External calls:
	- sellVoucher_new(validatorShare,amount2WithdrawFromValidator,type()(uint256).max) (contracts/MaticX.sol#157-161)
		- IValidatorShare(_validatorShare).sellVoucher_new(_claimAmount,_maximumSharesToBurn) (contracts/MaticX.sol#283-286)
	State variables written after the call(s):
	- _burn(msg.sender,_amount) (contracts/MaticX.sol#174)
		- _balances[account] = accountBalance - amount (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#293)
Reentrancy in MaticX.submit(uint256) (contracts/MaticX.sol#88-118):
	External calls:
	- IERC20Upgradeable(token).safeTransferFrom(msg.sender,address(this),_amount) (contracts/MaticX.sol#95-99)
	State variables written after the call(s):
	- _mint(msg.sender,amountToMint) (contracts/MaticX.sol#103)
		- _balances[account] += amount (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#268)
	- _mint(msg.sender,amountToMint) (contracts/MaticX.sol#103)
		- _totalSupply += amount (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#267)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-2
INFO:Detectors:
Reentrancy in MaticX.claimWithdrawal() (contracts/MaticX.sol#183-223):
	External calls:
	- unstakeClaimTokens_new(currentRequest.validatorAddress,currentRequest.validatorNonce) (contracts/MaticX.sol#194-197)
		- IValidatorShare(_validatorShare).unstakeClaimTokens_new(_unbondNonce) (contracts/MaticX.sol#298)
	- IERC20Upgradeable(token).safeTransfer(msg.sender,amountToClaim) (contracts/MaticX.sol#220)
	Event emitted after the call(s):
	- ClaimWithdrawalEvent(msg.sender,amountToClaim) (contracts/MaticX.sol#222)
Reentrancy in MaticX.requestWithdraw(uint256) (contracts/MaticX.sol#131-177):
	External calls:
	- sellVoucher_new(validatorShare,amount2WithdrawFromValidator,type()(uint256).max) (contracts/MaticX.sol#157-161)
		- IValidatorShare(_validatorShare).sellVoucher_new(_claimAmount,_maximumSharesToBurn) (contracts/MaticX.sol#283-286)
	Event emitted after the call(s):
	- RequestWithdrawEvent(msg.sender,_amount) (contracts/MaticX.sol#176)
	- Transfer(account,address(0),amount) (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#297)
		- _burn(msg.sender,_amount) (contracts/MaticX.sol#174)
Reentrancy in MaticX.restake() (contracts/MaticX.sol#228-237):
	External calls:
	- (amountRestaked,liquidReward) = restake(validatorShare) (contracts/MaticX.sol#234)
		- IValidatorShare(_validatorShare).restake() (contracts/MaticX.sol#306)
	Event emitted after the call(s):
	- RestakeEvent(msg.sender,validatorId,amountRestaked,liquidReward) (contracts/MaticX.sol#235)
Reentrancy in MaticX.submit(uint256) (contracts/MaticX.sol#88-118):
	External calls:
	- IERC20Upgradeable(token).safeTransferFrom(msg.sender,address(this),_amount) (contracts/MaticX.sol#95-99)
	Event emitted after the call(s):
	- SubmitEvent(msg.sender,_amount) (contracts/MaticX.sol#105)
	- Transfer(address(0),account,amount) (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#269)
		- _mint(msg.sender,amountToMint) (contracts/MaticX.sol#103)
Reentrancy in MaticX.submit(uint256) (contracts/MaticX.sol#88-118):
	External calls:
	- IERC20Upgradeable(token).safeTransferFrom(msg.sender,address(this),_amount) (contracts/MaticX.sol#95-99)
	- buyVoucher(validatorShare,_amount,0) (contracts/MaticX.sol#109-113)
		- amountSpent = IValidatorShare(_validatorShare).buyVoucher(_amount,_minSharesToMint) (contracts/MaticX.sol#264-267)
	Event emitted after the call(s):
	- DelegateEvent(_amount) (contracts/MaticX.sol#115)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
AddressUpgradeable.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#174-194) uses assembly
	- INLINE ASM (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#186-189)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
AccessControlUpgradeable.__AccessControl_init_unchained() (@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol#54-55) is never used and should be removed
AccessControlUpgradeable._setRoleAdmin(bytes32,bytes32) (@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol#200-204) is never used and should be removed
AddressUpgradeable.functionCall(address,bytes) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#85-87) is never used and should be removed
AddressUpgradeable.functionCallWithValue(address,bytes,uint256) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#114-120) is never used and should be removed
AddressUpgradeable.functionStaticCall(address,bytes) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#147-149) is never used and should be removed
AddressUpgradeable.functionStaticCall(address,bytes,string) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#157-166) is never used and should be removed
AddressUpgradeable.sendValue(address,uint256) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#60-65) is never used and should be removed
ContextUpgradeable.__Context_init() (@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#18-19) is never used and should be removed
ContextUpgradeable.__Context_init_unchained() (@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#21-22) is never used and should be removed
ContextUpgradeable._msgData() (@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#27-29) is never used and should be removed
ERC165Upgradeable.__ERC165_init() (@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol#24-25) is never used and should be removed
ERC165Upgradeable.__ERC165_init_unchained() (@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol#27-28) is never used and should be removed
SafeERC20Upgradeable.safeDecreaseAllowance(IERC20Upgradeable,address,uint256) (@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol#69-80) is never used and should be removed
SafeERC20Upgradeable.safeIncreaseAllowance(IERC20Upgradeable,address,uint256) (@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol#60-67) is never used and should be removed
StringsUpgradeable.toHexString(uint256) (@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol#40-51) is never used and should be removed
StringsUpgradeable.toString(uint256) (@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol#15-35) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in AddressUpgradeable.sendValue(address,uint256) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#60-65):
	- (success) = recipient.call{value: amount}() (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#63)
Low level call in AddressUpgradeable.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#128-139):
	- (success,returndata) = target.call{value: value}(data) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#137)
Low level call in AddressUpgradeable.functionStaticCall(address,bytes,string) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#157-166):
	- (success,returndata) = target.staticcall(data) (@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol#164)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Function AccessControlUpgradeable.__AccessControl_init() (@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol#51-52) is not in mixedCase
Function AccessControlUpgradeable.__AccessControl_init_unchained() (@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol#54-55) is not in mixedCase
Variable AccessControlUpgradeable.__gap (@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol#235) is not in mixedCase
Function PausableUpgradeable.__Pausable_init() (@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol#34-36) is not in mixedCase
Function PausableUpgradeable.__Pausable_init_unchained() (@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol#38-40) is not in mixedCase
Variable PausableUpgradeable.__gap (@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol#102) is not in mixedCase
Function ERC20Upgradeable.__ERC20_init(string,string) (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#55-57) is not in mixedCase
Function ERC20Upgradeable.__ERC20_init_unchained(string,string) (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#59-62) is not in mixedCase
Variable ERC20Upgradeable.__gap (@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol#394) is not in mixedCase
Function ContextUpgradeable.__Context_init() (@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#18-19) is not in mixedCase
Function ContextUpgradeable.__Context_init_unchained() (@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#21-22) is not in mixedCase
Variable ContextUpgradeable.__gap (@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol#36) is not in mixedCase
Function ERC165Upgradeable.__ERC165_init() (@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol#24-25) is not in mixedCase
Function ERC165Upgradeable.__ERC165_init_unchained() (@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol#27-28) is not in mixedCase
Variable ERC165Upgradeable.__gap (@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol#41) is not in mixedCase
Parameter MaticX.initialize(address,address,address,address,address,address)._validatorRegistry (contracts/MaticX.sol#58) is not in mixedCase
Parameter MaticX.initialize(address,address,address,address,address,address)._stakeManager (contracts/MaticX.sol#59) is not in mixedCase
Parameter MaticX.initialize(address,address,address,address,address,address)._token (contracts/MaticX.sol#60) is not in mixedCase
Parameter MaticX.initialize(address,address,address,address,address,address)._manager (contracts/MaticX.sol#61) is not in mixedCase
Parameter MaticX.initialize(address,address,address,address,address,address)._treasury (contracts/MaticX.sol#62) is not in mixedCase
Parameter MaticX.initialize(address,address,address,address,address,address)._insurance (contracts/MaticX.sol#63) is not in mixedCase
Parameter MaticX.submit(uint256)._amount (contracts/MaticX.sol#88) is not in mixedCase
Parameter MaticX.requestWithdraw(uint256)._amount (contracts/MaticX.sol#131) is not in mixedCase
Parameter MaticX.buyVoucher(address,uint256,uint256)._validatorShare (contracts/MaticX.sol#260) is not in mixedCase
Parameter MaticX.buyVoucher(address,uint256,uint256)._amount (contracts/MaticX.sol#261) is not in mixedCase
Parameter MaticX.buyVoucher(address,uint256,uint256)._minSharesToMint (contracts/MaticX.sol#262) is not in mixedCase
Function MaticX.sellVoucher_new(address,uint256,uint256) (contracts/MaticX.sol#278-287) is not in mixedCase
Parameter MaticX.sellVoucher_new(address,uint256,uint256)._validatorShare (contracts/MaticX.sol#279) is not in mixedCase
Parameter MaticX.sellVoucher_new(address,uint256,uint256)._claimAmount (contracts/MaticX.sol#280) is not in mixedCase
Parameter MaticX.sellVoucher_new(address,uint256,uint256)._maximumSharesToBurn (contracts/MaticX.sol#281) is not in mixedCase
Function MaticX.unstakeClaimTokens_new(address,uint256) (contracts/MaticX.sol#294-299) is not in mixedCase
Parameter MaticX.unstakeClaimTokens_new(address,uint256)._validatorShare (contracts/MaticX.sol#295) is not in mixedCase
Parameter MaticX.unstakeClaimTokens_new(address,uint256)._unbondNonce (contracts/MaticX.sol#296) is not in mixedCase
Parameter MaticX.restake(address)._validatorShare (contracts/MaticX.sol#305) is not in mixedCase
Parameter MaticX.getTotalStake(IValidatorShare)._validatorShare (contracts/MaticX.sol#314) is not in mixedCase
Parameter MaticX.convertMaticXToMatic(uint256)._balance (contracts/MaticX.sol#367) is not in mixedCase
Parameter MaticX.convertMaticToMaticX(uint256)._balance (contracts/MaticX.sol#393) is not in mixedCase
Parameter MaticX.setFees(uint8,uint8)._treasuryFee (contracts/MaticX.sol#427) is not in mixedCase
Parameter MaticX.setFees(uint8,uint8)._insuranceFee (contracts/MaticX.sol#428) is not in mixedCase
Parameter MaticX.setTreasuryAddress(address)._address (contracts/MaticX.sol#443) is not in mixedCase
Parameter MaticX.setInsuranceAddress(address)._address (contracts/MaticX.sol#452) is not in mixedCase
Parameter MaticX.proposeManagerAddress(address)._address (contracts/MaticX.sol#465) is not in mixedCase
Parameter MaticX.setValidatorRegistryAddress(address)._address (contracts/MaticX.sol#483) is not in mixedCase
Parameter MaticX.setVersion(string)._version (contracts/MaticX.sol#495) is not in mixedCase
Variable MaticX.proposed_manager (contracts/MaticX.sol#44) is not in mixedCase
Function IValidatorShare.sellVoucher_new(uint256,uint256) (contracts/interfaces/IValidatorShare.sol#22-23) is not in mixedCase
Function IValidatorShare.unstakeClaimTokens_new(uint256) (contracts/interfaces/IValidatorShare.sol#25) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0xee652bbf72689aa59f0b8f981c9c90e2a8af8d8f analyzed (18 contracts with 79 detectors), 93 result(s) found
```

</details>

<details>
<summary>Slither report for MaticSynchronicityPriceAdapter at `0xEe96b77129cF54581B5a8FECCcC50A6A067034a1`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xee96b77129cf54581b5a8fecccc50a6a067034a1
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

<details>
<summary>Slither report for EACAggregatorProxy at `0xf824eA79774E8698E6C6D156c60ab054794C9B18`</summary>

```
Source code not available, try to fetch the bytecode only
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'
ERROR:root:Error in 0xf824ea79774e8698e6c6d156c60ab054794c9b18
ERROR:root:Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 837, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 101, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 79, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 114, in __init__
    parser.parse_top_level_from_loaded_json(ast, path)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 205, in parse_top_level_from_loaded_json
    if data_loaded[self.get_key()] == "root":
KeyError: 'name'

```

</details>

</details>
