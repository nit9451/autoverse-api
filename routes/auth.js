const express = require("express")
var router = express()
const auth  = require('../controller/auth')
const bodyparser = require('body-parser')

router.use(bodyparser.json())
router.post('/', auth.auth)

module.exports = router