import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { border, Box, height, textAlign } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import u6 from "../../Img/user/u6.svg";
import AddTask from "../task/AddTask";

const UserDetails = () => {
  const [individual, setUser] = useState([]);
  const [Updatedetail, setUpdatedetail] = useState();
  const [completion, setCompletion] = useState(false);
  const [uid, setuid] = useState();
  const [tasks, setpendingTasks] = useState([]);
  const [task, settask] = useState({ id: "", name: "" });
  const [dialog, setdialog] = useState(false);
  const [add, setadd] = useState();
  const [status, setStatus] = useState([]);
  const [tname, setname] = useState([]);
  const [display, setDisplay] = useState("none");
  const params = useParams();
  var tarray = [];

  // console.log(params.id)

  useEffect(() => {
    axios
      .get(
        `https://taskmanagementtodo.herokuapp.com/api/tasks?where={'completed':true}&sort={'dateCreated':-1}`
      )
      .then((res) => {
        setStatus(res.data.data);
        // console.log(res.data)
      });

    axios
      .get(`https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`)
      // .get(`http://localhost:9999/api/users/${params.id}`)
      .then((res) => {
        setUser(res.data.data[0]);
        setpendingTasks(res.data.data[0].pendingTasks);
      });
  }, [params.id, Updatedetail]);

  useEffect(() => {
    tasks.map(async (item) => {
      await axios
        .get(`https://taskmanagementtodo.herokuapp.com/api/tasks/${item}`)
        .then((res) => {
          // console.log(res.data.results,"jjjj")
          updatearray(res.data.results);

          // tarray.push(res.data.results)

          // setname(tarray)
        });
    });
  }, [tasks]);

  const handleDisplay = () => {
    if (display == "block") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  };

  const UpdateStatus = () => {
    axios
      .patch(`https://taskmanagementtodo.herokuapp.com/api/tasks/${uid}`, {
        completed: completion,
      })
      .then((res) => {
        alert(res.data.message);
        setUpdatedetail(res.data.message);
      });
  };

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const updatearray = (data) => {
    tarray.push(data);

    setname(removeDuplicates(tarray));
  };

  const handleID = async () => {
    // console.log()
    await axios
      .put(
        `https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`,
        // await axios.put(`http://localhost:9999/api/users/${params.id}`

        {
          taskd: task.id,
        }
      )
      .then((res) => {
        alert(res.data.message);
        setUpdatedetail(res.data.data);
      });
  };

  const getUpdatedata = (data) => {
    setUpdatedetail(data);
  };

  const handleActions = () => {
    setdialog(true);
    setCompletion(true);
  };
  // console.log(uid);
  return (
    <>
      <Dialog open={add} onClose={() => setadd(false)}>
        <DialogTitle
          sx={{
            textAlign: "center",
          }}
        >
          ASSIGN TASK TO USER
        </DialogTitle>

        <DialogContent>
          <Box>
            <AddTask getUpdatedata={getUpdatedata} />
            <Select
              value={task.name}
              placeholder={"select task"}
              sx={{
                width: 400,
                margin: "10px",
                color: "black",
              }}
            >
              {status.map((item) => {
                return (
                  <MenuItem
                    value={item.name}
                    onClick={() => {
                      settask({ name: item.name, id: item._id });
                    }}
                  >
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleID}>Assign</Button>
          <Button onClick={() => setadd(false)}>close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={dialog} onClose={() => setdialog(false)}>
        <DialogTitle>Marking task as Complete will remove the task</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                UpdateStatus();
              }}
            >
              Mark as Completed
            </Button>
            <Button
              onClick={(e) => {
                {
                  setdialog(false);
                }
              }}
            >
              Close
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Box
        sx={{
          height: 890,
          width: "99.2%",
          marginTop: "5.5%",
          // border:'2px solid red',
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: 800,
            width: 1000,
            // border:'2px solid green',
            display: "grid",

            placeItems: "center",
            // bgcolor:'red'
          }}
        >
          <Box
            sx={{
              width: 800,
              // border:"2px solid yellow",
              display: "grid",
              gridTemplateRows: "30% 1fr",
              justifyContent: "center",
              // placeItems:"center",
              height: 800,
            }}
          >
            <Box
              sx={{
                height: 150,
                width: 770,
                marginTop: "8%",
                // marginLeft: "10%",
                // border:"2px solid brown",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems:'center'
                background: "rgba(0,102,51,0.4)",
                backdropFilter: "blur(15px)",

                // background:'transparent',
                // backdropFilter:'blur(15px)',
                // opacity:0.9
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  // border:"2px solid red",
                  textAlign: "center",
                }}
              >
                Name<span> : </span>
                {individual.name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  // border:"2px solid red",
                  textAlign: "center",
                }}
              >
                Email <span> : </span>
                {individual.email}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  // border:"2px solid red",
                  textAlign: "center",
                }}
              >
                DateCreated <span> : </span>
                {individual.dateCreated}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#92D293",
                  }}
                  onClick={(e) => {
                    // {handleID()}
                    // {setTaskId(individual._id)}
                    {
                      setadd(true);
                    }
                  }}
                >
                  Add-Task
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#92D293",
                  }}
                  onClick={handleDisplay}
                >
                  Show Pending tasks
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                // border: "2px solid pink",
                height: 450,
                width: 770,
                marginTop: "8%",

                // paddingLeft:'50%',
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                // marginLeft: "8%",
                // justifyContent:'center'
              }}
            >
              {/* <Typography
                    textAlign={'center'}
                    >
                        Pending tasks 
                    </Typography> */}
              {tname.map((item) => {
                return (
                  <>
                    <Card
                      sx={{
                        // border: "2px solid greenyellow",
                        marginTop: "2%",
                        paddingTop: "2%",
                        // marginLeft: "9%",
                        width: 250,
                        height: 250,
                        // opacity:0.8,
                        display: `${display}`,
                        background: "rgba(0,102,51,0.4)",
                        backdropFilter: "blur(15px)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="130"
                        image={u6}
                        sx={
                          {
                            // margin:4
                          }
                        }
                      ></CardMedia>
                      <CardContent
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <NavLink
                          style={{
                            color: "red",
                            textDecoration: "none",
                          }}
                          to={`/tasks/${item._id}`}
                        >
                          <Typography variant="p" textAlign={"center"}>
                            {item.name}
                          </Typography>
                        </NavLink>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          sx={{
                            color: "red",
                          }}
                          onClick={() => {
                            {
                              handleActions();
                            }
                            {
                              setuid(item._id);
                            }
                          }}
                        >
                          completed
                        </Button>
                      </CardActions>
                    </Card>
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserDetails;

{
  /* <h1>{ `EMAIL: ${individual.email}  `}</h1>
            <h1>PendingTasks :</h1>
            {
                tasks.map((item)=>{
                    return <NavLink }><h1>{item}</h1></NavLink>
                })
            }
            
            <h1>{ individual.dateCreated }</h1> */
}
