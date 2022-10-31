import { InputLabel,Box,TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const Api = (props) => { 

    // const [api,setApi] = useState()

const getinput = (e)=>{
    props.getApi(e.target.value)    
    console.log(e.target.value)
}
const handleSubmit = (e) =>{
e.target.preventDefault()
e.target.reset()

}


return (
    <Box>
        <form

        onSubmit={handleSubmit}
        
        >

        <InputLabel>Put your Api</InputLabel>       
        <TextField
        onChange={getinput}
        
        >

        </TextField>
        <Button
        type="submit"
        >submit</Button>
        </form>
    </Box>
)
}

export default Api