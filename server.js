var express =  require("express");
var app = express();
var port = process.env.PORT || 8080;
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var config = require('./config/config'); 
var auth = require('./config/auth');
var passport = require('passport');
var TwitterStrategy = require("passport-twitter").Strategy;

require('./model/db');
require('./model/user');

mongoose.connection.on('open' ,  function(err){
    if(err) {
        console.log("Not Connected to the Database" , + err);
    }else{
        console.log("Connected to the Mongo Database");
    }


    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(routes);
    app.use(multer);
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static("www"));

/* Manage CORS Access for ALL requests/responses */
app.use(function(req, res, next) {  
     /* Allow access from any requesting client */
    res.header("Access-Control-Allow-Origin", "*");
     /* Set the Http request header */
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    /* Allow access for any of the following Http request types */
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});


app.get('/', function(req, res) {  
    res.send('Hello! The API ladning is at http://localhost:' + port + '/app_api');
});

app.listen(port, function(){
    console.log("Running server on port -> " + port);
});

// Export app
exports = module.exports = app;
})

 routes = require('./routes/routes');