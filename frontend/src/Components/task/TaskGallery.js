import { useEffect,useState } from "react"
import axios from "axios"
// import { Outlet } from "react-router"
import { Box } from "@mui/material"
import { NavLink } from "react-router-dom"
import Pagination from "../Pagination/Pagination"


const TaskGallery = () => {

    const [Tasks,setTask] = useState([])
    const [page,setpage]=useState(0)

    useEffect(()=>{
        axios.get(`https://taskmanagementtodo.herokuapp.com/api/tasks?skip=${page}&limit=9`)
        .then((res)=>{
            console.log(res.data.data)
            setTask(res.data.data)

        })

    },[page])

const getData =(data)=>{
    setpage(data)
}





return (
    <>
    

    <Box sx={{
        marginTop:'13%'
    }}>
        <Pagination getData={getData}/>
        {
            Tasks.map((item)=>{
                return(
                    <>
                <div className="box-task">

                    <NavLink to={`/tasks/${item._id}`}>
                    <h1>{item.name}</h1>
                    </NavLink>
                    {/* <p>{item.description}</p> */}
                    {/* <h1>{item.assignedUserName}</h1> */}
                    {/* <h1>{item.completed+""}</h1> */}
                    {/* <h1>{item.deadline}</h1> */}
                    {/* <h1>{item.dateCreated}</h1> */}

                </div>
                </>
        )}
    )}
    </Box>
    </>
    )
}


export default TaskGallery