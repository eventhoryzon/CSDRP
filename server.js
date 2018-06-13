'use strict';
var http    =  require('http');
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
var routes = require('./routes/routes');
require('./model/db');
require('./model/user');

mongoose.connection.on('open' ,  function(err){
    if(err) {
        console.log("Not Connected to the Database" , + err);
    }else{
        console.log("Connected to the Mongo Database");
    }

    app.use(express.static("www"));
    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(routes);
    app.use(multer);
    app.use(passport.initialize());
    app.use(passport.session());


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

app.get('/', function(req, res){
    setInterval(function() {
        console.log("you would be seeing the logs of your app");
    }, 3000);
    setInterval(function() {
        console.log("right here.");
    }, 1500);
    setInterval(function() {
        console.log("as it runs");
    }, 1500);
    setInterval(function() {
        console.log("isn't that exciting?");
    }, 5000);
    res.end("Hello world.  I'm demonstrating the functionality of /dash.html by logging test messages on an interval.");
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Application now running on port", port);
  });


// Export app
exports = module.exports = app;
})

