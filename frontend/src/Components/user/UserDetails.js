import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const UserDetails = () => {
    const [individual,setUser] = useState([])
    const [tasks,setpendingTasks] = useState([])
    const params = useParams()
    // console.log(params.id)

    useEffect(() => {
        axios
        .get(`https://taskmanagementtodo.herokuapp.com/api/users/${params.id}`)
        .then((res)=>{
            // console.log(res.data.data[0])
            setUser(res.data.data[0])
            setpendingTasks(res.data.data[0].pendingTasks)
        })
    },[params.id])




// console.log(individual.pendingTasks.length)

  return (
    <div>
    {
        <div >
            <h1>{`NAME : ${individual.name}` }</h1>
            <h1>{ `EMAIL: ${individual.email}  `}</h1>
            <h1>PendingTasks :</h1>
            {
                tasks.map((item)=>{
                    return <NavLink to={`/tasks/${item}`}><h1>{item}</h1></NavLink>
                })
            }
            
            <h1>{ individual.dateCreated }</h1>

        </div>

    }
    </div>
  )
}

export default UserDetails