import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
// import { Outlet } from "react-router"
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Modal,
  TextField,
  FormControlLabel,
  Checkbox,
  Menu,
  List,
  ListItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import AddTask from "./AddTask";
import MenuSort from "./Sorting/MenuSort";
import TaskSort from "./Tasksort";
const TaskGallery = () => {
  const [flag, setflag] = useState();
  const [Tasks, setTask] = useState([]);
  const [page, setpage] = useState(0);
  const [warn, setWarn] = useState(false);
  const [taskId, setTaskid] = useState();
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState();
  const [showby, setshowBy] = useState(`&sort={'dateCreated':-1}`);
  const [data, setdata] = useState(`&where={"completed":false}`);
  const [ass, setass] = useState("Ascending");
  // const [completion,setcompletion] = useState(null)
  // const [taskstatus,setstatus] = useState(false)
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    deadline: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get(
        `https://taskmanagementtodo.herokuapp.com/api/tasks?skip=${page}&${showby}&limit=9${data}`

        // `http://localhost:1999/api/tasks?skip=${page}&${showby}&limit=9${data}`
      )
      .then((res) => {
        // console.log(res.data.data);
        setTask(res.data.data);
      });
  }, [page, update, data, showby]);

  const getData = (data) => {
    setpage(data);
  };
  const taskDelete = async () => {
    await axios
      .delete(`https://taskmanagementtodo.herokuapp.com/api/tasks/${taskId}`)
      // axios.delete(`http://localhost:9999/api/tasks/${taskId}`)
      .then((res) => {
        alert(res.data.message);
        setUpdate(res.data.data);
      });
  };
  const handleChange = (e) => {
    setEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Sortby = (sdata) => {
    setdata(sdata);
  };
  const showBY = (sdata) => {
    setshowBy(sdata);
  };

  const handleClickOpen = () => {
    setWarn(true);
  };

  const handleClose = () => {
    setWarn(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(edit);
  };
  const sortItem = () => {
    console.log("hello");
    if (flag != true) {
      setTask((item) => item.sort((a, b) => (a.id > b.id ? 1 : -1)));
      console.log();
      setflag(true);
      console.log(flag);
      setass("Descending");
    } else {
      setTask((item) => item.sort((a, b) => (a.id > b.id ? -1 : 1)));
      setflag(false);
      console.log(flag);
      setass("Ascending");
    }
  };

  const getUpdatedata = (data) => {
    setUpdate(data);
  };

  const updateTask = async () => {
    await axios
      .patch(`http://localhost:9999/api/tasks/${taskId}`, {
        name: edit.name,
        description: edit.description,
        deadline: edit.deadline,
        completed: edit.status,
      })
      .then((res) => {
        alert(res.data.message);
        setUpdate(res.data.data);
      });
  };
  // console.log(completion)
  // console.log(Tasks.completed)
  return (
    <>
      <Dialog open={warn} onClose={handleClose}>
        <DialogTitle
          sx={{
            color: "red",
          }}
        >
          {"Warning"}
        </DialogTitle>
        <DialogContent>
          {
            "Deleting this will erase all the data of this user, are you sure you want to delete ."
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Do not Delete</Button>
          <Button
            onClick={() => {
              {
                handleClose();
              }
              {
                taskDelete();
              }
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          marginTop: "8%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* /////////////////////////////////////////////////////////////////////////////// */}

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              maxWidth: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                width: "80%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                    // sx={{
                    //    display:'flex',
                    //   flexDirection:'column',
                    //   // gap:20,
                    //   justifyContent:'center',
                    //   alignItems:'center'
                    // }}
                    >
                      <TextField
                        onChange={handleChange}
                        name="name"
                        placeholder="Edit Name"
                      >
                        {edit.name}
                      </TextField>
                    </Box>
                    <Box>
                      <TextField
                        name="description"
                        placeholder="put description"
                        onChange={handleChange}
                      >
                        {edit.description}
                      </TextField>
                    </Box>
                    {/* <Box>
                      <FormGroup>
                    <FormControlLabel disabled control={<Checkbox />} label="Status" />
                        
                      </FormGroup>

                    </Box> */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <TextField
                        name="deadline"
                        placeholder="Enter Deadline"
                        onChange={handleChange}
                        type="date"
                      >
                        {edit.deadline}
                      </TextField>
                      {/* <FormGroup> */}
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="status"
                            onClick={() => {
                              {
                                setEdit((prev) => ({ status: !edit.status }));
                              }
                            }}
                          />
                        }
                        label="Status"
                      />

                      {/* </FormGroup> */}
                    </Box>
                    {/* <Button variant="contained" >save</Button> */}
                  </Box>
                  <Button
                    type="submit"
                    onClick={(e) => {
                      {
                        // setOpen(false);
                      }
                      {
                        updateTask();
                      }
                    }}
                  >
                    Submit !
                  </Button>
                </Box>
                <Button onClick={() => setOpen(false)}>close</Button>
              </form>
            </Typography>
          </Box>
        </Modal>

        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <AddTask getUpdatedata={getUpdatedata} />
        <Box
          sx={{
            display: "flex",
            gap: "8px",
          }}
        >
          <TaskSort showBY={showBY} />
          <Button onClick={sortItem}>{ass}</Button>
          <MenuSort Sortby={Sortby} />
        </Box>
        <Box>
          <Menu>
            <List>
              <ListItem>
                <Button>DateCreated</Button>
              </ListItem>
            </List>
          </Menu>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination getData={getData} />
        </Box>

        {Tasks.map((item) => {
          return (
            <>
              <Box
                sx={{
                  borderLeft: "6px solid green",
                  // borderRight:'6px solid green',
                  height: 100,
                  width: 800,
                  display: "flex",
                  alignItems: "center",
                  // backdropFilter:'blur(10px)'
                  background: "rgba(	144, 238, 144,0.3)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <NavLink
                  style={({ isActive }) => (
                    {
                      color: isActive ? "greenyellow" : "white",
                    },
                    { textDecoration: "none", paddingLeft: "1%" }
                  )}
                  to={`/tasks/${item._id}`}
                >
                  <Typography
                    sx={
                      {
                        //
                      }
                    }
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#9133FF",
                      }}
                    >
                      Task name <span>-</span>
                      {item.name}
                    </Button>
                  </Typography>
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "darkgreen",
                    }}
                    to={`/users/${item.assignedUser}`}
                  >
                    <Typography
                      sx={
                        {
                          //
                        }
                      }
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "darkgreen",
                        }}
                      >
                        Assigned UserName <span>-</span>
                        {item.assignedUserName}
                      </Button>
                    </Typography>
                  </NavLink>
                </NavLink>
                <Box
                  sx={{
                    marginLeft: "auto",
                    marginRight: "4px",
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      marginRight: "4px",
                      bgcolor: "red",
                    }}
                    onClick={() => {
                      {
                        handleClickOpen();
                      }
                      {
                        setTaskid(item._id);
                      }
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      {
                        setOpen(true);
                      }
                    }}
                  >
                    Edit
                  </Button>
                </Box>
                {/* <FormControlLabel control={<Checkbox 
                    name="status"
                    onClick={()=>{
                      {setstatus((e)=>({taskstatus:!taskstatus}))}
                      {handleTask()}
                    
                    }}
                    
                    />} label="Status" /> */}
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default TaskGallery;
