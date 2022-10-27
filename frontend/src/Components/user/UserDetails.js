import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { border, Box, height, textAlign} from '@mui/system'
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import u6 from '../../Img/user/u6.svg'
import sand from '../../Img/sand.jpg'




const UserDetails = () => {
    const [individual,setUser] = useState([])
    const [Updatedetail,setUpdatedetail] =useState()
    const [tasks,setpendingTasks] = useState([])
    const [arr,setArr] = useState([])
    
    const [taskId,setTaskId] = useState()
    const [add,setadd]=useState()
    const [status,setStatus] = useState([])
    // const [name,setame]=useState([])
    const[tname,setname]=useState([])
    const params = useParams()
    var tarray = []

    
    // console.log(params.id)

    useEffect(  ( ) => {


        axios.get(`http://localhost:9999/api/tasks?limit=20&where={'completed':true}`)
        .then((res)=>{
            setStatus(res.data.data)
            // console.log(res.data)
        })





        
    axios
        .get(`https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`)
        // .get(`http://localhost:9999/api/users/${params.id}`)
        .then((res)=>{
            // console.log(res.data.data[0])
            setUser(res.data.data[0])
            setpendingTasks(res.data.data[0].pendingTasks)

            // console.log(tasks)
            console.log(res.data.data[0].pendingTasks)
            res.data.data[0].pendingTasks.map( (item)=>{


                console.log(`http://localhost:9999/api/tasks/${item}?where={'completed':true}`)
                axios.get(`http://localhost:9999/api/tasks/${item}?where={'completed':true}`)
                .then((res)=>{
                    console.log(res.data.results,"jjjj")

                    tarray.push(res.data.results.name)

                    // setname(tarray)
                })
            })
            console.log(tarray,"array1")
            updatearray(tarray)
            console.log(tname,"usatat fff")
        })
    },[params.id,Updatedetail])

    // const Sorry = () =>{
    //     alert('I am working on it , thanks for your patience')
    // }




    const updatearray=(data)=>{

        setname(data)

    }

    const handleID = async () =>{

        // console.log()
    await axios.put(`https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`
    // await axios.put(`http://localhost:9999/api/users/${params.id}`
    
    ,{
            taskd:taskId
        })
        .then((res)=>{
            alert(res.data.message)
            setUpdatedetail(res.data.data)
        })
    }

    const handleInput =(e)=>{
        setTaskId((prev)=>({...prev,[e.target.name]:[e.target.value]}))

    }    



        
    console.log(tname,"tarray")
    


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
                        <Box>
                            {/* <FormControl
                            sx={{ m: 1, width: 300, mt: 3 }}
                            > */}
                                <Select

                                sx={{
                                    width:400,
                                    margin:'10px',
                                    label:`${taskId}`
                                    // placeholder:'select'

                                }}
                                
                                >


                                    {
                                        status.map((item)=>{
                                            return(

                                                <MenuItem
                                                onClick={()=>{setTaskId(item._id)}}
                                                >{item.name}</MenuItem>
                                            )


                                        })

                                    }
                                </Select>
                            {/* </FormControl> */}
                        </Box> 
            
            <TextField
            sx={{
                width:400,
                margin:'10px'
            }}
            name='task'
            placeholder='add task _id'
            onChange={handleInput}
            >
                {taskId}
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
                // border:"2px solid yellow",
                display:'grid',
                gridTemplateRows:'30% 1fr',
                justifyContent:'center',
                // placeItems:"center",
                height:800,

            }}> 
            <Box
            
            sx={{
                height:150,
                width:500,
                marginTop:'8%',
                marginLeft:'8%',
                // border:"2px solid brown",
                display:"flex",
                flexDirection:"column",
                justifyContent:'center',
                // alignItems:'center'
                background:'transparent',
                backdropFilter:'blur(20px)',
                opacity:0.9

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
                Email <span> : </span>
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
                DateCreated <span> : </span>
                {individual.dateCreated}
            </Typography>
            <Box
            sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:"center",
                gap:'2px',
                
            }}>
            <Button
            sx={{
                backgroundColor:'#92D293'
            }}
            onClick={(e)=>{
                // {handleID()}
                // {setTaskId(individual._id)}
                {setadd(true)}

        
            }}
            
            >Add-Task</Button>
            <Button
            sx={{
                backgroundColor:'#92D293'
            }}
            // onClick={pendingTask}
            >Show Pending tasks</Button>
            </Box>
                </Box>
                <Box
                sx={{
                    // border:'2px solid pink',
                    height:450,
                    width:600,
                    marginTop:'8%',
                    // paddingLeft:'50%',
                    display:'grid',
                    gridTemplateColumns:'repeat(2,1fr)',
                    marginLeft:'8%'
                    // justifyContent:'center'

                }}>
                    {/* <Typography
                    textAlign={'center'}
                    >
                        Pending tasks 
                    </Typography> */}
                    {
                        

                        tname.map((item)=>{
                            return(
                                <>
                                <Card
                                
                                sx={{
                                    // border:'2px solid greenyellow',
                                    marginTop:'2%',
                                    marginLeft:'9%',
                                    width:250,
                                    height:200,
                                    opacity:0.8
                                    
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


                                        {

                                        }
                                    </Typography>
                                </NavLink>

                                    </CardContent>
                                </Card>

                                {/* {
                                    {tarray}
                                } */}

                            
                            

                                
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



            
