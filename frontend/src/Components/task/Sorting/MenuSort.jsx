import { Box,Button,FormControl,InputLabel,Menu,MenuItem ,Select} from "@mui/material";
// import {makeStyles }from "@mui/material/styles";
import { useState } from "react";
import React from "react";




const MenuSort = (props) => {
   
    const [value,setvalue] = useState(`&where={"completed"=false}`)
    const handleChange=(e)=>{
        setvalue(e.target.value)

        props.Sortby(e.target.value)
    }

    // console.log(value)

    

return (

    <>
    <Box>
        

        <InputLabel>SHOW</InputLabel>
        <Select
        sx={{
            width:200,
            color:'black'
        }}
            
            // value={value}
            onChange={handleChange}
            
            >
                {/* <FormControl> */}

            
            <MenuItem  value={``}
            >All</MenuItem>
            <MenuItem  value={`&where={"completed":false}`} 
            >pending</MenuItem>
            <MenuItem  value={`&where={"completed":true}`}  
            >Completed</MenuItem>

        </Select>
            {/* </FormControl> */}
            
    </Box>
    </>
)
}

export default MenuSort