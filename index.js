const express = require("express");

const User = require("./Models/User");
const Task = require("./Models/Task");
// const UserTask = require("./Models/UserTask");
// const { PythonShell } = require("python-shell");
const bodyParser = require("body-parser");
const path = require('path')
const app = express();
require("./Database/Connection");
app.use(express.json());
const cors = require('cors');

app.use(cors())

// PythonShell.run("dbFill.py", {}, function (err, result) {
//   if (err) {
//     console.log("server error");
//   } else
//     console.log({
//       message: "move forward mate",
//       data: result,
//     });
// });

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 9999;

app.use(express.static('Public'));


app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'Public/index.html'))
})



app.post("/api/users", async (req, res) => {
  const userCount = User.find({});
  if (req.body.name != "" && req.body.email != "") {
    const UserEmail = await User.find({ email: req.body.email });

    // console.log(UserEmail.length);

    if (UserEmail.length == 0) {
      // try{
      Todos = new User(req.body);
      saveTodo = await Todos.save();

      res.send({
        message: "user is registered",
        Data: saveTodo,
      });
    } else {
      res.send({
        message: "A user is already regstered with this email",
        data:[]
        // count:
        // Data:userCount
      });
    }
  } else {
    res.send({
      message: "Oouchh !!You have left mandatory fields blank",
      data:[]
    });
  }
});


app.post("/api/tasks", async (req, res) => {
  if(req.body.name != "" && !req.body.deadline != null){

    // console.log("not working")
    const Tasks = new Task(req.body);
    const SaveTasks = await Tasks.save();

    if(SaveTasks == null){

      res.status(404).send({
        message:"No Task Data Recieved",
        data:[]
      });

      
    }else{
      res.status(201).send({
        message:"task Created",
        data:SaveTasks});
    // console.log(error)
  }}
  else{
    console.log("hello")
    res.status(404).send({
      message:"You have either left deadline or taskname fields empty"
    })
  
  }
});

app.get("/api/users", async(req, res) => {
  await User.find(eval("(" + req.query.where + ")"))
    .select(eval("(" + req.query.select + ")"))
    .skip(eval("("+req.query.skip+")"))
    .limit(eval("("+req.query.limit+")"))
    .sort(eval("(" + req.query.sort + " )"))
    .exec((error, data) => {
      if (error) {
        res.status(400).send({
          message:'given data does match any fields in database'
        });
      } else {
        if(req.query.count){
          res.status(200).send({
            message:"total users",
            data:data.length
          })
        }else{
                  res.status(200).send({
                    message:'user details retrieved',
                    Data:data});
        }
      }
    });
  // console.log(req.query);
});

app.get("/api/tasks", async (req, res) => {
  await Task.find(eval("(" + req.query.where + ")"))
    .sort(eval("(" + req.query.sort + " )"))
    .skip(eval("("+req.query.skip+")"))
    .limit(eval("("+req.query.limit+")"))
    .exec((error, data) => {
      if (error) {
        res.send(error);
      } else {
        if(req.query.count){
          res.status(200).send({
            message:"total tasks",
            data:data.length
          })
        }else{
          
          res.send(
            {
              message:"ok",
              data:data
            }
            );
          }
          }
    });
  console.log(req.query);
});

app.get("/api/users/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .exec((error, result) => {
      if (error) {
        res.status(400).send({
          message:"Wrong user Details",
          Data:[]

        });
      } else {
        res.status(200).send({
          message:'Retirved tasks details',
          data:result
        });
      }
    });
});

app.get("/api/tasks/:id", async (req, res) => {
  const results = await Task.findById({ _id: req.params.id })
    
      if (results == null) {
        res.status(404).send({
          message:"task not found"
        });
      } else {
        res.status(200).send(
          {
          message:"Retrived tasks details",
          results
          });
      }
    // });
});

