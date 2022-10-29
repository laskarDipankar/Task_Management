import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import axios from "axios";
import { useState } from "react";

const AddTask = (props) => {
  const [isFlag, setisflag] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    deadline: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(input)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    e.target.reset();
  };

  const updateData = (data) => {
    props.getUpdatedata(data);
  };

  console.log(typeof input.deadline);

  const saveToDb = () => {
    axios
      .post("https://taskmanagementtodo.herokuapp.com/api/tasks", {
        name: input.name,
        description: input.description,
        deadline: input.deadline,
      })
      .then((res) => {
        alert(res.data.message);
        updateData(res.data.message);
        console.log(res.data.message);
      });
  };

  var createUser = () => {
    if (isFlag == false) {
      setisflag(true);
    } else {
      setisflag(false);

      console.log(isFlag);
    }

    // isFlag = true
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // marginTop:'9%'
        }}
      >
        <Button
          sx={{
            backgroundColor: "greenyellow",
            marginBottom: "6%",
          }}
          variant="contained"
          onClick={createUser}
        >
          Create Task
        </Button>
      </Box>

      {isFlag ? (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <TextField
                name="name"
                onChange={handleChange}
                placeholder="Enter Task Name"
              >
                {input.name}
              </TextField>
            </Box>
            <Box>
              <TextField
                name="description"
                onChange={handleChange}
                placeholder="Enter description"
              >
                {input.description}
              </TextField>
            </Box>
            <Box>
              <TextField
                name="dealine"
                onChange={handleChange}
                placeholder="Enter description"
                type="date"
              >
                {input.deadline}
              </TextField>
            </Box>
            <Button
              variant="outlined"
              onClick={(e) => {
                {
                  saveToDb();
                }
                {
                  setisflag(false);
                }
              }}
              type="submit"
            >
              submit
            </Button>
          </Box>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default AddTask;
