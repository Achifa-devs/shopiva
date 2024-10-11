const { entrepreneur_subscription_transactions } = require("../controllers/enterpreneur/subscription");
const { 
    express, 
    parser
 } = require("../reusables/modules");
let entrepreneurGetRoute = express.Router();  

entrepreneurGetRoute.get('/entrepreneur/subscription', parser, entrepreneur_subscription_transactions);

// userRoute.post('/shop', parser, post_shop);

// userRoute.post('/cart', parser, post_cart);
// userRoute.post('/order', parser, post_order);
// userRoute.post('/favourite', parser, post_favourite);

// userRoute.post('/listing', parser, post_listing);

module.exports={
    entrepreneurGetRoute
}
