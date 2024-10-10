function confirm_payment(req,res) {
    let payload = req.body;
    let response = payload.data;

    let {firstname,lastname,phone,email,entrepreneur_id,amount} = response.metadata;

    

    neon_db().then((pool) => {
        pool.query(`
            INSERT INTO subscription_transactions (
                transaction_id,
                entrepreneur_id,
                subscription_id,
                transaction_date,
                amount,
                status
            )
            VALUES(
                DEFAULT,
                '${entrepreneur_id}',
                '009b45',
                '${new Date()}',
                '${amount}',
                'active'
            )
        `)
        .then((result) => {
            result.rowCount === 1 ? res.status(200).send({bool: true, err: ''}) : ({bool: false, err: ''})
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({bool: false, err: ''})
        })
    
    }).catch(err => errHandler(err))

}

module.exports={
    confirm_payment
}