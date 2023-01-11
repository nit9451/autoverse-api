const Bike = require('../models/bike')
const mongoose = require('mongoose');
const bike = require('../models/bike');
function create(req,res,next){
  console.log("bikeeeee", req.file);

  let bikeName = req.body.bikeName;
  let description = req.body.description;
  let image = req.file;
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


function view(req, res,next){
  Bike.find({}).then((data)=>{
    res.send(data)
  })

}


function update(req, res, next){
  Bike.findByIdAndUpdate(res?.params?.id, req.body,(err,bike)=>{
    if(err){
      return res.status(500).send({error: "Problem with Updating the   bike recored "})
    };
    res.send({success:"Updation Successfully"})
  })
}

function remove(req,res,next){
  Bike.findByIdAndDelete(req.params.id, (err,emp)=>{
    if(err){
      return res.status(500).send({error: "Problem with Deleting the Employee recored"})
    }
    res.send({success: 'Employee deleted successfully'})
  })
}

module.exports.remove = remove
module.exports.create = create
module.exports.view = view
module.exports.update = update