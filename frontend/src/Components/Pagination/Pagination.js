import React from 'react'
import { useState } from 'react'
import { Button ,Box} from '@mui/material'

const Pagination = (props) => {
    const [page,setpage] = useState(0)


    const Nextpage=(e)=>{
        console.log(e.target.value)
        if(page >=40){
            return 0
        }else{

            setpage(item=>item+9)
            props.getData(page)
        }

    }
    const Previouspage=(e)=>{
        console.log(e.target.value)
        if(page==0){
            return 0
        }else{

            setpage(item=>item-9)
            props.getData(page)
        }

    }





  return (
    <>
    <Box
    sx={{
        display:'flex',
        justifyContent:'center'
    }}>

<Button
onClick={Previouspage}
>Previous</Button>
<Button
value='hello'
onClick={Nextpage}
>Next</Button>
    </Box>

    </>
  )
}

export default Pagination