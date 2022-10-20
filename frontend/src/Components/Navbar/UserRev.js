import { Typography, Divider, TextField } from "@mui/material";
import { Box, display, fontSize } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img from "../../Img/man.svg";
import RuleIcon from "@mui/icons-material/Rule";
import winner from "../../Img/winner.svg";
import gif from "../../Img/check.gif";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import gt from "../../Img/gt.jpg";
import tate from "../../Img/1.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import welcome from "../../Img/welcome.jpg";
import male1 from '../../Img/male1.gif'
import f1 from '../../Img/f1.gif'
import f2 from '../../Img/f2.gif'
import male2 from '../../Img/male2.gif'


const UserRev = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "2%",
          minHeight: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          // backgroundImage:`url(${tate})`,
          // marginRight:'8%',
          // backdropFilter:"blur(8px)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",

          // backgroundSize:'cover'
        }}
        position="fixed"
      >
        <Box
          sx={{
            // border: "2px solid red",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            margin: "4%",
            backgroundImage: `url(${tate})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            // height:300,
            // width:600
          }}
        >
          <Box
            sx={{
              margin: "6%",
              // border:'2px solid red',
              minWidth: "40%",

              // backdropFilter:'blur(99px)'
              // backgroundColor:'rgba(192,192,192,0.4)'
              // background: 'linear-gradient(to right bottom, #430089, #82ffa1,0.5)'
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              WELCOME
            </Typography>

            <Box
              sx={{
                // bgcolor: "#BDD8CE ",
                // marginBottom: "2%",
                width: 400,
                height: 500,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // border:'3px solid black',
                // borderRadius:'10px',
                marginLeft: "5%",
              }}
            >
              {/* <Typography>USERS</Typography> */}
              <Card
                sx={{
                  // display:'flex',

                  maxWidth: 400,
                  borderRadius: "12px",
                  boxShadow: "5px 2px 8px 2px #FF99FF",
                  opacity: 0.9,
                  "&:hover": {
                    boxShadow: "5px 5px 10px 5px greenyellow",
                  },

                  // height:300
                  // marginTop:'10%'
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="220"
                  image={img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rampukar Zukerberg
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hi, this is Zukerberg , Rampukar Zukerberg i am a software
                    Enginner from Balliya, it was always hard for me to keep up
                    with my tasks untill i found this toDo app
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* <RuleIcon /> */}
                </CardActions>
              </Card>
              <Box
                sx={{
                  width: "300",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    maxWidth: 400,
                    borderRadius: "12px",
                    opacity: 0.9,
                    boxShadow: "5px 5px 10px 5px #FF99FF",
                    "&:hover": {
                      boxShadow: "5px 5px 10px 5px greenyellow",
                    },

                    // height:300
                    // marginTop:'10%'
                  }}
                >
                  <CardContent>
                    <img className="gif" src={gif}></img>
                    <Typography gutterBottom variant="span" component="div">
                      GO SHOPPING
                      <Divider variant="middle" flexItem />
                      <ShoppingCartIcon />
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    display: "flex",
                    maxWidth: 400,
                    // marginLeft:'40%',
                    borderRadius: "12px",
                    opacity: 0.9,
                    boxShadow: "5px 5px 10px 5px #FF99FF",
                    "&:hover": {
                      boxShadow: "5px 5px 10px 5px greenyellow",
                    },

                    // height:300
                    // marginTop:'10%'
                  }}
                >
                  <CardContent>
                    <img className="gif" src={gif}></img>
                    <Typography gutterBottom variant="span" component="div">
                      Volleyball
                      <Divider variant="middle" flexItem />
                      <SportsVolleyballIcon />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              // border: "2px solid red",
              // height:300,
              // width:600,
              margin: "6%",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              toDo - helps you manage your tasks
            </Typography>

            <Box
              sx={{
                // bgcolor: "#BDD8CE ",
                // marginBottom: "2%",
                // width:400,
                height: 600,
                // margin: "6%",

                display: "flex",
                flexDirection:'column',
                justifyContent: "center",
                alignItems: "center",
                // backgroundImage: `url(${welcome})`,
                // backgroundSize: "center",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center center",
                // backgroundAttachment: "fixed",
                // border: "3px solid black",
                // borderRadius:'10px',
                // marginLeft: "5%",
              }}
            ><Typography
            variant='h5'
            component='div'
            sx={{
              height:'30px',
              width:'500px',
              margin:'5%',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              boxShadow: "2px 2px 6px 2px grey",
                    "&:hover": {
                      boxShadow: "2px 2px 6px 2px orange",
                    },
            }}
            >How our users feel about us</Typography>
            

              <Typography
              variant='p'
              component='div'
              sx={{
                height:'30px',
                width:'400px',
                marginLeft:'5%',
                marginTop:'3%',
                display:'flex',
                alignItems:'center',
                // justifyContent:'center',
                boxShadow: "2px 2px 6px 2px grey",
                    "&:hover": {
                      boxShadow: "5px 5px 10px 5px #809fff",
                    },
              }}
              >
                <img className="gif1" src={f2}></img>
              </Typography>
              <Typography
              variant='h5'
              component='div'
              sx={{
                height:'30px',
                width:'400px',
                marginTop:'3%',
                display:'flex',
                alignItems:'center',
                // justifyContent:'center',
                marginRight:'5%',
                boxShadow: "2px 2px 6px 2px grey",
                "&:hover": {
                  boxShadow: "5px 5px 10px 5px #809fff",
                },

              }}
              >
                <img className="gif1" src={male2}></img>
                </Typography>
              <Typography
              variant='h5'
              component='div'
              sx={{
                height:'30px',
                width:'400px',
                marginTop:'3%',
                marginLeft:'5%',
                display:'flex',
                alignItems:'center',
                // justifyContent:'center',
                boxShadow: "2px 2px 6px 2px grey",
                    "&:hover": {
                      boxShadow: "5px 5px 10px 5px #809fff",
                    },
              }}
              >
                <img className="gif1" src={f1}></img>
                </Typography>
              <Typography
              variant='h5'
              component='div'
              sx={{
                height:'30px',
                width:'400px',
                marginTop:'3%',
                display:'flex',
                alignItems:'center',
                // justifyContent:'center',
                marginRight:'5%',
                boxShadow: "2px 2px 6px 2px grey",
                "&:hover": {
                  boxShadow: "5px 5px 10px 5px #809fff",
                },

              }}
              >

                <img className="gif1" src={male1}></img>
              </Typography>
              <Typography
              variant='h5'
              component='div'
              sx={{
                height:'30px',
                width:'400px',
                marginTop:'3%',
                display:'flex',
                alignItems:'center',
                // justifyContent:'center',
                marginLeft:'5%',
                boxShadow: "2px 2px 6px 2px grey",
                "&:hover": {
                  boxShadow: "5px 5px 10px 5px #809fff",
                },

              }}
              >

                <img className="gif1" src={f2}></img>
              </Typography>
              

              

              

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserRev;
