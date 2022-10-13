const express = require("express");

const User = require("./Models/User");
const Task = require("./Models/Task");
const UserTask = require("./Models/UserTask");
const { PythonShell } = require("python-shell");
const bodyParser = require("body-parser");
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

const port = process.env.PORT || 9099;

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

app.post("/api/users", async (req, res) => {
  const userCount = User.find({});

  if (!req.body.name == "" && !req.body.email == "") {
    const UserEmail = await User.find({ email: req.body.email });

    console.log(UserEmail.length);

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
  try {console.log(req.body)

    const Tasks = new Task(req.body);
    const SaveTasks = await Tasks.save();
    res.status(200).json(SaveTasks);
  } catch (error) {
    console.log(error)
    res.send(error);
  }
});

app.get("/api/users", (req, res) => {
  // const userCount = User.find({})

  // const countProperties=(obj)=> {
  //   var userLenght = Object.keys(obj).length
  //   console.log(userLenght)
  // }
  // countProperties(userCount)
  // console.log(userLenght)

  User.find(eval("(" + req.query.where + ")"))
    .select(eval("(" + req.query.select + ")"))
    .sort(eval("(" + req.query.sort + " )"))
    // .sort(eval(req.query.sort))
    // .populate('tasks')
    .exec((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  console.log(req.query);
});

app.get("/api/tasks", (req, res) => {
  Task.find(eval("(" + req.query.where + ")")) ///find({_id:_id]})
    .sort(eval("(" + req.query.sort + " )"))
    .skip(eval("("+req.query.skip+")"))
    .limit(eval("("+req.query.limit+")"))

    .populate("assignedUser")
    .exec((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  console.log(req.query);
});

app.get("/api/user/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .populate("tasks")
    .exec((error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    });
});

app.get("/api/task/:id", (req, res) => {
  Task.find({ _id: req.params.id })
    .populate("users", "name")
    .exec((error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    });
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const Data = await User.findById(_id);
    const msg = {
      message: "OK",
      Data: Data,
    };
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
        try {
          const taskId = req.body.taskId;
          const taskResult = await Task.findById(taskId);

          // if(taskResult.length>0)
          console.log(taskResult.length);

          if (taskResult == null) {
            res.status(400).send({
              message: "task does not exist",
            });
          } else {
            const isComplete = taskResult.completed;
            // res.send(taskResult)
            if (isComplete == true) {
              const CompletionOftask = await Task.findByIdAndUpdate(
                taskId,
                { $set: { completed: false } },
                { new: true }
              );
              UpdateUser = await User.findByIdAndUpdate(
                _id,
                { $push: { tasks: taskId, PendingTasks: taskId } },
                { new: true }
              );
              User.findByIdAndUpdate(_id, {
                $push: { Pendingtasks: taskResult._id },
              });
              // res.send(UpdateUser)
            } else {
              res.status(400).send({
                message: "oOpps ! task is Assigned to some other user",
                data:[]
              });
            }
          }
          try {
            const UserData = await User.findById(_id);
            const userName = UserData.name;
            const assignedUser = _id;
            const updatedTask = await Task.findByIdAndUpdate(
              taskId,
              {
                $set: {
                  assignedUserName: userName,
                  assignedUser: assignedUser,
                },
              },
              { new: true }
            );
            res.send({ message: "user is assigned tasks", data: updatedTask });
            // console.log(UserData)
          } catch (error) {
            res.send("not the righ user");
          }
        } catch (error) {
          res.status(400).send("This is not a Valid Task !!");
        }
      }
    }
  } catch (error) {
    res.send({ message: "Opps server error", data: [] });
  }
});

app.put("/api/task/:id", async (req, res) => {
  // res.send('hello')

  try {
    const _id = req.params.id;
    const Data = await Task.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          Description: req.body.Description,
          Deadline: req.body.Deadline,
          Completed: req.body.Completed,
          taskName: req.body.taskName,
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
        Date: Data,
      });
    }
    // console.log(Data)
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await User.findOneAndDelete({ _id: req.params.id });
    // res.send(req.params.id)
  } catch (error) {
    console.log(error);
  }
});
app.delete("/api/task/:id", async (req, res) => {
  try {
    await Task.findOneAndDelete({ _id: req.params.id });
    res.send(req.params.id);
  } catch (error) {
    console.log(error);
  }
});

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
