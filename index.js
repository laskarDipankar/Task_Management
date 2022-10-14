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

const port = process.env.PORT || 8999;

app.use(express.static('Public'));


app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'Public/index.html'))
})



app.post("/api/users", async (req, res) => {
  const userCount = User.find({});

  if (!req.body.name == "" && !req.body.email == "") {
    const UserEmail = await User.find({ email: req.body.email });

    // console.log(UserEmail.length);

    if (UserEmail.length == 0) {
      // try{
      Todos = new User(req.body);
      saveTodo = await Todos.save();

      res.send({
        message: "user can move forward",
        Data: saveTodo,
      });

      // }catch(){

      // }
    } else {
      res.send({
        message: "A user is already regstered with this email",
        data:[]
        // count:
        // Data:userCount
      });
    }
  } else {
    console.log("no");
    res.status(404).send({
      message: "Oouchh !!You have left mandatory fields blank",
      data:[]
    });
  }

  //
});


app.post("/api/tasks", async (req, res) => {
  if(!req.body.taskNames == "" && !req.body.deadline == ""){

    // console.log("not working")
    const Tasks = new Task(req.body);
    const SaveTasks = await Tasks.save();

    if(SaveTasks == null){

      res.status(404).send({
        message:"No Task Data Recieved",
        data:[]
      });

      
    }else{
      res.send({
        message:"task Created",
        data:SaveTasks});
    // console.log(error)
   
  }}
  else{
    // console.log("hello")
    res.status(404).send({
      message:"you have either left deadline or taskname fields empty"
    })
  
  }
});

app.get("/api/users", (req, res) => {
  User.find(eval("(" + req.query.where + ")"))
    .select(eval("(" + req.query.select + ")"))
    .sort(eval("(" + req.query.sort + " )"))
    .exec((error, data) => {
      if (error) {
        res.send(error);
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
  console.log(req.query);
});

app.get("/api/tasks", (req, res) => {
  Task.find(eval("(" + req.query.where + ")"))
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

app.get("/api/user/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .exec((error, result) => {
      if (error) {
        res.status(400).send({
          message:"Wrong user details",
          Data:[]

        });
      } else {
        res.status(400).send({
          message:'Retirved tasks details',
          data:result
        });
      }
    });
});

app.get("/api/tasks/:id", async (req, res) => {
    await Task.find({ _id: req.params.id })
    .exec((error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(
          {
          message:"Retrived tasks details",
          data:  result
          });
      }
    });
});

app.put("/api/users/:id", async (req, res) => {
  
    const _id = req.params.id;
    const Data = await User.findById(_id);
    if (Data == null) {
      res.status(404).send({
        message: "Oppsie!! you are not a registered user",
      });
    } else {
      const updateName = req.body.name;
      const updateEmail = req.body.email;
      if (!updateEmail == "" || !updateName == "") {
        const userData = await User.findByIdAndUpdate(
          _id,
          { $set: { name: updateName, email: updateEmail } },
          { new: true }
        );
        res.status(201).send({
          message: "Great !!",
          Data: userData,
        });
      } else {
        // try {
          const taskd = req.body.taskd;
          const taskResult = await Task.findById(taskd)
          // console.log(taskResult.length);

          if (taskResult == null) {
            res.send({
              message: "task does not exist",
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
                { $push: { tasks: taskd, PendingTasks: taskd } },
                { new: true }
              );
              User.findByIdAndUpdate(_id, {
                $push: { Pendingtasks: taskResult._id },
              });


              const UserData =  User.findById(_id);
            const userName = UserData.name;
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
              res.send("not a valid user");
              
            }
          else  {
            res.status(200).send({ message: "user is assigned tasks",
          data:updatedTask });
          } // res.send(UpdateUser)
            } else {
              res.status(400).send({
                message: "oOpps ! task is Assigned to some other user",
                data:[]
              });
            }
          }
          // try {
        //  (error) {
        //   res.status(400).send({message:"This is not a Valid Task !!",
        // data:UserData}
        //   );
        // }
      }
    }
  // } catch (error) {
  //   res.send({ message: "Opps server error"});
  // }
});

app.put("/api/tasks/:id", async (req, res) => {
  // res.send('hello')

  try {
    const _id = req.params.id;
    const Data = await Task.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          description: req.body.description,
          deadline: req.body.deadline,
          completed: req.body.completed,
          taskNames: req.body.taskNames,
        },
      },
      { new: true }
    );
    if (Data == null) {
      res.send({
        message: "This Task does not exist",
      });
    } else {
      res.status(201).send({
        message: "Task Modified",
        Data: Data,
      });
    }
    // console.log(Data)
  } catch (error) {
    res.status(500).send({
      message:"server error"

    })
  }
});

app.delete("/api/users/:id", async (req, res) => {
  
    const _id = req.params.id;
    const result = await User.findOneAndDelete({_id: req.params.id })

      console.log(req.query)
      
      if(result == null){
        res.status(404).send({
          message:` not a valid user` })
        }
      else{
        res.status(200).send({
          message:`user ${data} deleted`
      })}
    })
app.delete("/api/tasks/:id", async (req, res) => {
    const result = await Task.findOneAndDelete({ _id: req.params.id });

    if(result == null){
      res.status(400).send({
        message:"task does not exist  deleted",
        data:result
      })
    }else{
      res.status(200).send({
        message:`task with taskid ${req.params.id} has been deleted succesfully`,
      })

    }


  
  
});