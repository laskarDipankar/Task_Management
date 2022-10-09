const mongoose = require('mongoose')
const Task = require('./Task')
const Users = require('./User')

const {Schema, model} = mongoose


const UserTaskSchema = new Schema({
    task_id:{
        type:Schema.Types.ObjectId,
        ref:"Task"
    },

    user_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    Completed:{
        type:Boolean,

    }
})

const UserTask = model("UserTask",UserTaskSchema)
module.exports = UserTask