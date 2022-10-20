import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { bgcolor, display } from "@mui/system";
import Pagination from "../Pagination/Pagination";


const UserList = () => {
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




return (<>
<Pagination getData={getData}/>

<Box sx={{
    marginTop:'13%',
    display:'grid',
    gridTemplateColumns:'repeat(1fr)'
}}>
        {
            state.map((item)=>{
                return(
                <>

            <h1>{item.name}</h1>

                </>)
            })
        }
    </Box>
    </>
)
}

export default UserList