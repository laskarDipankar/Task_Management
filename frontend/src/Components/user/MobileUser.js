import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState,useEffect } from "react";
import UserMolist from "./UserMOlist";
import UserMOGallery from "./UsermoGallery";
const MobileUser = (props) => {
    const [state, setstate] = useState(props.state)

    // console.log(props.state)


    const handleTrue =()=>{
        setstate(true)
        props.getBool(true)
        
    }
    const handleFalse =()=>{
        setstate(false)
        props.getBool(false)
        
    }





return(
<>
    <Box
    sx={{
        marginTop:'25%',
        marginBottom:'1%',
        display:'flex',
        justifyContent:'center'
    }}
    >
        <button
        value='true'
        onClick={handleTrue}
        >Gallery</button>
        <button
        value='false'
        onClick={handleFalse}
        >List-View</button>
    </Box>
        
    {
        state ? <UserMOGallery/>:<UserMolist/>
    }

    


</>)
};

export default MobileUser;
