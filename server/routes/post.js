const { register_entrepreneur, signin_entrepreneur } = require("../controllers/enterpreneur/authentication");
const { 
    express, 
    parser
 } = require("../reusables/modules");
let entrepreneurRoute = express.Router();  

entrepreneurRoute.post('/entrepreneur/registration', parser, register_entrepreneur);
entrepreneurRoute.post('/entrepreneur/login', parser, signin_entrepreneur);

// userRoute.post('/shop', parser, post_shop);

// userRoute.post('/cart', parser, post_cart);
// userRoute.post('/order', parser, post_order);
// userRoute.post('/favourite', parser, post_favourite);

// userRoute.post('/listing', parser, post_listing);
