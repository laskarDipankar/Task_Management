const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/TodoDB")
// mongoose.connect("mongodb+srv://Dipankar45:Dipankar45%40@firstdatabase.8yv0tam.mongodb.net/TodoDb")

.then(()=>{
    console.log('db is connected')
}) .catch((error)=>{
console.log("no connection")
})