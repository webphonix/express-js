const express = require ('express') //importing the express 
const router = express. Router() //importing routrer function
router.get('/details', (req, res) => {
    res.json({
      body:{
        name:"ekta",
        address:"hazaribag",
        id: 5
      }
    })
  })
    router.post('/details', (req, res) => {
      res.json(req.body)
    })
    module.exports = router //exporting routes to use
  