import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { bgcolor, display } from "@mui/system";

const UserGallery = () => {
    const [state, setstate] = useState([]);
    const [page,setpage] = useState(0)

    useEffect(() => {
    axios.get(`https://taskmanagementtodo.herokuapp.com/api/users?skip=${page}&limit=9`)
    .then((res) => {

        setstate(res.data.Data);
        // console.log(res.data.Data);

});
    },[page])

    const Nextpage=(e)=>{
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



console.log(page)
return (<>
   

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
