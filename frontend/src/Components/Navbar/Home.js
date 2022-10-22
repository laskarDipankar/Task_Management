import { useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import UserRev from './UserRev'
import MobileHome from './MobileHome'

const Home = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))


  return (
    <>

    {matches? <MobileHome/>  : <UserRev/>}
    </>
  )
}

export default Home
