import React from 'react'
import { useMediaQuery } from '@mui/material'
import { useState } from 'react'
import {useTheme} from '@mui/material'
import Index from '.'
import MobileUser from './MobileUser'
import { Box } from '@mui/system'
import {Button} from '@mui/material'
import office from '../../Img/office.svg'


const UserMobile = () => {
  const [state, setstate] = useState(false)

  const theme = useTheme()
  const matches =useMediaQuery(theme.breakpoints.down('md'))

  const getBool =(data) =>{
    // console.log(data)

    setstate(data)

  }

  // getBool(state)
  // console.log(state)


  return (
    <>
    <Box
    sx={{
      // backgroundColor:'rgba(128,0,0,0.5)',
      // zIndex:9999,
      
      
      backgroundImage: `url(${office})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
    }}
    >




    {matches ? <MobileUser  state={state} getBool={getBool} />:<Index state={state} getBool={getBool} />}

    

    </Box>
    
    </>
  )
}

export default UserMobile