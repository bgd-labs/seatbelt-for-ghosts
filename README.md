<p align="center"><img width="200" src="./seatbelt_logo.png" alt="Aave logo"></a></p>

# Aave seatbelt

This repository contains tools that make on-chain governance safer,
including automated scripts that apply checks to live proposals to allow
for better informed voting.

[![Governance Checks](https://github.com/bgd-labs/seatbelt-for-ghosts/actions/workflows/governance-checks.yaml/badge.svg)](https://github.com/bgd-labs/seatbelt-for-ghosts/actions/workflows/governance-checks.yaml)

## How it works

Aave Seatbelt is a tool for executing and interpreting governance simulations: it forks Ethereum mainnet (where the Aave governance lives), it simulates the execution of a proposal, and finally generates a report containing human-readable information on what effects a proposal will have.

The generated report will contain:

- All the state changes were caused by the proposal execution.
- Events triggered.
- Compilation report of all contracts affected, to check for potential warnings.
- It runs Slither (static analysis tool) over all touched contracts to find potential issues.

Some of those checks are initially generic, but in addition, we also added extra “interpretations” for particularities of the Aave ecosystem. For example, when an Aave Pool contract is affected, we can automate a deeper interpretation of the effect, making it more human-readable.

![diagram](seatbelt_diagram.jpg)

## Development

### Adding DAOs to CI

To add a DAO to CI, submit a pull request that adds the desired `DAO_NAME` and the according governance address to the `DAOs` constant in [utils/constants](https://github.com/bgd-labs/seatbelt-for-ghosts/blob/main/utils/constants.ts) and append your `DAO_NAME`
to the `matrix` section of [.github/workflows/governance-checks.yaml](https://github.com/bgd-labs/seatbelt-for-ghosts/blob/main/.github/workflows/governance-checks.yaml).

Note that only `AaveGovernanceV2` style governance are supported.

### Running Locally

First, create a file called `.env` with the following environment variables:

```sh
# URL to your node, e.g. Infura or Alchemy endpoint
RPC_URL=yourNodeUrl

# Tenderly access token
# Access token is obtained from the Tenderly UI via Account > Authorization > Generate Access Token
TENDERLY_ACCESS_TOKEN=yourAccessToken

# Tenderly project slug
# Project slug can be found in the URL of your project: https://dashboard.tenderly.co/<account>/<project_slug>/transactions
TENDERLY_PROJECT_SLUG=projectName

# Define the DAO name
DAO_NAME=Aave

# Tenderly account
# Project slug can be found in the URL of your project: https://dashboard.tenderly.co/<account>/<project_slug>/transactions
TENDERLY_ACCOUNT=accountName

# (Optional) Set omit cache to true if you want to force rerun all proposals
OMIT_CACHE=true

# (Optional) Seatbelt does not simulate executed proposals, instead it just analyzes the actual onchain transaction
# While this usually is the desired behavior in development it sometimes makes sense to check the simulation flow
FORCE_SIMULATION=true

# (Optional) Only needed when you want to run specific proposals of the selected DAO
PROPOSAL_FILTER=1_2_3

# (Optional) If you want to run seatbelt against a fork (e.g. to test against non-created proposals) you can run against a fork
# For this to work you have to set the RPC_URL, FORK_ID and TENDERLY_ROOT accordingly
FORK_ID=forkId

# (Optional) The root is optional for fork testing, but allows you to move the root in case there's a simulation you want to point to
TENDERLY_ROOT=tenderlyRoot
```

There are now two modes of operation:

1. Run `yarn start` to simulate and run checks on all AaveGovernanceV2 proposals for the currently selected DAO
2. Set `PROPOSAL_FILTER` to `proposalId1_proposalId2` and run `yarn start` to only run checks for the selected proposal(s).

## Reports

Find the reports [here](https://github.com/bgd-labs/seatbelt-for-ghosts/tree/main/reports) when run in CI,
or in the `reports` folder if running locally.

Some notes on the outputs of reports:

- If a transaction reverts, that will be reported in the state changes section
- State changes and events around the proposal execution process are omitted from reports to reduce noise

<!-- ### Reports table start ### -->

### Aave ( 0xEC568fffba86c094cf06b22134B23074DFE2252c )

| Proposal                                                                       | Report                                                                             | App-link                                                       |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| AIP 5: Adding CRV to Aave                                                      | [000.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/000.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=0)  |
| Adding GUSD to AAVE                                                            | [001.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/001.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=1)  |
| Aavenomics Quarterly Upgrade                                                   | [002.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/002.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=2)  |
| Adding BAL on AAVE                                                             | [003.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/003.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=3)  |
| Activation of the Aave Balancer Pool Liquidity Staking                         | [004.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/004.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=4)  |
| Adding xSushi on AAVE                                                          | [005.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/005.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=5)  |
| desactivation of Aave V1 stable rate borrowing                                 | [006.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/006.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=6)  |
| desactivation of Aave V1 stable rate borrowing                                 | [007.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/007.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=7)  |
| Add renFIL support to Aave                                                     | [008.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/008.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=8)  |
| Enable borrowing on renFIL                                                     | [009.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/009.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=9)  |
| Upgrade Aave V1 repayment for migration tool                                   | [010.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/010.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=10) |
| introduce Liquidity Incentives for Aave v2                                     | [011.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/011.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=11) |
| Whitelist Curve Liquidity Mining Claim                                         | [012.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/012.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=12) |
| Aave Grants DAO                                                                | [013.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/013.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=13) |
| Aavenomics quarterly upgrade Q2 2021                                           | [014.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/014.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=14) |
| Safety Incentives Implementation                                               | [015.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/015.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=15) |
| Set Reserve Factors for GUSD and CRV                                           | [016.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/016.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=16) |
| Add RAI to Aave V2                                                             | [017.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/017.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=17) |
| Adding AMPL on AAVE                                                            | [018.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/018.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=18) |
| Add PAX to Aave V2                                                             | [019.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/019.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=19) |
| undefined                                                                      | [020.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/020.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=20) |
| Extend Liquidity Incentives for Aave v2                                        | [021.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/021.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=21) |
| Add BarnBridge (BOND) to Aave                                                  | [022.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/022.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=22) |
| Raise Maximum Interest Rate on AMPL Market                                     | [023.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/023.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=23) |
| Lower Reserve Factor for AMPL                                                  | [024.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/024.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=24) |
| Dynamic Risk Parameters                                                        | [025.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/025.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=25) |
| Dynamic Risk Parameters                                                        | [026.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/026.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=26) |
| Add DPI on Aave V2                                                             | [027.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/027.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=27) |
| Extend Liquidity Incentives for Aave v2                                        | [028.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/028.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=28) |
| Polygon Cross-chain Governance Test                                            | [029.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/029.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=29) |
| Liquidation Bonus Updates                                                      | [030.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/030.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=30) |
| Add FRAX to Aave V2                                                            | [031.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/031.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=31) |
| Adjust interest rate to account for APY over-approximation                     | [032.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/032.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=32) |
| LTV and Liquidation Threshold Updates to Moderate Levels                       | [033.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/033.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=33) |
| Update to the Liquidity Mining Distribution                                    | [034.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/034.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=34) |
| Add FEI to Aave V2                                                             | [035.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/035.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=35) |
| Adjust interest rate to account for APY over-approximation                     | [036.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/036.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=36) |
| Add FEI to Aave V2                                                             | [037.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/037.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=37) |
| Liquidation Bonus Updates for eleven Aave V2 assets                            | [038.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/038.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=38) |
| Risk Parameter Updates for Aave V2 assets                                      | [039.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/039.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=39) |
| Risk Parameter Updates 2021-10-07                                              | [040.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/040.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=40) |
| Institute a Voting Delay Period                                                | [041.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/041.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=41) |
| Risk Parameter Updates 2021-10-14                                              | [042.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/042.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=42) |
| Risk Parameter Updates 2021-10-21                                              | [043.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/043.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=43) |
| Disable borrow for xSUSHI and DPI. Freeze reserves for UNI and BAL AMM Markets | [044.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/044.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=44) |
| Risk Parameter Updates 2021-11-04                                              | [045.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/045.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=45) |
| Q2 Dynamic Risk Parameters                                                     | [046.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/046.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=46) |
| Aave V2 - Liquidity Mining Program (90 days at 30% reduced rate)               | [047.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/047.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=47) |
| Add Fireblocks as a whitelister on Aave Arc                                    | [048.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/048.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=48) |
| 0 arc proposal                                                                 | [048_arc.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/048_arc.md) | [app](https://app.aave.com/governance/proposal/?proposalId=48) |
| Authorize the Guardian to hold the emergency keys for V2                       | [049.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/049.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=49) |
| Q2 Dynamic Risk Parameters                                                     | [050.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/050.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=50) |
| Add G-UNI to Aave V2 AMM Market                                                | [051.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/051.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=51) |
| Renew Aave Grants DAO                                                          | [052.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/052.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=52) |
| Risk Parameter Updates 2021-12-16                                              | [053.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/053.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=53) |
| Risk Parameter Updates 2021-12-29                                              | [054.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/054.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=54) |
| Enable FEI as Collateral on Aave V2                                            | [055.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/055.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=55) |
| Add Assets to Aave Polygon Market and Update WMATIC Risk Parameters            | [056.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/056.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=56) |
| Revert ENJ Parameter Changes and Enable FEI as Collateral on Aave V2           | [057.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/057.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=57) |
| Risk Parameter Updates 2022-02-10                                              | [058.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/058.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=58) |
| Add SEBA Bank as a whitelister on Aave Arc                                     | [059.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/059.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=59) |
| 1 arc proposal                                                                 | [059_arc.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/059_arc.md) | [app](https://app.aave.com/governance/proposal/?proposalId=59) |
| Aave V2 - Liquidity Mining Update (90 days at 30% reduced rate)                | [060.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/060.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=60) |
| Aave <> Starknet - Phase I                                                     | [061.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/061.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=61) |
| Add stETH to AAVE v2                                                           | [062.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/062.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=62) |
| Add ENS to Aave V2                                                             | [063.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/063.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=63) |
| Risk Parameter Updates 2022-02-24                                              | [064.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/064.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=64) |
| Add Terra USD (UST) to AAVE v2                                                 | [065.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/065.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=65) |
| Continuous Formal Verification                                                 | [066.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/066.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=66) |
| Risk Parameter Updates 2022-03-22                                              | [067.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/067.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=67) |
| Optimizing ETH rates                                                           | [068.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/068.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=68) |
| Risk Parameter Updates 2022-03-31                                              | [069.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/069.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=69) |
| Risk Parameter Updates 2022-04-22                                              | [070.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/070.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=70) |
| Approval of BGD contribution to Aave                                           | [071.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/071.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=71) |
| Aave Arc Market - Update Asset Listing Risk Parameters                         | [072.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/072.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=72) |
| 2 arc proposal                                                                 | [072_arc.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/072_arc.md) | [app](https://app.aave.com/governance/proposal/?proposalId=72) |
| Renew Aave Grants DAO                                                          | [073.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/073.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=73) |
| Risk Parameter Updates 2022-05-05                                              | [074.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/074.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=74) |
| Freezing UST and Updating stETH Parameters                                     | [075.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/075.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=75) |
| Consolidate Reserve Factors and Enable Borrowing DPI                           | [076.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/076.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=76) |
| Add claimRewardsToSelf() to incentives for Ethereum V2 Aave Market             | [077.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/077.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=77) |
| Risk Parameter Updates for Aave V2 and Aave Arc (Fireblocks) 2022-05-26        | [078.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/078.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=78) |
| 3 arc proposal                                                                 | [078_arc.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/078_arc.md) | [app](https://app.aave.com/governance/proposal/?proposalId=78) |
| Consolidate Reserve Factors and Enable Borrowing DPI                           | [079.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/079.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=79) |
| Add CVX to Aave V2                                                             | [080.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/080.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=80) |
| Risk Parameter Updates for Aave Arc (Fireblocks) 2022-05-26                    | [081.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/081.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=81) |
| 3 arc proposal                                                                 | [081_arc.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/081_arc.md) | [app](https://app.aave.com/governance/proposal/?proposalId=81) |
| Renew allowance of the Aave Safety Module                                      | [082.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/082.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=82) |
| Freeze stETH, Increase stETH Liq. Threshold to 90%, Pause ETH Borrowing        | [083.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/083.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=83) |
| Risk Parameter Updates for Aave Arc (Fireblocks) 2022-05-26                    | [084.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/084.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=84) |
| 3 arc proposal                                                                 | [084_arc.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/084_arc.md) | [app](https://app.aave.com/governance/proposal/?proposalId=84) |
| Aave <> Starknet - Phase I (Part 2)                                            | [085.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/085.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=85) |
| Bounty to Hacxyk for fallback oracle misconfiguration                          | [086.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/086.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=86) |
| Strategic Investment Part 1 - BAL <> AAVE Token Swap                           | [087.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/087.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=87) |
| Sigma Prime - Security Assessment Services for Aave                            | [088.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/088.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=88) |
| Add 1INCH to Aave v2 market                                                    | [089.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/089.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=89) |
| Add 1INCH to Aave v2 market                                                    | [090.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/090.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=90) |
| Appoint Securitize as a Whitelister to Aave Arc                                | [091.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/091.md)         | [app](https://app.aave.com/governance/proposal/?proposalId=91) |
| 4 arc proposal                                                                 | [091_arc.md](./reports/Aave/0xEC568fffba86c094cf06b22134B23074DFE2252c/091_arc.md) | [app](https://app.aave.com/governance/proposal/?proposalId=91) |

<!-- ### Reports table end ### -->

### Credits

_Forked of & inspired by [uniswap governance seatbelt](https://github.com/Uniswap/governance-seatbelt)_

Notable changes:

- adjusted for `AaveGovernanceV2` and ipfs proposal payloads
- storing reports right on the main branch for better discoverability
- simulations are only rerun for not previously executed & simulated proposals
- running custom simulations is handled via `PROPOSAL_FILTER` only, no need to create sim files
- the ci is chunking the proposals in different runs so they can partially run in parallel
