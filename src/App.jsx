import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component.jsx/Navbar';
import Home from './Pages.jsx/Home';
import Register from './Pages.jsx/Register';
import Login from './Pages.jsx/Login';

const App = () => {
  return (
    <Router>
      <Navbar/>
<div className="container">
<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
</div>
      <ToastContainer/>
    </Router>
  )
}

export default App;
