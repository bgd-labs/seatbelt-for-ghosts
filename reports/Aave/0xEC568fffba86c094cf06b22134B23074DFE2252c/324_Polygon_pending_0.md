## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/c3d19faa-ebcd-4fc8-b038-bd11b263f2a3](https://dashboard.tenderly.co/me/simulator/c3d19faa-ebcd-4fc8-b038-bd11b263f2a3)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon USDC) at `0x1a13F4Ca1d028320A707D99520AbFefca3998b7F` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000002"
+ "0x0000000000000000000000000000000000000000000000000000000000000003"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x00000000000000000000000080f2c02224a2e548fc67c0bf705ebfa825dd5439"
+ "0x0000000000000000000000006264e51782d739caf515a1bd4f9ae6881b58621b"
@@ Slot `0x43b07a755fbe2ee176a3a311fdcdf1dd1dd16762486d376d9790e9413b32b210` @@
- "0x00000000000000000000000000000000000000000000000000000075f2afd6f3"
+ "0x0000000000000000000000000000000000000000000000000000000429d5ab40"
@@ Slot `0xfa2f5b034937c63449160795435999cb96d1df5a2039ed504a1b91a1cfdb3fa3` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000000000000000000000000000000000071c8da2bb3"
```

```diff
# UChildERC20Proxy (Wrapped Bitcoin) at `0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6`
@@ Slot `0x33ab83e7cbb37f148e0c629480577cfbf965d5d21d37c2966f2a2a7d94c7a55a` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000000000000000000000000000000000000015ee021"
@@ Slot `0xb6a379a90fabc2569ee31b116d92b133e18235b4afca0e42e58355114ddbbcf5` @@
- "0x00000000000000000000000000000000000000000000000000000000015ee021"
+ "0x0000000000000000000000000000000000000000000000000000000000000000"
```

```diff
# UChildERC20Proxy (USD Coin) at `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`
@@ Slot `0x33ab83e7cbb37f148e0c629480577cfbf965d5d21d37c2966f2a2a7d94c7a55a` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000000000000000000000000000000000010d2123c5"
@@ Slot `0xb6a379a90fabc2569ee31b116d92b133e18235b4afca0e42e58355114ddbbcf5` @@
- "0x000000000000000000000000000000000000000000000000000000010d2123c5"
+ "0x0000000000000000000000000000000000000000000000000000000000000000"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000002"
+ "0x0000000000000000000000000000000000000000000000000000000000000003"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x00000000000000000000000080f2c02224a2e548fc67c0bf705ebfa825dd5439"
+ "0x0000000000000000000000006264e51782d739caf515a1bd4f9ae6881b58621b"
@@ Slot `0x7ea89c392ee3a8bfa75482d2b777b79dc07978de7251d25bd80b0a8bb9d728aa` @@
- "0x0000000000000000000000000000000000000000000000ded67ecec71fc936d9"
+ "0x000000000000000000000000000000000000000000000003b50781e6f10fb054"
@@ Slot `0xfa2f5b034937c63449160795435999cb96d1df5a2039ed504a1b91a1cfdb3fa3` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000db21774ce02eb98685"
```

```diff
# InitializableAdminUpgradeabilityProxy at `0x357D51124f59836DeD84c8a1730D72B749d8BC23` with implementation AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`
@@ `assets` key `0x1a13f4ca1d028320a707d99520abfefca3998b7f`.users.0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b @@
- 0
+ 17032547604331017184490594853

@@ `assets` key `0x27f8d03b3a2196956ed754badc28d73be8830a6e`.users.0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b @@
- 0
+ 22945308760871317

```

```diff
# AaveMerkleDistributor at `0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b`
@@ _nextDistributionId @@
- 0
+ 4
@@ `_distributions` key `"0"`.token @@
- 0x0000000000000000000000000000000000000000
+ 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6

@@ `_distributions` key `"1"`.token @@
- 0x0000000000000000000000000000000000000000
+ 0x27f8d03b3a2196956ed754badc28d73be8830a6e

