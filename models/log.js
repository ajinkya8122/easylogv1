var mongoose = require("mongoose");

//MONGO SCHEMA
var logSchema = new mongoose.Schema({
   desc: String,
   exercise: {
      chest: {
         incBenchPress: Number,
         bbBenchPress: Number
      },
      back: Number
   },
   date: {type: Date, default: Date.now}
   
});


// MONGOOSE MODEL
// var Log = mongoose.model("Log", logSchema);

// SEED LOG - MONGOOSE
// Log.create({type: "Test 2m", desc: "This is test 2m"}, function(err, log){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("new log: " + log);
//       }
// });

//EXPORT MODEL
module.exports = mongoose.model("Log", logSchema);