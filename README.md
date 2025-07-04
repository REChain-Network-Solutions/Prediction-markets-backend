# 🎯 REChain Prediction Markets Backend

This is the backend core of the **REChain Prediction Markets** platform — a decentralized infrastructure for event-based markets. It supports the creation, trading, resolution, and payout of predictions on real-world and on-chain outcomes.

## 🔍 Features

- Market creation and trading engine
- Oracle-based event resolution
- Modular support for multiple event types
- Secure, decentralized backend logic
- Designed for integration with REChain frontend & DAO

## 📁 Project Structure

```
Prediction-markets-backend/
├── src/                   # Backend services
├── contracts/             # Smart contracts for prediction logic
├── scripts/               # Deployment and automation scripts
├── tests/                 # Unit and integration tests
├── docs/                  # Documentation
└── README.md
```

## 🚀 Getting Started

```bash
git clone https://github.com/REChain-Network-Solutions/Prediction-markets-backend.git
cd Prediction-markets-backend
npm install
```

## 🧪 Running the Backend

Use environment variables to configure the backend:

```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/prediction
PRIVATE_KEY=your_private_key
```

Start the development server:

```bash
npm run dev
```

## 🧪 Testing

```bash
npm test
```

## 📄 License

MIT © REChain Network Solutions
