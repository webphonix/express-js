const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) =>{
    const token = req.headers['access-token'];
    if(!token) return res.send('access denied');

try{
    const verify =jwt.verify(token,{_id:123456},'ekta')
    req.user= verify;
    next()
}
catch(err){
    res.status(401).send('invalid access')
}
}
module.exports=verifyToken