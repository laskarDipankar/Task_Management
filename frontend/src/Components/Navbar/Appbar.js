import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import Navbar from "./Navbar";
import AppbarMobile from "./AppbarMobile";

import React from 'react'

const Appbar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
    {matches? <AppbarMobile/> :<Navbar/>}
    </>
  )
}

export default Appbar