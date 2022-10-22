import { Button, Modal, TextField, Typography } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { Form } from 'react-router-dom'

const UpdaateUser = (props) => {

    const [open,setOpen]= useState(false)

    // setOpen(props.openM)
    // const closeModal = ()=>{
    //     props.openM = false
    // }


    // console.log(props.openM)
return (
<Box>
    <Button onClick={()=> setOpen(true
        ) }>Edit User</Button>
        <Modal open={open?open:props.openM} onClose={()=>setOpen(false)}>
    <Box
    sx={{
        maxWidth:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:"center"
    }}
    >
        <Typography
        variant='h6'
        component='div'
        sx={{
            width:'80%',
            height:'50%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            background:'white'
        }}
        >
            <form>
                <Box>
                    <TextField></TextField>
                    <TextField></TextField>
                </Box>
                <Box>
                    {/* <TextField></TextField> */}
                    <TextField></TextField>
                </Box>
                
            </form>
    <Button onClick={  ()=>{setOpen(false)}}>Submit</Button>
        </Typography>
      




    </Box>
        </Modal>
    
</Box>
)
}

export default UpdaateUser