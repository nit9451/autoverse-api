const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token:{
    type: String,
    required: false
  }
});

module.exports = mongoose.model('User', authSchema)