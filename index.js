const express = require('express')
const mongoose = require("mongoose")
var app = express()
const token = require("jsonwebtoken")
const cors = require("cors")
const bodyParser = require('body-parser')

//Route
// app.get('/',function(req,res){
//   res.send('hello world')
// })

var toke = token.sign({name :"nitish"},"qwerty")
console.log("t", toke);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const router = require('./routes/bike')
const auth = require('./routes/auth')
app.use(cors());
app.get('/get', function(res, res){
  res.send("i am nitish")
})

app.use('/bike', router)
app.use('/login', auth)


//MongoDB connection
mongoose.connect('mongodb+srv://nitish:W0h25wxEKZPWOK1F@cluster0.6xn93jl.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})
//Server
app.listen(8000,function(){
  console.log('Server is Up')
})
