const { register_user, signin_user, post_shop, post_cart, post_order, post_favourite, post_listing } = require("../controllers/post");
const { 
    express, 
    parser
 } = require("../reusables/modules");
let userRoute = express.Router();  

userRoute.post('/registration', parser, register_user);
userRoute.post('/login', parser, signin_user);
userRoute.post('/shop', parser, post_shop);

userRoute.post('/cart', parser, post_cart);
userRoute.post('/order', parser, post_order);
userRoute.post('/favourite', parser, post_favourite);

userRoute.post('/listing', parser, post_listing);
