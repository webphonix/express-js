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

module.exports = mongoose('my',mySchema)