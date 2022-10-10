
const mongoose  = require('mongoose')
const {Schema,model} = mongoose

const TaskSchema = new Schema({
    taskName:{
        type:String,
        required:true,
        unique:true
    },
    Description:{
            type:String,
            default:{}
        },
    Deadline:{
        type:Date,
        default:{}
    },
    assignedUser:[{
        type:Schema.Types.ObjectId
    }],
    assignedUserName:{
        type:String,
        default:""
    },
    Completed:{
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






