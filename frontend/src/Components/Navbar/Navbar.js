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

// const navEle = ["USERS", "TASKS", "SETTINGS"];

const Navbar = () => {
  const [value, setValue] = useState();
  return (
    <>
      {/* <React.Fragment> */}
      <AppBar
        sx={{
          backgroundColor: "#92D293",
        }}
      >
        <Toolbar>
          <Typography
          sx={{
            fontSize:30,
            fontWeight:'bold',
            color:'blueviolet'
          }}
          
          >toDo</Typography>
          <List
          sx={{
            display:'flex',
            marginLeft:'auto'
            // flexDirection:'row-reverse',
            // justifyContent:'center'

          }}
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
          </List>
        </Toolbar>
      </AppBar>

      {/* <UserRev/> */}
    </>
  );
};

export default Navbar;