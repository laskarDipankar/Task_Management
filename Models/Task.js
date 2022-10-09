
const mongoose  = require('mongoose')
const {Schema,model} = mongoose

const TaskSchema = new Schema({
    taskName:{
        type:String,
        required:true,
        unique:true
    },
    users:[{type:Schema.Types.ObjectId,ref:'User'}]

})

const Task = new model('Task',TaskSchema)
module.exports = Task






