
const mongoose  = require('mongoose')

const { Schema,model } = mongoose



const UserSchema = new Schema({
    name:{
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pendingTasks:[
        {type:Schema.Types.ObjectId,
        ref:'Task'}
    ],
    
    // tasks:[{type:Schema.Types.ObjectId,
    //         ref:'Task'
    //     }
    // ],
    dateCreated:{
        type:Date,
        default: Date.now()
    }
})
        
        
            
    

const Users = new model('User',UserSchema)
module.exports = Users