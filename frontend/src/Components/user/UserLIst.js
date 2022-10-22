import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Modal,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { bgcolor, display } from "@mui/system";
import Pagination from "../Pagination/Pagination";
import AddUser from "./AddUser";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import UpdaateUser from "./UpdaateUser";
import e from "cors";

const UserList = () => {
  const [state, setstate] = useState([]);
  const [page, setpage] = useState(0);
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [warn, setWarn] = useState(false);
  const [edit,setEdit]=useState({
    name:"",
    email:""
  })

  useEffect(() => {
    axios
      .get(
        `https://taskmanagementtodo.herokuapp.com/api/users?skip=${page}&limit=9&sort={'dateCreated':-1}`
        // `http://localhost:9999/api/users?skip=${page}&limit=9&sort={'dateCreated':-1}`
      )
      .then((res) => {
        setstate(res.data.Data);
        // console.log(res.data.Data);
      });
  }, [page]);

  const getData = (data) => {
    setpage(data);
  };
  const UserDelete = async () => {
    await axios
      .delete(`https://taskmanagementtodo.herokuapp.com/api/users/${user.toString()}`)
      .then((res) => {
        alert(res.data.message);
      });

    console.log(user);
  };

  const UserUpdate = async () => {

    if(edit.name == "" || edit.email == ""){
      alert('All the fields are mandatory')
    }else{
    await axios
      .put(`https://taskmanagementtodo.herokuapp.com/api/users/${user.toString()}`,{
        name:edit.name,
        email:edit.email
      })
      .then((res) => {
        alert(res.data.message);
      })
    }

    console.log(user);
  };


const handleSubmit=(e)=>{
  e.preventDefault()
  e.target.reset()
  console.log(edit)
}
const handleChange=(e)=>{
  setEdit((prev)=>({...prev,[e.target.name]:e.target.value}))
  // console.log(edit)
}
const UserEdit = () => {
    // console.log(user);
    // alert('successfully Updated')
    setOpen(true);
};
const handleClickOpen = () => {
  setWarn(true);
};

const handleClose = () => {
  setWarn(false);
};

  return (
    <>
      {/* <UpdaateUser openM={openM} /> */}
      <Box>
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
          <Button onClick={()=>{{handleClose()}{UserDelete()}}} autoFocus>
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
              <form
              onSubmit={handleSubmit}
              >
                <Box
                sx={{
                  display:'flex',
                  flexDirection:'column',
                  gap:2,
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Box
                sx={{
                  display:'flex',
                  flexDirection:'column',
                  gap:2,
                  justifyContent:'center',
                  alignItems:'center'
                }}>

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
                  placeholder="Edit Name">
                    {edit.name}

                  </TextField>
                  
                
                </Box>
                <Box>
                  {/* <TextField></TextField> */}
                  <TextField
                  name="email"
                  placeholder="Edit email"
                  onChange={handleChange}
                  >
                  </TextField>
                </Box>
                
                {/* <Button variant="contained" >save</Button> */}
              
              </Box>
              <Button
              type='submit'
              onClick={(e) =>{{
                // setOpen(false);
              }{
                UserUpdate()
              }}}
              >
                Submit !
              </Button>
                </Box>
                <Button
                onClick={()=>setOpen(false)}>close</Button>
              </form>
            </Typography>
          </Box>
        </Modal>
      </Box>
      {/* /////////////////////////////////////////////////  coponents ///////////// */}

      <AddUser />
      <Pagination getData={getData} />

      {/* /////////////////////////////////////////////////// */}

      <Box
        sx={{
          // marginTop:'13%',
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "repeat(1fr)",
        }}
      >
        {state.map((item) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  // justifyContent:'center',
                  paddingLeft: "2rem",
                  // alignItems:'center',
                  border: "2px solid orange",
                  width: 800,
                  height: 120,
                }}
              >
                <NavLink
                  to={`/users/${item._id}`}
                  style={({ isActive }) => (
                    {
                      color: isActive ? "greenyellow" : "white",
                    },
                    { textDecoration: "none" }
                  )}
                >
                  <Typography
                    sx={{
                      color: "black",
                      paddingTop: "45%",
                      // height:40,
                      display: "grid",
                      alignItems: "center",
                      // justifyContent:'center'
                    }}
                  >
                    {item.name.toUpperCase()}
                  </Typography>
                </NavLink>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                    // paddingRight:'2rem',
                    // gap:5
                  }}
                >     
                <NavLink
                to={`/users/${item._id}`}
                style={{
                  textDecoration:'none'
                }
                }
                >
                <Button
                variant="outlined"
                sx={{
                  margin:2
                }}
                >
                  Detail
                  <span>/</span>
                  Add Task
                </Button>
                </NavLink>
                  <Button
                  variant="outlined"
                  sx={{
                    margin:2
                  }}
                    onClick={(e) => {
                      {
                        UserEdit();
                      }
                      {
                        setUser(item._id);
                      }
                    }}
                  >
                    Edit <span>-</span>
                    <EditIcon />
                  </Button>

                  <Button
                  variant="outlined"
                  sx={{
                    margin:2
                  }}
                    // dUser={item._id}
                    
                    onClick={(e) => {
                      {
                        handleClickOpen()
                        // UserDelete();
                      }
                      {
                        setUser(item._id);
                      }
                    }}
                  > Delete <span>-</span>
                    <HighlightOffIcon />
                  </Button>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default UserList;
