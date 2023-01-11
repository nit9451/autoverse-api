const express = require('express')
var router = express()
const create = require('../controller/bike')
const view = require('../controller/bike')
const update = require('../controller/bike')
const remove = require('../controller/bike')
const bodyparser = require('body-parser');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.use(bodyparser.json())
// router.use(bodyparser.urlencoded({extended:true}));
router.post('/create', upload.single('image'), create.create)
router.get('/', view.view)
router.patch('/:id', update.update)
router.delete('/delete/:id', remove.remove)
module.exports = router