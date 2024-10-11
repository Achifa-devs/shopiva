

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20')
require('dotenv').config();    


passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    () => {

    })
)