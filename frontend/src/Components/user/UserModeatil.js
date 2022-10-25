import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { border, Box, height, textAlign} from '@mui/system'
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import u6 from '../../Img/user/u6.svg'


const UserModetail = () => {
    const [individual,setUser] = useState([])
    const [tasks,setpendingTasks] = useState([])
    const [taskId,setTaskId] = useState({
        task:""
    })
    const [add,setadd]=useState()
    const params = useParams()
    // console.log(params.id)

    useEffect(() => {
        // axios.get(`https://taskmanagementtodo.herokuapp.com/api/tasks`)
        //     .then((res)=>{
        //         console.log(res.data)
        //     })





        axios
        .get(`https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`)
        .then((res)=>{
            console.log(res.data.data[0])
            setUser(res.data.data[0])
            setpendingTasks(res.data.data[0].pendingTasks)
        })
    },[params.id])

    const handleID = async () =>{
    await axios.put(`https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`
    // await axios.put(`http://localhost:9999/api/users/${params.id}`
    
    ,{
            taskd:taskId.task
        })
        .then((res)=>{
            alert(res.data.message)
        })
    }

    const handleInput =(e)=>{
        setTaskId((prev)=>({...prev,[e.target.name]:[e.target.value]}))

    }    
    
    console.log(taskId)



console.log(typeof(taskId))

return (
    <>
    
    <Dialog
    open={add}
    onClose={()=>setadd(false)}
    >
        <DialogTitle>
            Assign task to user
        </DialogTitle>


        <DialogContent>
            <TextField
            name='task'
            placeholder='add task _id'
            onChange={handleInput}
            >
                {/* {taskId.task} */}
            </TextField>


        </DialogContent>

        <DialogActions>
            <Button
            onClick={handleID}
            >
                Assign
            </Button>
        <Button
        onClick={()=>setadd(false)}>close</Button>
        </DialogActions>


    </Dialog>

    <Box
    sx={{
        height: 600,
        // width: "99.2%",
        marginTop:'10%',
        // border:'2px solid red',
        display:'grid',
        justifyContent:'center',
        alignItems:'center'
        
    }}
    >
        <Box
        
        sx={{
            height:600,
            // width:1000,
            // border:'2px solid green',
            display:'grid',
            
            placeItems:"center"
            // bgcolor:'red'
        }}>
            <Box
            sx={{
                width:400,
                // border:"2px solid yellow",
                display:'grid',
                gridTemplateRows:'30% 1fr',
                justifyContent:'center',
                // placeItems:"center",
                height:600,

            }}> 
            <Box
            
            sx={{
                height:150,
                width:300,
                // marginLeft:'%',
                marginTop:'8%',
                // border:"2px solid brown",
                display:"flex",
                flexDirection:"column",
                justifyContent:'center',
                background:'white',
                opacity:0.85,
                marginLeft:'2%'
                // alignItems:'center'

            }}>

            <Typography
            variant='p'
            component='div'
            sx={{
                // border:"2px solid red",
                textAlign:'center'
            }}
            
            >
                Name<span> : </span>
                {individual.name}
            </Typography>
            <Typography
            variant='h6'
            component='div'
            sx={{
                // border:"2px solid red",
                textAlign:'center'
                
            }}
            >
                email <span> : </span>
                {individual.email}
            </Typography>
            <Typography
            variant='p'
            component='div'
            sx={{
                // border:"2px solid red",
                textAlign:'center'
                
            }}
            >
                DateCreated <span> : </span>
                {individual.dateCreated}
            </Typography>
            <Box
            sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:"center",
                
            }}>

            {/* <Button>EDIT</Button> */}
            <Button
            size='small'
            onClick={(e)=>{
                // {handleID()}
                // {setTaskId(individual._id)}
                {setadd(true)}
            }}
            
            >Add-Task</Button>
            {/* <Button>EDIT</Button> */}
            </Box>
                </Box>
                <Box
                sx={{
                    // border:'2px solid pink',
                    // height:450,
                    width:300,
                    marginTop:'8%',
                    paddingLeft:'6%',
                    display:'grid',
                    gridTemplateColumns:'1fr',
                    marginLeft:'2%',
                    // justifyContent:'center'
                    alignitems:'center'

                }}>
                    {/* <Typography
                    textAlign={'center'}
                    >
                        Pending tasks 
                    </Typography> */}
                    {
                        

                        tasks.map((item)=>{
                            return(
                                <>
                                <Card
                                
                                sx={{
                                    // border:'2px solid greenyellow',
                                    marginTop:'4%',
                                    marginLeft:'9%',
                                    width:230,
                                    height:200,
                                    opacity:0.9
                                    
                                }}>
                                    <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="130"
                                    image={u6}
                                    sx={{
                                        // margin:4
                                    }}
                                    >

                                    </CardMedia>
                                    <CardContent
                                    sx={{
                                        textAlign:'center'
                                    }}>
                                    <NavLink to={`/tasks/${item}`}>
                                    <Typography
                                    variant='p'
                                    textAlign={'center'}
                                    >
                                        {item}
                                    </Typography>
                                </NavLink>

                                    </CardContent>
                                </Card>

                                
                                </>
                            )
                        })

                    }

                </Box>
            </Box>
            
        </Box>
    </Box>
    </>
)

}

export default UserModetail