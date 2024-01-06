import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiFillEye , AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase';

const SignupForm = ({setIsLoggedIn}) => {
  const navigate=useNavigate();

const[formData,setFormData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmpassword:"",

})

const[accountType,setAccountType]=useState("student");
const[showPassword,setShowPassword]=useState(false);
const[confPassword,setConfPassword]=useState(false);


 function submitHandler(event){
  event.preventDefault();
     if(formData.password.length<6){
     toast.error("!minimum 6 char is required");
     return;}
    

     if(formData.password!=formData.confirmpassword){
     toast.error("!passwords do no match");
     return;
     }

  
    toast.success("Account Created");
    const accountData={
      ...formData
    };
  

    navigate("/Signup");
 }

 const handelSubmission=()=>{
  console.log(formData);
  createUserWithEmailAndPassword(auth,formData.email,formData.password).then((res)=>{
 console.log(res); }
 ).catch(err=>console.log("error",err))
 }

 

  return (
   <div style={{ backgroundColor: 'azure',padding:10,borderRadius:9,borderColor:"black",borderWidth:1}}>
   <div className='flex bg-richblack-800 gap-z-1 my-6 rounded-full max-w-max '>
   <button
   className={`${accountType==="student"
   ?
   "bg-richblack-900 text-richblack-5"
   :"bg-transparent text-richblack-200 py-2 px- rounded-full transition-all duration-200"
   }`}
   onClick={()=> setAccountType ("student")}>
      HR
    </button>
    <button
    className={`${accountType==="instructor"
   ?
   "bg-richblack-900 text-richblack-5"
   :"bg-transparent text-richblack-200 py-2 px- rounded-full transition-all duration-200"
     }`}
     onClick={()=> setAccountType ("instructor")}>
      Manager
    </button>
   </div>
    
 <form onSubmit={submitHandler}>
   
   {/* firstname and last name */}
  <div className='flex justify-between'>
    <label>
    <p className='text-[0.875rem] text-black mb-1 leadin-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
    <input 
      required
      type='text'
      name='firstName'
    
      placeholder="Enter First Name"
      onChange = {(event)=>
      setFormData((prev)=>({...prev,firstName:event.target.value}))
      }
      value={formData.firstName}
      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

    />
    </label>

    <label>
    <p className='text-[0.875rem] text-black mb-1 leadin-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
    <input 
      required
      type='text'
      name='lastName'
      onChange = {(event)=>
      setFormData((prev)=>({...prev,lastName:event.target.value}))}
      placeholder='Enter Last Name'
      value={formData.lastName}
      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

    />
    </label>
  </div>

     {/* for email */}
    <label>
    <p className='text-[0.875rem] text-black mb-1 leadin-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
    <input 
      required
      type='email'
      name='email'
      onChange = {(event)=>
      setFormData((prev)=>({...prev,email:event.target.value}))}
      placeholder='Enter Email Address'
      value={formData.email}
      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

    />
    </label>

    {/* creatpassword and confirmpassword */}
 
   <div className='flex justify-between'>
   <label className='relative'>
    <p className='text-[0.875rem] text-black mb-1 leadin-[1.375rem]'>Creat Password (min 6 char)<sup className='text-pink-200'>*</sup></p>
    <input 
      required
      type={showPassword?("text"):("password")}
      name='password'
      onChange = {(event)=>
      setFormData((prev)=>({...prev,password:event.target.value}))}
      placeholder='password'
      value={formData.password}
      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

    />
    <span
    className='absolute right-3 top-[38px] cursor-pointer ' 
     onClick={() =>setShowPassword((prev) =>!prev)}>
      {showPassword ? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
     </span>
  </label>
  
 

  <label className='relative'>
    <p className='text-[0.875rem] text-black mb-1 leadin-[1.375rem]'> Confirm Password<sup className='text-pink-200'>*</sup></p>
    <input 
      required
      type={confPassword?("text"):("password")}
      name='confirmpassword'
      onChange = {(event)=>
      setFormData((prev)=>({...prev,confirmpassword:event.target.value}))}
      placeholder='Confirm Password'
      value={formData.confirmpassword}
      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

    />
    <span 
    className='absolute right-3 top-[38px] cursor-pointer ' 
    onClick={() =>setConfPassword((prev) =>!prev)}>
      {confPassword ? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
     </span>
  </label>  
   </div>
    
  <button
   onClick={handelSubmission}
  className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
  >
    Creat Account
  </button> 


 </form>

   
   </div>
  )
}
export default SignupForm
