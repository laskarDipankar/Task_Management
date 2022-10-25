import { useMediaQuery,useTheme } from "@mui/material";
import TaskMoGallery from "./TaskMogallery";
import TaskGallery from "./TaskGallery";




const MainTaskGallery = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
    {matches? <TaskMoGallery/> : <TaskGallery/> }
    </>
  )
}

export default MainTaskGallery