app.put("/api/users/:id", async (req, res) => {

  
  
  // if(req.body.name == null || req.body.email == null){
  //   res.send({
  //     message:'you have left fields blank'
  //   })
  // }
  // else{
  
    const _id = req.params.id;
    const Data = await User.findById(_id);
    if (Data == null) {
      res.status(400).send({
        message: "Oppsie!! you are not a registered user",
      });
    } else {
      const updateName = req.body.name;
      const updateEmail = req.body.email;
      // console.log("ja to raha hai")

      
      
      if (updateEmail != null && !updateName != null) {

        // console.log("kya ho raha hai")

        const verifyEMail = await User.findById(_id) 
        if(verifyEMail.email==req.body.email){
          res.send({
            message:'A user is registered with this email already'
          })
        }else{

        const userData = await User.findByIdAndUpdate(
          _id,
          { $set: { name: updateName, email: updateEmail } },
          { new: true }
        );
        res.status(201).send({
          message: "You have successfully Updated",
          Data: userData,
        });
      }} else {
        // try {
          const taskd = req.body.taskd;
          // console.log(taskd)
          const taskResult = await Task.findById(taskd)
          console.log(taskResult);

          if (taskResult == null) {
            res.send({
              message: "Task does not exist",
            });
          } else {
            const isComplete = taskResult.completed;
            if (isComplete == true) {
              const CompletionOftask = await Task.findByIdAndUpdate(
                taskd,
                { $set: { completed: false } },
                { new: true }
              );
              UpdateUser = await User.findByIdAndUpdate(
                _id,
                { $push: { pendingTasks: taskd } },
                { new: true }
              );
              // User.findByIdAndUpdate(_id, {
              // $push: { Pendingtasks: taskResult._id },
              // });

              console.log(`${_id} user id`)
              console.log("hello")

            const UserData = await User.findById({_id:_id});
            console.log(UserData)
            const userName = UserData.name;
            console.log(`${userName} is it working`)
            const assignedUser = _id;
            const updatedTask = await Task.findByIdAndUpdate(
              taskd,
              {
                $set: {
                  assignedUserName: userName,
                  assignedUser: assignedUser,
                },
              },
              { new: true }
            );
            if(updatedTask == null){
              res.status.send("not a valid user");
              
            }
          else  {
            res.status(200).send({ message: "user is assigned tasks",
          data:updatedTask });
          } // res.send(UpdateUser)
            } else {
              res.send({
                message: "oOpps ! task is Assigned to some other user",
                data:[]
              });
            }
          }
      }
    }

});

app.patch("/api/tasks/:id", async (req, res) => {
  // res.send('hello')

  const id = req.params.id;
  console.log(id)
  const Udata = await Task.find({_id:id})
  // console.log(Udata)
  
  
  try {
    if (Udata == null) {
      console.log("inside")
      res.send({
        message: "This Task does not exist",
      });
    } else {

      // console.log("1")
    // console.log(req.body.name)

    if(req.body.name !="" ){
      await Task.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: req.body.name
          },
        },
        { new: true }
      );
    }
    // console.log(req.body.completed , "hello")
    if(req.body.description != "" ){
      await Task.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            description: req.body.description,
          },
        },
        { new: true }
      );
    }
    if(req.body.deadline != "" ){
      await Task.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            deadline: req.body.deadline
          },
        },
        { new: true }
      );
    }
    console.log("bye")
    
    if(req.body.completed !== null ){
      console.log(req.body.completed,"inside")
    await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          completed: req.body.completed
        }
      },
      { new: true }
    );

    if(req.body.completed == true){
      const findUser = await User.find({"pendingTasks":id})
      
      console.log(findUser.nam)
      await findUser.pendingTasks.filter((item)=>{

        console.log("here")
        if(item == id ){
          findUser.pendingTasks.remove(id)
          findUser.save()
        }
      })}
    }
    const Data = await Task.find({_id:id})
      res.status(201).send({
        message: "Task Modified",
        Data: Data,
      });
    }

  } catch (error) {
    res.status(500).send({
      message:"server error"

    })
  }
});

// app.delete("/api/users/:id", async (req, res) => {
  
//     const _id = req.params.id;
//     console.log(_id)
//     const result = await User.findOneAndDelete({_id: req.params.id })

//       if(result == null){
//         res.send({
//           message:` not a valid user` })
//         }
//       else{
//         res.status(200).send({
//           message:`user deleted`
//       })}
//     })

