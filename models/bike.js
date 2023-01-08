const mongoose = require('mongoose')
const bikeSchema = new mongoose.Schema({
  bikeName: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
   type: String,
   required: true
  },
})
module.exports = mongoose.model('bike', bikeSchema)