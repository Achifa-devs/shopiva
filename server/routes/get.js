const passport = require("passport");
const { entrepreneur_subscription_transactions } = require("../controllers/enterpreneur/subscription");
const { GET_LANG, GET_TIMEZONES } = require("../reusables/db_functions");
const { 
    express, 
    parser
 } = require("../reusables/modules");
const { entrepreneur_profile } = require("../controllers/enterpreneur/profile");
let entrepreneurGetRoute = express.Router();  

entrepreneurGetRoute.get('/entrepreneur/subscription', parser, entrepreneur_subscription_transactions);
entrepreneurGetRoute.get('/entrepreneur/profile', parser, entrepreneur_profile);
entrepreneurGetRoute.get('/entrepreneur/lang', parser, GET_LANG);
entrepreneurGetRoute.get('/entrepreneur/timezones', parser, GET_TIMEZONES);




entrepreneurGetRoute.get('/entrepreneur/auth/google', passport.authenticate('google', { scope: ['profile'] }));

entrepreneurGetRoute.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports={
    entrepreneurGetRoute
}
