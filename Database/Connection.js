const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/MTodoDB")
mongoose.connect("mongodb+srv://Dipankar45:Dipankar45%40@firstdatabase.8yv0tam.mongodb.net/TaskTodoDb")

.then(()=>{
    console.log('db is connected')
}) .catch((error)=>{
console.log("no connection")
})