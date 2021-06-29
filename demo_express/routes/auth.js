const express = require ('express') //importing the express 
const router = express. Router() //importing routrer
const myModel = require('../modles/empDetails')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

    router.post('/login', async(req,res)=>{
       const user = await myModel.findOne({email:req.body.email}) //check email
       //res.send(user)
      if(!user) return res.send('invalid email.....')  
     // else{ 
     // res.send(user) 
     // }
    const passVerification = await bcrypt.compare(req.body.password,user.password)  //check password
     if(!passVerification) return res.send('invalid password')
            //res.send(passVerification)
    const token = jwt.sign({_id:user.id},'ekta')
     user.password = undefined; // if dont want to display password
    res.json({
             body:{
             user:user,
             token:token
              }
         })
        
       
    })
    

module.exports = router