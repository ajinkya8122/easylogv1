var mongoose = require("mongoose");


//MONGO SCHEMA
var logSchema = new mongoose.Schema({
   type: String ,
   desc: String,
   date: {type: Date, default: Date.now}
});


var userSchema = new mongoose.Schema({
    
});