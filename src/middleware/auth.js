const jwt = require('jsonwebtoken');

let auth = async function(req,res,next)
{
    try{
    let header = req.headers
    let token = header['token'];
    if(!token) return  res.status(400).send({status :false , msg:"token value must be given"})
    
    let valid = await jwt.verify(token , 'kriscent')
    next()
    }
    catch(e){
        res.status(500).send({status:false , msg:e.message})
    }
}

module.exports.auth =auth