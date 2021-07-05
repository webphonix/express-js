 require('dotenv').config();
const express = require('express')
const app = express() 
const port = 80
const mongoose =require('mongoose') 
app.use(express.json()) 
app.get('/e', (req, res) => {
 res.send('Hello,Welcome.....!')
 });
 const registrationRoute = require ('./route/registration') 
  app.use('/' ,registrationRoute) 
  
  
//to connect mongoose
mongoose.connect(process.env.db,{useNewUrlParser:true,useUnifiedTopology:true} ,(err) => {
 if(err) return console.log(err.message) //to throw error message
console.log('database connected')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})