app.delete("/api/users/:id", async(req,res)=>{
  const id = req.params.id

  // console.log(typeof(id))

  const result = await User.findById({_id:id})

  if(result == null){
    res.status(404).send({message:"THERE IS NO SUCH USER"})
  }else{
    const DelUserDetails = await Task.findOneAndUpdate({"assignedUser":id},{$set:{"completed":true,"assignedUser":"","assignedUserName":""}})

    const DelUser = await User.findOneAndDelete({_id: req.params.id })

    // const Updatedetail = await Task.find()
    res.send({
      message:`User ${result.name} deleted`,
      data:DelUser,
      Taskfreed : ` a task is free to assign to other users`
    })
  }
})












app.delete("/api/tasks/:id",async(req,res)=>{
  const result = await Task.findById({_id:req.params.id})
  const id = req.params.id
  console.log("1")

    if(result == null){
      console.log("2")
      res.send({
        message:"task does not exist ",
        data:result
      })
    }else{
      console.log("3")
      console.log( result.completed)
      if(result.assignedUser != "" && !result.completed ){

        console.log("4")
        const data = await User.findById(result.assignedUser) 

        if(data != null){
          console.log("5")
            var darray = data.pendingTasks.filter((item)=>{
            if(item == id ){
              data.pendingTasks.remove(id)
              data.save()
              res.send({
                message:'Task Deleted',
                data:data
              })

            }
          })
          
        }
      }else{
        console.log("hello")
        const delTask = await Task.findOneAndDelete({ _id: id},{new:true});

        
        res.send({
          message:`Task ${delTask.name}deleted`,
          data:delTask
        })
          
      


      }

    }
} )
































// app.delete("/api/tasks/:id",async(req,res)=>{
//   const result = await Task.findById({_id:req.params.id})
//   const id = req.params.id
//   console.log("1")

//     if(result == null){
//       console.log("2")
//       res.send({
//         message:"task does not exist ",
//         data:result
//       })
//     }else{

//       console.log("3")
//       console.log( result.completed)
//       if(result.assignedUser != "" && result.completed != true ){

//         console.log("4")
//         const data = await User.findById(result.assignedUser) 
//         console.log(result.assignedUser)

        
//         if(data != null){
//           console.log("55")
//           if(data.pendingTasks !== null){
//             console.log("hello2")
          
//             console.log(data.pendingTasks)
//             console.log("6")
//             data.pendingTasks.filter((item)=>{
//               if(item == id ){
//               console.log("7")

//               data.pendingTasks.remove(id)
//               data.save()
//               res.send({
//                 message:'Task Deleted',
//                 data:data
//               })

//             }
//             else{
//               console.log("hello")
//             }
//           })
        
//         }
//           else{
//             const delTask = await Task.findOneAndDelete({ _id: id},{new:true});
//             // delTask.save()
            
//             console.log("hello3")
            
//             res.send({
//               message:`Task deleted`,
//               data:delTask
//             })








            
//             // console.log("hello2")
//             // const delTask = await Task.findOneAndDelete({ _id: id},{new:true});
//             // // delTask.save()
            
//             // console.log("hello3")
            
//             // res.send({
//             //   message:`Task deleted`,
//             //   data:delTask
//             // })
//           }
          
//         }
//         else{
//           console.log("hello")
//           const delTask = await Task.findOneAndDelete({ _id: id},{new:true});
          
  
          
//           res.send({
//             message:`Task deleted`,
//             data:delTask
//           })
//         }
            
        
  
  
//       } else{
//         console.log("hello")
//         const delTask = await Task.findOneAndDelete({ _id: id},{new:true});
//         delTask.save()

        
//         res.send({
//           message:`Task deleted`,
//           data:delTask
//         })
//       }
      

//     }
// } )

// app.delete("/api/tasks/:id", async (req, res) => {
//     const result = await Task.findOneAndDelete({ _id: req.params.id },{new:true});

//     if(result == null){
//       res.send({
//         message:"task does not exist  deleted",
//         data:result
//       })
//     }else{
//       res.send({
//         message:`task with taskid ${req.params.id} has been deleted succesfully`,
//       })

//     }
// });