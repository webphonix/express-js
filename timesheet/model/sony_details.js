const mongoose = require('mongoose')
//creating schema
const sonySchema = mongoose.Schema({
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

module.exports = mongoose.model('Sony_Timesheet',sonySchema)
