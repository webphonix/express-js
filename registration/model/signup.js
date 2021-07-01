const mongoose = require('mongoose')
//creating schema
const registrationSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:String,
    password:String,

    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('User',registrationSchema)

