const express = require('express')
const router = express.Router()
const registrationSchema = require('../model/signup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  
  const hashPassword = await bcrypt.hash(req.body.password, salt)

  const details = new registrationSchema({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
      })
  details.save()
    .then(resp => {
      res.send(resp)
      
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/login', async (req, res) => {
  const user = await registrationSchema.findOne({ name: req.body.name }) //check name
  if (!user) return res.send('invalid user name.....')

  const passVerification = await bcrypt.compare(req.body.password, user.password)  //check password
  if (!passVerification) return res.send('invalid password')
  const token = jwt.sign({ _id: user.id, name: user.name }, process.env.secret)
  user.password = undefined;
  res.json({
    body: {
      user: user,
      token: token
    }
  })


})

//verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['access-token'];
  if (!token) return res.send('access denied');

  try {
    const verify = jwt.verify(token, process.env.secret)
    req.user = verify;
    next()
  }
  catch (err) {
    res.status(401).send('invalid access')
  }
}
router.get('/all', verifyToken, async (req, res) => {
  const details = await registrationSchema.find()

  try {
    res.send(details)
  }
  catch (err) {
    res.send(err)
  }
});

// router.post('/logout', async(req,res, next)=>{
//   // res.cookie('access-token', '' , {maxAge: 1})
//   jwt.destroy(req.headers['access-token'])
//  // user.name=""
  
//   req.headers['access-token']=null
//   res.redirect('/e')
   
//   })
  // router.get('/logout', (req,res, next)=>{
  // req.logout()
  // req.session.destroy()
  //        res.redirect('/e')

  //    })

    
module.exports = router
