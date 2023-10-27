## Arbitrum

- Simulation: [https://dashboard.tenderly.co/me/simulator/8b0d45d3-f776-457c-ad76-a2bb200f9c08](https://dashboard.tenderly.co/me/simulator/8b0d45d3-f776-457c-ad76-a2bb200f9c08)

### Checks

#### Reports all state changes from the proposal ✅ Passed

Info:

- State changes:

```diff
# EmissionManager at `0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
```

```diff
# InitializableAdminUpgradeabilityProxy at `0x053D55f9B5AF8694c503EB288a1B7E552f590710`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000034` @@
- "0x0000000000000000000000007d9103572be58ffe99dc390e8246f02dcae6f611"
+ "0x000000000000000000000000ff1137243698caa18ee364cc966cf0e02a4e6327"
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000036` @@
- "0x00000000000000000000000000000000000000000000ea6ade9463cd0fb0d2f6"
+ "0x00000000000000000000000000000000000000000000ea682abdc443a185d8b3"
@@ Slot `0x246d7438c5a99950099e92f45a9221b48a1cfd540bed5c21d95ec94fe3175064` @@
- "0x00000000033d9ebcfddb0c56057f87580000000000000031ed028a39cdf76a23"
+ "0x00000000033da2037b8445f68bddaab3000000000000002f392beab05fcc6fe0"
@@ Slot `0x59fd213b3ef132513db1538f7476087cf9b73235c85a7f017a34537afd9783ff` @@
- "0x00000000033d6fb30185cb6ec3ec5cc800000000000000000000000000000000"
+ "0x00000000033da2037b8445f68bddaab300000000000000000000000000000000"
```

```diff
# ParaSwapRepayAdapter at `0x28201C152DC5B69A86FA54FCfd21bcA4C0eff3BA`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
```

```diff
# KeeperRegistrar at `0x4F3AF332A30973106Fe146Af0B4220bBBeA748eC`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000003` @@
- "0x00000075c0530885f385721fdda23c539af3701d6183d40000015f000003e802"
+ "0x00000075c0530885f385721fdda23c539af3701d6183d400000160000003e802"
```

```diff
# ParaSwapWithdrawSwapAdapter at `0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
```

```diff
# KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
@@ Slot `0x000000000000000000000000000000000000000000000000000000000000000e` @@
- "0x0000000000000000000000000000000000000000000000000000015f004c4b40"
+ "0x00000000000000000000000000000000000000000000000000000160004c4b40"
@@ s_expectedLinkBalance @@
- 5440422423419206112468
+ 5490422423419206112468
@@ Slot `0x036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3df8` @@
- "0xdce35f2490ef8db7add828090c7f2e44c071b8693cd5d837f0961845d3c19b2e"
+ "0x61414f593d9d13994316af99560289af37d256c5149b3f0bdc2f113d489f9bb2"
@@ Slot `0x036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3e50` @@
- "0x61414f593d9d13994316af99560289af37d256c5149b3f0bdc2f113d489f9bb2"
+ "0xe0bba3c6b94201691705905266809c173eaf43bc307d5478c62e3eb8ceb9b131"
@@ Slot `0x1e2b44887a7268b0057c60a7d4572ed303eb2fbd501b372cbcd169e26e4bcdd9` @@
- "0x00000000000000000000000000000000000000000000000000000000000000a1"
+ "0x0000000000000000000000000000000000000000000000000000000000000049"
@@ `s_upkeep` key `"101649608825999122873457816899037377045936997171675017458419270059724094681393"`.balance @@
- 0
+ 50000000000000000000

@@ Slot `0xc44fdeb207f7be732a049eb404774a67b19d9649f83a0d01ce644e05c1ae2c61` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0xb0a73671c97bac9ba899cd1a23604fd2278cd02a000000000000000000000000"
@@ Slot `0xc44fdeb207f7be732a049eb404774a67b19d9649f83a0d01ce644e05c1ae2c62` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x0000000064093fe5f8cf62afb4377cf7ef4373537fe9155bffffffff004c4b40"
@@ Slot `0xc85014ba7ee7e14c340f3652532945556407645fd43be38c75835ab9ddfc5b74` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000000000000000000000000000000000000000000a1"
@@ Slot `0xe1598439a02da7996f86db17d2162fece193ce5c28ce940a277305da4b85533f` @@
- "0x0000000000000000000000000000000000000000000000000000000000000049"
+ "0x0000000000000000000000000000000000000000000000000000000000000000"
@@ Slot `0xf375c4cc6508675b3ed20b403223790e343eef70a0ef7da990b9ac4c2082ecae` @@
- "0x00000000864a6aa4b8d4d84a7570fe2d0e4ece8077abcabbffffffff004c4b40"
+ "0x00000000864a6aa4b8d4d84a7570fe2d0e4ece8077abcabb011957b2004c4b40"
```

```diff
# PoolAddressesProviderRegistry at `0x770ef9f4fe897e59daCc474EF11238303F9552b6`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
```

```diff
# InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9bc` @@
- "0x000000000000d2f1ee42fba44192827500000000033da202f1052b6122ca4920"
+ "0x000000000000d2f6cef8017a6b19303e00000000033da2037b8445f68bddaab3"
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9bd` @@
- "0x00000000000b83270058b63bd28b9b6400000000034f5048d06b6d91081f0387"
+ "0x00000000000b8349131bed05c2c180dd00000000034f5050889df85d39b46560"
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9be` @@
- "0x000000000000000000000100653b054400000000004a723dc6b40b8a9a000000"
+ "0x000000000000000000000100653b067f00000000004a723dc6b40b8a9a000000"
@@ Slot `0x2859d83f3ac0b6030c43a15461b481b294a95afa24590070b4c0e64400b1f9c3` @@
- "0x0000000000000000000000000000000000000000000000003efc72c8bf3592a1"
+ "0x0000000000000000000000000000000000000000000000003f063b4dfd5d3ef9"
```

```diff
# ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
@@ `_queuedActions` key `0x15da26a55f71d9bfe7a4e3b741a2cc408094260054647b1854649da8b2cd4502` @@
- true
+ false

@@ `_actionsSets` key `"42"`.executed @@
- false
+ true

```

```diff
# unknown contract name at `0x9E8e9D6b0D24216F59043db68BDda1620892f549`
@@ Slot `0x0000000000000000000000000000000000000000000000000000000000000000` @@
- "0x0000000000000000000000007d9103572be58ffe99dc390e8246f02dcae6f611"
+ "0x000000000000000000000000ff1137243698caa18ee364cc966cf0e02a4e6327"
```

```diff
# unknown contract name at `0xA4b05FffffFffFFFFfFFfffFfffFFfffFfFfFFFf`
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e9706` @@
- "0x000000000000000000000000000000000000000000000000000000000107dbc5"
+ "0x000000000000000000000000000000000000000000000000000000000107e701"
@@ Slot `0xa9f6f085d78d1d37c5819e5c16c9e03198bd14e08cd1f6f8191bc6207b9e970b` @@
- "0x00000000000000000000000000000000000000000000000035115b4400744cc6"
+ "0x000000000000000000000000000000000000000000000000351173cccb6e4ac6"
```

```diff
# ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`
@@ `_roles` key `0x0000000000000000000000000000000000000000000000000000000000000000`.members.0x7d9103572be58ffe99dc390e8246f02dcae6f611 @@
- true
+ false
@@ `_roles` key `0x0000000000000000000000000000000000000000000000000000000000000000`.members.0xff1137243698caa18ee364cc966cf0e02a4e6327 @@
- false
+ true

@@ `_roles` key `0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b`.members.0x7d9103572be58ffe99dc390e8246f02dcae6f611 @@
- true
+ false
@@ `_roles` key `0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b`.members.0xff1137243698caa18ee364cc966cf0e02a4e6327 @@
- false
+ true

```

```diff
# PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
@@ Slot `0xfab167ad2009dcb80ee379700bb4bd029d97c1181ed9d961625632c8a6f051c6` @@
- "0x0000000000000000000000007d9103572be58ffe99dc390e8246f02dcae6f611"
+ "0x000000000000000000000000ff1137243698caa18ee364cc966cf0e02a4e6327"
```

```diff
# AaveCLRobotOperator at `0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
@@ Slot `0xc44f3b10422758aec55b2a9b24b5bfca2ae1796e06e89369e84b380d0a70871d` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x00000000000000000000000064093fe5f8cf62afb4377cf7ef4373537fe9155b"
@@ Slot `0xc44f3b10422758aec55b2a9b24b5bfca2ae1796e06e89369e84b380d0a70871e` @@
- "0x0000000000000000000000000000000000000000000000000000000000000000"
+ "0x457865637574696f6e20436861696e204b65657065720000000000000000002c"
```

```diff
# WrappedTokenGatewayV3 at `0xB5Ee21786D28c5Ba61661550879475976B707099`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
```

```diff
# ProxyAdmin at `0xD3cF979e676265e4f6379749DECe4708B9A22476`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
```

```diff
# ParaSwapLiquiditySwapAdapter at `0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251`
@@ _owner @@
- 0x7d9103572be58ffe99dc390e8246f02dcae6f611
+ 0xff1137243698caa18ee364cc966cf0e02a4e6327
```

```diff
# ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`
@@ Slot `0x42d0a1298a5abb2ccb2078ebd39d39663c80f3fcd14c47de37b4f4b65adde5f9` @@
- "0x00000000000000000000000000000000000000000000d613eb8b11657ddda71f"
+ "0x00000000000000000000000000000000000000000000d61135a7624ecc55a71f"
@@ Slot `0x616193905e9760e6e9eec593578680e482641fc0599e6d3cb2c462dbf9fac2fe` @@
- "0x000000000000000000000000000000000000000000000126ed072981a39614d4"
+ "0x000000000000000000000000000000000000000000000129a2ead898551e14d4"
```

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- Events Emitted:
  - InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`
    - `Transfer(from: 0x0000000000000000000000000000000000000000, to: 0x053d55f9b5af8694c503eb288a1b7e552f590710, value: 14245017475382631)`
    - `Mint(caller: 0x053d55f9b5af8694c503eb288a1b7e552f590710, onBehalfOf: 0x053d55f9b5af8694c503eb288a1b7e552f590710, value: 14245017475382631, balanceIncrease: 14245017475382631, index: 1002964592071300378286467763)`
    - `Transfer(from: 0x053d55f9b5af8694c503eb288a1b7e552f590710, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 50000000000000000000)`
    - `BalanceTransfer(from: 0x053d55f9b5af8694c503eb288a1b7e552f590710, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 49852208537831930435, index: 1002964592071300378286467763)`
    - `Transfer(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x0000000000000000000000000000000000000000, value: 50000000000000000000)`
    - `Burn(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, target: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 50000000000000000000, balanceIncrease: 0, index: 1002964592071300378286467763)`
  - InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
    - `ReserveUsedAsCollateralEnabled(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `ReserveDataUpdated(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, liquidityRate: 996249774116549376421950, stableBorrowRate: 90000000000000000000000000, variableBorrowRate: 13918162014288945331929309, liquidityIndex: 1002964592071300378286467763, variableBorrowIndex: 1024339444116043819142899040)`
    - `ReserveUsedAsCollateralDisabled(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `Withdraw(reserve: 0xf97f4df75117a78c1a5a0dbb814af92458539fb4, user: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, amount: 50000000000000000000)`
  - ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`
    - `Transfer(from: 0x191c10aa4af7c30e871e70c95db0e4eb77237530, to: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, value: 50000000000000000000)`
    - `Approval(owner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, spender: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, value: 50000000000000000000)`
    - `Transfer(from: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, to: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, value: 50000000000000000000)`
    - `Approval(owner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, spender: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, value: 0)`
    - `Transfer(from: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, to: 0x4f3af332a30973106fe146af0b4220bbbea748ec, value: 50000000000000000000)`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0xf97f4df75117a78c1a5a0dbb814af92458539fb4","topics":["0xe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16","0x000000000000000000000000b0a73671c97bac9ba899cd1a23604fd2278cd02a","0x0000000000000000000000004f3af332a30973106fe146af0b4220bbbea748ec"],"data":"0x000000000000000000000000000000000000000000000002b5e3af16b1880000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001843659d6660000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064093fe5f8cf62afb4377cf7ef4373537fe9155b00000000000000000000000000000000000000000000000000000000004c4b40000000000000000000000000b0a73671c97bac9ba899cd1a23604fd2278cd02a0000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000002b5e3af16b18800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0a73671c97bac9ba899cd1a23604fd2278cd02a0000000000000000000000000000000000000000000000000000000000000016457865637574696f6e20436861696e204b656570657200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"trace_index":null}`
    - `Transfer(from: 0x4f3af332a30973106fe146af0b4220bbbea748ec, to: 0x75c0530885f385721fdda23c539af3701d6183d4, value: 50000000000000000000)`
    - Undecoded log: `{"name":"","anonymous":false,"inputs":null,"raw":{"address":"0xf97f4df75117a78c1a5a0dbb814af92458539fb4","topics":["0xe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16","0x0000000000000000000000004f3af332a30973106fe146af0b4220bbbea748ec","0x00000000000000000000000075c0530885f385721fdda23c539af3701d6183d4"],"data":"0x000000000000000000000000000000000000000000000002b5e3af16b188000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000020e0bba3c6b94201691705905266809c173eaf43bc307d5478c62e3eb8ceb9b131"},"trace_index":null}`
  - KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`
    - `UpkeepCanceled(id: 99910557623747840434738249049159754336730253966084942174349501874329868147502, atBlockHeight: 18438066)`
    - `UpkeepRegistered(id: 101649608825999122873457816899037377045936997171675017458419270059724094681393, executeGas: 5000000, admin: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a)`
    - `FundsAdded(id: 101649608825999122873457816899037377045936997171675017458419270059724094681393, from: 0x4f3af332a30973106fe146af0b4220bbbea748ec, amount: 50000000000000000000)`
  - AaveCLRobotOperator at `0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A`
    - `KeeperCancelled(id: 99910557623747840434738249049159754336730253966084942174349501874329868147502, upkeep: 0x864a6aa4b8d4d84a7570fe2d0e4ece8077abcabb)`
    - `KeeperRegistered(id: 101649608825999122873457816899037377045936997171675017458419270059724094681393, upkeep: 0x64093fe5f8cf62afb4377cf7ef4373537fe9155b, amount: 50000000000000000000)`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - KeeperRegistrar at `0x4F3AF332A30973106Fe146Af0B4220bBBeA748eC`
    - `RegistrationRequested(hash: 0x0023df7916f8b6eec2b1724297085f3ddda1ba5f992b424072693936fa83148a, name: Execution Chain Keeper, encryptedEmail: 0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064093fe5f8cf62afb4377cf7ef4373537fe9155b00000000000000000000000000000000000000000000000000000000004c4b40000000000000000000000000b0a73671c97bac9ba899cd1a23604fd2278cd02a0000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000002b5e3af16b18800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0a73671c97bac9ba899cd1a23604fd2278cd02a0000000000000000000000000000000000000000000000000000000000000016, upkeepContract: 0x64093fe5f8cf62afb4377cf7ef4373537fe9155b, gasLimit: 5000000, adminAddress: 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a, checkData: 0x, amount: 50000000000000000000, source: 0)`
    - `RegistrationApproved(hash: 0x0023df7916f8b6eec2b1724297085f3ddda1ba5f992b424072693936fa83148a, displayName: Execution Chain Keeper, upkeepId: 101649608825999122873457816899037377045936997171675017458419270059724094681393)`
  - ACLManager at `0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B`
    - `RoleGranted(role: 0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b, account: 0xff1137243698caa18ee364cc966cf0e02a4e6327, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `RoleRevoked(role: 0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b, account: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `RoleGranted(role: 0x0000000000000000000000000000000000000000000000000000000000000000, account: 0xff1137243698caa18ee364cc966cf0e02a4e6327, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
    - `RoleRevoked(role: 0x0000000000000000000000000000000000000000000000000000000000000000, account: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, sender: 0x7d9103572be58ffe99dc390e8246f02dcae6f611)`
  - PoolAddressesProvider at `0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb`
    - `ACLAdminUpdated(oldAddress: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newAddress: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - EmissionManager at `0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - PoolAddressesProviderRegistry at `0x770ef9f4fe897e59daCc474EF11238303F9552b6`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - InitializableAdminUpgradeabilityProxy at `0x053D55f9B5AF8694c503EB288a1B7E552f590710`
    - `NewFundsAdmin(fundsAdmin: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - ProxyAdmin at `0xD3cF979e676265e4f6379749DECe4708B9A22476`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - WrappedTokenGatewayV3 at `0xB5Ee21786D28c5Ba61661550879475976B707099`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - ParaSwapLiquiditySwapAdapter at `0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - ParaSwapRepayAdapter at `0x28201C152DC5B69A86FA54FCfd21bcA4C0eff3BA`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - ParaSwapWithdrawSwapAdapter at `0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - unknown contract name at `0x9E8e9D6b0D24216F59043db68BDda1620892f549`
    - `OwnershipTransferred(previousOwner: 0x7d9103572be58ffe99dc390e8246f02dcae6f611, newOwner: 0xff1137243698caa18ee364cc966cf0e02a4e6327)`
  - ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`
    - `ActionsSetExecuted(id: 42, initiatorExecution: 0xd73a92be73efbfcf3854433a5fcbabf9c1316073, returnedData: 0x)`

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0xd0F0BC55Ac46f63A68F7c27fbFD60792C9571feA: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0xd73a92be73efbfcf3854433a5fcbabf9c1316073: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (ArbitrumBridgeExecutor)
  - 0xd0f0bc55ac46f63a68f7c27fbfd60792c9571fea: Contract (not verified)
  - 0x053d55f9b5af8694c503eb288a1b7e552f590710: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x981ab570ac289938f296b975c524b66fbf1b8774: Contract (verified) (Collector)
  - 0x191c10aa4af7c30e871e70c95db0e4eb77237530: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x1be1798b70aee431c2986f7ff48d9d1fa350786a: Contract (verified) (AToken)
  - 0x794a61358d6845594f94dc1db02a252b5b4814ad: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0xbcb167bdcf14a8f791d6f4a6edd964aed2f8813b: Contract (verified) (L2Pool)
  - 0x929ec64c34a17401f460460d4b9390518e5b473e: Contract (verified) (InitializableAdminUpgradeabilityProxy)
  - 0x5f4d15d761528c57a5c30c43c1dab26fc5452731: Contract (verified) (RewardsController)
  - 0xa97684ead0e402dc232d5a977953df7ecbab3cdb: Contract (verified) (PoolAddressesProvider)
  - 0x39df4b1329d41a9ae20e17beff39aabd2f049128: Contract (verified) (SupplyLogic)
  - 0x953a573793604af8d41f306feb8274190db4ae0e: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x5e76e98e0963ecdc6a065d1435f84065b7523f39: Contract (verified) (VariableDebtToken)
  - 0x89d976629b7055ff1ca02b927ba3e020f22a44e4: Contract (verified) (InitializableImmutableAdminUpgradeabilityProxy)
  - 0x0c2c95b24529664fe55d4437d7a31175cfe6c4f7: Contract (verified) (StableDebtToken)
  - 0x9b34e3e183c9b0d1a08ff57a8fb59c821616295f: Contract (verified) (DefaultReserveInterestRateStrategy)
  - 0xf97f4df75117a78c1a5a0dbb814af92458539fb4: Contract (verified) (ClonableBeaconProxy)
  - 0xe72ba9418b5f2ce0a6a40501fe77c6839aa37333: Contract (verified) (UpgradeableBeacon)
  - 0x3f770ac673856f105b586bb393d122721265ad46: Contract (verified) (StandardArbERC20)
  - 0xb0a73671c97bac9ba899cd1a23604fd2278cd02a: Contract (verified) (AaveCLRobotOperator)
  - 0x75c0530885f385721fdda23c539af3701d6183d4: Contract (verified) (KeeperRegistry1_3)
  - 0x153b383c6f4dfcd27f20bafc15c2be5e5fe327d5: Contract (verified) (KeeperRegistryLogic1_3)
  - 0x4f3af332a30973106fe146af0b4220bbbea748ec: Contract (verified) (KeeperRegistrar)
  - 0xa72636cbcaa8f5ff95b2cc47f3cdee83f3294a0b: Contract (verified) (ACLManager)
  - 0x048f2228d7bf6776f99ab50cb1b1eab4d1d4ca73: Contract (verified) (EmissionManager)
  - 0x770ef9f4fe897e59dacc474ef11238303f9552b6: Contract (verified) (PoolAddressesProviderRegistry)
  - 0xd3cf979e676265e4f6379749dece4708b9a22476: Contract (verified) (ProxyAdmin)
  - 0xb5ee21786d28c5ba61661550879475976b707099: Contract (verified) (WrappedTokenGatewayV3)
  - 0xf3c3f14dd7bdb7e03e6ebc3bc5ffc6d66de12251: Contract (verified) (ParaSwapLiquiditySwapAdapter)
  - 0x28201c152dc5b69a86fa54fcfd21bca4c0eff3ba: Contract (verified) (ParaSwapRepayAdapter)
  - 0x5598bbfa2f4fe8151f45bba0a3ede1b54b51a0a9: Contract (verified) (ParaSwapWithdrawSwapAdapter)
  - 0x9e8e9d6b0d24216f59043db68bdda1620892f549: Contract (not verified)

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
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0x053D55f9B5AF8694c503EB288a1B7E552f590710`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for StableDebtToken at `0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7`</summary>

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ParaSwapRepayAdapter at `0x28201C152DC5B69A86FA54FCfd21bcA4C0eff3BA`</summary>

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
<summary>View warnings for StandardArbERC20 at `0x3f770Ac673856F105b586bb393d122721265aD46`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for KeeperRegistrar at `0x4F3AF332A30973106Fe146Af0B4220bBBeA748eC`</summary>

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
<summary>View warnings for VariableDebtToken at `0x5E76E98E0963EcDC6A065d1435F84065b7523f39`</summary>

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
<summary>View warnings for KeeperRegistry1_3 at `0x75c0530885F385721fddA23C539AF3701d6183D4`</summary>

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
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for Collector at `0x981AB570aC289938F296b975C524B66FBF1B8774`</summary>

```
INFO:CryticCompile:'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x981ab570ac289938f296b975c524b66fbf1b8774-CLwstETHSynchronicityPriceAdapter' running
```

</details>

<details>
<summary>View warnings for DefaultReserveInterestRateStrategy at `0x9b34E3e183c9b0d1a08fF57a8fb59c821616295f`</summary>

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
<summary>View warnings for AaveCLRobotOperator at `0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for WrappedTokenGatewayV3 at `0xB5Ee21786D28c5Ba61661550879475976B707099`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for L2Pool at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
<summary>View warnings for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ParaSwapLiquiditySwapAdapter at `0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251`</summary>

```
INFO:CryticCompile:Source code not available, try to fetch the bytecode only
```

</details>

<details>
<summary>View warnings for ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x053D55f9B5AF8694c503EB288a1B7E552f590710`</summary>

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
<summary>Slither report for StableDebtToken at `0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy (Aave LINK) at `0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530`</summary>

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
<summary>Slither report for AToken at `0x1Be1798b70aEe431c2986f7ff48d9D1fa350786a`</summary>

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
<summary>Slither report for ParaSwapRepayAdapter at `0x28201C152DC5B69A86FA54FCfd21bcA4C0eff3BA`</summary>

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
ValidationLogic.validateBorrow(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.ValidateBorrowParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#147) is a local variable never initialized
ReserveLogic._accrueToTreasury(DataTypes.ReserveData,DataTypes.ReserveCache).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#236) is a local variable never initialized
ReserveLogic.cache(DataTypes.ReserveData).reserveCache (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#328) is a local variable never initialized
GenericLogic.calculateUserAccountData(mapping(address => DataTypes.ReserveData),mapping(uint256 => address),mapping(uint8 => DataTypes.EModeCategory),DataTypes.CalculateUserAccountDataParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol#74) is a local variable never initialized
ReserveLogic.updateInterestRates(DataTypes.ReserveData,DataTypes.ReserveCache,address,uint256,uint256).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol#179) is a local variable never initialized
ValidationLogic.validateLiquidationCall(DataTypes.UserConfigurationMap,DataTypes.ReserveData,DataTypes.ValidateLiquidationCallParams).vars (lib/aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol#501) is a local variable never initialized
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
<summary>Slither report for StandardArbERC20 at `0x3f770Ac673856F105b586bb393d122721265aD46`</summary>

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
<summary>Slither report for VariableDebtToken at `0x5E76E98E0963EcDC6A065d1435F84065b7523f39`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x794a61358D6845594F94dc1DB02A252b5b4814aD`</summary>

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
<summary>Slither report for ArbitrumBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x89D976629b7055ff1ca02b927BA3e020F22A44e4`</summary>

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
<summary>Slither report for InitializableAdminUpgradeabilityProxy at `0x929EC64c34a17401F460460D4B9390518E5B473e`</summary>

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
<summary>Slither report for InitializableImmutableAdminUpgradeabilityProxy at `0x953A573793604aF8d41F306FEb8274190dB4aE0e`</summary>

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
<summary>Slither report for Collector at `0x981AB570aC289938F296b975C524B66FBF1B8774`</summary>

```
'solc --standard-json --allow-paths /home/runner/work/seatbelt-for-ghosts/seatbelt-for-ghosts/crytic-export/etherscan-contracts/0x981ab570ac289938f296b975c524b66fbf1b8774-CLwstETHSynchronicityPriceAdapter' running
INFO:Detectors:
Variable CLSynchronicityPriceAdapterPegToBase.PEG_TO_BASE (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#19) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.ASSET_TO_PEG (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#24) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DECIMALS (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#29) is not in mixedCase
Variable CLSynchronicityPriceAdapterPegToBase.DENOMINATOR (src/contracts/CLSynchronicityPriceAdapterPegToBase.sol#35) is not in mixedCase
Variable CLwstETHSynchronicityPriceAdapter.STETH (src/contracts/CLwstETHSynchronicityPriceAdapter.sol#21) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Slither:0x981ab570ac289938f296b975c524b66fbf1b8774 analyzed (5 contracts with 87 detectors), 5 result(s) found
```

</details>

<details>
<summary>Slither report for DefaultReserveInterestRateStrategy at `0x9b34E3e183c9b0d1a08fF57a8fb59c821616295f`</summary>

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
<summary>Slither report for AaveCLRobotOperator at `0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A`</summary>

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
<summary>Slither report for WrappedTokenGatewayV3 at `0xB5Ee21786D28c5Ba61661550879475976B707099`</summary>

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
<summary>Slither report for L2Pool at `0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B`</summary>

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
<summary>Slither report for UpgradeableBeacon at `0xE72ba9418b5f2Ce0A6a40501Fe77c6839Aa37333`</summary>

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
<summary>Slither report for ParaSwapLiquiditySwapAdapter at `0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251`</summary>

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
<summary>Slither report for ClonableBeaconProxy (Chainlink) at `0xf97f4df75117a78c1A5a0DBb814Af92458539FB4`</summary>

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
