import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { bgcolor, display } from "@mui/system";
import Pagination from "../Pagination/Pagination";
import AddUser from "./AddUser";

const UserGallery = () => {
    const [state, setstate] = useState([]);
    const [page,setpage] = useState(0)

    useEffect(() => {
    axios.get(`http://localhost:9999/api/users?skip=${page}&limit=9`)
    .then((res) => {

        setstate(res.data.Data);
        // console.log(res.data.Data);

});
    },[page])

    const getData=(data)=>{
        setpage(data)
        }




console.log(page)
return (<>
<Pagination getData={getData}/>

<AddUser/>

<Box sx={{
    marginTop:'13%',
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)'
}}>
   
        {
            state.map((item)=>{
                return(
                <>

                <Card sx={{
                    height:'20rem',
                    widht:'15rem',
                    border:'3px solid red'
                    }}>
                    <CardContent
                    sx={{
                        bgcolor:'yellow',
                        
                    }}
                    >
                    <NavLink to ={`/users/${item._id}`}
                    style={({ isActive }) => ({ 
                        color: isActive ? 'greenyellow' : 'white' })}
                        
                        >
                    <Typography
                    color='black'>{item.name}</Typography>
                    </NavLink>
                    </CardContent>
                </Card>

                </>)
            })
        }
    </Box>
    </>
)
}

export default UserGallery
