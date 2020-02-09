// API setup
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const btc_api = require('./btc-api.js')
const lnd_api = require('./lnd-api.js')

const app = express();
app.use(cors())

app.get('/api/btc/ping', async (req, res) => {
  try {
    const result = await btc_api.ping_btc()
    res.send(result)
  } catch (err) {
    res.send(err)
  }
});

app.get('/api/lnd/ping', async (req, res) => {
    try {
      const result = await lnd_api.ping_lnd()
      res.send(result)
    } catch (err) {
      res.send(err)
    }
  });

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`BTC / LND API running on port ${PORT}`));