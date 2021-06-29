const mongoose = require('mongoose')
//creating schema
const praneetSchema = mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
        },
    login_time:String,
       logout_time:String,
       task_completed:String,
        time_spent:String,
        remarks:String,
        
})

module.exports = mongoose.model('Praneet_Timesheet',praneetSchema)