## Optimism

- Simulation: [https://dashboard.tenderly.co/me/simulator/51bbd671-edd3-41ea-bbc7-d8133a2f8d03](https://dashboard.tenderly.co/me/simulator/51bbd671-edd3-41ea-bbc7-d8133a2f8d03)

### Checks

#### Reports all state changes from the proposal ❌ Failed

Errors:

- Transaction reverted with reason: undefined

#### Check stack trace of the proposal ✅ Passed

Info:

- There is no SELFDESTRUCT inside of delegated call

#### Reports all events emitted from the proposal ✅ Passed

Info:

- No events emitted

#### Check all targets are verified on Etherscan ✅ Passed

Info:

- Targets:
  - 0x84893EE84e773E4a7a5738BD903dBE2a6E636B9e: Contract (not verified)

#### Check all touched contracts are verified on Etherscan ✅ Passed

Info:

- Touched address:
  - 0x246e20bf778b3e16cb71eca535f40f8c4e6c4185: EOA (verification not applicable)
  - 0x7d9103572be58ffe99dc390e8246f02dcae6f611: Contract (verified) (OptimismBridgeExecutor)

#### Runs solc against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>
<details>
<summary>View warnings for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/crytic-compile", line 5, in <module>
    from crytic_compile.__main__ import main
ModuleNotFoundError: No module named 'crytic_compile'
```

</details>

</details>

#### Runs slither against the verified contracts ✅ Passed

Info:

-

<details>
<summary>View Details</summary>

<details>
<summary>Slither report for OptimismBridgeExecutor at `0x7d9103572bE58FfE99dc390E8246f02dcAe6f611`</summary>

```
Traceback (most recent call last):
  File "/home/sakulstra/.local/bin/slither", line 5, in <module>
    from slither.__main__ import main
ModuleNotFoundError: No module named 'slither'
```

</details>

</details>