@@ `_distributions` key `"2"`.token @@
- 0x0000000000000000000000000000000000000000
+ 0x1a13f4ca1d028320a707d99520abfefca3998b7f

@@ `_distributions` key `"3"`.token @@
- 0x0000000000000000000000000000000000000000
+ 0x2791bca1f2de4661ed88a30c99a7a9449aa84174

@@ Slot `0x7dfe757ecd65cbd7922a9c0161e935dd7fdbcc0e999689c7d31633896b1fc60c` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xc347790cda0bdd566160dfef55d52feccc07b334a3dd00974c957d08afab94bd"
@@ Slot `0xa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4a` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xc2cf7145003ab6cd9b31423261a1ec73bfd4df3bf07c0abee92be81bf2cbdb4c"
@@ Slot `0xcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b6887930` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xb45f53d15baa586913df15dfcdb6aece2fb0021d88deea0d0e24f766005b17d8"
@@ Slot `0xd9d16d34ffb15ba3a3d852f0d403e2ce1d691fb54de27ac87cd2f993f3ec3310` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xf1d96a4c1c9e8d4591953b6dee8cbab19c4e98264217ff5b91191c99413cafbe"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation unknown contract name at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000000000000000000000000000000000000000000002"
+ "0x0000000000000000000000000000000000000000000000000000000000000003"
@@ Slot `0x2e1e2a041428ffd69501a8afc07fe850a13a133d05dad35d8e6fdc3b4f9a5e6d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000000000000000000000000000000000000000000a"
@@ Slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` @@
- "0x0000000000000000000000006a8730f54b8c69ab096c43ff217ca0a350726ac7"
+ "0x0000000000000000000000001685d81212580dd4cda287616c2f6f4794927e18"
```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_queuedActions` key `0x86bc1285c51dcf9c84c52cff9693f597b014873c670b57deaa6e872fd7ea6af1` @@
- true
+ false

