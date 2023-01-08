const Bike = require('../models/bike')
const mongoose = require('mongoose')
function create(req,res,next){
  let bikeName = req.body.bikeName;
  let description = req.body.description;
  let image = req.body.image;
  let price = req.body.price
  let bike = new Bike({
    bikeName,
    price,
    image,
    description
  })
  bike.save().then((data)=>{
    res.send(data)
  })
}
module.exports.create = create