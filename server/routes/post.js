const { register_entrepreneur, signin_entrepreneur } = require("../controllers/enterpreneur/authentication");
const { entrepreneur_auth, check_entrepreneur } = require("../middleware/entrepreneur");
const { confirm_payment } = require("../payment_processor/presale_payment");
const { 
    express, 
    parser
 } = require("../reusables/modules");
let entrepreneurPostRoute = express.Router();  

entrepreneurPostRoute.post('/entrepreneur/registration', parser, register_entrepreneur);
entrepreneurPostRoute.post('/entrepreneur/login', parser, signin_entrepreneur);
entrepreneurPostRoute.post('/entrepreneur/authentication', parser, check_entrepreneur);
entrepreneurPostRoute.post('/entrepreneur/authorization', parser, entrepreneur_auth);
entrepreneurPostRoute.post('/entrepreneur/pre-sale-subscription', parser, confirm_payment);

// userRoute.post('/shop', parser, post_shop);

// userRoute.post('/cart', parser, post_cart);
// userRoute.post('/order', parser, post_order);
// userRoute.post('/favourite', parser, post_favourite);

// userRoute.post('/listing', parser, post_listing);

module.exports={
    entrepreneurPostRoute
}