@@ `_actionsSets` key `"64"`.executed @@
- false
+ true

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - AaveMerkleDistributor at `0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b`
    - `DistributionAdded(token: 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6, merkleRoot: 0xc2cf7145003ab6cd9b31423261a1ec73bfd4df3bf07c0abee92be81bf2cbdb4c, distributionId: 0)`
    - `DistributionAdded(token: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, merkleRoot: 0xb45f53d15baa586913df15dfcdb6aece2fb0021d88deea0d0e24f766005b17d8, distributionId: 1)`
    - `DistributionAdded(token: 0x1a13f4ca1d028320a707d99520abfefca3998b7f, merkleRoot: 0xf1d96a4c1c9e8d4591953b6dee8cbab19c4e98264217ff5b91191c99413cafbe, distributionId: 2)`
    - `DistributionAdded(token: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, merkleRoot: 0xc347790cda0bdd566160dfef55d52feccc07b334a3dd00974c957d08afab94bd, distributionId: 3)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation unknown contract name at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`
    - `Upgraded(implementation: 0x1685d81212580dd4cda287616c2f6f4794927e18)`
    - `TokensRescued(tokenRescued: 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6, receiver: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, amountRescued: 22994977)`
    - `TokensRescued(tokenRescued: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, receiver: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, amountRescued: 4515242949)`
    - `ReserveUsedAsCollateralEnabled(reserve: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, user: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b)`
    - `ReserveUsedAsCollateralEnabled(reserve: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, user: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b)`
  - LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`
    - `LendingPoolUpdated(newAddress: 0x1685d81212580dd4cda287616c2f6f4794927e18)`
  - InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
    - `Upgraded(implementation: 0x6264e51782d739caf515a1bd4f9ae6881b58621b)`
    - `Initialized(underlyingAsset: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, pool: 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf, treasury: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, incentivesController: 0x357d51124f59836ded84c8a1730d72b749d8bc23, aTokenDecimals: 18, aTokenName: Aave Matic Market DAI, aTokenSymbol: amDAI, params: 0x)`
    - `BalanceTransfer(from: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, to: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, value: 4250580268097645600939, index: 1051538602529695196851222079)`
    - `Transfer(from: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, to: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, value: 4250580268097645600939)`
    - `TokensRescued(tokenRescued: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, receiver: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, amountRescued: 4250580268097645600939)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`
    - `ATokenUpgraded(asset: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, proxy: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, implementation: 0x6264e51782d739caf515a1bd4f9ae6881b58621b)`
    - `ATokenUpgraded(asset: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, proxy: 0x1a13f4ca1d028320a707d99520abfefca3998b7f, implementation: 0x6264e51782d739caf515a1bd4f9ae6881b58621b)`
  - InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon USDC) at `0x1a13F4Ca1d028320A707D99520AbFefca3998b7F` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
    - `Upgraded(implementation: 0x6264e51782d739caf515a1bd4f9ae6881b58621b)`
    - `Initialized(underlyingAsset: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, pool: 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf, treasury: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, incentivesController: 0x357d51124f59836ded84c8a1730d72b749d8bc23, aTokenDecimals: 6, aTokenName: Aave Matic Market USDC, aTokenSymbol: amUSDC, params: 0x)`
    - `BalanceTransfer(from: 0x1a13f4ca1d028320a707d99520abfefca3998b7f, to: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, value: 514131378018, index: 1052036582609242056139502031)`
    - `Transfer(from: 0x1a13f4ca1d028320a707d99520abfefca3998b7f, to: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, value: 514131378018)`
    - `TokensRescued(tokenRescued: 0x1a13f4ca1d028320a707d99520abfefca3998b7f, receiver: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, amountRescued: 514131378018)`
  - UChildERC20Proxy (Wrapped Bitcoin) at `0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6`
    - `Transfer(from: 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf, to: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, value: 22994977)`
  - UChildERC20Proxy (USD Coin) at `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`
    - `Transfer(from: 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf, to: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, value: 4515242949)`
  - InitializableAdminUpgradeabilityProxy at `0x357D51124f59836DeD84c8a1730D72B749d8BC23` with implementation AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`
    - `UserIndexUpdated(user: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, asset: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, index: 22945308760871317)`
    - `UserIndexUpdated(user: 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b, asset: 0x1a13f4ca1d028320a707d99520abfefca3998b7f, index: 17032547604331017184490594853)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 64, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x7B74938583Eb03e06042fcB651046BaF0bf15644: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0x7b74938583eb03e06042fcb651046baf0bf15644: Contract (verified) (PolRescueMissionPayload)
  - 0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b: Contract (verified) (AaveMerkleDistributor)
  - 0xd05e3e715d945b59290df0ae8ef85c1bdb684744: Contract (verified) (LendingPoolAddressesProvider)
  - 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1685d81212580dd4cda287616c2f6f4794927e18: Contract (verified) (LendingPool)
  - 0x26db2b833021583566323e3b8985999981b9f1f3: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xf70a4d422e772926852ba9044026f169e6ad9492: Contract (verified) (LendingPoolConfigurator)
  - 0x27f8d03b3a2196956ed754badc28d73be8830a6e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x6264e51782d739caf515a1bd4f9ae6881b58621b: Contract (verified) (AToken)
  - 0x1a13f4ca1d028320a707d99520abfefca3998b7f: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6: Contract (verified) (UChildERC20Proxy)
  - 0x7ffb3d637014488b63fb9858e279385685afc1e2: Contract (verified) (UChildERC20)
  - 0x2791bca1f2de4661ed88a30c99a7a9449aa84174: Contract (verified) (UChildERC20Proxy)
  - 0xdd9185db084f5c4fff3b4f70e7ba62123b812226: Contract (verified) (UChildAdministrableERC20)
  - 0x357d51124f59836ded84c8a1730d72b749d8bc23: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x2c901a65071c077c78209b06ab2b5d8ec285ab84: Contract (verified) (AaveIncentivesController)
  - 0x0229f777b0fab107f9591a41d5f02e4e98db6f2d: Contract (verified) (AaveOracle)
  - 0xfc539a559e170f848323e19dfd66007520510085: Contract (verified) (EACAggregatorProxy)
  - 0x5777ca61f29cac50250a3b136b52328d05dba8c9: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xefb7e6be8356ccc6827799b6a7348ee674a80eae: Contract (verified) (EACAggregatorProxy)
  - 0xec5dc23f4fa6aac7fcbbcc2849571b04fcacd75f: Contract (verified) (AccessControlledOffchainAggregator)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for AaveOracle at `0x0229F777B0fAb107F9591a41d5F02E4e98dB6f2d`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon USDC) at `0x1a13F4Ca1d028320A707D99520AbFefca3998b7F` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UChildERC20Proxy (Wrapped Bitcoin) at `0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UChildERC20Proxy (USD Coin) at `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0x357D51124f59836DeD84c8a1730D72B749d8BC23` with implementation AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x5777Ca61f29cac50250a3b136b52328D05DBa8C9`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveMerkleDistributor at `0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b-EthRobotKeeper' running
