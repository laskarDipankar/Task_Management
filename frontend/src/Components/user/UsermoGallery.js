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
} from "@mui/material";
import { bgcolor, display } from "@mui/system";
import Pagination from "../Pagination/Pagination";
import AddUser from "./AddUser";
import * as React from "react";
import u1 from '../../Img/user/u1.svg'
import u2 from '../../Img/user/u2.svg'
import u3 from '../../Img/user/u3.svg'
import u4 from '../../Img/user/u4.svg'
import u5 from '../../Img/user/u5.svg'
import u6 from '../../Img/user/u6.svg'
import u7 from '../../Img/user/u7.svg'
import u8 from '../../Img/user/u8.svg'
import u9 from '../../Img/user/u9.svg'

const imgList = [
  {img:u1},{img:u2},{img:u3},{img:u4},{img:u5},{img:u6},{img:u7},{img:u8},{img:u9}];
// import Typography from '@mui/material/Typography';

const UserMOGallery = () => {
  const [state, setstate] = useState([]);
  const [length, setlength] = useState();
  const [page, setpage] = useState(0);
  const [imgUser,setimguser] = useState([])

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
        console.log(res.data.Data.length);
        setimguser(imgList.concat(res.data.Data))
      });
  }, [page,state]);

  const getData = (data) => {
    setpage(data);
  };

  // state.push(imgList)
//  imgList.forEach(element => {
    
    // console.log(element)
  // });

  // console.log(...imgUser);
  return (
    <>

      <AddUser />
      
      <Pagination getData={getData} />
      <Box
      sx={{
        display:'flex',
        justifyContent:'center'
      }}>

      <Button>Total Users: {length}</Button>
      </Box>

      <Box
        sx={{
          // marginTop: "7%",
          display: "grid",
        //   alignItems:'center',
        //   justifyContent:'center',
        //   marginLeft:'auto',
          gridTemplateColumns: "repeat(1,1fr)",
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
                            justifyContent:'center',
                        }}>
                        
                        
                        <Card sx={{ 
                            width: 300 ,
                    // border:'2px solid red',
                    display:'grid',
                    placeItems:'center',
                    background:'rgba(106,197,117,0.4)',
                    backdropFilter:'blur(20px)'


                }}>
                    <CardMedia
                      component="img"
                      height="150"
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
                    <Button size="small">EDIT-USER</Button>
                    <NavLink to={`/users/${item._id}`}
                      style={({ isActive }) => ({ 
                        color: isActive ? 'greenyellow' : 'white' }
                        ,{textDecoration:'none'})}
                    >
                        <Button size="small">User-Detail</Button>
                    </NavLink>
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
    </>
  );
};

export default UserMOGallery;
