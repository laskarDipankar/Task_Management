import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState,useEffect } from "react";
import UserGallery from "./UserGallery";
import UserList from "./UserLIst";

const Index = (props) => {
    const [state, setstate] = useState(props.state)

    

    // console.log(props.state)
    const handleTrue =()=>{
        setstate(true)
        props.getBool(true)
        // console.log(props.state)
        
    }
    const handleFalse =()=>{
        setstate(false)
        props.getBool(false)
        
    }

    



return(
<>
    <Box
    sx={{
        marginTop:'7%',
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
        state ? <UserGallery  />:<UserList  />
    }

    


</>)
};

export default Index;
