## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/1f2bceff-3670-432b-85de-77856773ba21](https://dashboard.tenderly.co/me/simulator/1f2bceff-3670-432b-85de-77856773ba21)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# EmissionManager at `0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
```

```diff
# AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000036` @@
- "0x000000000000000000000000000000000000000000002972e547a33001437ce2"
+ "0x0000000000000000000000000000000000000000000029703126e4801d9dcbf2"
@@ Slot `0x59fd213b3ef132513db1538f7476087cf9b73235c85a7f017a34537afd9783ff` @@
- "0x00000000033d42fb2c82bfb3498c45010000000000000000000000000000000a"
+ "0x00000000033d492a8ab29cd422a9f73800000000000000000000000000000000"
@@ Slot `0x8de5b4c9e1ccce84b1f76b67482ce11256c258ced0ff3ce9c36f20fdbd88b36e` @@
- "0x00000000033d47e660818469df1700a2000000000000000c3abeccda1c9f9e06"
+ "0x00000000033d492a8ab29cd422a9f7380000000000000009869e0e2a38f9ed20"
```

```diff
# LinkTokenOptimism (Chainlink) at `0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6`
@@ `_balances` key `0x191c10aa4af7c30e871e70c95db0e4eb77237530` @@
- 185684305028776953334779
+ 185634305028776953334769

@@ `_balances` key `0x75c0530885f385721fdda23c539af3701d6183d4` @@
- 1180390879083680129436
+ 1230390879083680129446

```

```diff
# KeeperRegistrar at `0x4F3AF332A30973106Fe146Af0B4220bBBeA748eC`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000003` @@
- "0x00000075c0530885f385721fdda23c539af3701d6183d40000005e000003e802"
+ "0x00000075c0530885f385721fdda23c539af3701d6183d40000005f000003e802"
```

```diff
# AaveCLRobotOperator at `0x4f830bc2DdaC99307a3709c85F7533842BdA7c63`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
@@ Slot `0xeecde2168124cb86f1bda6c6f66038c4d268b6b2fce78a7ee724297a2f4cb44a` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x000000000000000000000000a0195539e21a6553243344a3be6b874b5d3ec7b9"
@@ Slot `0xeecde2168124cb86f1bda6c6f66038c4d268b6b2fce78a7ee724297a2f4cb44b` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x457865637574696f6e20436861696e204b65657065720000000000000000002c"
```

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000000e` @@
- "0x0000000000000000000000000000000000000000000000000000005e004c4b40"
+ "0x0000000000000000000000000000000000000000000000000000005f004c4b40"
@@ s_expectedLinkBalance @@
- 1180390879083680129436
+ 1230390879083680129446
@@ Slot `0x036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3de3` @@
- "0x20151987ef8bcdd7cf2cb658313c683c0b0a3544807d54678f490517c65e4c51"
+ "0xfdf4b6d2bd4641e1715faf1a91123d8b086e4eb3a5e6742804555b1c802728c9"
@@ Slot `0x036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3de7` @@
- "0xfdf4b6d2bd4641e1715faf1a91123d8b086e4eb3a5e6742804555b1c802728c9"
+ "0xe2ce908eefa36139cfecf4879fd65dc5807dc5b7595188373ee69d6de0add01a"
@@ Slot `0x04a305451c55dc1bfd3bd0eae5902ff2f6f3ed6ba1b148debae56d0678495265` @@
- "0x0000000000000000000000000000000000000000000000000000000000000038"
+ "0x0000000000000000000000000000000000000000000000000000000000000034"
@@ Slot `0x338e7c9b0afe975e1fe8db8ea11457a48395f3404afe69ffbc8ffa5ef9159d7e` @@
- "0x0000000000000000000000000000000000000000000000000000000000000034"
+ "0x0000000000000000000000000000000000000000000000000000000000000000"
@@ `s_upkeep` key `"102587671980185763776221080771842500931395374020063275860255597572922677252122"`.balance @@
- 0
+ 50000000000000000010

@@ Slot `0x431cb23aad94d91179c5c3bbbdb8f2f0f60fee6086625bbdd4fa76644537c312` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x4f830bc2ddac99307a3709c85f7533842bda7c63000000000000000000000000"
@@ Slot `0x431cb23aad94d91179c5c3bbbdb8f2f0f60fee6086625bbdd4fa76644537c313` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000a0195539e21a6553243344a3be6b874b5d3ec7b9ffffffff004c4b40"
@@ Slot `0x4b788d845ee23d3dc133236ffd16b60ce75438f8a4d57cc9371d6f4449215deb` @@
- "0x00000000102bf2c03c1901adba191457a8c4a4ef18b40029ffffffff004c4b40"
+ "0x00000000102bf2c03c1901adba191457a8c4a4ef18b4002906a35b3e004c4b40"
@@ Slot `0x9b6b65d5a83cffee93e13e95a5e94e30fb8c376bf521b4318d0648cf94678d9e` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000000000000000000000000000000000000000000000000000000000038"
```

```diff
# WrappedTokenGatewayV3 at `0x76D3030728e52DEB8848d5613aBaDE88441cbc59`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
```

```diff
# PoolAddressesProviderRegistry at `0x770ef9f4fe897e59daCc474EF11238303F9552b6`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
```

```diff
# ParaSwapWithdrawSwapAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`
@@ Slot `0x856845219b63e8d45b358ae184fc72e7f8cbde44b8dfca0ddb2b5897366c80b5` @@
- "0x0000000000004c2e5ff2cff40392c79400000000033d492a2b26587295fc4554"
+ "0x0000000000004c3852a00dbcec56ef4a00000000033d492a8ab29cd422a9f738"
@@ Slot `0x856845219b63e8d45b358ae184fc72e7f8cbde44b8dfca0ddb2b5897366c80b6` @@
- "0x000000000006eb1825e84d89874535a200000000034ee2eb2b4ff2cd64b959bf"
+ "0x000000000006eb8bc54985a5583f435800000000034ee2f407ccb32379a7f9b4"
@@ Slot `0x856845219b63e8d45b358ae184fc72e7f8cbde44b8dfca0ddb2b5897366c80b7` @@
- "0x000000000000000000000100653a8d7700000000004a723dc6b40b8a9a000000"
+ "0x000000000000000000000100653a8fd100000000004a723dc6b40b8a9a000000"
@@ Slot `0x856845219b63e8d45b358ae184fc72e7f8cbde44b8dfca0ddb2b5897366c80bc` @@
- "0x000000000000000000000000000000000000000000000000091f32d755406913"
+ "0x0000000000000000000000000000000000000000000000000920647b3caee64e"
@@ Slot `0xb0fce8e0cae5b078224601f4e2a301580a768a032513ba2441ab54371da9520f` @@
- "0x0000000000000000000000000000000000000000000000000000000000000008"
+ "0x0000000000000000000000000000000000000000000000000000000000000000"
```

```diff
# OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0xa68c94eb4235d5489ecc33662625c0d3d99cbc73cd41a22138e4f8481a194c1f` @@
- true
+ false

