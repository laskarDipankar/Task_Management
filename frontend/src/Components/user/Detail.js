import UserDetails from "./UserDetails";
import UserModetail from "./UserModeatil";
import { useMediaQuery,useTheme,Box } from "@mui/material";
import React from 'react'
import sand from '../../Img/sand.jpg'


const Detail = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
    <Box
    sx={{
        backgroundImage: `url(${sand})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
    }}
    >
    {   matches ? <UserModetail/> : <UserDetails/>                   }

    </Box>
    </>
  )
}

export default Detail
