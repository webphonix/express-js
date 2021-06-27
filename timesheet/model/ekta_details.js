const mongoose = require('mongoose')
//creating schema
const ektaSchema = mongoose.Schema({
       login_time:String,
       logout_time:String,
       task_completed:String,
        time_spent:String,
        remarks:String,
        date:{
            type:Date,
            default:Date.now
            }
})

module.exports = mongoose.model('Ekta_Timesheet',ektaSchema)
