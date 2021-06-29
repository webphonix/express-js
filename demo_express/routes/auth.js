const express = require ('express') //importing the express 
const router = express. Router() //importing routrer
const myModel = require('../modles/empDetails')
//const bcrypt = require('bcrypt')
//const jwt = require('jsonwebtoken')

    router.post('/login', async(req,res)=>{
       const user = await myModel.findOne({email:req.body.email})
       //res.send(user)
      if(!user) return res.send('invalid email.....')
       
    //    const passVerification = await bcrypt.compare(req.body.password,user.password)
    //    if(!passVerification) return res.send('invalid password')

    //    const token = jwt.sign({_id:user.id},'ekta')
    //    res.json({
    //        body:{
    //            user:user,
    //            token:token
    //        }
    //    })
        
       
    })
    

module.exports = router