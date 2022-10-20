import { Button,TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const AddUser = () => {
    const [input, setInput]=useState({
        name:'',
        email:''
    })

    const handleChange =(e)=>{
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
        // console.log(input)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(input)
        e.target.reset();
    }
    const saveToDb = () =>{
        axios.post('http://localhost:9999/api/users',{
            name:input.name,
            email:input.email
        })
        .then((res)=>{
            alert(res.data.message)
        })

    
      }




return (
    <>
<form onSubmit={handleSubmit}>

<Box>
<TextField
name="name"
onChange={handleChange}
placeholder='Name'
>
{input.name}
</TextField>
</Box>
<Box>
<TextField
name="email"
onChange={handleChange}
placeholder='email'
>
{input.email}
</TextField>
</Box>
<Button
onClick={saveToDb}
type='submit'>submit</Button>
    </form>





    </>)
}

export default AddUser
