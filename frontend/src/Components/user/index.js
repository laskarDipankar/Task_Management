import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState,useEffect } from "react";
import UserGallery from "./UserGallery";
import UserList from "./UserLIst";

const Index = () => {
    const [state, setstate] = useState(false)



return(
<>
    <Box
    sx={{
        marginTop:'5%',
        marginBottom:'1%',
        display:'flex',
        justifyContent:'center'
    }}
    >
        <button
        value='true'
        onClick={(e)=>setstate( true)}
        >Gallery</button>
        <button
        value='false'
        onClick={()=>setstate(false)}
        >List-View</button>
    </Box>
    {
        state ? <UserGallery/>:<UserList/>
    }

    


</>)
};

export default Index;
