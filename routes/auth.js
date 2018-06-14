var express = require('express');
var router = express.Router();
var passport = require('passport');

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


module.exports = router;