import React from 'react'
import loginImg from "../assets/login.png"
import Templete from '../components/Templete'


const Login = ({setIsLoggedIn}) => {
  return (
   <Templete
     title="Welcome Back"
     desc1="Find best HR/Manager here"
     desc2="Login here"
     image={loginImg}
     formtype="login"
     setIsLoggedIn={setIsLoggedIn}

   />
  )
}
export default Login
