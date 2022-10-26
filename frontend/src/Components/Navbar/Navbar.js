import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  ListItemText,
  AppBar,
  Tabs,
  Tab,
  TextField,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import TaskAltTwoToneIcon from "@mui/icons-material/TaskAltTwoTone";
import SportsGymnasticsOutlinedIcon from "@mui/icons-material/SportsGymnasticsOutlined";
import { green } from "@mui/material/colors";
import { setConstantValue } from "typescript";
import UserGallery from "../user/UserGallery";
import UserRev from "./UserRev";
import { Box, display } from "@mui/system";


const Navbar = () => {
  const [value, setValue] = useState();
  return (
    <>
      {/* <React.Fragment> */}
      <AppBar
        sx={{
          backgroundColor: "#92D293",
          width:'80%',
          display:'flex',
          justifyContent:'center',
          flexWrap:'wrap',
          marginRight:'10%',
          marginTop:'0.15%',
          boxShadow:'2px 3px  5px greenyellow',
          // position:'relative'
          
        }}
      >
        <Toolbar
        sx={{
          // width:'98%',
          display:'flex',
          justifyContent:'center',
          flexWrap:'wrap'
        }}>
        <NavLink
            to='/'
            style={isActive => ({
              color: isActive ? "green" : "yellowgreen"
            },{textDecoration:'none'})}

            >
          <Typography
          sx={{
            fontSize:30,
            fontWeight:'bold',
            color:'blueviolet'
          }}
          
          >toDo</Typography>
          </NavLink>
          <List
          sx={{
            display:'flex',
            marginLeft:'auto'
            // flexDirection:'row-reverse',
            // justifyContent:'center'

          }}
          >

            <NavLink
            to='/users'
            style={isActive => ({
              color: isActive ? "green" : "yellowgreen"
            },{textDecoration:'none'})}

            >
            <ListItem>
                <ListItemIcon>
                  <SportsGymnasticsOutlinedIcon />
                  <ListItemText
                  sx={{
                    color:'blueviolet'
                  }}
                  primary="USERS" />
                </ListItemIcon>
            </ListItem>
            </NavLink>
            <NavLink
            to='/tasks'
            style={({ isActive }) => ({ 
              color: isActive ? 'greenyellow' : 'white' },{textDecoration:'none'})}
              
            >

            <ListItem>
              <ListItemIcon>
                <TaskAltTwoToneIcon />
                <ListItemText 
                sx={{
                  color:'blueviolet'
                }}
                primary="TASKS" />
              </ListItemIcon>
            </ListItem>
            </NavLink>
          </List>
        </Toolbar>
      </AppBar>

      {/* <UserRev/> */}
    </>
  );
};

export default Navbar;