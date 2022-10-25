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
import MainTaskDetal from './Components/task/MainTaskDetal';
import MainTaskGallery from './Components/task/Maintaskgallery';

const App = () => {
  return (

    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/users' element={<UserMobile/>} />
      <Route path = '/tasks' element ={<MainTaskGallery/>}/>
      <Route path='/users/:id' element={<Detail/>} />
      <Route path = '/tasks/:id' element ={<MainTaskDetal/>}/>
      


    </Routes>
    </BrowserRouter>
    
  )
}

export default App
