const express = require("express");

const User = require("./Models/User");
const Task = require("./Models/Task");
const UserTask = require("./Models/UserTask");
const bodyParser = require("body-parser");

require("./Database/Connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json())

const port = process.env.PORT || 9099;

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

app.post("/api/users", async (req, res) => {
  try {
    const Todos = new User(req.body);
    const saveTodo = await Todos.save();
    res.status(200).send(saveTodo);
    // res.status(200).send(saveTasks)

const msg ={
          "message": "OK",
          "Data":saveTodo
        }

    console.log(msg);
  } catch (error) {
    res.send(error);
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const Tasks = new Task(req.body);
    const SaveTasks = await Tasks.save();
    res.status(200).send(SaveTasks);
  } catch (error) {
    res.send(error);
  }
});


app.get("/api/users", (req, res) => {

  User.find((req.query))
  .populate('tasks')
  .exec((error, data) => {
    if (error) {
      res.send(error);
    } else {
      
      res.send(data);
    }
  });
  console.log(req.query)
});

app.get("/api/tasks", (req, res) => {
  Task.find((req.query))
  // .populate()
  .exec((error, data) => {
    if (error) {
        res.send(error);
    } else {
      res.send(data);
    }
});
console.log(req.query)
});

app.get("/api/user/:id",(req,res)=>{
  User.find({_id:req.params.id})
    .populate('tasks')
    .exec((error,result)=>{
    if(error){
      res.send(error)
    } else {
      res.send(result)
    }
  })
})

app.get("/api/task/:id",(req,res)=>{
  Task.find({_id:req.params.id})
    .populate('users',"name")
    .exec((error,result)=>{
    if(error){
      res.send(error)
    } else {
      res.send(result)
    }
  })
})

// app.get("/api/users?where ={_'id':}")




// app.get('/userr',(req,res)=>[
//     res.send("hello")
// ])

app.put("/api/user/:id",async (req,res)=>{

    // res.send('hello')
    
    try{
        const _id = req.params.id
        Data= await User.findByIdAndUpdate(_id,{$push:{'tasks':req.body.tasks,'PendingTasks':req.body.PendingTasks}},{new:true})   
        const msg ={
          "message": "OK",
          "Data":Data
        }
        console.log(msg)
      

        res.send(_id)
    }
    catch(error){
        console.log(error)
    }

  //   try{
  //     const _id = req.params.id
  //     await User.findByIdAndUpdate(_id,{$push:{'PendingTasks':req.body.PendingTasks}},{new:true})   
  //     console.log(_id)
  //     res.send(_id)
  // }
  // catch(error){
  //     console.log(error)
  // }




})

// app.get('/api/find/:id',(req,res)=>{

//   // var u_id =  User.find({})
//   Task.find({_id:req.params.id},((error,result)=>{
    
//     if(error){
//       res.send(error)
//     }
//     else{
//       res.send(result)
//     }
//   }))
// })

// Task.find({})






app.put("/api/task/:id",async (req,res)=>{
    // res.send('hello')
    
    try{
        // const SetTask = {$set:{Completed:req.body.Completed,assignedUserName:req.body.assignedUserName}}
        // const pushTask = {$push:{assignedUser:req.body.assignedUser}}
        const _id = req.params.id
        const Data = await Task.findOneAndUpdate({_id:_id,},{$set:{Completed:req.body.Completed,assignedUserName:req.body.assignedUserName},$push:{assignedUser:req.body.assignedUser}},{new:true})
        console.log(Data)
        res.send(_id)
    }
    catch(error){
        console.log(error)
    }
})

app.delete('/api/user/:id',async (req,res)=>{
    try{
        await User.findOneAndDelete({_id:req.params.id})
        res.send(req.params.id)
    }catch(error){
        console.log(error)
    }
})

app.delete('/api/task/:id',async (req,res)=>{
    try{
        await Task.findOneAndDelete({_id:req.params.id})
        res.send(req.params.id)
    }catch(error){
        console.log(error)
    }
})






















app.post("/todo/:user_id/:task_id", async (req, res) => {
  try {
    const task_id = req.params.task_id;
    const user_id = req.params.user_id;

    const Utasks = new UserTask({
      task_id: task_id,
      user_id: user_id,
      Completed: req.body.Completed,
    });
    const saveUtasks = await Utasks.save();
    res.status(200).send(saveUtasks);
  } catch (error) {
    res.send(error);
  }
});



app.get("/user/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  // const task_id = req.params.task_id

  UserTask.find({ user_id: user_id })
    .populate("task_id", "taskName")
    .populate("user_id")
    .exec((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
});

app.get("/task/:task_id", (req, res) => {
  // const user_id = req.params.user_id
  const task_id = req.params.task_id;

  UserTask.find({ task_id: task_id })
    .populate("task_id")
    .populate("user_id", "name")
    .exec((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
});
