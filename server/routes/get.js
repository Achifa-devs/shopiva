const passport = require("passport");
const { entrepreneur_subscription_transactions } = require("../controllers/enterpreneur/subscription");
const { GET_LANG, GET_TIMEZONES } = require("../reusables/db_functions");
const { 
    express, 
    parser
 } = require("../reusables/modules");
let entrepreneurGetRoute = express.Router();  

entrepreneurGetRoute.get('/entrepreneur/subscription', parser, entrepreneur_subscription_transactions);
entrepreneurGetRoute.get('/entrepreneur/profile', parser, entrepreneur_subscription_transactions);
entrepreneurGetRoute.get('/entrepreneur/lang', parser, GET_LANG);
entrepreneurGetRoute.get('/entrepreneur/timezones', parser, GET_TIMEZONES);

entrepreneurGetRoute.get('/entrepreneur/google', passport.authenticate('google', {
    scope: ['profile']
}));
entrepreneurGetRoute.get('/entrepreneur/google/redirect', (req,res) => {
    res.send('hello auth completed...')
});

// userRoute.post('/shop', parser, post_shop);

// userRoute.post('/cart', parser, post_cart);
// userRoute.post('/order', parser, post_order);
// userRoute.post('/favourite', parser, post_favourite);

// userRoute.post('/listing', parser, post_listing);

module.exports={
    entrepreneurGetRoute
}
