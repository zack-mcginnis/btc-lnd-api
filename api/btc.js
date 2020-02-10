// BTC full-node API functions
const assert = require("assert");
const path = require("path");
const fs = require("fs");
const Long = require("long"); 

// BTC setup
const Client = require('bitcoin-core');
const client = new Client({ 
  network: process.env.BTC_ENV, 
  username: process.env.BTC_RPC_USER, 
  password: process.env.BTC_RPC_PASS
});

const ping_btc = () => {
    return client.getBlockchainInfo()
}

module.exports = {
  ping_btc
}