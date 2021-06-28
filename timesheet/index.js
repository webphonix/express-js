const express = require('express')
const app = express() 
const port = 3000
const mongoose =require('mongoose') //to import moongoose
 app.use(express.json())  //to allow express to read json file

  const ektaRoutes  = require ('./routes/ekta_details') // importing details.js file here
  app.use('/' ,ektaRoutes) 


 
//to connect mongoose
mongoose.connect('mongodb+srv://ekta:ekta@cluster0.y6gha.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true} ,(err) => {
 if(err) return console.log(err.message) //to throw error message
console.log('database connected')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})