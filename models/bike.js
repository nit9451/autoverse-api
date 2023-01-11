const mongoose = require('mongoose')
const bikeSchema = new mongoose.Schema({
  bikeName: {
    type: String,
    required: false
  },
  image:{
    type: Object,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  description: {
   type: String,
   required: false
  },
})
module.exports = mongoose.model('bike', bikeSchema)