import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TaskAltTwoToneIcon from "@mui/icons-material/TaskAltTwoTone";
import SportsGymnasticsOutlinedIcon from "@mui/icons-material/SportsGymnasticsOutlined";
import { green } from "@mui/material/colors";
import { setConstantValue } from "typescript";

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
          {/* <TaskAltTwoToneIcon
              sx={{
                color: "#014421",
              }}
            /> */}
          <Typography
            sx={{
              paddingLeft: "8px",
              color: "black",
            }}
          >
            <NavLink
              to="/"
              style={({ isActive }) => (
                {
                  color: isActive ? "blue" : "white",
                },
                { textDecoration: "none" }
              )}
            >
              toDo
            </NavLink>
          </Typography>
          <Tabs
            sx={{
              marginLeft: "auto",
            }}
            textColor="white"
            value={value}
            indicatorColor="secondary"
            onChange={(e, value) => setValue(value)}
          >
            <NavLink
              to="users"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              
              <Tab label={<SportsGymnasticsOutlinedIcon />} />
              
            </NavLink>

            <NavLink
              to="/tasks"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              <Tab label={<TaskAltTwoToneIcon />} />
            </NavLink>
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* </React.Fragment> */}
      <Outlet />
    </>
  );
};

export default Navbar;

{
  /* {
                  navEle.map((ele)=>{
                    return <Tab label = {ele} />
                  })
                } */
}
