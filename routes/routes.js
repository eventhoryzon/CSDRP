var express = require('express');
var router = express.Router();
var passport = require('passport');
var auth = require('../config/auth');

var loginactions = require('../methods/loginactions');

// var user = require('../model/user');

//User related routes
router.post('/loginAuthenticate', loginactions.loginAuthenticate);
router.post('/addNewUser', loginactions.addNewUser);
router.get('/getinfo', loginactions.getinfo);
router.get('/getallusers' , loginactions.getallusers);
router.delete('/deleteuser/:id',loginactions.deleteuser);


    // route for login form
    // route for processing the login form
    // route for signup form
    // route for processing the signup form

    // route for showing the profile page
    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

        // route for logging out
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =====================================
    // TWITTER ROUTES ======================
    // =====================================
    router.get('/auth/twitter', 
    passport.authenticate('twitter'),
    function(req, res) {}); // empty route handler function, it won't be triggered
router.get('/auth/twitter/callback', 
    passport.authenticate('twitter', { 
                           successRedirect: '/success',
                           failureRedirect: '/login' }),
    function(req, res) {}); // route handler

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;