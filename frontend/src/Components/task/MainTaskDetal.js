import { useMediaQuery,useTheme } from "@mui/material";
import TaskMoDetails from "./TaskModetail";
import TaskDetails from "./TaskDetails";




const MainTaskDetal = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
    {matches? <TaskMoDetails/> : <TaskDetails/> }
    </>
  )
}

export default MainTaskDetal