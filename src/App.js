import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Contact from "./pages/Contact";



 

function App() {
const[isLoggedIn,setIsLoggedIn]=useState(false);




  return (
  
   
    
    // <div className="w-screen h-screen  bg-richblack-900 flexflex-col">
    <div className="w-screen h-screen  flexflex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
     <Routes>   
     
       <Route path="/" element={<Home/>}/>
       <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/Dashboard" element={<Dashboard/>}/>
       <Route path="/About" element={<About/>} />
       <Route path="/Contact" element={<Contact />}/>
      


      </Routes>
    </div>
  );
}

export default App;
