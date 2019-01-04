var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Log         = require("./models/log"),
    seedDB      = require("./seeds"),
    app         = express();



//APP SETUP
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/easylogv1", { useNewUrlParser: true });
app.use(express.static(__dirname + "/public"));
seedDB();

//LANDING
app.get("/", function(req, res){
    res.render("landing");
});


//INDEX - LOGS
app.get("/logs", function(req, res){
    Log.find({}, function(err, allLogs){
       if(err){
           console.log(err);
       } else {
           res.render("logs", {logs: allLogs});
       }
    });
});



//NEW
app.get("/logs/new", function(req, res){
   res.render("new"); 
});

//CREATE
app.post("/logs", function(req, res){
   var log = req.body.log;
   Log.create(log, function(err, newlog){
      if(err){
          console.log(err);
      } 
      res.redirect("/logs");
   });
});


//SHOW
app.get("/logs/:id", function(req, res){
   res.render("show");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!")
});