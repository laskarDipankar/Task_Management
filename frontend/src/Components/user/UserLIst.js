import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { bgcolor, display } from "@mui/system";

const UserList = () => {
    const [state, setstate] = useState([]);
    const [page,setpage] = useState(0)

    useEffect(() => {
    axios.get(`http://localhost:8999/api/users?skip=${page}&limit=9`)
    .then((res) => {

        setstate(res.data.Data);
        // console.log(res.data.Data);

});
    },[page])


    const Nextpage=(e)=>{
        console.log(e.target.value)
        if(page >=40){
            return 0
        }else{

            setpage(item=>item+9)
        }

    }
    const Previouspage=(e)=>{
        console.log(e.target.value)
        if(page==0){
            return 0
        }else{

            setpage(item=>item-9)
        }

    }




return (<>

<Button

    onClick={Previouspage}
    >Previous</Button>
    <Button
    value='hello'
    onClick={Nextpage}
    >Next</Button>

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