const express = require('express')
var router = express()
const create = require('../controller/bike')
const view = require('../controller/bike')
const update = require('../controller/bike')
const remove = require('../controller/bike')
const bodyparser = require('body-parser');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const jwt = require("jsonwebtoken")
// const verifyToken = require('../verifyToken')


router.use(bodyparser.json())
console.log("verifyToken", verifyToken)
// router.use(bodyparser.urlencoded({extended:true}));
function verifyToken(req, res, next) {
    console.log("res:::", req.headers);
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    try {
      const decoded = jwt.verify(token, "secretkey");
      req.user = decoded;
      next();
    } catch (err) {
        console.log("error", err)
      return res.status(401).json({ message: "Invalid token" });
    }
  }
router.post('/create',verifyToken, upload.single('image'), create.create)
router.get('/', verifyToken, view.view)
router.patch('/:id',verifyToken, update.update)
router.delete('/delete/:id',verifyToken, remove.remove)
module.exports = router