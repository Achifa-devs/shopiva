
const { neon_db } = require("../../reusables/db");
const { IS_EXISTING } = require("../../reusables/db_functions");
const { errHandler } = require("../../reusables/errHandler");



async function entrepreneur_subscription_transactions(req, res) {
    let {entrepreneur_id} = req.query;
 
    try {
        neon_db().then(async(pool) => 
                    
            pool.query(`select * from "subscription_transactions" where "entrepreneur_id" = '${entrepreneur_id}'`)
            .then((result) => {
               
                if(result.rows.length > 0){
                    res.status(200).send({bool: true, err: ''})
                }else{
                    res.status(400).send({bool: false, err: ''})
                }
            })
            .catch(err => {
                res.status(400).send({bool: false, err: err.message})
            })
            
        );
    } catch (error) {
        // errHandler(error)
        res.status(400).send({bool: false, err: err.message})

    }
    
}


module.exports={
    entrepreneur_subscription_transactions
}