```

</details>

<details>
<summary>View warnings for PolRescueMissionPayload at `0x7B74938583Eb03e06042fcB651046BaF0bf15644`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UChildERC20 at `0x7FFB3d637014488b63fb9858E279385685AFc1e2`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation unknown contract name at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

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
<summary>View warnings for UChildAdministrableERC20 at `0xDD9185DB084f5C4fFf3b4f70E7bA62123b812226`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0xEc5dC23f4FA6AaC7FCBbcC2849571b04FcaCd75F`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0xefb7e6be8356cCc6827799B6A7348eE674A80EaE`</summary>

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

<details>
<summary>View warnings for EACAggregatorProxy at `0xFC539A559e170f848323e19dfD66007520510085`</summary>

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
<summary>Slither report for AaveOracle at `0x0229F777B0fAb107F9591a41d5F02E4e98dB6f2d`</summary>

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
ERROR:root:Error in 0x0229f777b0fab107f9591a41d5f02e4e98db6f2d
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
<summary>Slither report for LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
ERROR:root:Error in 0x1685d81212580dd4cda287616c2f6f4794927e18
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon USDC) at `0x1a13F4Ca1d028320A707D99520AbFefca3998b7F` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
ERROR:root:Error in 0x1a13f4ca1d028320a707d99520abfefca3998b7f
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
<summary>Slither report for UChildERC20Proxy (Wrapped Bitcoin) at `0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6`</summary>

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
ERROR:root:Error in 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6
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
<summary>Slither report for UChildERC20Proxy (USD Coin) at `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`</summary>

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
ERROR:root:Error in 0x2791bca1f2de4661ed88a30c99a7a9449aa84174
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation unknown contract name at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
ERROR:root:Error in 0x27f8d03b3a2196956ed754badc28d73be8830a6e
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
<summary>Slither report for AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`</summary>

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
ERROR:root:Error in 0x2c901a65071c077c78209b06ab2b5d8ec285ab84
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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x357D51124f59836DeD84c8a1730D72B749d8BC23` with implementation AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`</summary>

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
ERROR:root:Error in 0x357d51124f59836ded84c8a1730d72b749d8bc23
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
<summary>Slither report for AccessControlledOffchainAggregator at `0x5777Ca61f29cac50250a3b136b52328D05DBa8C9`</summary>

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
ERROR:root:Error in 0x5777ca61f29cac50250a3b136b52328d05dba8c9
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
<summary>Slither report for AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`</summary>

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
ERROR:root:Error in 0x6264e51782d739caf515a1bd4f9ae6881b58621b
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
<summary>Slither report for AaveMerkleDistributor at `0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b-EthRobotKeeper' running
INFO:Detectors:
EthRobotKeeper.performUpkeep(bytes).isActionPerformed (src/contracts/EthRobotKeeper.sol#104) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
EthRobotKeeper.constructor(address).governanceV2 (src/contracts/EthRobotKeeper.sol#34) lacks a zero-check on :
		- GOVERNANCE_V2 = governanceV2 (src/contracts/EthRobotKeeper.sol#35)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-zero-address-validation
INFO:Detectors:
EthRobotKeeper.checkUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#42-95) has external calls inside a loop: proposalState = IAaveGovernanceV2(GOVERNANCE_V2).getProposalState(proposalId) (src/contracts/EthRobotKeeper.sol#55-56)
EthRobotKeeper.checkUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#42-95) has external calls inside a loop: proposal = IAaveGovernanceV2(GOVERNANCE_V2).getProposalById(proposalId) (src/contracts/EthRobotKeeper.sol#57-58)
EthRobotKeeper._canProposalBeCancelled(IAaveGovernanceV2.ProposalState,IAaveGovernanceV2.ProposalWithoutVotes) (src/contracts/EthRobotKeeper.sol#214-232) has external calls inside a loop: proposalValidator.validateProposalCancellation(IAaveGovernanceV2(GOVERNANCE_V2),proposal.creator,block.number - 1) (src/contracts/EthRobotKeeper.sol#226-231)
EthRobotKeeper.performUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#102-145) has external calls inside a loop: proposal = IAaveGovernanceV2(GOVERNANCE_V2).getProposalById(proposalId) (src/contracts/EthRobotKeeper.sol#111-112)
EthRobotKeeper.performUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#102-145) has external calls inside a loop: proposalState = IAaveGovernanceV2(GOVERNANCE_V2).getProposalState(proposalId) (src/contracts/EthRobotKeeper.sol#113-114)
EthRobotKeeper.performUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#102-145) has external calls inside a loop: IAaveGovernanceV2(GOVERNANCE_V2).cancel(proposalId) (src/contracts/EthRobotKeeper.sol#119-124)
EthRobotKeeper.performUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#102-145) has external calls inside a loop: IAaveGovernanceV2(GOVERNANCE_V2).queue(proposalId) (src/contracts/EthRobotKeeper.sol#126-131)
EthRobotKeeper.performUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#102-145) has external calls inside a loop: IAaveGovernanceV2(GOVERNANCE_V2).execute(proposalId) (src/contracts/EthRobotKeeper.sol#135-140)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation/#calls-inside-a-loop
INFO:Detectors:
Reentrancy in EthRobotKeeper.performUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#102-145):
	External calls:
	- IAaveGovernanceV2(GOVERNANCE_V2).cancel(proposalId) (src/contracts/EthRobotKeeper.sol#119-124)
	- IAaveGovernanceV2(GOVERNANCE_V2).queue(proposalId) (src/contracts/EthRobotKeeper.sol#126-131)
	- IAaveGovernanceV2(GOVERNANCE_V2).execute(proposalId) (src/contracts/EthRobotKeeper.sol#135-140)
	Event emitted after the call(s):
	- ActionFailed(proposalId,action,reason) (src/contracts/EthRobotKeeper.sol#123)
	- ActionFailed(proposalId,action,reason_scope_0) (src/contracts/EthRobotKeeper.sol#130)
	- ActionFailed(proposalId,action,reason_scope_1) (src/contracts/EthRobotKeeper.sol#139)
	- ActionSucceeded(proposalId,action) (src/contracts/EthRobotKeeper.sol#121)
	- ActionSucceeded(proposalId,action) (src/contracts/EthRobotKeeper.sol#128)
	- ActionSucceeded(proposalId,action) (src/contracts/EthRobotKeeper.sol#137)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
EthRobotKeeper._canProposalBeExecuted(IAaveGovernanceV2.ProposalState,IAaveGovernanceV2.ProposalWithoutVotes) (src/contracts/EthRobotKeeper.sol#195-206) uses timestamp for comparisons
	Dangerous comparisons:
	- proposalState == IAaveGovernanceV2.ProposalState.Queued && block.timestamp >= proposal.executionTime (src/contracts/EthRobotKeeper.sol#200-201)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#block-timestamp
INFO:Detectors:
EthRobotKeeper.checkUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#42-95) uses assembly
	- INLINE ASM (src/contracts/EthRobotKeeper.sol#87-89)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
EthRobotKeeper.performUpkeep(bytes) (src/contracts/EthRobotKeeper.sol#102-145) has a high cyclomatic complexity (12).
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#cyclomatic-complexity
INFO:Detectors:
Context._msgData() (lib/solidity-utils/src/contracts/oz-common/Context.sol#22-24) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Function IExecutorWithTimelock.GRACE_PERIOD() (lib/aave-address-book/src/AaveGovernanceV2.sol#159) is not in mixedCase
Function IExecutorWithTimelock.MINIMUM_DELAY() (lib/aave-address-book/src/AaveGovernanceV2.sol#165) is not in mixedCase
Function IExecutorWithTimelock.MAXIMUM_DELAY() (lib/aave-address-book/src/AaveGovernanceV2.sol#171) is not in mixedCase
Function IAaveGovernanceV2.__abdicate() (lib/aave-address-book/src/AaveGovernanceV2.sol#444) is not in mixedCase
Variable EthRobotKeeper.GOVERNANCE_V2 (src/contracts/EthRobotKeeper.sol#19) is not in mixedCase
Variable EthRobotKeeper._disabledProposals (src/contracts/EthRobotKeeper.sol#27) is not in mixedCase
Function IAaveCLRobotOperator.LINK_TOKEN() (src/interfaces/IAaveCLRobotOperator.sol#133) is not in mixedCase
Function IAaveCLRobotOperator.KEEPER_REGISTRY() (src/interfaces/IAaveCLRobotOperator.sol#139) is not in mixedCase
Function IAaveCLRobotOperator.KEEPER_REGISTRAR() (src/interfaces/IAaveCLRobotOperator.sol#145) is not in mixedCase
Function IEthRobotKeeper.GOVERNANCE_V2() (src/interfaces/IEthRobotKeeper.sol#66) is not in mixedCase
Function IEthRobotKeeper.MAX_ACTIONS() (src/interfaces/IEthRobotKeeper.sol#72) is not in mixedCase
Function IEthRobotKeeper.MAX_SKIP() (src/interfaces/IEthRobotKeeper.sol#78) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Variable EthRobotKeeper.performUpkeep(bytes).reason_scope_0 (src/contracts/EthRobotKeeper.sol#129) is too similar to EthRobotKeeper.performUpkeep(bytes).reason_scope_1 (src/contracts/EthRobotKeeper.sol#138)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#variable-names-too-similar
INFO:Slither:0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b analyzed (11 contracts with 82 detectors), 28 result(s) found
```

</details>

<details>
<summary>Slither report for PolRescueMissionPayload at `0x7B74938583Eb03e06042fcB651046BaF0bf15644`</summary>

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
ERROR:root:Error in 0x7b74938583eb03e06042fcb651046baf0bf15644
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
<summary>Slither report for UChildERC20 at `0x7FFB3d637014488b63fb9858E279385685AFc1e2`</summary>

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
ERROR:root:Error in 0x7ffb3d637014488b63fb9858e279385685afc1e2
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation unknown contract name at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

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
<summary>Slither report for UChildAdministrableERC20 at `0xDD9185DB084f5C4fFf3b4f70E7bA62123b812226`</summary>

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
ERROR:root:Error in 0xdd9185db084f5c4fff3b4f70e7ba62123b812226
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
<summary>Slither report for AccessControlledOffchainAggregator at `0xEc5dC23f4FA6AaC7FCBbcC2849571b04FcaCd75F`</summary>

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
ERROR:root:Error in 0xec5dc23f4fa6aac7fcbbcc2849571b04fcacd75f
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
<summary>Slither report for EACAggregatorProxy at `0xefb7e6be8356cCc6827799B6A7348eE674A80EaE`</summary>

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
ERROR:root:Error in 0xefb7e6be8356ccc6827799b6a7348ee674a80eae
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

<details>
<summary>Slither report for EACAggregatorProxy at `0xFC539A559e170f848323e19dfD66007520510085`</summary>

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
ERROR:root:Error in 0xfc539a559e170f848323e19dfd66007520510085
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
