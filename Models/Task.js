
const mongoose  = require('mongoose')
const {Schema,model} = mongoose
const TaskSchema = new Schema(
    {
        
    name:{
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
        type:String,
        default:"unassigned"
        
    },
    assignedUserName:{
        type:String,
        default:""
    
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






