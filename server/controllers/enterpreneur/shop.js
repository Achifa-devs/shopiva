const { uuid } = require("uuidv4");
const { neon_db } = require("../../reusables/db");
const { errHandler } = require("../../reusables/errHandler");

function create_shop(req,res) {
    let shop_id = uuid()
    neon_db().then((pool) => {
        pool.query(`
            INSERT INTO shops (
                id,
                shop_id,
                shop_name,
                shop_description,
                shop_logo_url,
                shop_category,
                shop_open_hours,
                shop_social_links,
                is_verified,
                created_at,
                updated_at
            )
            VALUES(
                DEFAULT,
                '${shop_id}',
                '${shop_name}',
                '${shop_description}',
                '${shop_logo_url}',
                '${shop_category}',
                '${shop_open_hours}',
                '${shop_social_links}',
                '${false}',
                '${new Date()}',
                '${new Date()}'
            )
        `)
    }).catch(err => errHandler(err))
}

function update_shop(req,res) {
    let {
        shop_id,
        shop_name,
        shop_description,
        shop_logo_url,
        shop_category,
        shop_open_hours,
        shop_social_links,
        is_verified
    }=req.body;
    neon_db().then((pool) => {
        pool.query(
            `UPDATE "shops" 
            set  
            shop_id = '${shop_id}',
            shop_name = '${shop_name}',
            shop_description = '${shop_description}',
            shop_logo_url = '${shop_logo_url}',
            shop_category = '${shop_category}',
            shop_open_hours = '${shop_open_hours}',
            shop_social_links = '${shop_social_links}',
            is_verified = '${is_verified}',
            updated_at = '${new Date()}'
            WHERE "entrepreneur_id" = '${entrepreneur_id}'`
        )
        .then(result => result.rowCount)
        .catch(err => console.log(err))
    })
}

function get_shop(req,res) {
    neon_db().then((pool) => {
        pool.query(
            `SELECT * FROM  "entrepreneurs" WHERE "entrepreneur_id" = '${entrepreneur_id}'`
        )
        .then(result => result.rows[0])
        .catch(err => console.log(err))
    })
}

function delete_shop(req,res) {
    let {
        shop_id
    }=req.body;
    neon_db().then((pool) => {
        pool.query(
            `DELETE FROM shops 
            WHERE "entrepreneur_id" = '${entrepreneur_id}'`
        )
        .then(result => result.rowCount)
        .catch(err => console.log(err))
    })
}

