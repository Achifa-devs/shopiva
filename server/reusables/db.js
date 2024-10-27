const {Client,Pool} = require('pg');
// let  DATABASE_URL  = `postgresql://achifa.io.llc:cflV8XEbCO7h@ep-billowing-sunset-28191429-pooler.us-east-2.aws.neon.tech/shopiva?sslmode=require`;
let  DATABASE_URL  = `postgresql://postgres:asdfghjkl@localhost:5432/shopiva`;
require('dotenv').config();    


let neon_db = () => 
new Promise((resolve, reject) => {
    try{
        const pool = new Pool({
            connectionString: DATABASE_URL,
           
            createTimeoutMillis: 8000,
            connectionTimeoutMillis: 10000000,
            acquireTimeoutMillis: 8000,
            idleTimeoutMillis: 8000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 100
        });
        
        let conn = pool.connect(); 
        if(conn){
            resolve(pool);
        }else{
            reject(conn);
        }
    }
    catch(err){
        console.log('database error: ',err)
    }
    
})

module.exports = {
    neon_db
}
