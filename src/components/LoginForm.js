import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye , AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase';

const LoginForm = ({setIsLoggedIn}) => {
  const navigate=useNavigate();
   
  const[formData,setFormData]=useState({email:"",password:""})
  const[showPassword,setShowPassword]=useState(false);

  
  function submitHandler(event){
event.preventDefault();
// setIsLoggedIn(true);
//     
} 

  const handelSubmission=()=>{
    
    // console.log(formData);
    signInWithEmailAndPassword(auth,formData.email,formData.password).then((res)=>{
      setIsLoggedIn(true);
      navigate("/Dashboard");
      toast.success("Logged In");

}
   ).catch((err)=>{toast.error("!somthing is wrong")})
   }

  return (
    <div style={{ backgroundColor: 'azure',padding:10,borderRadius:9,borderColor:"black",borderWidth:1}}>

   
   <form onSubmit={submitHandler}
   className='flex flex-col w-full gap-y-4 mt-6'>
    <label className='w-full'>
    <p className='text-[0.875rem] text-black mb-1 leadin-[1.375rem]'>
        Email Address<sup className='text-pink-200'>*</sup>
    </p>

    <input
    required
    type='email'
    value={formData.email}
    onChange = {(event)=>
      setFormData((prev)=>({...prev,email:event.target.value}))
      }
    placeholder='Enter email address'
    name='email' 
    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
     />
    </label>

    <label className='w-full relative'>
    <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
        password<sup className='text-pink-200'>*</sup>
    </p>

    <input
    required
    type={showPassword? ("text") : ("password") }
    value={formData.password}
    onChange = {(event)=>
      setFormData((prev)=>({...prev,password:event.target.value}))
      }
    placeholder='Enter password'
    name='password'
    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
     />

     <span
     className='absolute right-3 top-[38px] cursor-pointer ' 
     onClick={() =>setShowPassword((prev) =>!prev)}>
      {showPassword ? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
     </span>
     <Link to="#"> 
      <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto  '>
        Forgot password
      </p>
     </Link>
    </label>

    <button 
    onClick={handelSubmission}
    className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
      Sign in
    </button>
   </form>
   </div>
  )
}

export default LoginForm
