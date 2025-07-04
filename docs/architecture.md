# 🧠 Architecture: Prediction Markets Backend

## Core Components

- `MarketManager.js`: Handles creation and closure of markets
- `OracleResolver.js`: Interfaces with off-chain and on-chain oracles
- `TradeEngine.js`: Manages trades and liquidity
- `PayoutModule.js`: Resolves markets and distributes winnings

## Workflow

1. Market is created and funded
2. Users submit predictions via smart contracts
3. Market is resolved by Oracle
4. Backend verifies and handles payouts

## Integrations

- Frontend DApp via REST/GraphQL
- DAO governance for market proposals
- Compatible with REChain Oracles and Stats module
