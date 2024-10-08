// const { uuid } = require('systeminformation');
const { uuid } = require('uuidv4');
const { 
    express,
    path,
    fs,
    parser,
    mocha,
    morgan,
    cors,
    shortId,
    jwt,
    io
} = require('./reusables/modules');

const cookieParser = require('cookie-parser');
const { entrepreneurRoute } = require('./routes/post');
require('dotenv').config();    
const app = express();  


app.use(cookieParser());
app.use(morgan('dev'));   
app.use(cors({
    origin: '*',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE', 'UPDATE'],
    credentials: true,
    optionsSuccessStatus: 200 
})); 
app.use(entrepreneurRoute)



var server = app.listen(process.env.PORT,_ => console.log('app is live @',process.env.PORT));
io(server, {cors: {origin: '*'}}).on('connection',(socket) => {

});
  