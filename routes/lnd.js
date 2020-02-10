var express = require('express')
var router = express.Router()

const lnd_api = require('../api/lnd.js')

router.get('/ping', async (req, res) => {
    try {
      const result = await lnd_api.ping_lnd()
      res.send(result)
    } catch (err) {
      res.send(err)
    }
});

module.exports = router