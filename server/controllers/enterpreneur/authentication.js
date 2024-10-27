
const { neon_db } = require("../../reusables/db");
const { IS_EXISTING } = require("../../reusables/db_functions");
const { errHandler } = require("../../reusables/errHandler");
const { bcrypt, jwt } = require("../../reusables/modules");
const { uuid } = require('uuidv4');
const maxAge = 90 * 24 * 60 * 60; 

const createToken = (id) => {
    return jwt.sign({ id }, 'entrepreneur_secret', {
       expiresIn: maxAge
    });
};


async function register_entrepreneur(req,res) {

    let {
        fname,
        lname,
        email,
        pwd,
        phone_number,
        gender,
        referral_src,
        provider
    } = req.body;

  
    // console.log(fname, lname, email, pwd, phone_number)

    let hPwd = provider === 'google' ? '' : await bcrypt.hash(pwd, 10);
    let entrepreneur_id = uuid();


    try {
        new Promise(async(resolve, reject) => {
            let email_check = await IS_EXISTING('entrepreneurs', 'email', email)
            console.log('email_check: ', email_check)
            if(!email_check){
                resolve({bool: true})
            }else{
                reject({bool: false, mssg: 'email exists'})
            }
        })
        .then(async(result) => {
            if (provider === 'local') {
                if (result) {
                    let phone_check = await IS_EXISTING('entrepreneurs', 'phone_number', phone_number);
                    console.log('phone_check: ', phone_check)
    
                    if(!phone_check){
                        return ({bool: true})
                    }else{
                        return ({bool: false, mssg: 'phone_number exists'})
                    }
                }else{
                    return ({bool: false, mssg: 'database error'})
                }
            }else{
                return ({bool: true})
            }
        })
        .then((result) => {
            if(result){
                let response = create_new_entrepreneurs()
                if(response){
                    return ({bool: true})
                }else{
                    return ({bool: false, mssg: 'error creating new entrepreneur'})
                }
            }else{
                return ({bool: false, mssg: 'database error'})
            }
        })
        .then((result) => {
            if(result){
                return ({bool: true})
            }else{
                return ({bool: false, mssg: 'database error'})
            }
        })
        .catch(err => {
            // throw err
            res.status(501).send(err)
        })
    } catch (error) {
        res.status(501).send(error)
        // errHandler(error)
    }



    function create_new_entrepreneurs() {
        return(
            neon_db().then((pool) => {
                pool.query(`
                    INSERT INTO entrepreneurs (
                        id,
                        entrepreneur_id,
                        provider,
                        fname,
                        lname,
                        email,
                        password,
                        phone_number,
                        gender,
                        is_active,
                        last_seen,
                        is_email_verified,
                        is_phone_verified,
                        is_acct_verified,
                        created_at,
                        updated_at,
                        referral_src,
                        language,
                        timezone
                    )
                    VALUES(
                        DEFAULT,
                        '${entrepreneur_id}',
                        '${provider}',
                        '${fname}',
                        '${lname}',
                        '${email}',
                        '${hPwd}',
                        '${phone_number}',
                        '${null}',
                        '${false}',
                        '${new Date()}',
                        '${false}',
                        '${false}',
                        '${false}',
                        '${new Date()}',
                        '${new Date()}',
                        '${referral_src}',
                        'en',
                        '+01:00 Africa/Lagos'
                    )
                `)
                .then((result) => {
                    const token = createToken(entrepreneur_id);
                    result.rowCount === 1 ? res.status(200).send({bool: true, cookie: token, id: entrepreneur_id}) : ({bool: false, data: ''})
                })
                .catch(err => {
                    console.log(err)
                    res.status(400).send({bool: false, err: ''})
                })
            
            }).catch(err => errHandler(err))
        )
    }
}



async function signin_entrepreneur(req, res) {
    let {email,pwd,provider} = req.body;
 
    try {
        new Promise((resolve, reject) => {
            neon_db().then(async(pool) => 
                    
                pool.query(`select "id" from "entrepreneurs" where "email" = '${email}'`)
                .then((result) => {
                    if(result.rows.length > 0){
                        const id = result.rows[0].id;
                        resolve(id)
                    }else{
                        reject({bool: false, mssg: "Email is not registered..."});
                    }
                })
                .catch(err => {
                    throw err
                })
                
            );
        })
        .then(async(id) => {
            return(
                neon_db().then(async(pool) => {
                    let database_return_value = await pool.query(
                        `SELECT "entrepreneur_id","email","password","fname","lname" FROM  "entrepreneurs" WHERE "id" = '${id}'`
                    )
                    .then(result => result.rows[0])
                    .catch(err => console.log(err))
    
                    return database_return_value
                })
                
            )
            
        })
        .then(async(user) => { 
            if(user){
                if (provider !== 'google') {
                    const auth = await bcrypt.compare(pwd, user.password);
    
                    if (auth) {
                        const token = createToken(user.entrepreneur_id);
                        res.status(200).send({bool: true, id: user.entrepreneur_id, cookie: token});
            
                    }else{
                        res.status(400).send({
                            bool: false,
                            mssg: "Invalid password"
                        })
                    }
                }else{
                    const token = createToken(user.entrepreneur_id);
                    res.status(200).send({bool: true, id: user.entrepreneur_id, cookie: token});
                }
            }else{
                res.status(400).send({
                    bool: false,
                    mssg: "Email is not registered"
                })
            }
        })
        .catch(err => {
            // console.log(err)
            res.status(400).send({
                bool: false,
                mssg: "Email is not registered"
            })
            throw err
    
        })
    } catch (error) {
        errHandler(error)
    }
    
}


module.exports={
    signin_entrepreneur,
    register_entrepreneur
}