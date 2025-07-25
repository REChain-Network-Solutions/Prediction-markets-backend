const conf = require('ocore/conf.js');

// All feed_names must be unique
exports.popularPairsByOracle = conf.testnet ? {
    [conf.currencyOracleAddresses[0]] : [
        "GREChain_USD",
        "GREChain_BTC",
        "BTC_USD",
        "ETH_USD",
        "ETH_BTC",
        "BAT_USD",
        "DAI_USD",
        "DAI_BTC",
        "DOGE_USD",
        "BNB_BTC",
        "BNB_USD",
        "MATIC_USD",
        "MATIC_BTC",
    ]
} : {
    [conf.currencyOracleAddresses[0]] : [
        "GREChain_USD",
        "GREChain_BTC",
        "BTC_USD",
        "ETH_USD",
        "ETH_BTC",
        "BAT_USD",
        "DAI_USD",
        "DAI_BTC",
        "DOGE_USD",
        "BNB_BTC",
        "BNB_USD",
        "MATIC_USD",
        "MATIC_BTC",
    ],
    [conf.currencyOracleAddresses[1]] : [
        "XAU_BTC",
        "XAU_USD",
    ] 
}