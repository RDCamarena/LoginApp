import React, {  useState } from "react";
import {Box, Typography} from '@mui/material'
import {Router,Routes, Link, Route} from 'react-router-dom';
import  Axios  from "axios";
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'



import "./App.css";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  const [user, setUser] = useState() 
  

 
 
  
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>
    </Box>
  );
};

export default App;
