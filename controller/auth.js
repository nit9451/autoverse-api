const User = require("../models/auth");
// const mongoose = require('mongoose');
// const User = require('../models/auth');

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  // var toke = token.sign({email :email},"qwerty")
//   let users = new Auth({
//     email,
//     password,
//     // toke
//   });
  console.log("email", email);
  console.log("User", User)

  User.findOne({ email: email , password: password}, (err, user) => {
    console.log("user:", user)
    if (err) {
      return res.status(500).send({ messege: "Error logged in" });
    }
    if (!user) {
      return res.status(404).send({ messege: "User not found or Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, "secretkey");
  
    res.json({ message: "Successfully logged in", token });
  });
  // users.save().then((data)=>{
  //     res.send(data)
  // })
}




module.exports.auth = auth;
