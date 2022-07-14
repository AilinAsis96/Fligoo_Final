import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Users from './components/Users';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <Navbar/>
    <div className='container p-4'>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<Users/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;

