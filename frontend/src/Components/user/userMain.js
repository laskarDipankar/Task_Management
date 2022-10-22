import React from 'react'
import { useMediaQuery } from '@mui/material'
import {useTheme} from '@mui/material'
import Index from '.'

const UserMobile = () => {

  const theme = useTheme()
  const matches =useMediaQuery(theme.breakpoints.down('md'))


  return (
    <>
    {matches ? <h1>mobile view</h1>:<Index/>}
    </>
  )
}

export default UserMobile