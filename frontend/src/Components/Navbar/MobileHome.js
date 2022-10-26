import { Typography, Divider, TextField } from "@mui/material";
import { Box, display, fontSize } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import img from "../../Img/man.svg";
// import RuleIcon from "@mui/icons-material/Rule";
// import winner from "../../Img/winner.svg";
// import gif from "../../Img/check.gif";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import SettingsIcon from "@mui/icons-material/Settings";
// import gt from "../../Img/gt.jpg";
import tate from "../../Img/1.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
// import welcome from "../../Img/welcome.jpg";
// import male1 from '../../Img/male1.gif'
// import f1 from '../../Img/f1.gif'
// import f2 from '../../Img/f2.gif'
// import male2 from '../../Img/male2.gif'
import LaptopIcon from '@mui/icons-material/Laptop';

const MobileHome = () => {
  return (

        <>
          <Box
            sx={{
              marginTop: "14%",
            //   minHeight: "100%",
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
            // position="fixed"
          >
            <Box
              sx={{
                // border: "2px solid red",
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                margin: "3%",
                backgroundImage: `url(${tate})`,
                backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center center",
                backgroundAttachment: "fixed",
                // height:300,
                // width:600
              }}
            >
              <Box
                sx={{
                  margin: "4%",
                  // border:'2px solid red',
                //   minWidth: "40%",
    
                  // backdropFilter:'blur(99px)'
                  // backgroundColor:'rgba(192,192,192,0.4)'
                  // background: 'linear-gradient(to right bottom, #430089, #82ffa1,0.5)'
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width:300,
                    // margin: "auto",
                    boxShadow:'2px 2px 7px 2px yellowgreen',
                    color:'purple',
                    fontWeight:700
                  }}
                >
                  WELCOME TO toDo
                </Typography>
    
                <Box
                  sx={{
                    // bgcolor: "#BDD8CE ",
                    // marginBottom: "2%",
                    width: 350,
                    height: 450,
    
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border:'3px solid black',
                    // borderRadius:'10px',
                    // marginLeft: "5%",
                  }}
                >
                  {/* <Typography>USERS</Typography> */}
                  <Card
                    sx={{
                      // display:'flex',
    
                      width: 270,
                      borderRadius: "12px",
                      boxShadow: "5px 5px 10px 5px grey",
                      opacity: 0.9,
                      // "&:hover": {
                      //   boxShadow: "5px 5px 10px 5px yellowgreen",
                        
                      // },
    
                      // height:300
                      // marginTop:'10%'
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="150"
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
                        maxWidth: 340,
                        borderRadius: "12px",
                        opacity: 0.9,
                        boxShadow: "5px 5px 10px 5px grey",
                        // "&:hover": {
                        //   boxShadow: "5px 5px 10px 5px yellowgreen",
                        // },
    
                        // height:300
                        // marginTop:'10%'
                      }}
                    >
                      <CardContent>
                        {/* <img className="gif" src={gif}></img> */}
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
                        maxWidth: 340,
                        // marginLeft:'40%',
                        borderRadius: "12px",
                        opacity: 0.9,
                        boxShadow: "5px 5px 10px 5px grey",
                        // "&:hover": {
                        //   boxShadow: "5px 5px 10px 5px yellowgreen",
                        // },
    
                        // height:300
                        // marginTop:'10%'
                      }}
                    >
                      <CardContent>
                        {/* <img className="gif" src={gif}></img> */}
                        <Typography gutterBottom variant="span" component="div">
                          Volleyball
                          <Divider variant="middle" flexItem />
                          <SportsVolleyballIcon />
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{
                        display: "flex",
                        maxWidth: 340,
                        // marginLeft:'40%',
                        borderRadius: "12px",
                        opacity: 0.9,
                        boxShadow: "5px 5px 10px 5px grey",
                        // "&:hover": {
                        //   boxShadow: "5px 5px 10px 5px yellowgreen ",
                        // },
    
                        // height:300
                        // marginTop:'10%'
                      }}
                    >
                      <CardContent>
                        {/* <img className="gif" src={gif}></img> */}
                        <Typography gutterBottom variant="span" component="div">
                          Ecomm-Webiste
                          <Divider variant="middle" flexItem />
                          <LaptopIcon/>
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
                  margin: "4%",
                }}
              >
                <Box
                sx={{
                  // marginTop:'%',
                  borderRadius:'4%',
                  boxShadow: "3px 3px 6px 3px black",
                  // "&:hover": {
                  //   boxShadow: "5px 3px 6px 3px #809fff",
                    
                  // }
                }}>
    
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection:'column',
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    fontWeight:'bold',
                    width:340,
                    fontSize:'15px',
                  }}
                >
                  toDo : HELPS YOU MANAGE YOUR TASKS.
    
                <Typography
                variant="p"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  color:'#1338be',
                  fontWeight:'bold',
                  fontSize:'13px',
                  
                }}
                >
                YOUR STEP TOWARDS DISCIPLINE AND SUCCESS.
                </Typography>
                </Typography>
                </Box>
    
    
                  
                <Box
                  sx={{
                    // bgcolor: "#BDD8CE ",
                    // marginBottom: "2%",
                    // width:400,
                    height: 500,
                    margin: "5%",
    
                    display: "flex",
                    flexDirection:'column',
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundImage: `url(${welcome})`,
                    // backgroundSize: "center",
                    // backgroundRepeat: "no-repeat",
                    // backgroundPosition: "center center",
                    // backgroundAttachment: "fixed",
                    // border: "3px solid yellowgreen",
                    borderRadius:'10%',
                    boxShadow: "5px 5px 10px 5px grey",
                    // "&:hover": {
                    //   boxShadow: "2px 2px 6px 2px #809fff",
                    
                    // }
                    // marginLeft: "5%",
                  }}
                ><Typography
                variant='h5'
                component='div'
                sx={{
                  height:'30px',
                  width:'360px',
                  margin:'5%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  fontSize:'20px',
                  boxShadow: "5px 5px 10px 5px grey",
                        // "&:hover": {
                        //   boxShadow: "2px 2px 6px 2px #809fff",
                        //   bgcolor:'white'
                        // },
                }}
                >How our users feel about us !!</Typography>
                
    
                  <Typography
                  variant='p'
                  component='div'
                  sx={{
                    height:'30px',
                    width:'300px',
                    marginLeft:'5%',
                    marginTop:'3%',
                    display:'flex',
                    alignItems:'center',
                    color:'black',
                    // justifyContent:'center',
                    boxShadow: "2px 2px 6px 2px grey",
                        // "&:hover": {
                        //   boxShadow: "5px 5px 10px 5px #809fff",
                        //   bgcolor:'white'
                        // },
                  }}
                  >
                    {/* <img className="gif1" src={f2}></img> */}
                    Flexible, fast, and modern design
                  </Typography>
                  <Typography
                  variant='p'
                  component='div'
                  sx={{
                    height:'38px',
                    width:'300px',
                    margin:'3%',
                    display:'flex',
                    alignItems:'center',
                    fontSize:'12px',
                    
                    // justifyContent:'center',
                    marginRight:'5%',
                    boxShadow: "2px 2px 6px 2px grey",
                    // "&:hover": {
                    //   boxShadow: "5px 5px 10px 5px #809fff",
                    //   bgcolor:'white'
                    // },
    
                  }}
                  >
                    {/* <img className="gif1" src={male2}/> */}
                    With projects, labels and priorities, you can tailor toDo to your personal workflow
                    </Typography>
                  <Typography
                  variant='p'
                  component='div'
                  sx={{
                    height:'40px',
                    width:'300px',
                    marginTop:'3%',
                    marginLeft:'5%',
                    display:'flex',
                    alignItems:'center',
                    fontSize:'12px',
                    // justifyContent:'center',
                    boxShadow: "2px 2px 6px 2px grey",
                        // "&:hover": {
                        //   boxShadow: "5px 5px 10px 5px #809fff",
                        //   bgcolor:'white'
                        // },
                  }}
                  >
                    {/* <img className="gif1" src={f1}></img> */}
                    Choose everything from a simple checklist to a multi-column kanban board.
    
                    </Typography>
                  <Typography
                  variant='p'
                  component='div'
                  sx={{
                    height:'30px',
                    width:'300px',
                    marginTop:'3%',
                    display:'flex',
                    alignItems:'center',
                    fontSize:'13px',
                    // justifyContent:'center',
                    marginRight:'5%',
                    boxShadow: "2px 2px 6px 2px grey",
                    // "&:hover": {
                    //   boxShadow: "5px 5px 10px 5px #809fff",
                    //   bgcolor:'white'
                    // },
    
                  }}
                  >
    
                    {/* <img className="gif1" src={male1}></img> */}
                    I have become more punctual, all thanks to toDo 
                  </Typography>
                  <Typography
                  variant='p'
                  component='div'
                  sx={{
                    height:'30px',
                    width:'300px',
                    // fontSize:10,
                    marginTop:'3%',
                    display:'flex',
                    alignItems:'center',
                    // justifyContent:'center',
                    fontSize:'13px',
                    marginLeft:'5%',
                    boxShadow: "2px 2px 6px 2px grey",
                    // "&:hover": {
                    //   boxShadow: "5px 5px 10px 5px #809fff",
                    //   bgcolor:'white'
                    // },
    
                  }}
                  >
    
                    {/* <img className="gif1" src={f2}></img> */}
                    i work for 48hrs in 24hrs.
    
                    
                  </Typography>
                  
    
                  
    
                  
    
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      );
}

export default MobileHome