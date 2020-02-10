var express = require('express')
var router = express.Router()

// const info_api = require('../api/info.js')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

module.exports = router