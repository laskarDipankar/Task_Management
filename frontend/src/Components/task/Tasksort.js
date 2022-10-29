import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
// import {makeStyles }from "@mui/material/styles";
import { useState } from "react";
import React from "react";

const TaskSort = (props) => {
  const [value, setvalue] = useState(`&sort={"dateCreated":1}`);
  const handleChange = (e) => {
    setvalue(e.target.value);

    props.showBY(e.target.value);
  };

  //   console.log(value);

  return (
    <>
      <Box>
        <InputLabel>Sort-By</InputLabel>
        <Select
          sx={{
            width: 200,
            color: "black",
          }}
          // value={value}
          onChange={handleChange}
        >
          {/* <FormControl> */}

          <MenuItem value={`&sort={"name":-1}`}>Name</MenuItem>
          <MenuItem value={`&sort={"dateCreated":1}`}>DateCreated</MenuItem>
          <MenuItem value={`&sort{"deadline":-1}`}>Deadline</MenuItem>
          {/* <MenuItem  value={`&sort={"":true}`}  
            ></MenuItem> */}
        </Select>
        {/* </FormControl> */}
      </Box>
    </>
  );
};

export default TaskSort;
