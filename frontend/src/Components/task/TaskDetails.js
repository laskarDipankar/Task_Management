import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router";

const TaskDetails = () => {
    const[tasks,setTasks]=useState([])
    const params = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8999/api/tasks/${params.id}`)
        .then((res)=>{
            // console.log(res.data.results)
            setTasks(res.data.results)
        })
    },[])

    const status =(tasks.completed+"")
    // console.log(status)
  return (
    <div>
        <h1>{` Taskname: ${tasks.name}`}</h1>
        <h1>{`Status : ${status}`}</h1>
        <p>{`Description :${tasks.description}`}</p>
        <h1>{`Assigned-User : ${tasks.assignedUser}`}</h1>
        <h1>{`Assigned User Name : ${tasks.assignedUserName}`}</h1>
        <h1>{`Deadline : ${tasks.deadline}`}</h1>

    </div>
  )
}

export default TaskDetails