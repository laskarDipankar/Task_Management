import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/system";

const TaskDetails = () => {
    const[tasks,setTasks]=useState([])
    const params = useParams()

    useEffect(()=>{
        axios.get(`https://taskmanagementtodo.herokuapp.com/api/tasks/${params.id}`)
        .then((res)=>{
            console.log(res.data.results)
            setTasks(res.data.results)
        })
    },[params.id])

    const status =(tasks.completed+"")
    console.log(status)
  return (
    <>
    <Box
    sx={{
      margin:'5%'
    }}>
    <h1>{` Taskname: ${tasks.name}`}</h1>
    <h1>{`Status : ${status}`}</h1>
    <p>{`Description :${tasks.description}`}</p>
    <h1>{`Assigned-User : ${tasks.assignedUser}`}</h1>
    <h1>{`Assigned User Name : ${tasks.assignedUserName}`}</h1>
    <h1>{`Deadline : ${tasks.deadline}`}</h1>
    </Box>
    </>
    
    // <div>
        /* <h1>{` Taskname: ${tasks.name}`}</h1> */
    //     <h1>{`Status : ${status}`}</h1>
    //     <p>{`Description :${tasks.description}`}</p>
    //     <h1>{`Assigned-User : ${tasks.assignedUser}`}</h1>
    //     <h1>{`Assigned User Name : ${tasks.assignedUserName}`}</h1>
    //     <h1>{`Deadline : ${tasks.deadline}`}</h1>

    // </div>
  )
}

export default TaskDetails