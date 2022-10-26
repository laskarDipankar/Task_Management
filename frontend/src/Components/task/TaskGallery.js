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
  Checkbox
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import AddTask from "./AddTask";

const TaskGallery = () => {
  const [Tasks, setTask] = useState([]);
  const [page, setpage] = useState(0);
  const [warn, setWarn] = useState(false);
  const [taskId, setTaskid] = useState();
  const [open, setOpen] = useState(false);
  const [completion,setcompletion] = useState(null)
  const [taskstatus,setstatus] = useState(false)
  const [edit, setEdit] = useState({
    name: "",
    description:"",
    deadline:"",
    status:false
  });

  useEffect(() => {
    axios
      .get(
        // `https://taskmanagementtodo.herokuapp.com/api/tasks?skip=${page}&limit=9&sort={'dateCreated':-1}`

        `http://localhost:9999/api/tasks?skip=${page}&limit=9&sort={'dateCreated':-1}&where={'completed':true}`

      )
      .then((res) => {
        console.log(res.data.data);
        setTask(res.data.data);
      });
  }, [page]);

  const getData = (data) => {
    setpage(data);
  };
  const taskDelete = async () => {
    await axios.delete(`https://taskmanagementtodo.herokuapp.com/api/tasks/${taskId}`)
    // axios.delete(`http://localhost:9999/api/tasks/${taskId}`)
    .then((res) => {
      alert(res.data.message);
    });
    
  };
  const handleChange = (e) => {
    setEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(edit)
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
    console.log(edit)
  };

  const handleTask = (e) =>{
    console.log(taskstatus)
  }

  // const Completed = async () =>{

  //   await axios
  //   .get(
  //     `https://taskmanagementtodo.herokuapp.com/api/tasks?skip=${page}&limit=9&sort={'dateCreated':-1}&`
  //     // `http://localhost:9999/api/tasks?skip=${page}&limit=9&sort={'dateCreated':-1}&where={'completed':true}`

  //   )
  //   .then((res) => {
  //     console.log(res.data.data);
  //     setTask(res.data.data);
  //   });

  // }

  

  const updateTask = async () => {
    await axios.patch(`http://localhost:9999/api/tasks/${taskId}`,{

      "name":edit.name,
      "description": edit.description,
      "deadline": edit.deadline,
      "completed":edit.status

    }).then((res) => {
      alert(res.data.message);
    });
  };
console.log(completion)
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
          gap:1
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
                      display:'flex',
                      alignItems:'center',
                      gap:1
                    }}>
                      <TextField
                        name="deadline"
                        placeholder="Enter Deadline"
                        onChange={handleChange}
                        type="date"
                      >
                        {edit.deadline}
                      </TextField>
                      {/* <FormGroup> */}
                    <FormControlLabel control={<Checkbox 
                    name="status"
                    onClick={()=>{{setEdit((prev)=>({status:!edit.status}))}}}
                    
                    />} label="Status" />
                        
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
        <AddTask/>
        <Box
        sx={{
          display:'flex',
          justifyContent:'center'
        }}>
          <Pagination getData={getData} />

        {/* <Button
        value='fasle'
        onClick={(e)=>setcompletion(false)}
        >Completed Task</Button> */}
        {/* <Button
        onClick={Completed}
        >Completed Task</Button> */}
        </Box>

      

        {
        
        //   .filter((item)=>{
        //     if(completion == null){
        //       console.log("blank")
        //       return item

              
        //     }else if(item.completed == completion ){
        //       console.log("blank1")
        //       return item
        //     }
        //     console.log("blank2")
        //       return item
        // })
        Tasks.map((item) => {
          return (
            <>
              <Box
                sx={{
                  border: "2px solid red",
                  height: 100,
                  width: 800,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                    paddingLeft: "1%",
                  }}
                  to={`/tasks/${item._id}`}
                >
                  <Typography
                    sx={
                      {
                        //
                      }
                    }
                  >
                    Task name <span>-</span>
                    {item.name}
                  </Typography>
                </NavLink>
                <Button
                  sx={{
                    marginLeft: "auto",
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
                  onClick={() => {
                    {
                      setOpen(true);
                    }
                  }}
                >
                  Edit
                </Button>
                <FormControlLabel control={<Checkbox 
                    name="status"
                    onClick={()=>{
                      {setstatus((e)=>({taskstatus:!taskstatus}))}
                      {handleTask()}
                    
                    }}
                    
                    />} label="Status" />
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default TaskGallery;
