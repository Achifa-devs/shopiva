const { neon_db } = require("../../reusables/db");





async function entrepreneur_profile(req, res) {
    let {entrepreneur_id} = req.query;
 
    try {
        neon_db().then(async(pool) => 
                    
            pool.query(`select * from "entrepreneurs" where "entrepreneur_id" = '${entrepreneur_id}'`)
            .then((result) => {
                if(result.rows.length > 0){
                    const data = result.rows[0];
                    res.status(200).send({bool: true, data: data});
                }else{
                    res.status(400).send({bool: false, data: ''});
                }
            })
            .catch(err => {
                res.status(400).send({bool: false, data: ''});
                console.log(err)
            })
            
        );
    } catch (error) {
        console.log(error)
        res.status(400).send({bool: false, data: ''});
        // errHandler(error)
    }
    
}


module.exports={
    entrepreneur_profile
}