import './App.css';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';


import React from 'react'
import UserGallery from './Components/user/UserGallery';
import Index from './Components/user/index';
import UserDetails from './Components/user/UserDetails';
import Navbar from './Components/Navbar/Navbar';
import TaskDetails from './Components/task/TaskDetails';
import TaskGallery from './Components/task/TaskGallery';
import { AppBar } from '@mui/material';
import UserRev from './Components/Navbar/UserRev';

const App = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<UserRev/>}/>
      <Route path='/users' element={<Index/>} />
      <Route path = '/tasks' element ={<TaskGallery/>}/>
      <Route path='/users/:id' element={<UserDetails/>} />
      <Route path = '/tasks/:id' element ={<TaskDetails/>}/>
      


    </Routes>
    </BrowserRouter>
    
  )
}

export default App
