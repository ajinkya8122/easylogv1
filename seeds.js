var mongoose    = require("mongoose"),
    Log         = require("./models/log");
    
    
var data = [
    {
        type: "Test 1d",
        desc: "From SeedsDB1"
        
    },
    {
        type: "Test 2d",
        desc: "From SeedsDB2"
        
    },
    {
        type: "Test 2d",
        desc: "From SeedsDB3"
        
    }
];

function seedDB(){
    //REMOVE ALL LOGS
        Log.deleteMany({}, function(err){
           if(err){
               console.log(err);
           } 
           console.log("Removed all logs");
           data.forEach(function(seed){
              Log.create(seed, function(err, log){
                 if(err){
                     console.log(err)
                 } else {
                     console.log("Added a log" + log);
                }
              });
           });
        });
        
}

 module.exports = seedDB;