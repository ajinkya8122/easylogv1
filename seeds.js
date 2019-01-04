var mongoose    = require("mongoose"),
    Log         = require("./models/log");
    
    
var data = [
    {
        
        desc: "From SeedsDB1",
        exercise: {chest: {
            incBenchPress: 2,
            bbBenchPress: 3
        },
        back: "3"}
        
    },
    {
        
        desc: "From SeedsDB2",
        exercise: {chest: {
            incBenchPress: 0,
            bbBenchPress: 0
        },
        back: "3"}
        
    },
    {
       
        desc: "From SeedsDB3",
        exercise: {chest: {
            incBenchPress: 6,
            bbBenchPress: 7
        },
        back: "0"}
        
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
        
};

 module.exports = seedDB;