@@ `_actionsSets` key `"40"`.executed @@
- false
+ true

```

```diff
# unknown contract name at `0x830C5A67a0C95D69dA5fb7801Ac1773c6fB53857`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000007d9103572be58ffe99dc390e8246f02dcae6f611"
+ "0x000000000000000000000000746c675dab49bcd5bb9dc85161f2d7eb435009bf"
```

```diff
# unknown contract name at `0xa12734e64417f61f8442E7D5132EdBFdbDDeF0fa`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000007d9103572be58ffe99dc390e8246f02dcae6f611"
+ "0x000000000000000000000000746c675dab49bcd5bb9dc85161f2d7eb435009bf"
```

```diff
# ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`
@@ `_roles` key `0x0000000000000000000000000000000000000000000000000000000000000000`.members.0x746c675dab49bcd5bb9dc85161f2d7eb435009bf @@
- false
+ true
@@ `_roles` key `0x0000000000000000000000000000000000000000000000000000000000000000`.members.0x7d9103572be58ffe99dc390e8246f02dcae6f611 @@
- true
+ false

@@ `_roles` key `0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b`.members.0x746c675dab49bcd5bb9dc85161f2d7eb435009bf @@
- false
+ true
@@ `_roles` key `0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b`.members.0x7d9103572be58ffe99dc390e8246f02dcae6f611 @@
- true
+ false

