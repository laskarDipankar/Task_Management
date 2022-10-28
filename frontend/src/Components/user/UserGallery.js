import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from "@mui/material";
// import { bgcolor, display } from "@mui/system";
import Pagination from "../Pagination/Pagination";
import AddUser from "./AddUser";
// import * as React from "react";
import u1 from '../../Img/user/u1.svg'
import u2 from '../../Img/user/u2.svg'
import u3 from '../../Img/user/u3.svg'
import u4 from '../../Img/user/u4.svg'
import u5 from '../../Img/user/u5.svg'
import u6 from '../../Img/user/u6.svg'
import u7 from '../../Img/user/u7.svg'
import u8 from '../../Img/user/u8.svg'
import u9 from '../../Img/user/u9.svg'
// import { set } from "mongoose";
// import bg from '../../Img/bg.jpg'

const imgList = [
  {img:u1},{img:u2},{img:u3},{img:u4},{img:u5},{img:u6},{img:u7},{img:u8},{img:u9}];
// import Typography from '@mui/material/Typography';

const UserGallery = () => {
  const [state, setstate] = useState([]);
  const [open, setOpen] = useState(false);
  const [length, setlength] = useState();
  const [user, setUser] = useState();
  const [page, setpage] = useState(0);
  const [warn, setWarn] = useState(false);
  const [imgUser,setimguser] = useState([]);
  const [update,setupdate] = useState()
  const [edit,setEdit]=useState({
    name:"",
    email:""
  })

  useEffect(() => {

    axios
      .get(`https://taskmanagementtodo.herokuapp.com/api/users`)
      .then((res) => {
        setlength(res.data.Data.length)
        // console.log(res.data.Data.length);
      });


    
    axios
      .get(`https://taskmanagementtodo.herokuapp.com/api/users?skip=${page}&limit=9&sort={'dateCreated':-1}`)
      .then((res) => {
        setstate(res.data.Data);
        // console.log(res.data.Data.length);
        setimguser(imgList.concat(res.data.Data))
      });
  }, [page,update,length]);

  const UserDelete = async () => {
    await axios
      .delete(`https://taskmanagementtodo.herokuapp.com/api/users/${user.toString()}`)
      .then((res) => {
        setupdate(res.data.data)
        alert(res.data.message);
        // window.reload(true)

      });

    console.log(user);
  };

  // console.log(update)


  const getData = (data) => {
    setpage(data);
  };

  const handleClickOpen = () => {
    setWarn(true);
  };
  
  const handleClose = () => {
    setWarn(false);
  };

  const UserEdit = () => {
    
    setOpen(true);
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
      // alert(res.data.message);
      setupdate(res.data.message)
    })
  }

  console.log(user);
};


// console.log(length)
const getUpdate = (data) =>{
  setlength(data)
  console.log(length)
}


  return (
    <>

      
      {/* ///////////////////////Modal////////////////////// */}
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


        {/* /////////////////////////////////////Dialog////////////////////// */}

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
                  alignItems:'center',
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


      {/* ///////modal////////////////////////////////////// */}


      <AddUser  length={length} getUpdate={getUpdate} />
      <Pagination getData={getData} />
      <Box
      sx={{
        display:'flex',
        justifyContent:'center',
      //   backgroundImage: `url(${bg1})`,
      // backgroundSize: "contain",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "center center",
      // backgroundAttachment: "fixed",
      }}>

      <Button
      
      sx={{
        color:'red',
        fontWeight:200
      }}
      >Total Users: {length}</Button>
      </Box>
      <Box
      sx={{
        display:'grid',
        justifyContent:'center'
      }}>
      <Box
        sx={{
          // marginTop: "7%",
          display: "grid",
          width:900,
          alignItems:'center',
          justifyContent:'center',
        //   marginLeft:'auto',
          gridTemplateColumns: "repeat(3,1fr)",
          gap:'10px'
        }}
      >
        {/* {state.map((item) => {
          
          return ( */}
            <>
            {
              // imgList.forEach(element => {
    
              //   // console.log(element)
              // // });



              //   return(
              //     {
              state.map((item)=>{
                    return(
                        <>
                        <Box
                        sx={{
                            display:'grid',
                            justifyContent:'center'
                        }}>
                        
                        
                        <Card sx={{ 
                            width: 300 ,
                    // border:'2px 2px solid blue',
                    display:'grid',
                    placeItems:'center',
                    // background:'rgba(255,255,255,0.8)',
                    background:'rgba(255,255,255,0.5)',

                    backdropFilter:'blur(20px)',
                    opacity:0.9
                }}>
                    <CardMedia
                      component="img"
                      height="180"
                        image={u7}
                      alt='image user'
                      />
                    <CardContent>
                      <Typography gutterBottom variant="p" component="div">
                        User:
                        {item.name}
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        email:
                        {item.email}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small"

                    variant="outlined"
                    sx={{
                      color:'darkblue'
                    }}

                      onClick={(e) => {
                        {
                          UserEdit();
                        }
                        {
                          setUser(item._id);
                                }
                              }}
                    
                    
                    
                    
                    >EDIT-USER</Button>
                    <NavLink to={`/users/${item._id}`}
                      style={({ isActive }) => ({ 
                        color: isActive ? 'greenyellow' : 'white' }
                        ,{textDecoration:'none'})}
                    >
                        <Button 
                          sx={{
                            color:'darkblue'
                          }}
                        variant="outlined"
                        size="small">User-Detail</Button>
                    </NavLink>
                    <Button size="small"

                    sx={{
                      color:'darkblue'
                    }}
                    variant="outlined"
                     onClick={(e) => {
                      {
                        handleClickOpen()
                        // UserDelete();
                      }
                      {
                        setUser(item._id);
                      }
                    }}
                    
                    
                    >
                      Delete
                    </Button>
                    </CardActions>
                  </Card>
                  </Box>
                      </>
                   )
                })


              }
                {/* ) */}
              {/* }) */}

            {/* } */}
             
            </>
          {/* ); */}
        {/* })} */}
      </Box>
      </Box>
    </>
  );
};

export default UserGallery;
