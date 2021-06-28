const express = require ('express') //importing the express 
// const empDetails = require('../../modles/empDetails')
const router = express. Router() //importing routrer function
const myModel = require('../modles/empDetails')
const jwt= require('jsonwebtoken')
router.get('/details', (req, res) => {
    res.json({
      body:{
        name:"ekta",
        address:"hazaribag",
        id: 5
      }
    })
  })

  router.get('/token',(req,res)=>{
const token=jwt.sign({_id:123456},'ekta')
    res.send(token)
  })
    // router.post('/details', (req, res) => {
    //   res.json(req.body)
    // })
    module.exports = router //exporting routes to use
  
    router.post('/details', async(req, res) => {
      const details = new myModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
      })
     // res.send(details) to send response. it will retrive data from body.
    // details.save();//to only send and save data in db when we send it from body but we will not able to see the response
     details.save()
     .then(resp=>{
       res.send(resp)
     })
     .catch(err=>{
       res.send(err)
     })
    })
//fetching all data
    router.get('/all', async(req,res) => {
      const details = await myModel.find()

      try{
        res.send (details)
      }
      catch(err)
      {
      res.send(err)
      }
    });