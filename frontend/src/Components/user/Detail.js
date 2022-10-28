import UserDetails from "./UserDetails";
import UserModetail from "./UserModeatil";
import { useMediaQuery,useTheme,Box } from "@mui/material";
import React from 'react'
import sand from '../../Img/sand.jpg'
import detail from '../../Img/details.png'


const Detail = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
    <Box
    sx={{

        
        backgroundImage: `url(${detail})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        // background:'rbga(222,2,155,0.6)'
  
        
    }}
    >
    {   matches ? <UserModetail/> : <UserDetails/>                   }

    </Box>
    </>
  )
}

export default Detail
