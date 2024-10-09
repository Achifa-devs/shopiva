const { neon_db } = require("./db")

async function GET_ENTREPRENEUR_WITH_ID(id) {
    return(
      await neon_db().then((pool) => {
        return(
          pool.query(`SELECT * FROM entrepreneurs WHERE entrepreneur_id = '${id}'`)
          .then((result) => {
            return ({data: result.rows[0], err: ''})
          })
          .catch(err => {
              return({data: '', err: err})
          })
        )
      })
    )
}

module.exports={
    GET_ENTREPRENEUR_WITH_ID
}