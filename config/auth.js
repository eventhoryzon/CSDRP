// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'twitterAuth' : {
        'consumerKey'       : '3sayP0KbP2JaeaoYTI4Q57VUe',
        'consumerSecret'    : '6WqIhrNFNSEooJE8qMYmDthMZxQIQxsDanhubYoyHRIHLu1pQ4',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback',
        'userProfileURL'    : 'https://api.twitter.com/1.1/account/verify/verify_credentials.json?include_email=true'
    },
}