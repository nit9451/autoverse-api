const Auth = require('../models/auth')
// const mongoose = require('mongoose');
// const auth = require('../models/auth');

const token = require("jsonwebtoken")


function auth(req, res, next){
    let email = req.body.email;
    let password = req.body.password;
    var toke = token.sign({email :email},"qwerty")
    let users = new Auth({
        email,
        password,
        toke
    })
    console.log("users", users);
    users.save().then((data)=>{
        res.send(data)
    })
}

module.exports.auth = auth;