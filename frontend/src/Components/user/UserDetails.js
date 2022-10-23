import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { border, Box, height, textAlign} from '@mui/system'
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import u6 from '../../Img/user/u6.svg'


const UserDetails = () => {
    const [individual,setUser] = useState([])
    const [tasks,setpendingTasks] = useState([])
    const [taskId,setTaskId] = useState({
        task:0
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
       await axios.put(`https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`,{
            taskd:taskId.toString()
        })
        .then((res)=>{
            alert(res.data.message)
        })
    }

    const handleInput =(e)=>{
        setTaskId((prev)=>({...prev,[e.target.name]:[e.target.value]}))

    }    
    
    console.log(taskId)



// console.log("hello")

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
        height: 890,
        width: "99.2%",
        marginTop:'5.5%',
        // border:'2px solid red',
        display:'grid',
        justifyContent:'center',
        alignItems:'center'
        
    }}
    >
        <Box
        
        sx={{
            height:800,
            width:1000,
            // border:'2px solid green',
            display:'grid',
            
            placeItems:"center"
            // bgcolor:'red'
        }}>
            <Box
            sx={{
                width:800,
                border:"2px solid yellow",
                display:'grid',
                gridTemplateRows:'30% 1fr',
                justifyContent:'center',
                // placeItems:"center",
                height:800,

            }}> 
            <Box
            
            sx={{
                height:150,
                width:600,
                marginTop:'8%',
                border:"2px solid brown",
                display:"flex",
                flexDirection:"column",
                justifyContent:'center',
                // alignItems:'center'

            }}>

            <Typography
            variant='h6'
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
            variant='h6'
            component='div'
            sx={{
                // border:"2px solid red",
                textAlign:'center'
                
            }}
            >
                dateCreated <span> : </span>
                {individual.dateCreated}
            </Typography>
            <Box
            sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:"center"
            }}>

            <Button>EDIT</Button>
            <Button
            onClick={(e)=>{
                // {handleID()}
                // {setTaskId(individual._id)}
                {setadd(true)}
            }}
            
            >Add-Task</Button>
            <Button>EDIT</Button>
            </Box>
                </Box>
                <Box
                sx={{
                    border:'2px solid pink',
                    height:450,
                    width:600,
                    marginTop:'8%',
                    // paddingLeft:'50%',
                    display:'grid',
                    gridTemplateColumns:'repeat(2,1fr)',
                    // justifyContent:'center'

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
                                    border:'2px solid greenyellow',
                                    marginTop:'2%',
                                    marginLeft:'9%',
                                    width:250,
                                    height:200,
                                    
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

export default UserDetails

{/* <h1>{ `EMAIL: ${individual.email}  `}</h1>
            <h1>PendingTasks :</h1>
            {
                tasks.map((item)=>{
                    return <NavLink }><h1>{item}</h1></NavLink>
                })
            }
            
            <h1>{ individual.dateCreated }</h1> */}
