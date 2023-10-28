## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/780e76ee-221f-46f5-86c9-747ce5e6cc72](https://dashboard.tenderly.co/me/simulator/780e76ee-221f-46f5-86c9-747ce5e6cc72)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# UChildERC20Proxy (Curve DAO) at `0x172370d5Cd63279eFa6d502DAB29171933a610AF`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x00000000000000000000000000000000000000000008494c83afc79955957037"
+ "0x0000000000000000000000000000000000000000000847483e769b99d4b5d1af"
@@ Slot `0x2d52af3fc432802ebc520b7400af6e9bd0e536e499f96f991e597bc0b8189ab5` @@
- "0x000000000000000000000000000000000000000000000b55d8d53ab695ab5ea2"
+ "0x000000000000000000000000000000000000000000000951939c0eb714cbc01a"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000036` @@
- "0x0000000000000000000000000000000000000000000a56b7c7517306be693d76"
+ "0x000000000000000000000000000000000000000000092907b993b4e224f1995f"
@@ Slot `0xaf561f020a8f8c4f072d325aff6aad11decebb5083af314fbbf9748a44965847` @@
- "0x00000000000000000000000000000000000000000002aca8a76d87ac60ffd580"
+ "0x000000000000000000000000000000000000000000017ef899afc987c7883169"
```

```diff
# InitializableAdminUpgradeabilityProxy at `0x357D51124f59836DeD84c8a1730D72B749d8BC23` with implementation AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`
@@ `assets` key `0x27f8d03b3a2196956ed754badc28d73be8830a6e`.users.0xdc9a35b16db4e126cfedc41322b3a36454b1f772 @@
- 0
+ 22945308760871317

@@ `assets` key `0x3df8f92b7e798820ddcca2ebea7babda2c90c4ad`.lastUpdateTimestamp @@
- 1698234790
+ 1698466252

@@ `assets` key `0xc4195d4060daeac44058ed668aa5efec50d77ff6`.lastUpdateTimestamp @@
- 1698117732
+ 1698466252

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x3Df8f92b7E798820ddcCA2EBEA7BAbda2c90c4aD` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
@@ _totalSupply @@
- 52186524057492012230338
+ 4737262208564108275656
@@ `_balances` key `0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383` @@
- 8098634113461530238224
+ 2426330936734875183

```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`
@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.liquidityIndex @@
- 1175940014430670661165993360
+ 1175940025817791267610965082
@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.variableBorrowIndex @@
- 1380945620016127627321747681
+ 1381982416632622362430178411
@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.currentLiquidityRate @@
- 1319336742545953609871
+ 1765512489380282406398
@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.currentVariableBorrowRate @@
- 102254144648018527322623904
+ 115557794031738690860820820
@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.currentStableBorrowRate @@
- 87737175644022497463186169
+ 103891607038539838902425284
@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.lastUpdateTimestamp @@
- 1698234790
+ 1698466252

@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.liquidityIndex @@
- 1052866790241376978350331728
+ 1052867005090832785570030873
@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.variableBorrowIndex @@
- 1091797033924301352900671666
+ 1091797636068635699392284663
@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.currentLiquidityRate @@
- 12051085858509774608858199
+ 15351291601416979033937881
@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.currentVariableBorrowRate @@
- 32570462427729547528507507
+ 36760659565274802676975714
@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.currentStableBorrowRate @@
- 55285231213864773764253753
+ 57380329782637401338487857
@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.lastUpdateTimestamp @@
- 1698465718
+ 1698466252

@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.liquidityIndex @@
- 1222488627332324083469194885
+ 1223071531761270473595953625
@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.variableBorrowIndex @@
- 1552058114293159457059109580
+ 1561199374648562668532418975
@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.currentLiquidityRate @@
- 7906931805512374265191437
+ 11139561658615559715354625
@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.currentVariableBorrowRate @@
- 97381797857207883913311249
+ 112970440755523739475028918
@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.currentStableBorrowRate @@
- 47381797857207883913311249
+ 62970440755523739475028918
@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.lastUpdateTimestamp @@
- 1696564512
+ 1698466252

@@ `_usersConfig` key `0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383`.data @@
- 35818154
+ 33589930

```

