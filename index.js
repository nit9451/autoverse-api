const express = require('express')
const mongoose = require("mongoose")
const router = require('./routes/bike')
var app = express()
//Route
app.get('/',function(req,res){
  res.send('hello world')
})

app.get('/get', function(res, res){
    res.send("i am nitish")
})

app.use('/bike', router)
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
