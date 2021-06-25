const mongoose = require('mongoose')
//creating schema
const mySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:String,
    password:Number,
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('my',mySchema)

// const Employee = new mongoose.Model("Employee",mySchema)

// const newEmployee = new Employee({
//     name:"ekta",
//     email:"ekta@gmail.com",
//     password:"12345",
  
// })
// newEmployee.save()