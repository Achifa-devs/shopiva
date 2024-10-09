const { neon_db } = require("./db");
const { errHandler } = require("./errHandler");

function IS_EXISTING(table,column,column_value) {
    neon_db().then((pool) => 
        pool.query(`
            SELECT COUNT (*) AS COUNT
            FROM ${table} 
            WHERE ${column} = '${column_value}'
        `)
        .then((result) => parseInt(result.rows[0].count, 10) > 0 ? true : false)
    ).catch(err => errHandler(err))
}

async function DELETE_ROW_AFTER_ERR(table,column,colum_name) {
    neon_db()
    .then((pool) => {
        pool.query(`
            DELETE FROM ${table}
            WHERE ${colum_name} = '${column}';
        `)
        .then((result) => {
            console.log(result)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}



module.exports={
    IS_EXISTING, 
    DELETE_ROW_AFTER_ERR
}