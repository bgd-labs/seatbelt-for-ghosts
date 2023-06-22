## Polygon

- Simulation: [https://dashboard.tenderly.co/me/simulator/64183d56-20f9-4f65-9ff8-f23c64b7d023](https://dashboard.tenderly.co/me/simulator/64183d56-20f9-4f65-9ff8-f23c64b7d023)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`
@@ `_reserves` key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`.configuration.data @@
- 36893853549183972677988
+ 75632016103974031071588
@@ `_reserves` key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270`.interestRateStrategyAddress @@
- 0x893411580e590d62ddbca8a703d61cc4a8c7b2b9
+ 0x8772dfbf52d03f11b43e31cf04bbcc64ae0a8cb9

# decoded configuration.data for key `0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270` (symbol: WMATIC)
@@ configuration.data.reserveFactor @@
- 2000
+ 4100

@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.configuration.data @@
- 36893997664371884689360
+ 70098136997049077598160
@@ `_reserves` key `0x172370d5cd63279efa6d502dab29171933a610af`.interestRateStrategyAddress @@
- 0xe4621dfd503a533f42bb5a45162ea3e5233acd5f
+ 0x3a1ea739797fcf684c0934f07a3d84c489e24022

# decoded configuration.data for key `0x172370d5cd63279efa6d502dab29171933a610af` (symbol: CRV)
@@ configuration.data.reserveFactor @@
- 2000
+ 3800

@@ `_reserves` key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6`.configuration.data @@
- 36893850734434238339928
+ 101457454992417668995928
@@ `_reserves` key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6`.interestRateStrategyAddress @@
- 0x1d41b83e5bdbb21c4dd924507cbde66cd865d029
+ 0xcc906fc61a896bad00f3f4ef736b22716cbd8878

# decoded configuration.data for key `0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6` (symbol: WBTC)
@@ configuration.data.reserveFactor @@
- 2000
+ 5500

@@ `_reserves` key `0x2791bca1f2de4661ed88a30c99a7a9449aa84174`.configuration.data @@
- 18447106095627315191616
+ 42427873391449732292416
@@ `_reserves` key `0x2791bca1f2de4661ed88a30c99a7a9449aa84174`.interestRateStrategyAddress @@
- 0xe7a516f340a3f794a3b2fd0f74a7242b326b9f33
+ 0xce5870016d3cfa4e1c71fb7c7ee8cef67712a7a3

# decoded configuration.data for key `0x2791bca1f2de4661ed88a30c99a7a9449aa84174` (symbol: USDC)
@@ configuration.data.reserveFactor @@
- 1000
+ 2300

@@ `_reserves` key `0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7`.configuration.data @@
- 36893709435069442034116
+ 110680685729907648498116
@@ `_reserves` key `0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7`.interestRateStrategyAddress @@
- 0xbb480ae4e2cf28fbe80c9b61ab075f6e7c4db468
+ 0xccdb78f82ef5feccc6864aa00f2d7df3fe00474c

# decoded configuration.data for key `0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7` (symbol: GHST)
@@ configuration.data.reserveFactor @@
- 2000
+ 6000

@@ `_reserves` key `0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39`.configuration.data @@
- 18447253589588722324360
+ 92234229884426928788360
@@ `_reserves` key `0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39`.interestRateStrategyAddress @@
- 0x5641bb58f4a92188a6f16ee79c8886cf42c561d3
+ 0x124e69de782f966fbfbb6f09f92dcdd705418cc8

# decoded configuration.data for key `0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39` (symbol: LINK)
@@ configuration.data.reserveFactor @@
- 1000
+ 5000

@@ `_reserves` key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619`.configuration.data @@
- 18447109473327019335488
+ 83010713731310449991488
@@ `_reserves` key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619`.interestRateStrategyAddress @@
- 0xd792a3779d3c80baee8cf3304d6aeac74bc432be
+ 0xea2e7947658944674893d71ce5da52d528a43388

# decoded configuration.data for key `0x7ceb23fd6bc0add59e62ac25578270cff1b9f619` (symbol: WETH)
@@ configuration.data.reserveFactor @@
- 1000
+ 4500

@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.configuration.data @@
- 18447109473327002950988
+ 38738527954407509728588
@@ `_reserves` key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063`.interestRateStrategyAddress @@
- 0xbe889f70c89f36eb34680b26162fd84ffd6fe355
+ 0x499e74993ffa39dd314782c4262a7443c31f8422

# decoded configuration.data for key `0x8f3cf7ad23cd3cadbd9735aff958023239c6a063` (symbol: DAI)
@@ configuration.data.reserveFactor @@
- 1000
+ 2100

@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.configuration.data @@
- 36893997664371884689360
+ 59030090552823346628560
@@ `_reserves` key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3`.interestRateStrategyAddress @@
- 0x54da5057cda764909f4c79ba9fbb2d4a214eeae5
+ 0x8a4ac83162258e04786355163de913abe3247cdd

# decoded configuration.data for key `0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3` (symbol: BAL)
@@ configuration.data.reserveFactor @@
- 2000
+ 3200

@@ `_reserves` key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f`.configuration.data @@
- 18447106050529601519616
+ 40583198938981063458816
@@ `_reserves` key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f`.interestRateStrategyAddress @@
- 0xd2c92b5a793e196ab11dbefbe3af6bdded6c3dd5
+ 0xacbbd7e2e8c14dbdbb974b1be2fb29f34c1e5048

# decoded configuration.data for key `0xc2132d05d31c914a87c6611c10748aeb04b58e8f` (symbol: USDT)
@@ configuration.data.reserveFactor @@
- 1000
+ 2200

```

```diff
# unknown contract name at `0xD05003a24A17d9117B11eC04cF9743b050779c08`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000002` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000000000000000000000000000000000000000000a"
@@ Slot `0x019fa97a97b7932cd742397bf500a9772a43cb5f89501bd65033e0959a9b4d47` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ccdb78f82ef5feccc6864aa00f2d7df3fe00474c"
@@ Slot `0x073686454b828b56768ded48151edfcad71342634daee03d31342df3140a0946` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008772dfbf52d03f11b43e31cf04bbcc64ae0a8cb9"
@@ Slot `0x15372ba38b375a6befa786a99f80fdcd96222cba41068a16b95843c01f70b3dd` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008a4ac83162258e04786355163de913abe3247cdd"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000499e74993ffa39dd314782c4262a7443c31f8422"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ce5870016d3cfa4e1c71fb7c7ee8cef67712a7a3"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad0` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000acbbd7e2e8c14dbdbb974b1be2fb29f34c1e5048"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad1` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000cc906fc61a896bad00f3f4ef736b22716cbd8878"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad2` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ea2e7947658944674893d71ce5da52d528a43388"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad3` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008772dfbf52d03f11b43e31cf04bbcc64ae0a8cb9"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad4` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000008a4ac83162258e04786355163de913abe3247cdd"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad5` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000003a1ea739797fcf684c0934f07a3d84c489e24022"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad6` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ccdb78f82ef5feccc6864aa00f2d7df3fe00474c"
@@ Slot `0x405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad7` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000124e69de782f966fbfbb6f09f92dcdd705418cc8"
@@ Slot `0x797457a7503624e1f152f46f44cb7d09a605c60ee83d71888313499c444451f5` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000cc906fc61a896bad00f3f4ef736b22716cbd8878"
@@ Slot `0x857e83af2a2f82aec2f10a97de0b4776181f74f49709fab06c51249ba883d030` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000003a1ea739797fcf684c0934f07a3d84c489e24022"
@@ Slot `0xa1baeba3152ef17cb81ebd361f6cc045529ca2f158a7ba2fa3bd79ba42600443` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000124e69de782f966fbfbb6f09f92dcdd705418cc8"
@@ Slot `0xde84568218a5910d0337184f397a1c18cdc62b542b2e964fa8fd009de60a8ebd` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ea2e7947658944674893d71ce5da52d528a43388"
@@ Slot `0xec9e8116c6634dd548162d65c880aadf1b54a2923a524410e1916e74df448d26` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000499e74993ffa39dd314782c4262a7443c31f8422"
@@ Slot `0xf44eadf52875ab073fb5b4e5079739855cd76f4b00a8d9f639073568ddb6673f` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000acbbd7e2e8c14dbdbb974b1be2fb29f34c1e5048"
@@ Slot `0xf4ac95f05200355be65761afc6ec5c06a62fcc503b7e62406596bd1c82d90d56` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000ce5870016d3cfa4e1c71fb7c7ee8cef67712a7a3"
```

```diff
# PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
@@ `_queuedActions` key `0x715740cc3e481bb45fcc48b14ffa39c7ae9c9540afeee897f8e2d66282562426` @@
- true
+ false

@@ `_actionsSets` key `"47"`.executed @@
- false
+ true

```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - unknown contract name at `0xD05003a24A17d9117B11eC04cF9743b050779c08`
    - `RateStrategyCreated(strategy: 0x499e74993ffa39dd314782c4262a7443c31f8422, hashedParam: 0xc08fd31777781e61f402e50b82b249d989fed8ae63db7c66304d86acc08e419b, params: [object Object])`
    - `RateStrategyCreated(strategy: 0xce5870016d3cfa4e1c71fb7c7ee8cef67712a7a3, hashedParam: 0xde2ce977331396bfe907324cd056bbb27cd5b7d23aea4790b25f27a4d68854e5, params: [object Object])`
    - `RateStrategyCreated(strategy: 0xacbbd7e2e8c14dbdbb974b1be2fb29f34c1e5048, hashedParam: 0xf8314615115e689c5dcb428c60d40bb986d39142fe93c940df69ea386e687a61, params: [object Object])`
    - `RateStrategyCreated(strategy: 0xcc906fc61a896bad00f3f4ef736b22716cbd8878, hashedParam: 0x583a464e14bd36fdedb92800bfbb246248f4828dd3698297deab89b0a41e5ec5, params: [object Object])`
    - `RateStrategyCreated(strategy: 0xea2e7947658944674893d71ce5da52d528a43388, hashedParam: 0xe970354ab3757ae42adf26212fbbed8c189bf7284b94cab9ed3f5304c16f448a, params: [object Object])`
    - `RateStrategyCreated(strategy: 0x8772dfbf52d03f11b43e31cf04bbcc64ae0a8cb9, hashedParam: 0xa91100b6d90cecdeae5f60b18986fbebcfa10b267e138cf8e73e8680f2254b68, params: [object Object])`
    - `RateStrategyCreated(strategy: 0x8a4ac83162258e04786355163de913abe3247cdd, hashedParam: 0x9a047b9bb8bc314854a2bddf7f516b41b88585772a23cb0ae90fc4eba0be5a1e, params: [object Object])`
    - `RateStrategyCreated(strategy: 0x3a1ea739797fcf684c0934f07a3d84c489e24022, hashedParam: 0xc2deef6422cd34d7bab44f2b940fb6dadbbfaa263f1d806365c742269b2be9d0, params: [object Object])`
    - `RateStrategyCreated(strategy: 0xccdb78f82ef5feccc6864aa00f2d7df3fe00474c, hashedParam: 0xcb65a2ddb0f328aa79f20fb4d19ed8fce8888732243efa64c0fbe7bfe6d7f0be, params: [object Object])`
    - `RateStrategyCreated(strategy: 0x124e69de782f966fbfbb6f09f92dcdd705418cc8, hashedParam: 0xac182f6c464a8f05c3a3bef9204e017284c347b9f9be3b431fd557c188d6317f, params: [object Object])`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`
    - `ReserveInterestRateStrategyChanged(asset: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, strategy: 0x499e74993ffa39dd314782c4262a7443c31f8422)`
    - `ReserveInterestRateStrategyChanged(asset: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, strategy: 0xce5870016d3cfa4e1c71fb7c7ee8cef67712a7a3)`
    - `ReserveInterestRateStrategyChanged(asset: 0xc2132d05d31c914a87c6611c10748aeb04b58e8f, strategy: 0xacbbd7e2e8c14dbdbb974b1be2fb29f34c1e5048)`
    - `ReserveInterestRateStrategyChanged(asset: 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6, strategy: 0xcc906fc61a896bad00f3f4ef736b22716cbd8878)`
    - `ReserveInterestRateStrategyChanged(asset: 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619, strategy: 0xea2e7947658944674893d71ce5da52d528a43388)`
    - `ReserveInterestRateStrategyChanged(asset: 0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270, strategy: 0x8772dfbf52d03f11b43e31cf04bbcc64ae0a8cb9)`
    - `ReserveInterestRateStrategyChanged(asset: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, strategy: 0x8a4ac83162258e04786355163de913abe3247cdd)`
    - `ReserveInterestRateStrategyChanged(asset: 0x172370d5cd63279efa6d502dab29171933a610af, strategy: 0x3a1ea739797fcf684c0934f07a3d84c489e24022)`
    - `ReserveInterestRateStrategyChanged(asset: 0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7, strategy: 0xccdb78f82ef5feccc6864aa00f2d7df3fe00474c)`
    - `ReserveInterestRateStrategyChanged(asset: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, strategy: 0x124e69de782f966fbfbb6f09f92dcdd705418cc8)`
    - `ReserveFactorChanged(asset: 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063, factor: 2100)`
    - `ReserveFactorChanged(asset: 0x2791bca1f2de4661ed88a30c99a7a9449aa84174, factor: 2300)`
    - `ReserveFactorChanged(asset: 0xc2132d05d31c914a87c6611c10748aeb04b58e8f, factor: 2200)`
    - `ReserveFactorChanged(asset: 0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6, factor: 5500)`
    - `ReserveFactorChanged(asset: 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619, factor: 4500)`
    - `ReserveFactorChanged(asset: 0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270, factor: 4100)`
    - `ReserveFactorChanged(asset: 0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3, factor: 3200)`
    - `ReserveFactorChanged(asset: 0x172370d5cd63279efa6d502dab29171933a610af, factor: 3800)`
    - `ReserveFactorChanged(asset: 0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7, factor: 6000)`
    - `ReserveFactorChanged(asset: 0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39, factor: 5000)`
  - PolygonBridgeExecutor at `0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772`
    - `ActionsSetExecuted(id: 47, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xBBD2B7418395d1782f0016095C6A26487d184873: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0xdc9a35b16db4e126cfedc41322b3a36454b1f772: Contract (verified) (PolygonBridgeExecutor)
  - 0xbbd2b7418395d1782f0016095c6a26487d184873: Contract (verified) (AaveV2PolygonRatesUpdates_20230614)
  - 0x9eced0293e7b73cff4a2b4f9c82aac8346158bd9: Contract (verified) (AaveV2ConfigEngine)
  - 0xd05003a24a17d9117b11ec04cf9743b050779c08: Contract (not verified)
  - 0x4e99b8dc5c5b24b8904b640ea9342dcea233818a: Contract (verified) (V2RateStrategyFactory)
  - 0xd05e3e715d945b59290df0ae8ef85c1bdb684744: Contract (verified) (LendingPoolAddressesProvider)
  - 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x6a8730f54b8c69ab096c43ff217ca0a350726ac7: Contract (verified) (LendingPool)
  - 0xbe889f70c89f36eb34680b26162fd84ffd6fe355: Contract (not verified)
  - 0xe7a516f340a3f794a3b2fd0f74a7242b326b9f33: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0xd2c92b5a793e196ab11dbefbe3af6bdded6c3dd5: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0x1d41b83e5bdbb21c4dd924507cbde66cd865d029: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0xd792a3779d3c80baee8cf3304d6aeac74bc432be: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0x893411580e590d62ddbca8a703d61cc4a8c7b2b9: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0x54da5057cda764909f4c79ba9fbb2d4a214eeae5: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0xe4621dfd503a533f42bb5a45162ea3e5233acd5f: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0xbb480ae4e2cf28fbe80c9b61ab075f6e7c4db468: Contract (not verified)
  - 0x5641bb58f4a92188a6f16ee79c8886cf42c561d3: Contract (not verified)
  - 0x499e74993ffa39dd314782c4262a7443c31f8422: EOA (verification not applicable)
  - 0xce5870016d3cfa4e1c71fb7c7ee8cef67712a7a3: EOA (verification not applicable)
  - 0xacbbd7e2e8c14dbdbb974b1be2fb29f34c1e5048: EOA (verification not applicable)
  - 0xcc906fc61a896bad00f3f4ef736b22716cbd8878: EOA (verification not applicable)
  - 0xea2e7947658944674893d71ce5da52d528a43388: EOA (verification not applicable)
  - 0x8772dfbf52d03f11b43e31cf04bbcc64ae0a8cb9: EOA (verification not applicable)
  - 0x8a4ac83162258e04786355163de913abe3247cdd: EOA (verification not applicable)
  - 0x3a1ea739797fcf684c0934f07a3d84c489e24022: EOA (verification not applicable)
  - 0xccdb78f82ef5feccc6864aa00f2d7df3fe00474c: EOA (verification not applicable)
  - 0x124e69de782f966fbfbb6f09f92dcdd705418cc8: EOA (verification not applicable)
  - 0x26db2b833021583566323e3b8985999981b9f1f3: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xf70a4d422e772926852ba9044026f169e6ad9492: Contract (verified) (LendingPoolConfigurator)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x1d41b83e5bdbB21c4dD924507cBde66CD865d029`</summary>

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
<summary>View warnings for V2RateStrategyFactory at `0x4E99b8dC5c5b24b8904b640Ea9342dcEa233818A`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/dependencies/DefaultReserveInterestRateStrategy.sol:9:1:
  |
9 | import {ILendingPoolAddressesProvider, ILendingRateOracle} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20.sol" not found: File not found. Searched the following locations: "".
  --> src/dependencies/DefaultReserveInterestRateStrategy.sol:10:1:
   |
10 | import {IERC20} from 'solidity-utils/contracts/oz-common/interfaces/IERC20.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IV2RateStrategyFactory.sol:4:1:
  |
4 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:4:1:
  |
4 | import {ILendingPool} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/transparent-proxy/Initializable.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:5:1:
  |
5 | import {Initializable} from 'solidity-utils/contracts/transparent-proxy/Initializable.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:8:1:
  |
8 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x54DA5057cdA764909f4c79bA9fbb2d4A214EeAe5`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveV2ConfigEngine at `0x9eCed0293e7B73CFf4a2b4F9C82aAc8346158bd9`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IAaveV2ConfigEngine.sol:4:1:
  |
4 | import {ILendingPoolConfigurator} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IV2RateStrategyFactory.sol:4:1:
  |
4 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



```

</details>

<details>
<summary>View warnings for AaveV2PolygonRatesUpdates_20230614 at `0xBBD2B7418395d1782f0016095C6A26487d184873`</summary>

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
<summary>View warnings for DefaultReserveInterestRateStrategy at `0xD2C92b5A793e196aB11dBefBe3Af6BddeD6c3DD5`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0xD792a3779D3C80bAEe8CF3304D6aEAc74bC432BE`</summary>

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
<summary>View warnings for DefaultReserveInterestRateStrategy at `0xE4621DfD503A533f42bB5a45162eA3e5233Acd5F`</summary>

```
ERROR:CryticCompile:ParserError: ParserError: Source "@aave-address-book/AaveMisc.sol" not found: File not found. Searched the following locations: "".
 --> src/proposals/aave-grants-dao-renewal/ProposalPayload.sol:4:1:
  |
4 | import {AaveMisc} from "@aave-address-book/AaveMisc.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "@aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/proposals/aave-grants-dao-renewal/ProposalPayload.sol:5:1:
  |
5 | import {AaveV2Ethereum} from "@aave-address-book/AaveV2Ethereum.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0xe7a516f340a3f794a3B2fd0f74A7242b326b9f33`</summary>

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

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x1d41b83e5bdbB21c4dD924507cBde66CD865d029`</summary>

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
ERROR:root:Error in 0x1d41b83e5bdbb21c4dd924507cbde66cd865d029
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x26db2B833021583566323E3b8985999981b9F1F3` with implementation LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

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
ERROR:root:Error in 0x26db2b833021583566323e3b8985999981b9f1f3
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
<summary>Slither report for V2RateStrategyFactory at `0x4E99b8dC5c5b24b8904b640Ea9342dcEa233818A`</summary>

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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/dependencies/DefaultReserveInterestRateStrategy.sol:9:1:
  |
9 | import {ILendingPoolAddressesProvider, ILendingRateOracle} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20.sol" not found: File not found. Searched the following locations: "".
  --> src/dependencies/DefaultReserveInterestRateStrategy.sol:10:1:
   |
10 | import {IERC20} from 'solidity-utils/contracts/oz-common/interfaces/IERC20.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IV2RateStrategyFactory.sol:4:1:
  |
4 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:4:1:
  |
4 | import {ILendingPool} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/transparent-proxy/Initializable.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:5:1:
  |
5 | import {Initializable} from 'solidity-utils/contracts/transparent-proxy/Initializable.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:8:1:
  |
8 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0x4e99b8dc5c5b24b8904b640ea9342dcea233818a
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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/dependencies/DefaultReserveInterestRateStrategy.sol:9:1:
  |
9 | import {ILendingPoolAddressesProvider, ILendingRateOracle} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/oz-common/interfaces/IERC20.sol" not found: File not found. Searched the following locations: "".
  --> src/dependencies/DefaultReserveInterestRateStrategy.sol:10:1:
   |
10 | import {IERC20} from 'solidity-utils/contracts/oz-common/interfaces/IERC20.sol';
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IV2RateStrategyFactory.sol:4:1:
  |
4 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:4:1:
  |
4 | import {ILendingPool} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "solidity-utils/contracts/transparent-proxy/Initializable.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:5:1:
  |
5 | import {Initializable} from 'solidity-utils/contracts/transparent-proxy/Initializable.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/V2RateStrategyFactory.sol:8:1:
  |
8 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




```

</details>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x54DA5057cdA764909f4c79bA9fbb2d4A214EeAe5`</summary>

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
ERROR:root:Error in 0x54da5057cda764909f4c79ba9fbb2d4a214eeae5
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
<summary>Slither report for LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

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
ERROR:root:Error in 0x6a8730f54b8c69ab096c43ff217ca0a350726ac7
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
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9`</summary>

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
ERROR:root:Error in 0x893411580e590d62ddbca8a703d61cc4a8c7b2b9
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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf` with implementation LendingPool at `0x6A8730F54b8C69ab096c43ff217CA0a350726ac7`</summary>

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
ERROR:root:Error in 0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf
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
<summary>Slither report for AaveV2ConfigEngine at `0x9eCed0293e7B73CFf4a2b4F9C82aAc8346158bd9`</summary>

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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IAaveV2ConfigEngine.sol:4:1:
  |
4 | import {ILendingPoolConfigurator} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IV2RateStrategyFactory.sol:4:1:
  |
4 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0x9eced0293e7b73cff4a2b4f9c82aac8346158bd9
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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IAaveV2ConfigEngine.sol:4:1:
  |
4 | import {ILendingPoolConfigurator} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "aave-address-book/AaveV2.sol" not found: File not found. Searched the following locations: "".
 --> src/v2-config-engine/IV2RateStrategyFactory.sol:4:1:
  |
4 | import {IDefaultInterestRateStrategy, ILendingPoolAddressesProvider} from 'aave-address-book/AaveV2.sol';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




```

</details>

<details>
<summary>Slither report for AaveV2PolygonRatesUpdates_20230614 at `0xBBD2B7418395d1782f0016095C6A26487d184873`</summary>

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
ERROR:root:Error in 0xbbd2b7418395d1782f0016095c6a26487d184873
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
<summary>Slither report for LendingPoolAddressesProvider at `0xd05e3E715d945B59290df0ae8eF85c1BdB684744`</summary>

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
ERROR:root:Error in 0xd05e3e715d945b59290df0ae8ef85c1bdb684744
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
<summary>Slither report for DefaultReserveInterestRateStrategy at `0xD2C92b5A793e196aB11dBefBe3Af6BddeD6c3DD5`</summary>

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
ERROR:root:Error in 0xd2c92b5a793e196ab11dbefbe3af6bdded6c3dd5
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
<summary>Slither report for DefaultReserveInterestRateStrategy at `0xD792a3779D3C80bAEe8CF3304D6aEAc74bC432BE`</summary>

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
ERROR:root:Error in 0xd792a3779d3c80baee8cf3304d6aeac74bc432be
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
<summary>Slither report for DefaultReserveInterestRateStrategy at `0xE4621DfD503A533f42bB5a45162eA3e5233Acd5F`</summary>

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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "@aave-address-book/AaveMisc.sol" not found: File not found. Searched the following locations: "".
 --> src/proposals/aave-grants-dao-renewal/ProposalPayload.sol:4:1:
  |
4 | import {AaveMisc} from "@aave-address-book/AaveMisc.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "@aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/proposals/aave-grants-dao-renewal/ProposalPayload.sol:5:1:
  |
5 | import {AaveV2Ethereum} from "@aave-address-book/AaveV2Ethereum.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ERROR:root:Error in 0xe4621dfd503a533f42bb5a45162ea3e5233acd5f
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
crytic_compile.platform.exceptions.InvalidCompilation: ParserError: ParserError: Source "@aave-address-book/AaveMisc.sol" not found: File not found. Searched the following locations: "".
 --> src/proposals/aave-grants-dao-renewal/ProposalPayload.sol:4:1:
  |
4 | import {AaveMisc} from "@aave-address-book/AaveMisc.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


ParserError: ParserError: Source "@aave-address-book/AaveV2Ethereum.sol" not found: File not found. Searched the following locations: "".
 --> src/proposals/aave-grants-dao-renewal/ProposalPayload.sol:5:1:
  |
5 | import {AaveV2Ethereum} from "@aave-address-book/AaveV2Ethereum.sol";
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




```

</details>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0xe7a516f340a3f794a3B2fd0f74A7242b326b9f33`</summary>

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
ERROR:root:Error in 0xe7a516f340a3f794a3b2fd0f74a7242b326b9f33
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
<summary>Slither report for LendingPoolConfigurator at `0xf70A4d422E772926852BA9044026F169e6AD9492`</summary>

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
ERROR:root:Error in 0xf70a4d422e772926852ba9044026f169e6ad9492
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