```diff
# UChildERC20Proxy (Dai) at `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x00000000000000000000000000000000000000000061febf129d69b93b254ec5"
+ "0x00000000000000000000000000000000000000000060c11be8e73654c9a54ec5"
@@ Slot `0xf476c5a70c1aa932ec8c61f53145f7e9de0cac7e0776079427ee92975a8ce8bb` @@
- "0x00000000000000000000000000000000000000000004979cbf3662537f9edea0"
+ "0x0000000000000000000000000000000000000000000359f995802eef0e1edea0"
```

```diff
# UChildERC20Proxy (Balancer) at `0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x0000000000000000000000000000000000000000000081d517e7565d9a2166a1"
+ "0x00000000000000000000000000000000000000000000816fd2c94e47440a00d3"
@@ Slot `0x51bfaac9bec4ba6af46128d6028c9ab9753269b3631ce614ac81a478a2745445` @@
- "0x00000000000000000000000000000000000000000000016503e175b3d4fd0b51"
+ "0x0000000000000000000000000000000000000000000000ffbec36d9d7ee5a583"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0xc4195D4060DaEac44058Ed668AA5EfEc50D77ff6` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
@@ _totalSupply @@
- 6262221259481917069152
+ 4737262208564108275656
@@ `_balances` key `0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383` @@
- 1527385381854543668679
+ 2426330936734875183

```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_actionsSets` key `"70"`.executed @@
- false
+ true

@@ `_queuedActions` key `0x82f235e89d1a08621dff4afa951b52f3833d1aa5899fbae86c35ffed0ce8a3d8` @@
- true
+ false

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableAdminUpgradeabilityProxy at `0x357D51124f59836DeD84c8a1730D72B749d8BC23` with implementation AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`
    - `UserIndexUpdated(user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, asset: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, index: 22945308760871317)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`
    - `ReserveUsedAsCollateralEnabled(reserve: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0x172370d5cd63279efa6d502dab29171933a610af, user: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383)`
    - `ReserveUsedAsCollateralEnabled(reserve: 0x172370d5cd63279efa6d502dab29171933a610af, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, user: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383)`
    - `ReserveUsedAsCollateralEnabled(reserve: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `ReserveDataUpdated(reserve: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, liquidityRate: 15351291601416979033937881, stableBorrowRate: 57380329782637401338487857, variableBorrowRate: 36760659565274802676975714, liquidityIndex: 1052867005090832785570030873, variableBorrowIndex: 1091797636068635699392284663)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `Withdraw(reserve: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0xc928002904ec475663a83063d492ea2ae09ebda1, amount: 1500000000000000000000000)`
    - `ReserveDataUpdated(reserve: 0x172370d5cd63279efa6d502dab29171933a610af, liquidityRate: 1765512489380282406398, stableBorrowRate: 103891607038539838902425284, variableBorrowRate: 115557794031738690860820820, liquidityIndex: 1175940025817791267610965082, variableBorrowIndex: 1381982416632622362430178411)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0x172370d5cd63279efa6d502dab29171933a610af, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `Withdraw(reserve: 0x172370d5cd63279efa6d502dab29171933a610af, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0xc928002904ec475663a83063d492ea2ae09ebda1, amount: 9523508008472796962440)`
    - `ReserveDataUpdated(reserve: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, liquidityRate: 11139561658615559715354625, stableBorrowRate: 62970440755523739475028918, variableBorrowRate: 112970440755523739475028918, liquidityIndex: 1223071531761270473595953625, variableBorrowIndex: 1561199374648562668532418975)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772)`
    - `Withdraw(reserve: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, user: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0xc928002904ec475663a83063d492ea2ae09ebda1, amount: 1868101578574609737166)`
  - InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`
    - `BalanceTransfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 1500000000000000000000000, index: 1052867005090832785570030873)`
    - `Transfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 1500000000000000000000000)`
    - `Transfer(from: 0x0000000000000000000000000000000000000000, to: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 1510512147386687935)`
    - `Mint(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 1510512147386687935, index: 1052867005090832785570030873)`
    - `Transfer(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0x0000000000000000000000000000000000000000, value: 1500000000000000000000000)`
    - `Burn(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, target: 0xc928002904ec475663a83063d492ea2ae09ebda1, value: 1500000000000000000000000, index: 1052867005090832785570030873)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x3Df8f92b7E798820ddcCA2EBEA7BAbda2c90c4aD` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
    - `BalanceTransfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 9523508008472796962440, index: 1175940025817791267610965082)`
    - `Transfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 9523508008472796962440)`
    - `Transfer(from: 0x0000000000000000000000000000000000000000, to: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 5953014944221109629)`
    - `Mint(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 5953014944221109629, index: 1175940025817791267610965082)`
    - `Transfer(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0x0000000000000000000000000000000000000000, value: 9523508008472796962440)`
    - `Burn(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, target: 0xc928002904ec475663a83063d492ea2ae09ebda1, value: 9523508008472796962440, index: 1175940025817791267610965082)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0xc4195D4060DaEac44058Ed668AA5EfEc50D77ff6` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`
    - `BalanceTransfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 1868101578574609737166, index: 1223071531761270473595953625)`
    - `Transfer(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, to: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, value: 1868101578574609737166)`
    - `Transfer(from: 0x0000000000000000000000000000000000000000, to: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 2967576295352082032)`
    - `Mint(from: 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383, value: 2967576295352082032, index: 1223071531761270473595953625)`
    - `Transfer(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, to: 0x0000000000000000000000000000000000000000, value: 1868101578574609737166)`
    - `Burn(from: 0xdc9a35b16db4e126cfedc41322b3a36454b1f772, target: 0xc928002904ec475663a83063d492ea2ae09ebda1, value: 1868101578574609737166, index: 1223071531761270473595953625)`
  - UChildERC20Proxy (Dai) at `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`
    - `Transfer(from: 0x27f8d03b3a2196956ed754badc28d73be8830a6e, to: 0xc928002904ec475663a83063d492ea2ae09ebda1, value: 1500000000000000000000000)`
    - `Transfer(from: 0xc928002904ec475663a83063d492ea2ae09ebda1, to: 0x0000000000000000000000000000000000000000, value: 1500000000000000000000000)`
  - UChildERC20Proxy (Curve DAO) at `0x172370d5Cd63279eFa6d502DAB29171933a610AF`
    - `Transfer(from: 0x3df8f92b7e798820ddcca2ebea7babda2c90c4ad, to: 0xc928002904ec475663a83063d492ea2ae09ebda1, value: 9523508008472796962440)`
    - `Transfer(from: 0xc928002904ec475663a83063d492ea2ae09ebda1, to: 0x0000000000000000000000000000000000000000, value: 9523508008472796962440)`
  - UChildERC20Proxy (Balancer) at `0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3`
    - `Transfer(from: 0xc4195d4060daeac44058ed668aa5efec50d77ff6, to: 0xc928002904ec475663a83063d492ea2ae09ebda1, value: 1868101578574609737166)`
    - `Transfer(from: 0xc928002904ec475663a83063d492ea2ae09ebda1, to: 0x0000000000000000000000000000000000000000, value: 1868101578574609737166)`
  - unknown contract name at `0xc928002904Ec475663A83063D492EA2aE09EbDA1`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0xc928002904ec475663a83063d492ea2ae09ebda1","topics":["0x22e3f162fca16dc0fcfb65eddf406531a0c555a2c24c58cf5d10fc2d202a882e"],"data":"0x0000000000000000000000008f3cf7ad23cd3cadbd9735aff958023239c6a063000000000000000000000000000000000000000000013da329b6336471800000"},"trace_index":null}`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0xc928002904ec475663a83063d492ea2ae09ebda1","topics":["0x22e3f162fca16dc0fcfb65eddf406531a0c555a2c24c58cf5d10fc2d202a882e"],"data":"0x000000000000000000000000172370d5cd63279efa6d502dab29171933a610af00000000000000000000000000000000000000000000020445392bff80df9e88"},"trace_index":null}`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0xc928002904ec475663a83063d492ea2ae09ebda1","topics":["0x22e3f162fca16dc0fcfb65eddf406531a0c555a2c24c58cf5d10fc2d202a882e"],"data":"0x0000000000000000000000009a71012b13ca4d3d0cdc72a177df3ef03b0e76a3000000000000000000000000000000000000000000000065451e0816561765ce"},"trace_index":null}`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 70, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xCCAfBbbD68bb9B1A5F1C6ac948ED1944429F360a: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0xccafbbbd68bb9b1a5f1c6ac948ed1944429f360a: Contract (not verified)
  - 0x3df8f92b7e798820ddcca2ebea7babda2c90c4ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x80f2c02224a2e548fc67c0bf705ebfa825dd5439: Contract (verified) (AToken)
  - 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1685d81212580dd4cda287616c2f6f4794927e18: Contract (verified) (LendingPool)
  - 0xc4195d4060daeac44058ed668aa5efec50d77ff6: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xe8599f3cc5d38a9ad6f3684cd5cea72f10dbc383: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x230e0321cf38f09e247e50afc7801ea2351fe56f: Contract (verified) (Collector)
  - 0x27f8d03b3a2196956ed754badc28d73be8830a6e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x6264e51782d739caf515a1bd4f9ae6881b58621b: Contract (verified) (AToken)
  - 0x357d51124f59836ded84c8a1730d72b749d8bc23: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x2c901a65071c077c78209b06ab2b5d8ec285ab84: Contract (verified) (AaveIncentivesController)
  - 0xd05e3e715d945b59290df0ae8ef85c1bdb684744: Contract (verified) (LendingPoolAddressesProvider)
  - 0x0229f777b0fab107f9591a41d5f02e4e98db6f2d: Contract (verified) (AaveOracle)
  - 0xfc539a559e170f848323e19dfd66007520510085: Contract (verified) (EACAggregatorProxy)
  - 0x5777ca61f29cac50250a3b136b52328d05dba8c9: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xefb7e6be8356ccc6827799b6a7348ee674a80eae: Contract (verified) (EACAggregatorProxy)
  - 0xec5dc23f4fa6aac7fcbbcc2849571b04fcacd75f: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x1a13f4ca1d028320a707d99520abfefca3998b7f: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xf9d5aac6e5572aefa6bd64108ff86a222f69b64d: Contract (verified) (EACAggregatorProxy)
  - 0x40c9e6e3ba0324e58c0c88c78c8e733a93ac1b61: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xa338e0492b2f944e9f8c0653d3ad1484f2657a37: Contract (verified) (EACAggregatorProxy)
  - 0x921c2121af8d68f397cb2d2a3d24ffc180bcdcb7: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x5c2ed810328349100a66b82b78a1791b101c9d61: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x28424507fefb6f7f8e9d3860f56504e4e5f5f390: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x327e23a4855b6f663a28c5161541d69af8973302: Contract (verified) (EACAggregatorProxy)
  - 0xc6d82423c6f8b0c406c1c34aee8e988b14d5f685: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xe638249af9642cda55a92245525268482ee4c67b: Contract (not verified)
  - 0xec35e6f084ce365a819e99bcd1f89319e519fdf3: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x080b5bf8f360f624628e0fb961f4e67c9e3c7cf1: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x03cd157746c61f44597dd54c6f6702105258c722: Contract (not verified)
  - 0x7c66609db07c8983f324098ddc53f03af716aba7: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x1cf68c76803c9a415be301f50e82e44c64b7f1d4: Contract (not verified)
  - 0xc1670343d479ddea6e90a108741b8acc23abe847: Contract (verified) (AccessControlledOffchainAggregator)
  - 0xb77fa460604b9c6435a235d057f7d319ac83cb53: Contract (not verified)
  - 0xd2aa3fc2585999ef9ca66a1b6be18123b5774be7: Contract (verified) (AccessControlledOffchainAggregator)
  - 0x0ca2e42e8c21954af73bc9af1213e4e81d6a669a: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x020e452b463568f55bac6dc5afc8f0b62ea5f0f3: Contract (not verified)
  - 0x64093fe5f8cf62afb4377cf7ef4373537fe9155b: Contract (verified) (GenericLogic)
  - 0x75c4d1fb84429023170086f06e682dcbbf537b7d: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1d22ae684f479d3da97ca19ffb03e6349d345f24: Contract (verified) (VariableDebtToken)
  - 0x2238101b7014c279aaf6b408a284e49cdbd5db55: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x72a053fa208eaafa53adb1a1ea6b4b2175b5735e: Contract (verified) (StableDebtToken)
  - 0x499e74993ffa39dd314782c4262a7443c31f8422: Contract (not verified)
  - 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063: Contract (verified) (UChildERC20Proxy)
  - 0x490e379c9cff64944be82b849f8fd5972c7999a7: Contract (verified) (UChildDAI)
  - 0x17f73aead876cc4059089ff815eda37052960dfb: Contract (verified) (LendingRateOracle)
  - 0x780bbcbcda2cdb0d2c61fd9bc68c9046b18f3229: Contract (not verified)
  - 0x807c97744e6c9452e7c2914d78f49d171a9974a0: Contract (not verified)
  - 0x3a1ea739797fcf684c0934f07a3d84c489e24022: Contract (not verified)
  - 0x172370d5cd63279efa6d502dab29171933a610af: Contract (verified) (UChildERC20Proxy)
  - 0x98125b30e2c3081a7f4625801ca249ecdfc59ea2: Contract (verified) (UChildERC20)
  - 0x773e0e32e7b6a00b7ca9daa85dfba9d61b7f2574: Contract (not verified)
  - 0xbc30bbe0472e0e86b6f395f9876b950a13b23923: Contract (not verified)
  - 0x8a4ac83162258e04786355163de913abe3247cdd: Contract (not verified)
  - 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3: Contract (verified) (UChildERC20Proxy)
  - 0xf957db7230b879cc905a7afa87748d8b7da7689e: Contract (verified) (UChildERC20)
  - 0xc928002904ec475663a83063d492ea2ae09ebda1: Contract (not verified)

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x080b5BF8f360F624628E0fb961F4e67c9e3c7CF1` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x0Ca2e42e8c21954af73Bc9af1213E4e81D6a669A` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>View warnings for UChildERC20Proxy (Curve DAO) at `0x172370d5Cd63279eFa6d502DAB29171933a610AF`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for LendingRateOracle at `0x17F73aEaD876CC4059089ff815EDA37052960dFB`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon USDC) at `0x1a13F4Ca1d028320A707D99520AbFefca3998b7F` with implementation AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for VariableDebtToken at `0x1d22AE684F479d3Da97CA19fFB03E6349D345F24`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x2238101B7014C279aaF6b408A284E49cDBd5DB55` with implementation StableDebtToken at `0x72a053fA208eaAFa53ADB1a1EA6b4b2175B5735E`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x230e0321cf38f09e247e50afc7801ea2351fe56f-CLSynchronicityPriceAdapterPegToBase' running
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon WETH) at `0x28424507fefb6f7f8E9D3860F56504E4e5f5f390` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>View warnings for EACAggregatorProxy at `0x327e23A4855b6F663a28c5161541d69Af8973302`</summary>

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x3Df8f92b7E798820ddcCA2EBEA7BAbda2c90c4aD` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x40C9E6e3ba0324E58C0C88C78c8e733a93ac1b61`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UChildDAI at `0x490e379C9cFF64944bE82b849F8FD5972C7999A7`</summary>

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon WBTC) at `0x5c2ed810328349100A66B82b78a1791B101C9D61` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>View warnings for GenericLogic at `0x64093fe5f8Cf62aFb4377cf7EF4373537fe9155B`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for StableDebtToken at `0x72a053fA208eaAFa53ADB1a1EA6b4b2175B5735E`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x75c4d1Fb84429023170086f06E682DcbBF537b7d` with implementation VariableDebtToken at `0x1d22AE684F479d3Da97CA19fFB03E6349D345F24`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x7C66609Db07C8983f324098DDc53F03af716aba7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x80f2c02224a2e548fc67c0bf705ebfa825dd5439-Collector' running
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon WMATIC) at `0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UChildERC20Proxy (Dai) at `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0x921C2121Af8D68F397cb2D2A3d24ffC180BCdCB7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UChildERC20 at `0x98125B30e2C3081A7f4625801ca249eCDFc59EA2`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for UChildERC20Proxy (Balancer) at `0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0xA338e0492B2F944E9F8C0653D3AD1484f2657a37`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0xC1670343d479ddEA6e90A108741b8Acc23aBe847`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0xc4195D4060DaEac44058Ed668AA5EfEc50D77ff6` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0xC6d82423C6F8b0c406c1C34Aee8e988b14D5f685`</summary>

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
<summary>View warnings for AccessControlledOffchainAggregator at `0xD2AA3Fc2585999Ef9Ca66A1b6be18123b5774be7`</summary>

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
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AccessControlledOffchainAggregator at `0xeC35E6F084cE365A819E99bCd1F89319e519Fdf3`</summary>

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
<summary>View warnings for UChildERC20 at `0xf957DB7230B879cc905a7afA87748d8b7dA7689e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for EACAggregatorProxy at `0xf9d5AAC6E5572AEFa6bd64108ff86a222F69B64d`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x080b5BF8f360F624628E0fb961F4e67c9e3c7CF1` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x0Ca2e42e8c21954af73Bc9af1213E4e81D6a669A` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
<summary>Slither report for UChildERC20Proxy (Curve DAO) at `0x172370d5Cd63279eFa6d502DAB29171933a610AF`</summary>

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
<summary>Slither report for LendingRateOracle at `0x17F73aEaD876CC4059089ff815EDA37052960dFB`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon USDC) at `0x1a13F4Ca1d028320A707D99520AbFefca3998b7F` with implementation AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`</summary>

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
<summary>Slither report for VariableDebtToken at `0x1d22AE684F479d3Da97CA19fFB03E6349D345F24`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x2238101B7014C279aaF6b408A284E49cDBd5DB55` with implementation StableDebtToken at `0x72a053fA208eaAFa53ADB1a1EA6b4b2175B5735E`</summary>

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
<summary>Slither report for Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x230e0321cf38f09e247e50afc7801ea2351fe56f-CLSynchronicityPriceAdapterPegToBase' running
INFO:Detectors:
Variable CLSynchronicityPriceAdapterPegToBase.PEG_TO_BASE (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#19) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.ASSET_TO_PEG (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#24) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DECIMALS (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#29) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DENOMINATOR (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#35) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x230e0321cf38f09e247e50afc7801ea2351fe56f analyzed (3 contracts with 87 detectors), 4 result(s) found
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon DAI) at `0x27F8D03b3a2196956ED754baDc28D73be8830A6e` with implementation AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon WETH) at `0x28424507fefb6f7f8E9D3860F56504E4e5f5f390` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`</summary>

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
<summary>Slither report for EACAggregatorProxy at `0x327e23A4855b6F663a28c5161541d69Af8973302`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x357D51124f59836DeD84c8a1730D72B749d8BC23` with implementation AaveIncentivesController at `0x2C901a65071c077C78209b06AB2b5D8eC285aB84`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x3Df8f92b7E798820ddcCA2EBEA7BAbda2c90c4aD` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x40C9E6e3ba0324E58C0C88C78c8e733a93ac1b61`</summary>

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
<summary>Slither report for UChildDAI at `0x490e379C9cFF64944bE82b849F8FD5972C7999A7`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x5777Ca61f29cac50250a3b136b52328D05DBa8C9`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon WBTC) at `0x5c2ed810328349100A66B82b78a1791B101C9D61` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for AToken at `0x6264E51782D739caf515a1Bd4F9ae6881B58621b`</summary>

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
<summary>Slither report for GenericLogic at `0x64093fe5f8Cf62aFb4377cf7EF4373537fe9155B`</summary>

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
<summary>Slither report for StableDebtToken at `0x72a053fA208eaAFa53ADB1a1EA6b4b2175B5735E`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x75c4d1Fb84429023170086f06E682DcbBF537b7d` with implementation VariableDebtToken at `0x1d22AE684F479d3Da97CA19fFB03E6349D345F24`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x7C66609Db07C8983f324098DDc53F03af716aba7`</summary>

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
<summary>Slither report for AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x80f2c02224a2e548fc67c0bf705ebfa825dd5439-Collector' running
INFO:Detectors:
Collector.balanceOf(uint256,address).vars (src/contracts/Collector.sol#168) is a local variable never initialized
Collector.createStream(address,uint256,address,uint256,uint256).vars (src/contracts/Collector.sol#259) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
Collector.deltaOf(uint256) (src/contracts/Collector.sol#149-154) uses timestamp for comparisons
	Dangerous comparisons:
	- block.timestamp <= stream.startTime (src/contracts/Collector.sol#151)
	- block.timestamp < stream.stopTime (src/contracts/Collector.sol#152)
Collector.createStream(address,uint256,address,uint256,uint256) (src/contracts/Collector.sol#245-297) uses timestamp for comparisons
	Dangerous comparisons:
	- require(bool,string)(startTime >= block.timestamp,start time before block.timestamp) (src/contracts/Collector.sol#256)
Collector.withdrawFromStream(uint256,uint256) (src/contracts/Collector.sol#306-323) uses timestamp for comparisons
	Dangerous comparisons:
	- require(bool,string)(balance >= amount,amount exceeds the available balance) (src/contracts/Collector.sol#314)
Collector.cancelStream(uint256) (src/contracts/Collector.sol#331-345) uses timestamp for comparisons
	Dangerous comparisons:
	- recipientBalance > 0 (src/contracts/Collector.sol#341)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#block-timestamp
INFO:Detectors:
Address._revert(bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#236-248) uses assembly
	- INLINE ASM (lib/solidity-utils/src/contracts/oz-common/Address.sol#241-244)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
Address.functionCall(address,bytes) (lib/solidity-utils/src/contracts/oz-common/Address.sol#86-88) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (lib/solidity-utils/src/contracts/oz-common/Address.sol#115-121) is never used and should be removed
Address.functionDelegateCall(address,bytes) (lib/solidity-utils/src/contracts/oz-common/Address.sol#175-177) is never used and should be removed
Address.functionDelegateCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#185-192) is never used and should be removed
Address.functionStaticCall(address,bytes) (lib/solidity-utils/src/contracts/oz-common/Address.sol#146-152) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#160-167) is never used and should be removed
Address.verifyCallResult(bool,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#224-234) is never used and should be removed
SafeERC20.safeDecreaseAllowance(IERC20,address,uint256) (lib/solidity-utils/src/contracts/oz-common/SafeERC20.sol#71-82) is never used and should be removed
SafeERC20.safeIncreaseAllowance(IERC20,address,uint256) (lib/solidity-utils/src/contracts/oz-common/SafeERC20.sol#62-69) is never used and should be removed
SafeERC20.safePermit(IERC20Permit,address,address,uint256,uint256,uint8,bytes32,bytes32) (lib/solidity-utils/src/contracts/oz-common/SafeERC20.sol#84-98) is never used and should be removed
SafeERC20.safeTransferFrom(IERC20,address,address,uint256) (lib/solidity-utils/src/contracts/oz-common/SafeERC20.sol#31-38) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (lib/solidity-utils/src/contracts/oz-common/Address.sol#61-66):
	- (success) = recipient.call{value: amount}() (lib/solidity-utils/src/contracts/oz-common/Address.sol#64)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#129-138):
	- (success,returndata) = target.call{value: value}(data) (lib/solidity-utils/src/contracts/oz-common/Address.sol#136)
Low level call in Address.functionStaticCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#160-167):
	- (success,returndata) = target.staticcall(data) (lib/solidity-utils/src/contracts/oz-common/Address.sol#165)
Low level call in Address.functionDelegateCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#185-192):
	- (success,returndata) = target.delegatecall(data) (lib/solidity-utils/src/contracts/oz-common/Address.sol#190)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Function IERC20Permit.DOMAIN_SEPARATOR() (lib/solidity-utils/src/contracts/oz-common/interfaces/draft-IERC20Permit.sol#60) is not in mixedCase
Function ICollector.ETH_MOCK_ADDRESS() (src/interfaces/ICollector.sol#70) is not in mixedCase
Variable VersionedInitializable.______gap (src/libs/VersionedInitializable.sol#41) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x80f2c02224a2e548fc67c0bf705ebfa825dd5439 analyzed (8 contracts with 87 detectors), 25 result(s) found
```

</details>

<details>
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave Polygon WMATIC) at `0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
<summary>Slither report for UChildERC20Proxy (Dai) at `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0x921C2121Af8D68F397cb2D2A3d24ffC180BCdCB7`</summary>

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
<summary>Slither report for UChildERC20 at `0x98125B30e2C3081A7f4625801ca249eCDFc59EA2`</summary>

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
<summary>Slither report for UChildERC20Proxy (Balancer) at `0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3`</summary>

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
<summary>Slither report for EACAggregatorProxy at `0xA338e0492B2F944E9F8C0653D3AD1484f2657a37`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0xC1670343d479ddEA6e90A108741b8Acc23aBe847`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0xc4195D4060DaEac44058Ed668AA5EfEc50D77ff6` with implementation AToken at `0x80f2c02224a2E548FC67c0bF705eBFA825dd5439`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0xC6d82423C6F8b0c406c1C34Aee8e988b14D5f685`</summary>

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
<summary>Slither report for LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0xD2AA3Fc2585999Ef9Ca66A1b6be18123b5774be7`</summary>

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
<summary>Slither report for PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0xeC35E6F084cE365A819E99bCd1F89319e519Fdf3`</summary>

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
<summary>Slither report for AccessControlledOffchainAggregator at `0xEc5dC23f4FA6AaC7FCBbcC2849571b04FcaCd75F`</summary>

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
<summary>Slither report for EACAggregatorProxy at `0xefb7e6be8356cCc6827799B6A7348eE674A80EaE`</summary>

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
<summary>Slither report for UChildERC20 at `0xf957DB7230B879cc905a7afA87748d8b7dA7689e`</summary>

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
<summary>Slither report for EACAggregatorProxy at `0xf9d5AAC6E5572AEFa6bd64108ff86a222F69B64d`</summary>

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
<summary>Slither report for EACAggregatorProxy at `0xFC539A559e170f848323e19dfD66007520510085`</summary>

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
