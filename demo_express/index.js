const express = require('express')
const app = express() 
const port = 5000
const mongoose =require('mongoose') //to import moongoose
//const env = require('dotenv')
 app.use(express.json())  //to allow express to read json file

  const empRoutes  = require ('./routes/details') // importing details.js file here
  // const verifyRoutes= require('./routes/verify')
  app.use('/' ,empRoutes) 
  //  app.use('/',verifyRoutes)
//app.use('/emp' ,empRoutes)  method to call sub route. this will call localhost:5500/emp/details

 
app.get('/', (req, res) => {
  res.send('Hello,Welcome.....!')
});

app.get('/ekta', (req, res) => {
  res.send('Hello,Ekta....!')
});
app.post('/', (req, res) => {
  res.send('Please ,visit again.')
});

//to connect mongoose
mongoose.connect('mongodb+srv://ekta:ekta@cluster0.y6gha.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true} ,(err) => {
 if(err) return console.log(err.message) //to throw error message
console.log('database connected')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})