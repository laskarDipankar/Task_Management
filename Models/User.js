
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
    
    tasks:[{type:Schema.Types.ObjectId,
            ref:'Task'}


            // {
            //     task_id:{

            //     type:Schema.Types.ObjectId,
            //     ref:'Task'},
                
            //     Completed:{
            //         type:Boolean
            //     }


            // } 
        ]


})
        
        
            
    

const Users = new model('User',UserSchema)
module.exports = Users