import './App.css';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';


import React from 'react'
import UserGallery from './Components/user/UserGallery';
import Index from './Components/user/index';
// import Details from './Components/user/Details';
import Navbar from './Components/Navbar/Navbar';
import TaskDetails from './Components/task/TaskDetails';
import TaskGallery from './Components/task/TaskGallery';
import Appbar from './Components/Navbar/Appbar';
// import UserRev from './Components/Navbar/UserRev';
import Home from './Components/Navbar/Home';
import UserMobile from './Components/user/userMain';
import Detail from './Components/user/Detail';

const App = () => {
  return (

    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/users' element={<UserMobile/>} />
      <Route path = '/tasks' element ={<TaskGallery/>}/>
      <Route path='/users/:id' element={<Detail/>} />
      <Route path = '/tasks/:id' element ={<TaskDetails/>}/>
      


    </Routes>
    </BrowserRouter>
    
  )
}

export default App
