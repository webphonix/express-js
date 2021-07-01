const express = require ('express')  
const router = express. Router() 
const registrationSchema = require('../model/signup')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')


  
    
   router.post('/signup', async(req, res) => {
      const salt = await bcrypt.genSalt(10)

      const hashPassword = await bcrypt.hash(req.body.password,salt) 
    
      const details = new registrationSchema({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword 
      })
     details.save()
     .then(resp=>{
       res.send(resp)
     })
     .catch(err=>{
       res.send(err)
     })
    })

    router.post('/login', async(req,res)=>{
        const user = await registrationSchema.findOne({email:req.body.email}) //check email
       if(!user) return res.send('invalid email.....')  
    
     const passVerification = await bcrypt.compare(req.body.password,user.password)  //check password
      if(!passVerification) return res.send('invalid password')
     const token = jwt.sign({_id:user.id,name:user.name},'UserToken')
      user.password = undefined; 
     res.json({
              body:{
              user:user,
              token:token
               }
          })
         
        
     })

    module.exports = router 
