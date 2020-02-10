const express = require('express')
const router = express.Router()

const btc_api = require('../api/btc.js')

router.get('/ping', async (req, res) => {
    try {
      const result = await btc_api.ping_btc()
      res.send(result)
    } catch (err) {
      res.send(err)
    }
});

module.exports = router