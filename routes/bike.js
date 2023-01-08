const express = require('express')
var router = express()
const create = require('../controller/bike')
const bodyparser = require('body-parser');
router.use(bodyparser.json())
router.post('/create',create.create)
module.exports = router