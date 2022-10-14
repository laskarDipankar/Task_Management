print('Hello from python')


# const { PythonShell } = require('python-shell');
#  const fs = require('fs')

# // const readFileLines = filename =>
# //    fs.readFileSync(filename)
# //    .toString('UTF8')
# //    .split('\n');


# // var taskArr = readFileLines('tasks.txt');

# // console.log(taskArr[6])




# // const userCount = User.find({})

# //const cnt = userCount.forEach((item)=>{
# //   return item.name
# // }) 

# // const countProperties=(obj)=> {
# //   var userLenght = Object.keys(obj).length 
# //   console.log(userLenght)
# // }
# // countProperties(userCount)


# // console.log(userLenght)


# // console.log(countProperties)

#   // if(userCount.name.length>10){
#   //   console.log("you have registered enpough users")
#   // }

#   // const userCount = User.find({})

#   // if("name" in req.body && !)




#   // PythonShell.run('dbFill.py',null,function(err,result){
#   //   if(err){
#   //     console.log('server error')
#   //   }else(
#   //     console.log({
#   //       message:"move forward mate",
#   //       data:result
#   //     })
#   //   )
#   // })

#     // PythonShell.run('dbClean.py',null,function(err,result){
#     //   if(err){
#     //     console.log(err)
#     //   }else(
#     //     console.log({
#     //       message:"move forward mate",
#     //       data:result
#     //     })
#     //   )
#     // })


# //   const saveTodo = await Todos.save();
# //   const msg ={
# //     "message": "OK",
# //     "Data":saveTodo
# //   }

# //   res.status(200).send(msg);
# //   console.log(msg);
# // } catch (error) {
# //   res.send(error);
# // }
# // });

# // app.post("/api/tasks", async (req, res) => {

# //   // PythonShell.run('dbFill.py',null,function(err,result){
# //   //   if(err){
# //   //     console.log('server error')
# //   //   }else(
# //   //     console.log({
# //   //       message:"move forward mate",
# //   //       data:result
# //   //     })
# //   //   )
# //   // })
# //   // try {

# //     var taskArr = readFileLines('tasks.txt');
# //     const arrt = taskArr.slice(1,10).map((item)=>{return item})
# //     // console.log(arrt)

# //     if(req.body.taskName == null && 'name' in req.body == "" )
# //     {
# //       console.log("hello")

# //       // taskName =

# //       // var taskArr = readFileLines('tasks.txt');
# //       // const arrt = taskArr.map((item)=>{return item})
# //       // console.log(arrt)
# //     try{
# //     const ddata = req.body.taskName =  arrt.slice(1,2).map((item)=> {return item})
# //     // .exec((err,data)=>{
# //       // console.log(data)
# //       // if(ddata){
# //         // console.log(ddata)

# //         const arrsize = arrt.length

# //         // const Tasks = new Task(req.body);
# //         // Tasks.taskName = ddata

# //     // const SaveTasks = await Tasks.save();
# //     // res.status(200).send(SaveTasks);

# //         res.send(ddata)
# //       }catch{
# //         res.send("nahi ho raha")
# //       }
# //     // })

# //     // const Tasks = new Task(req.body);
# //     // const SaveTasks = await Tasks.save();
# //     // res.status(200).send(SaveTasks);
# //     }
# //   else{
# //     res.send("not working")
# //   }
# // }
# //   //  catch (error) {
# //   //   res.send(error);
# //   // }
# // );



# app.post("/todo/:user_id/:task_id", async (req, res) => {
#   try {
#     const task_id = req.params.task_id;
#     const user_id = req.params.user_id;

#     const Utasks = new UserTask({
#       task_id: task_id,
#       user_id: user_id,
#       Completed: req.body.Completed,
#     });
#     const saveUtasks = await Utasks.save();
#     res.status(200).send(saveUtasks);
#   } catch (error) {
#     res.send(error);
#   }
# });

# app.get("/user/:user_id", (req, res) => {
#   const user_id = req.params.user_id;
#   // const task_id = req.params.task_id

#   UserTask.find({ user_id: user_id })
#     .populate("task_id", "taskName")
#     .populate("user_id")
#     .exec((error, data) => {
#       if (error) {
#         res.send(error);
#       } else {
#         res.send(data);
#       }
#     });
# });

# app.get("/task/:task_id", (req, res) => {
#   // const user_id = req.params.user_id
#   const task_id = req.params.task_id;

#   UserTask.find({ task_id: task_id })
#     .populate("task_id")
#     .populate("user_id", "name")
#     .exec((error, data) => {
#       if (error) {
#         res.send(error);
#       } else {
#         res.send(data);
#       }
#     });
# });




