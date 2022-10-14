
const mongoose  = require('mongoose')
const {Schema,model} = mongoose

const TaskSchema = new Schema({
    taskNames:{
        type:String,
        // required:true,
        // unique:true
    },
    description:{
            type:String,
            // default:{}
        },
    deadline:{
        type:Date,
        // default:{}
    },
    assignedUser:{
        type:String
        
    },
    assignedUserName:{
        type:String,
        // default:"unassigned"
    },
    completed:{
        type:Boolean,
        default:true
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    }

})

const Task = new model('Task',TaskSchema)
module.exports = Task






