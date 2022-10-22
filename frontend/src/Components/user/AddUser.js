import { Button,TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { send } from 'process'

const AddUser = () => {
    const [isFlag,setisflag] = useState(false)
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
        
        axios.post('https://taskmanagementtodo.herokuapp.com/api/users',{
            name:input.name,
            email:input.email
        })
        .then((res)=>{
            alert(res.data.message)  
            console.log(res.data.message)
        })
        .catch((err)=>{
            // console.log(res.data.message)
            alert(err.message)
        })

    
    }

    var createUser =()=>{
        if(isFlag==false){

            setisflag(true)
        }else{
            setisflag(false)

            console.log(isFlag)
        }
            
            // isFlag = true
    }

  


return (
    <>
    <Box
    sx={{
        display:'flex',
        justifyContent:'center',
        marginTop:'5%%'
    }}>
    <Button
    sx={{
        backgroundColor:'greenyellow',
        marginBottom:'2%'
    }}
    variant='contained'
    onClick={createUser}
    >Create-User</Button>
    </Box>
    
    
{

isFlag?

    <form onSubmit={handleSubmit}>            
<Box
sx={{
    display:'flex',
    justifyContent:'center',
    
    
}}
>

<Box
>
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
variant='outlined'
onClick={(e)=>{{saveToDb()}{setisflag(false)}}}
type='submit'>submit</Button>
</Box>
    </form>

:""
}

    </>)
}

export default AddUser
