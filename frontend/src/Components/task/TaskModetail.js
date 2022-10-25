import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/system";
import { Button,Modal, Typography,Dialog,DialogActions,DialogContent,
  DialogTitle,FormControlLabel,FormGroup,
  TextField, 
  Checkbox } from "@mui/material";

const TaskMoDetails = () => {
    const[tasks,setTasks]=useState([])
    const params = useParams()
    const [user,setUser] = useState()
    const [warn, setWarn] = useState(false);
    const [open, setOpen] = useState(false);
    const [taskId, setTaskid] = useState();
    const [edit, setEdit] = useState({
      name: "",
      description: "",
      deadline: "",
      status:false
    });

    useEffect(()=>{
        axios.get(`https://taskmanagementtodo.herokuapp.com/api/tasks/${params.id}`)
        .then((res)=>{
            // console.log(res.data.results)
            setTasks(res.data.results)
        })
    },[params.id])

    const taskDelete = () =>{
      // axios.delete(`https://taskmanagementtodo.herokuapp.com/api/tasks/${params.id}`)
      axios.delete(`https://taskmanagementtodo.herokuapp.com/api/tasks/${params.id}`)
      .then((res)=>{
        alert(res.data.message)
      })

      // alert("hello")
    }
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
  
    const updateTask = async () => {
      // await axios.patch(`http://localhost:9999/api/tasks/${taskId}`,{
        await axios.patch(`https://taskmanagementtodo.herokuapp.com/api/tasks/${taskId}`,{
        "name":edit.name,
        "description": edit.description,
        "deadline": edit.deadline,
        "completed":edit.status

      }).then((res) => {
        alert(res.data.message);
      });
    };

    const handleChange = (e) => {
      setEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      // console.log(edit)
    };





    const status =(tasks.completed+"")
    // console.log(status)
  return (
    <>
    <Dialog
        open={warn}
        onClose={handleClose}
        >
          <DialogTitle
          sx={{
            color:'red'
          }}
          >
            {"Warning"}
          </DialogTitle>
          <DialogContent>
          {"Deleting this will erase all the data of this user, are you sure you want to delete ."}
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Do not Delete</Button>
          <Button onClick={()=>{{handleClose()}{taskDelete()}}} autoFocus>
            Delete
          </Button>
        </DialogActions>
        </Dialog>
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
    <Box
    sx={{
      // marginTop:'7'
      margin:'15%',
      height:800,
      display:'grid',
      justifyContent:'center',
      alignItems:'center',
    //   border:' 2px solid yellow'

    }}>
      <Typography
      variant="h6"
      component={'div'}
      sx={{
        // border:'2px solid red',
        color:'blueviolet',
        marginBottom:'3%'
      }}
      >
      {` Taskname: ${tasks.name}`}
      </Typography>
      <Typography
      variant="p"
      component={'div'}
      sx={{
        // border:'2px solid red',
        color:'blueviolet'
      }}
      >
      {` Task-Id: ${tasks._id}`}
      </Typography>
      <Box
      sx={{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'column',
        gap:4
      }}>
        <Typography
        variant="p"
        component={'div'}
        sx={{
          // border:'2px solid red',
          color:"green"
        }}
        >
        {`Status : ${status}`}
        </Typography>
        <Typography
        variant="p"
        component='div'
        sx={{
          width:250
        }}
        >
          
        {`Description :${tasks.description}`}



        </Typography>
        <Typography
        variant="p"
        component={'div'}
        sx={{
          // border:'2px solid red',
          color:"green"
        }}
        >
        {`Deadline : ${tasks.deadline}`}
        </Typography>
        <Typography
        variant="p"
        component={'div'}
        sx={{
          // border:'2px solid red',
          color:"green"
        }}
        >
            {`Assigned-User : ${tasks.assignedUser}`}
        </Typography>
        <Typography
        variant="p"
        component={'div'}
        sx={{
          // border:'2px solid red',
          color:"green"
        }}
        >
          {`Assigned User Name : ${tasks.assignedUserName}`}

        </Typography>

        <Box
        sx={{
          display:'flex',
          gap:2
        }}>
          <Button
          variant="outlined"
          sx={{
            bgcolor:'red',
            color:'darkgreen'
          }}
          onClick={()=>{{handleClickOpen()}}}
          
          
          size="medium">Delete</Button>
          <Button
          variant="outlined"
          sx={{
            bgcolor:'green',
            color:'blue'
          }}
          onClick={() => {
            {
              setOpen(true);
            }
            {
              
                setTaskid(tasks._id);
              
            }
          }}
          size="medium"
          
          
          >Edit</Button>
          {/* <Button size="small"></Button> */}
        </Box>
        </Box>
    
    </Box>
    </>

  )
}

export default TaskMoDetails