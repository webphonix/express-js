const express = require ('express') //importing the express 
const router = express. Router()

const Saima_Timesheet = require('../model/saima_details')

module.exports=router  

router.post('/saima', async(req, res) => {
    const details = new Saima_Timesheet({
      login_time:req.body.login_time,
      logout_time:req.body.logout_time,
      task_completed:req.body.task_completed,
      time_spent:req.body.time_spent,
      remarks:req.body.remarks
    })
   details.save()
   .then(resp=>{
     res.send(resp)
   })
   .catch(err=>{
     res.send(err)
   })
  })

 //fetching all data
 router.get('/saima', async(req,res) => {
    const details = await Saima_Timesheet.find()

    try{
      res.send (details)
    }
    catch(err)
    {
    res.send(err)
    }
  });

  //delete
  router.delete('/:id',(req,res) => {
      Saima_Timesheet.remove({_id:req.params.id}).then(result=>{
          res.status(200).json({
              message:"data deleted",
              result:result
          })
      })
      .catch(err=>{
          res.status(500).json({
              error:err
          })
      })
  })
//put request
router.put('/:id',(req,res)=>{
    console.log(req.params.id)
    Saima_Timesheet.findOneAndUpdate({_id:req.params.id},{
        $set:{
            login_time:req.body.login_time,
            logout_time:req.body.logout_time,
            task_completed:req.body.task_completed,
            time_spent:req.body.time_spent,
            remarks:req.body.remarks
        }
    }).then(result=>{
        res.status(200).json({
            updated:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