```

```diff
# PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
@@ Slot `0xfab167ad2009dcb80ee379700bb4bd029d97c1181ed9d961625632c8a6f051c6` @@
- "0x0000000000000000000000007d9103572be58ffe99dc390e8246f02dcae6f611"
+ "0x000000000000000000000000746c675dab49bcd5bb9dc85161f2d7eb435009bf"
```

```diff
# InitializableAdminUpgradeabilityProxy at `0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`
@@ _fundsAdmin @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
```

```diff
# unknown contract name at `0xcFaE0D8c5707FCc6478D6a65fFA31efADeF8b8EC`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000007d9103572be58ffe99dc390e8246f02dcae6f611"
+ "0x000000000000000000000000746c675dab49bcd5bb9dc85161f2d7eb435009bf"
```

```diff
# ProxyAdmin at `0xD3cF979e676265e4f6379749DECe4708B9A22476`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`
    - `Transfer(from: 0x0000000000000000000000000000000000000000, to: 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf, value: 1349003538455263)`
    - `Mint(caller: 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf, onBehalfOf: 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf, value: 1349003538455263, balanceIncrease: 1349003538455263, index: 1002545021971251123750303544)`
    - `Transfer(from: 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 50000000000000000000)`
    - `BalanceTransfer(from: 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 49873071936148713702, index: 1002545021971251123750303544)`
    - `Transfer(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x0000000000000000000000000000000000000000, value: 50000000000000000010)`
    - `Burn(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, target: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 50000000000000000010, balanceIncrease: 0, index: 1002545021971251123750303544)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`
    - `ReserveDataUpdated(reserve: 0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6, liquidityRate: 359938824140033225060170, stableBorrowRate: 90000000000000000000000000, variableBorrowRate: 8365889354629031269450584, liquidityIndex: 1002545021971251123750303544, variableBorrowIndex: 1023822999786679825211062708)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `Withdraw(reserve: 0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, amount: 50000000000000000010)`
  - LinkTokenOptimism (Chainlink) at `0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6`
    - `Transfer(from: 0x191c10aa4af7c30e871e70c95db0e4eb77237530, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 50000000000000000010)`
    - `Approval(owner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, spender: 0x4f830bc2ddac99307a3709c85f7533842bda7c63, value: 50000000000000000010)`
    - `Transfer(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x4f830bc2ddac99307a3709c85f7533842bda7c63, value: 50000000000000000010)`
    - `Approval(owner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, spender: 0x4f830bc2ddac99307a3709c85f7533842bda7c63, value: 0)`
    - `Transfer(from: 0x4f830bc2ddac99307a3709c85f7533842bda7c63, to: 0x4f3af332a30973106fe146af0b4220bbbea748ec, value: 50000000000000000010)`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6","topics":["0xe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16","0x0000000000000000000000004f830bc2ddac99307a3709c85f7533842bda7c63","0x0000000000000000000000004f3af332a30973106fe146af0b4220bbbea748ec"],"data":"0x000000000000000000000000000000000000000000000002b5e3af16b188000a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001843659d66600000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0195539e21a6553243344a3be6b874b5d3ec7b900000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000004f830bc2ddac99307a3709c85f7533842bda7c630000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000002b5e3af16b188000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000004f830bc2ddac99307a3709c85f7533842bda7c630000000000000000000000000000000000000000000000000000000000000016457865637574696f6e20436861696e204b656570657200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"trace_index":null}`
    - `Transfer(from: 0x4f3af332a30973106fe146af0b4220bbbea748ec, to: 0x75c0530885f385721fdda23c539af3701d6183d4, value: 50000000000000000010)`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6","topics":["0xe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16","0x0000000000000000000000004f3af332a30973106fe146af0b4220bbbea748ec","0x00000000000000000000000075c0530885f385721fdda23c539af3701d6183d4"],"data":"0x000000000000000000000000000000000000000000000002b5e3af16b188000a00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000020e2ce908eefa36139cfecf4879fd65dc5807dc5b7595188373ee69d6de0add01a"},"trace_index":null}`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `UpkeepCanceled(id: 14511291151503490097406614071718050938575520605993697066624566563051111599185, atBlockHeight: 111369022)`
    - `UpkeepRegistered(id: 102587671980185763776221080771842500931395374020063275860255597572922677252122, executeGas: 5000000, admin: 0x4f830bc2ddac99307a3709c85f7533842bda7c63)`
    - `FundsAdded(id: 102587671980185763776221080771842500931395374020063275860255597572922677252122, from: 0x4f3af332a30973106fe146af0b4220bbbea748ec, amount: 50000000000000000010)`
  - AaveCLRobotOperator at `0x4f830bc2DdaC99307a3709c85F7533842BdA7c63`
    - `KeeperCancelled(id: 14511291151503490097406614071718050938575520605993697066624566563051111599185, upkeep: 0x102bf2c03c1901adba191457a8c4a4ef18b40029)`
    - `KeeperRegistered(id: 102587671980185763776221080771842500931395374020063275860255597572922677252122, upkeep: 0xa0195539e21a6553243344a3be6b874b5d3ec7b9, amount: 50000000000000000010)`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - KeeperRegistrar at `0x4F3AF332A30973106Fe146Af0B4220bBBeA748eC`
    - `RegistrationRequested(hash: 0x2d353b8729cad5caf16efeaa803a722122351fad8f9f41bfb373146da20bc0ba, name: Execution Chain Keeper, encryptedEmail: 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0195539e21a6553243344a3be6b874b5d3ec7b900000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000004f830bc2ddac99307a3709c85f7533842bda7c630000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000002b5e3af16b188000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000004f830bc2ddac99307a3709c85f7533842bda7c630000000000000000000000000000000000000000000000000000000000000016, upkeepContract: 0xa0195539e21a6553243344a3be6b874b5d3ec7b9, gasLimit: 5000000, adminAddress: 0x4f830bc2ddac99307a3709c85f7533842bda7c63, checkData: 0x, amount: 50000000000000000010, source: 0)`
    - `RegistrationApproved(hash: 0x2d353b8729cad5caf16efeaa803a722122351fad8f9f41bfb373146da20bc0ba, displayName: Execution Chain Keeper, upkeepId: 102587671980185763776221080771842500931395374020063275860255597572922677252122)`
  - ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`
    - `RoleGranted(role: 0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b, account: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `RoleRevoked(role: 0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b, account: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `RoleGranted(role: 0x0000000000000000000000000000000000000000000000000000000000000000, account: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `RoleRevoked(role: 0x0000000000000000000000000000000000000000000000000000000000000000, account: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
  - PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`
    - `ACLAdminUpdated(oldAddress: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newAddress: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - EmissionManager at `0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - PoolAddressesProviderRegistry at `0x770ef9f4fe897e59daCc474EF11238303F9552b6`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - InitializableAdminUpgradeabilityProxy at `0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`
    - `NewFundsAdmin(fundsAdmin: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - ProxyAdmin at `0xD3cF979e676265e4f6379749DECe4708B9A22476`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - WrappedTokenGatewayV3 at `0x76D3030728e52DEB8848d5613aBaDE88441cbc59`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - unknown contract name at `0x830C5A67a0C95D69dA5fb7801Ac1773c6fB53857`
    - `OwnershipTransferred(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - unknown contract name at `0xa12734e64417f61f8442E7D5132EdBFdbDDeF0fa`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - ParaSwapWithdrawSwapAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - unknown contract name at `0xcFaE0D8c5707FCc6478D6a65fFA31efADeF8b8EC`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0x746c675dab49bcd5bb9dc85161f2d7eb435009bf)`
  - OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 40, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xab22988D93d5F942fC6B6c6Ea285744809D1d9Cc: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)
  - 0xab22988d93d5f942fc6b6c6ea285744809d1d9cc: Contract (not verified)
  - 0xb2289e329d2f85f1ed31adbb30ea345278f21bcf: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x230e0321cf38f09e247e50afc7801ea2351fe56f: Contract (verified) (Collector)
  - 0x191c10aa4af7c30e871e70c95db0e4eb77237530: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (AToken)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x764594f8e9757ede877b75716f8077162b251460: Contract (verified) (L2Pool)
  - 0x929ec64c34a17401f460460d4b9390518e5b473e: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x5f4d15d761528c57a5c30c43c1dab26fc5452731: Contract (verified) (RewardsController)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0x39df4b1329d41a9ae20e17beff39aabd2f049128: Contract (verified) (SupplyLogic)
  - 0x953a573793604af8d41f306feb8274190db4ae0e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x04a8d477ee202adce1682f5902e1160455205b12: Contract (not verified)
  - 0x89d976629b7055ff1ca02b927ba3e020f22a44e4: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x6b4e260b765b3ca1514e618c0215a6b7839ff93e: Contract (verified) (StableDebtToken)
  - 0xee1bac9355eaafcd1b68d272d640d870bc9b4b5c: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6: Contract (verified) (LinkTokenOptimism)
  - 0x4f830bc2ddac99307a3709c85f7533842bda7c63: Contract (verified) (AaveCLRobotOperator)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0x153b383c6f4dfcd27f20bafc15c2be5e5fe327d5: Contract (verified) (KeeperRegistryLogic1_3)
  - 0x4f3af332a30973106fe146af0b4220bbbea748ec: Contract (verified) (KeeperRegistrar)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0x048f2228d7bf6776f99ab50cb1b1eab4d1d4ca73: Contract (verified) (EmissionManager)
  - 0x770ef9f4fe897e59dacc474ef11238303f9552b6: Contract (verified) (PoolAddressesProviderRegistry)
  - 0xd3cf979e676265e4f6379749dece4708b9a22476: Contract (verified) (ProxyAdmin)
  - 0x76d3030728e52deb8848d5613abade88441cbc59: Contract (verified) (WrappedTokenGatewayV3)
  - 0x830c5a67a0c95d69da5fb7801ac1773c6fb53857: Contract (not verified)
  - 0xa12734e64417f61f8442e7d5132edbfdbddef0fa: Contract (not verified)
  - 0x78f8bd884c3d738b74b420540659c82f392820e0: Contract (verified) (ParaSwapWithdrawSwapAdapter)
  - 0xcfae0d8c5707fcc6478d6a65ffa31efadef8b8ec: Contract (not verified)
  - 0x1685d81212580dd4cda287616c2f6f4794927e18: Contract (verified) (AaveMerkleDistributor)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for EmissionManager at `0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for KeeperRegistryLogic1_3 at `0x153b383C6f4DfCd27F20BAfc15C2Be5E5FE327D5`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
<summary>View warnings for LinkTokenOptimism (Chainlink) at `0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for SupplyLogic at `0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x39df4b1329d41a9ae20e17beff39aabd2f049128-SupplyLogic' running
WARNING:CryticCompile:Warning: Warning: This declaration shadows an existing declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:27:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                           ^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:81:3:
   |
81 |   function name() public view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:47:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                               ^^^^^^^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:86:3:
   |
86 |   function symbol() external view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:69:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                                                     ^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:91:3:
   |
91 |   function decimals() external view override returns (uint8) {
   |   ^ (Relevant source part starts here and spans across multiple lines).



```

</details>

<details>
<summary>View warnings for KeeperRegistrar at `0x4F3AF332A30973106Fe146Af0B4220bBBeA748eC`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AaveCLRobotOperator at `0x4f830bc2DdaC99307a3709c85F7533842BdA7c63`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x5f4d15d761528c57a5c30c43c1dab26fc5452731-CLSynchronicityPriceAdapterPegToBase' running
```

</details>

<details>
<summary>View warnings for StableDebtToken at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for WrappedTokenGatewayV3 at `0x76D3030728e52DEB8848d5613aBaDE88441cbc59`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for PoolAddressesProviderRegistry at `0x770ef9f4fe897e59daCc474EF11238303F9552b6`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ParaSwapWithdrawSwapAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`</summary>

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4` with implementation StableDebtToken at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e` with implementation RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e` with implementation unknown contract name at `0x04a8D477eE202aDCE1682F5902e1160455205b12`</summary>

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
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AToken at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b-AaveV3_Ethereum_AddDebtSwapAdapterAsFlashBorrower_20230809' running
```

</details>

<details>
<summary>View warnings for ProxyAdmin at `0xD3cF979e676265e4f6379749DECe4708B9A22476`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xd3cf979e676265e4f6379749dece4708b9a22476-ProxyAdmin' running
```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C`</summary>

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
<summary>Slither report for EmissionManager at `0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73`</summary>

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
<summary>Slither report for KeeperRegistryLogic1_3 at `0x153b383C6f4DfCd27F20BAfc15C2Be5E5FE327D5`</summary>

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
<summary>Slither report for AaveMerkleDistributor at `0x1685D81212580DD4cDA287616C2f6F4794927e18`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530` with implementation AToken at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
<summary>Slither report for LinkTokenOptimism (Chainlink) at `0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6`</summary>

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
<summary>Slither report for SupplyLogic at `0x39dF4b1329D41A9AE20e17BeFf39aAbd2f049128`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x39df4b1329d41a9ae20e17beff39aabd2f049128-SupplyLogic' running
Warning: Warning: This declaration shadows an existing declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:27:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                           ^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:81:3:
   |
81 |   function name() public view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:47:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                               ^^^^^^^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:86:3:
   |
86 |   function symbol() external view override returns (string memory) {
   |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Warning: This declaration has the same name as another declaration.
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:72:69:
   |
72 |   constructor(IPool pool, string memory name, string memory symbol, uint8 decimals) {
   |                                                                     ^^^^^^^^^^^^^^
Note: The other declaration is here:
  --> lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol:91:3:
   |
91 |   function decimals() external view override returns (uint8) {
   |   ^ (Relevant source part starts here and spans across multiple lines).



INFO:Detectors:
IncentivizedERC20._totalSupply (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#57) is never initialized. It is used in:
	- IncentivizedERC20.totalSupply() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#96-98)
	- IncentivizedERC20._transfer(address,address,uint128) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#185-199)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-state-variables
INFO:Detectors:
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) performs a multiplication on the result of a division:
	- basePowerTwo = rate.rayMul(rate) / (SECONDS_PER_YEAR * SECONDS_PER_YEAR) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#71)
	- secondTerm = exp * expMinusOne * basePowerTwo (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#75)
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) performs a multiplication on the result of a division:
	- basePowerThree = basePowerTwo.rayMul(rate) / SECONDS_PER_YEAR (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#72)
	- thirdTerm = exp * expMinusOne * expMinusTwo * basePowerThree (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#79)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#divide-before-multiply
INFO:Detectors:
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) uses a dangerous strict equality:
	- exp == 0 (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#58)
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) uses a dangerous strict equality:
	- vars.eModeAssetPrice != 0 && params.userEModeCategory == vars.eModeAssetCategory (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#116-119)
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) uses a dangerous strict equality:
	- (vars.totalDebtInBaseCurrency == 0) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#172-176)
ReserveLogic.getNormalizedDebt(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#71-86) uses a dangerous strict equality:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#77)
ReserveLogic.getNormalizedIncome(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#47-62) uses a dangerous strict equality:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#53)
ReserveLogic.updateState(DataTypes.ReserveData,DataTypes.ReserveCache) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#93-108) uses a dangerous strict equality:
	- reserve.lastUpdateTimestamp == uint40(block.timestamp) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#99)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dangerous-strict-equalities
INFO:Detectors:
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#501) is a local variable never initialized
ReserveLogic.cache(DataTypes.ReserveData).reserveCache (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#328) is a local variable never initialized
ReserveLogic._accrueToTreasury(DataTypes.ReserveData,DataTypes.ReserveCache).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#236) is a local variable never initialized
ReserveLogic.updateInterestRates(DataTypes.ReserveData,DataTypes.ReserveCache,address,uint256,uint256).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#179) is a local variable never initialized
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#147) is a local variable never initialized
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#74) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
EModeLogic.executeSetUserEMode(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),mapping(address => uint8),DataTypes.UserConfigurationMap,DataTypes.ExecuteSetUserEModeParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/EModeLogic.sol#42-75) ignores return value by ValidationLogic.validateHealthFactor(reservesData,reservesList,eModeCategories,userConfig,msg.sender,params.categoryId,params.reservesCount,params.oracle) (lib/aave-v3-core/contracts/protocol/libraries/logic/EModeLogic.sol#63-72)
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) ignores return value by (vars.ltv,vars.liquidationThreshold,None,vars.decimals,None,vars.eModeAssetCategory) = currentReserve.configuration.getParams() (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#103-110)
ValidationLogic.validateSupply(DataTypes.ReserveCache,DataTypes.ReserveData,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#66-88) ignores return value by (isActive,isFrozen,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#73-75)
ValidationLogic.validateWithdraw(DataTypes.ReserveCache,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#96-107) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#104)
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#139-311) ignores return value by (vars.userCollateralInBaseCurrency,vars.userDebtInBaseCurrency,vars.currentLtv,None,vars.healthFactor,None) = GenericLogic.calculateUserAccountData(reservesData,reservesList,eModeCategories,DataTypes.CalculateUserAccountDataParams({userConfig:params.userConfig,reservesCount:params.reservesCount,user:params.userAddress,oracle:params.oracle,userEModeCategory:params.userEModeCategory})) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#222-240)
ValidationLogic.validateRepay(DataTypes.ReserveCache,uint256,DataTypes.InterestRateMode,address,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#322-345) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#336)
ValidationLogic.validateSwapRateMode(DataTypes.ReserveData,DataTypes.ReserveCache,DataTypes.UserConfigurationMap,uint256,uint256,DataTypes.InterestRateMode) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#356-393) ignores return value by (isActive,isFrozen,stableRateEnabled,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#364-366)
ValidationLogic.validateRebalanceStableBorrowRate(DataTypes.ReserveData,DataTypes.ReserveCache,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#403-436) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#408)
ValidationLogic.validateRebalanceStableBorrowRate(DataTypes.ReserveData,DataTypes.ReserveCache,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#403-436) ignores return value by (liquidityRateVariableDebtOnly) = IReserveInterestRateStrategy(reserve.interestRateStrategyAddress).calculateInterestRates(DataTypes.CalculateInterestRatesParams({unbacked:reserve.unbacked,liquidityAdded:0,liquidityTaken:0,totalStableDebt:0,totalVariableDebt:totalDebt,averageStableBorrowRate:0,reserveFactor:reserveCache.reserveFactor,reserve:reserveAddress,aToken:reserveCache.aTokenAddress})) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#415-429)
ValidationLogic.validateSetUseReserveAsCollateral(DataTypes.ReserveCache,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#443-452) ignores return value by (isActive,isPaused) = reserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#449)
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#496-534) ignores return value by (vars.collateralReserveActive,None,None,None,vars.collateralReservePaused) = collateralReserve.configuration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#503-505)
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#496-534) ignores return value by (vars.principalReserveActive,None,None,None,vars.principalReservePaused) = params.debtReserveCache.reserveConfiguration.getFlags() (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#507-510)
ValidationLogic.validateHealthFactor(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.UserConfigurationMap,address,uint8,uint256,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#547-577) ignores return value by (healthFactor,hasZeroLtvCollateral) = GenericLogic.calculateUserAccountData(reservesData,reservesList,eModeCategories,DataTypes.CalculateUserAccountDataParams({userConfig:userConfig,reservesCount:reservesCount,user:user,oracle:oracle,userEModeCategory:userEModeCategory})) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#557-569)
ValidationLogic.validateUseAsCollateral(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),DataTypes.UserConfigurationMap,DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#708-723) ignores return value by (isolationModeActive) = userConfig.getIsolationModeState(reservesData,reservesList) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#720)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
IncentivizedERC20.constructor(IPool,string,string,uint8).name (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#72) shadows:
	- IncentivizedERC20.name() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#81-83) (function)
	- IERC20Detailed.name() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol#7) (function)
IncentivizedERC20.constructor(IPool,string,string,uint8).symbol (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#72) shadows:
	- IncentivizedERC20.symbol() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#86-88) (function)
	- IERC20Detailed.symbol() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol#9) (function)
IncentivizedERC20.constructor(IPool,string,string,uint8).decimals (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#72) shadows:
	- IncentivizedERC20.decimals() (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#91-93) (function)
	- IERC20Detailed.decimals() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol#11) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
Reentrancy in SupplyLogic.executeSupply(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),DataTypes.UserConfigurationMap,DataTypes.ExecuteSupplyParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#52-92):
	External calls:
	- isFirstSupply = IAToken(reserveCache.aTokenAddress).mint(msg.sender,params.onBehalfOf,params.amount,reserveCache.nextLiquidityIndex) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#69-74)
	Event emitted after the call(s):
	- ReserveUsedAsCollateralEnabled(params.asset,params.onBehalfOf) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#87)
	- Supply(params.asset,msg.sender,params.onBehalfOf,params.amount,params.referralCode) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#91)
Reentrancy in SupplyLogic.executeWithdraw(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.UserConfigurationMap,DataTypes.ExecuteWithdrawParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#106-163):
	External calls:
	- IAToken(reserveCache.aTokenAddress).burn(msg.sender,params.to,amountToWithdraw,reserveCache.nextLiquidityIndex) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#139-144)
	Event emitted after the call(s):
	- Withdraw(params.asset,msg.sender,params.to,amountToWithdraw) (lib/aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol#160)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
ReserveLogic.getNormalizedIncome(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#47-62) uses timestamp for comparisons
	Dangerous comparisons:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#53)
ReserveLogic.getNormalizedDebt(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#71-86) uses timestamp for comparisons
	Dangerous comparisons:
	- timestamp == block.timestamp (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#77)
ReserveLogic.updateState(DataTypes.ReserveData,DataTypes.ReserveCache) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#93-108) uses timestamp for comparisons
	Dangerous comparisons:
	- reserve.lastUpdateTimestamp == uint40(block.timestamp) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#99)
MathUtils.calculateCompoundedInterest(uint256,uint40,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#50-85) uses timestamp for comparisons
	Dangerous comparisons:
	- exp == 0 (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#58)
	- exp > 2 (lib/aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol#69)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#block-timestamp
INFO:Detectors:
GPv2SafeERC20.safeTransfer(IERC20,address,uint256) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#12-29) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#16-26)
GPv2SafeERC20.safeTransferFrom(IERC20,address,address,uint256) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#33-51) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#37-48)
GPv2SafeERC20.getLastTransferResult(IERC20) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#56-114) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#64-113)
GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage() (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77-83) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77-83)
Address.isContract(address) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#25-36) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#32-34)
PercentageMath.percentMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#25-39) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#27-38)
PercentageMath.percentDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#48-60) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#50-59)
WadRayMath.wadMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#29-38) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#31-37)
WadRayMath.wadDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#47-56) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#49-55)
WadRayMath.rayMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#65-74) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#67-73)
WadRayMath.rayDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#83-92) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#85-91)
WadRayMath.rayToWad(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#100-108) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#101-107)
WadRayMath.wadToRay(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#116-125) uses assembly
	- INLINE ASM (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#118-124)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#64-185) has a high cyclomatic complexity (14).
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#cyclomatic-complexity
INFO:Detectors:
Address.isContract(address) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#25-36) is never used and should be removed
Address.sendValue(address,uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#54-60) is never used and should be removed
Context._msgData() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol#19-22) is never used and should be removed
GPv2SafeERC20.safeTransfer(IERC20,address,uint256) (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#12-29) is never used and should be removed
GenericLogic.calculateAvailableBorrows(uint256,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#195-208) is never used and should be removed
IncentivizedERC20._setDecimals(uint8) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#232-234) is never used and should be removed
IncentivizedERC20._setName(string) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#216-218) is never used and should be removed
IncentivizedERC20._setSymbol(string) (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#224-226) is never used and should be removed
PercentageMath.percentDiv(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol#48-60) is never used and should be removed
ReserveConfiguration.getActive(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#183-185) is never used and should be removed
ReserveConfiguration.getBorrowCap(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#383-387) is never used and should be removed
ReserveConfiguration.getBorrowableInIsolation(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#254-258) is never used and should be removed
ReserveConfiguration.getBorrowingEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#306-310) is never used and should be removed
ReserveConfiguration.getCaps(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#601-610) is never used and should be removed
ReserveConfiguration.getFlashLoanEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#541-545) is never used and should be removed
ReserveConfiguration.getFrozen(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#203-205) is never used and should be removed
ReserveConfiguration.getLiquidationBonus(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#136-140) is never used and should be removed
ReserveConfiguration.getLiquidationProtocolFee(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#463-468) is never used and should be removed
ReserveConfiguration.getLiquidationThreshold(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#109-113) is never used and should be removed
ReserveConfiguration.getSiloedBorrowing(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#281-285) is never used and should be removed
ReserveConfiguration.getStableRateBorrowingEnabled(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#331-335) is never used and should be removed
ReserveConfiguration.getUnbackedMintCap(DataTypes.ReserveConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#491-495) is never used and should be removed
ReserveConfiguration.setActive(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#172-176) is never used and should be removed
ReserveConfiguration.setBorrowCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#369-376) is never used and should be removed
ReserveConfiguration.setBorrowableInIsolation(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#236-243) is never used and should be removed
ReserveConfiguration.setBorrowingEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#292-299) is never used and should be removed
ReserveConfiguration.setDebtCeiling(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#419-426) is never used and should be removed
ReserveConfiguration.setDecimals(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#147-154) is never used and should be removed
ReserveConfiguration.setEModeCategory(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#502-509) is never used and should be removed
ReserveConfiguration.setFlashLoanEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#527-534) is never used and should be removed
ReserveConfiguration.setFrozen(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#192-196) is never used and should be removed
ReserveConfiguration.setLiquidationBonus(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#120-129) is never used and should be removed
ReserveConfiguration.setLiquidationProtocolFee(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#444-456) is never used and should be removed
ReserveConfiguration.setLiquidationThreshold(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#93-102) is never used and should be removed
ReserveConfiguration.setLtv(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#73-77) is never used and should be removed
ReserveConfiguration.setPaused(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#212-216) is never used and should be removed
ReserveConfiguration.setReserveFactor(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#342-351) is never used and should be removed
ReserveConfiguration.setSiloedBorrowing(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#266-273) is never used and should be removed
ReserveConfiguration.setStableRateBorrowingEnabled(DataTypes.ReserveConfigurationMap,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#317-324) is never used and should be removed
ReserveConfiguration.setSupplyCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#394-401) is never used and should be removed
ReserveConfiguration.setUnbackedMintCap(DataTypes.ReserveConfigurationMap,uint256) (lib/aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#475-484) is never used and should be removed
ReserveLogic.cumulateToLiquidityIndex(DataTypes.ReserveData,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#118-130) is never used and should be removed
ReserveLogic.init(DataTypes.ReserveData,address,address,address,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#140-155) is never used and should be removed
SafeCast.toInt128(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#151-157) is never used and should be removed
SafeCast.toInt16(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#214-220) is never used and should be removed
SafeCast.toInt256(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#250-254) is never used and should be removed
SafeCast.toInt32(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#193-199) is never used and should be removed
SafeCast.toInt64(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#172-178) is never used and should be removed
SafeCast.toInt8(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#235-241) is never used and should be removed
SafeCast.toUint16(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#106-109) is never used and should be removed
SafeCast.toUint224(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#31-34) is never used and should be removed
SafeCast.toUint256(int256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#133-136) is never used and should be removed
SafeCast.toUint32(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#91-94) is never used and should be removed
SafeCast.toUint64(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#76-79) is never used and should be removed
SafeCast.toUint8(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#121-124) is never used and should be removed
SafeCast.toUint96(uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol#61-64) is never used and should be removed
UserConfiguration.getSiloedBorrowingState(DataTypes.UserConfigurationMap,mapping(address => DataTypes.ReserveData),mapping(uint256 => address)) (lib/aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol#200-214) is never used and should be removed
UserConfiguration.isBorrowingOne(DataTypes.UserConfigurationMap) (lib/aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol#143-146) is never used and should be removed
UserConfiguration.setBorrowing(DataTypes.UserConfigurationMap,uint256,bool) (lib/aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol#27-41) is never used and should be removed
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#139-311) is never used and should be removed
ValidationLogic.validateDropReserve(mapping(uint256 => address),DataTypes.ReserveData,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#635-651) is never used and should be removed
ValidationLogic.validateFlashloan(mapping(address => DataTypes.ReserveData),address[],uint256[]) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#460-469) is never used and should be removed
ValidationLogic.validateFlashloanSimple(DataTypes.ReserveData) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#475-480) is never used and should be removed
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#496-534) is never used and should be removed
ValidationLogic.validateRebalanceStableBorrowRate(DataTypes.ReserveData,DataTypes.ReserveCache,address) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#403-436) is never used and should be removed
ValidationLogic.validateRepay(DataTypes.ReserveCache,uint256,DataTypes.InterestRateMode,address,uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#322-345) is never used and should be removed
ValidationLogic.validateSwapRateMode(DataTypes.ReserveData,DataTypes.ReserveCache,DataTypes.UserConfigurationMap,uint256,uint256,DataTypes.InterestRateMode) (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#356-393) is never used and should be removed
WadRayMath.rayToWad(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#100-108) is never used and should be removed
WadRayMath.wadMul(uint256,uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#29-38) is never used and should be removed
WadRayMath.wadToRay(uint256) (lib/aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol#116-125) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#54-60):
	- (success) = recipient.call{value: amount}() (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol#58)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Parameter GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage().length_getLastTransferResult_asm_0_revertWithMessage (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77) is not in mixedCase
Parameter GPv2SafeERC20.getLastTransferResult.asm_0.revertWithMessage().message_getLastTransferResult_asm_0_revertWithMessage (lib/aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol#77) is not in mixedCase
Function IACLManager.ADDRESSES_PROVIDER() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#16) is not in mixedCase
Function IACLManager.POOL_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#22) is not in mixedCase
Function IACLManager.EMERGENCY_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#28) is not in mixedCase
Function IACLManager.RISK_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#34) is not in mixedCase
Function IACLManager.FLASH_BORROWER_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#40) is not in mixedCase
Function IACLManager.BRIDGE_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#46) is not in mixedCase
Function IACLManager.ASSET_LISTING_ADMIN_ROLE() (lib/aave-v3-core/contracts/interfaces/IACLManager.sol#52) is not in mixedCase
Function IAToken.UNDERLYING_ASSET_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IAToken.sol#109) is not in mixedCase
Function IAToken.RESERVE_TREASURY_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IAToken.sol#115) is not in mixedCase
Function IAToken.DOMAIN_SEPARATOR() (lib/aave-v3-core/contracts/interfaces/IAToken.sol#122) is not in mixedCase
Function IPool.ADDRESSES_PROVIDER() (lib/aave-v3-core/contracts/interfaces/IPool.sol#621) is not in mixedCase
Function IPool.MAX_STABLE_RATE_BORROW_SIZE_PERCENT() (lib/aave-v3-core/contracts/interfaces/IPool.sol#684) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TOTAL() (lib/aave-v3-core/contracts/interfaces/IPool.sol#690) is not in mixedCase
Function IPool.BRIDGE_PROTOCOL_FEE() (lib/aave-v3-core/contracts/interfaces/IPool.sol#696) is not in mixedCase
Function IPool.FLASHLOAN_PREMIUM_TO_PROTOCOL() (lib/aave-v3-core/contracts/interfaces/IPool.sol#702) is not in mixedCase
Function IPool.MAX_NUMBER_RESERVES() (lib/aave-v3-core/contracts/interfaces/IPool.sol#708) is not in mixedCase
Function IPriceOracleGetter.BASE_CURRENCY() (lib/aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol#15) is not in mixedCase
Function IPriceOracleGetter.BASE_CURRENCY_UNIT() (lib/aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol#22) is not in mixedCase
Function IPriceOracleSentinel.ADDRESSES_PROVIDER() (lib/aave-v3-core/contracts/interfaces/IPriceOracleSentinel.sol#28) is not in mixedCase
Function IStableDebtToken.UNDERLYING_ASSET_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IStableDebtToken.sol#138) is not in mixedCase
Function IVariableDebtToken.UNDERLYING_ASSET_ADDRESS() (lib/aave-v3-core/contracts/interfaces/IVariableDebtToken.sol#45) is not in mixedCase
Variable IncentivizedERC20.POOL (lib/aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol#63) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Redundant expression "this (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol#20)" inContext (lib/aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol#14-23)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#redundant-statements
INFO:Slither:0x39df4b1329d41a9ae20e17beff39aabd2f049128 analyzed (33 contracts with 87 detectors), 148 result(s) found
```

</details>

<details>
<summary>Slither report for KeeperRegistrar at `0x4F3AF332A30973106Fe146Af0B4220bBBeA748eC`</summary>

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
<summary>Slither report for AaveCLRobotOperator at `0x4f830bc2DdaC99307a3709c85F7533842BdA7c63`</summary>

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
<summary>Slither report for RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

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
<summary>Slither report for StableDebtToken at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

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
<summary>Slither report for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

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
<summary>Slither report for L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
<summary>Slither report for WrappedTokenGatewayV3 at `0x76D3030728e52DEB8848d5613aBaDE88441cbc59`</summary>

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
<summary>Slither report for PoolAddressesProviderRegistry at `0x770ef9f4fe897e59daCc474EF11238303F9552b6`</summary>

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
<summary>Slither report for ParaSwapWithdrawSwapAdapter at `0x78F8Bd884C3D738B74B420540659c82f392820e0`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD` with implementation L2Pool at `0x764594F8e9757edE877B75716f8077162B251460`</summary>

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
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4` with implementation StableDebtToken at `0x6b4E260b765B3cA1514e618C0215A6B7839fF93e`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e` with implementation RewardsController at `0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e` with implementation unknown contract name at `0x04a8D477eE202aDCE1682F5902e1160455205b12`</summary>

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
<summary>Slither report for ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`</summary>

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
<summary>Slither report for PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf` with implementation Collector at `0x230E0321Cf38F09e247e50Afc7801EA2351fe56F`</summary>

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
<summary>Slither report for AToken at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b-AaveV3_Ethereum_AddDebtSwapAdapterAsFlashBorrower_20230809' running
Traceback (most recent call last):
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 833, in main_impl
    ) = process_all(filename, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 107, in process_all
    ) = process_single(compilation, args, detector_classes, printer_classes)
  File "/home/runner/.local/lib/python3.10/site-packages/slither/__main__.py", line 80, in process_single
    slither = Slither(target, ast_format=ast, **vars(args))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 144, in __init__
    self._init_parsing_and_analyses(kwargs.get("skip_analyze", False))
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 154, in _init_parsing_and_analyses
    raise e
  File "/home/runner/.local/lib/python3.10/site-packages/slither/slither.py", line 150, in _init_parsing_and_analyses
    parser.parse_contracts()
  File "/home/runner/.local/lib/python3.10/site-packages/slither/solc_parsing/slither_compilation_unit_solc.py", line 445, in parse_contracts
    raise InheritanceResolutionError(
slither.solc_parsing.slither_compilation_unit_solc.InheritanceResolutionError: Could not resolve contract inheritance. This is likely caused by an import renaming that collides with existing names (see https://github.com/crytic/slither/issues/1758).
 Try changing `contract IACLManager` (lib/aave-address-book/src/AaveV3.sol#20-32) to a unique name.
ERROR:root:Error:
ERROR:root:Could not resolve contract inheritance. This is likely caused by an import renaming that collides with existing names (see https://github.com/crytic/slither/issues/1758).
 Try changing `contract IACLManager` (lib/aave-address-book/src/AaveV3.sol#20-32) to a unique name.
ERROR:root:Please report an issue to https://github.com/crytic/slither/issues
```

</details>

<details>
<summary>Slither report for ProxyAdmin at `0xD3cF979e676265e4f6379749DECe4708B9A22476`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0xd3cf979e676265e4f6379749dece4708b9a22476-ProxyAdmin' running
INFO:Detectors:
TransparentUpgradeableProxy.admin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#69-71) calls TransparentUpgradeableProxy.ifAdmin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#52-58) which halt the execution return(uint256,uint256)(0,returndatasize()()) (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#48)
TransparentUpgradeableProxy.implementation() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#82-84) calls TransparentUpgradeableProxy.ifAdmin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#52-58) which halt the execution return(uint256,uint256)(0,returndatasize()()) (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#48)
TransparentUpgradeableProxy.changeAdmin(address) (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#93-95) calls TransparentUpgradeableProxy.ifAdmin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#52-58) which halt the execution return(uint256,uint256)(0,returndatasize()()) (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#48)
TransparentUpgradeableProxy.upgradeTo(address) (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#102-104) calls TransparentUpgradeableProxy.ifAdmin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#52-58) which halt the execution return(uint256,uint256)(0,returndatasize()()) (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#48)
TransparentUpgradeableProxy.upgradeToAndCall(address,bytes) (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#113-118) calls TransparentUpgradeableProxy.ifAdmin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#52-58) which halt the execution return(uint256,uint256)(0,returndatasize()()) (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#48)
TransparentUpgradeableProxy.ifAdmin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#52-58) calls Proxy._fallback() (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#64-67) which halt the execution return(uint256,uint256)(0,returndatasize()()) (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#48)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-assembly-return
INFO:Detectors:
ERC1967Upgrade._upgradeToAndCall(address,bytes,bool) (lib/solidity-utils/src/contracts/transparent-proxy/ERC1967Upgrade.sol#84-93) ignores return value by Address.functionDelegateCall(newImplementation,data) (lib/solidity-utils/src/contracts/transparent-proxy/ERC1967Upgrade.sol#91)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
Modifier TransparentUpgradeableProxy.ifAdmin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#52-58) does not always execute _; or revertReference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-modifier
INFO:Detectors:
Address._revert(bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#235-247) uses assembly
	- INLINE ASM (lib/solidity-utils/src/contracts/oz-common/Address.sol#240-243)
StorageSlot.getAddressSlot(bytes32) (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#53-58) uses assembly
	- INLINE ASM (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#55-57)
StorageSlot.getBooleanSlot(bytes32) (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#63-68) uses assembly
	- INLINE ASM (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#65-67)
StorageSlot.getBytes32Slot(bytes32) (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#73-78) uses assembly
	- INLINE ASM (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#75-77)
StorageSlot.getUint256Slot(bytes32) (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#83-88) uses assembly
	- INLINE ASM (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#85-87)
Proxy._delegate(address) (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#28-51) uses assembly
	- INLINE ASM (lib/solidity-utils/src/contracts/transparent-proxy/Proxy.sol#29-50)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
Address.functionCall(address,bytes) (lib/solidity-utils/src/contracts/oz-common/Address.sol#86-88) is never used and should be removed
Address.functionCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#96-102) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (lib/solidity-utils/src/contracts/oz-common/Address.sol#115-121) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#129-138) is never used and should be removed
Address.functionStaticCall(address,bytes) (lib/solidity-utils/src/contracts/oz-common/Address.sol#146-151) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#159-166) is never used and should be removed
Address.sendValue(address,uint256) (lib/solidity-utils/src/contracts/oz-common/Address.sol#61-66) is never used and should be removed
Address.verifyCallResult(bool,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#223-233) is never used and should be removed
Context._msgData() (lib/solidity-utils/src/contracts/oz-common/Context.sol#22-24) is never used and should be removed
StorageSlot.getBooleanSlot(bytes32) (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#63-68) is never used and should be removed
StorageSlot.getBytes32Slot(bytes32) (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#73-78) is never used and should be removed
StorageSlot.getUint256Slot(bytes32) (lib/solidity-utils/src/contracts/oz-common/StorageSlot.sol#83-88) is never used and should be removed
TransparentUpgradeableProxy._admin() (lib/solidity-utils/src/contracts/transparent-proxy/TransparentUpgradeableProxy.sol#123-125) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code
INFO:Detectors:
Low level call in Address.sendValue(address,uint256) (lib/solidity-utils/src/contracts/oz-common/Address.sol#61-66):
	- (success) = recipient.call{value: amount}() (lib/solidity-utils/src/contracts/oz-common/Address.sol#64)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#129-138):
	- (success,returndata) = target.call{value: value}(data) (lib/solidity-utils/src/contracts/oz-common/Address.sol#136)
Low level call in Address.functionStaticCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#159-166):
	- (success,returndata) = target.staticcall(data) (lib/solidity-utils/src/contracts/oz-common/Address.sol#164)
Low level call in Address.functionDelegateCall(address,bytes,string) (lib/solidity-utils/src/contracts/oz-common/Address.sol#184-191):
	- (success,returndata) = target.delegatecall(data) (lib/solidity-utils/src/contracts/oz-common/Address.sol#189)
Low level call in ProxyAdmin.getProxyImplementation(TransparentUpgradeableProxy) (lib/solidity-utils/src/contracts/transparent-proxy/ProxyAdmin.sol#28-36):
	- (success,returndata) = address(proxy).staticcall(0x5c60da1b) (lib/solidity-utils/src/contracts/transparent-proxy/ProxyAdmin.sol#33)
Low level call in ProxyAdmin.getProxyAdmin(TransparentUpgradeableProxy) (lib/solidity-utils/src/contracts/transparent-proxy/ProxyAdmin.sol#45-51):
	- (success,returndata) = address(proxy).staticcall(0xf851a440) (lib/solidity-utils/src/contracts/transparent-proxy/ProxyAdmin.sol#48)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Slither:0xd3cf979e676265e4f6379749dece4708b9a22476 analyzed (9 contracts with 87 detectors), 33 result(s) found
```

</details>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0xeE1BAc9355EaAfCD1B68d272d640d870bC9b4b5C`</summary>

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
