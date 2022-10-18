import { useEffect,useState } from "react"
import axios from "axios"
import { Outlet } from "react-router"
import { Box } from "@mui/material"


const TaskGallery = () => {

    const [Tasks,setTask] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8999/api/tasks?limit=9")
        .then((res)=>{
            console.log(res.data.data)
            setTask(res.data.data)

        })

    },[])





return (
    <Box sx={{
        marginTop:'13%'
    }}>
        {
            Tasks.map((item)=>{
                return(
                    <>
                <div className="box-task">

                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <h1>{item.assignedUserName}</h1>
                    <h1>{item.completed+""}</h1>
                    <h1>{item.deadline}</h1>
                    <h1>{item.dateCreated}</h1>

                </div>
                </>
        )}
    )}
    </Box>
    )
}


export default TaskGallery