const jwt = require('jsonwebtoken');
const {Pool, Client} = require("pg");
const { GET_ENTREPRENEUR_WITH_ID } = require('../reusables/entrepreneur_shorts');


const entrepreneur_auth = async(req, res, next) => {

  const entrepreneur_secret = req.headers.authorization;
  console.log('entrepreneur_secret: ', entrepreneur_secret)
  if(entrepreneur_secret){
   

    try {

      const { id } = jwt.verify(entrepreneur_secret, 'entrepreneur_secret');
      // Proceed with the decoded token data
      console.log('Decoded ID:', id);
      res.status(200).send({bool: true, id:id})

    } catch (error) {

      res.status(501).send({bool: false, id:''})

      if (error.name === 'JsonWebTokenError') {
        // Handle the case where the JWT is malformed or invalid
        console.error('JWT is malformed or invalid:', error.message);
        // You can respond with an appropriate error message or status code here
      } else {
        // Handle other potential errors
        console.error('An error occurred during JWT verification:', error.message);
      }

    }
    
  }else{
    res.status(501).send({bool: false, id:''})
  }
    
}


const check_entrepreneur = async(req, res, next) => {
  const entrepreneur_secret = req.headers.authorization;
  console.log('entrepreneur_secret: ', entrepreneur_secret)

  if(entrepreneur_secret){
    try {
      // console.log('entrepreneur_secret: ', entrepreneur_secret)
      let entrepreneur_data = await GET_ENTREPRENEUR_WITH_ID(entrepreneur_secret);
      res.status(200).send({bool: true, data: entrepreneur_data})

    } catch (error) {
      res.status(501).send({bool: false, data:''})

      if (error.name === 'JsonWebTokenError') {
        // Handle the case where the JWT is malformed or invalid
        console.error('JWT is malformed or invalid:', error.message);
        // You can respond with an appropriate error message or status code here

      } else {
        // Handle other potential errors
        console.error('An error occurred during JWT verification:', error.message);
      }
    }
  }else{
    res.status(501).send({bool: false, data:''})

  }
  
  
 
  
}






module.exports = { 
  entrepreneur_auth, 
  check_entrepreneur 
};
