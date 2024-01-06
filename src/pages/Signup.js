import React from 'react'
import signupImg from "../assets/signup.png"
import Templete from '../components/Templete'


const Signup = ({setIsLoggedIn}) => {
  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
      <Templete
     title="Join the millions find HR and Manager for free"
     desc1="Find professionals today,tomorrow,and beyond"
     desc2="Wel come to StudyMonk Register page"
     image={signupImg}
     formtype="signup"
     setIsLoggedIn={setIsLoggedIn}

   />
    </div>
    
  )
}
export default Signup