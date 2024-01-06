import React, { useState } from "react"
import l from "../assets/l.png"
import {Link} from "react-router-dom"
import { toast } from "react-hot-toast";


const Navbar = (props) =>{
let isLoggedIn=props.isLoggedIn;
let setIsLoggedIn=props.setIsLoggedIn;



    return(
        <div className=" bg-gradient-to-r from-blue-100 to-green-100 flex justify-between item-center w-11/11 max-w-[1160x] py-3 px-10 mx-auto">

            {/* for logo */}

            <Link to="/">
            <img src={l} alt="l" width={160} height={32} loading="lazy"/>
            </Link>

          {/* for home  about  contact option */}
          
        <nav>
            <ul className="flex gap-x-3 text-richblack-100">
                <li className="flex">
                    <Link to="/" className="text-black ">Home</Link>
                </li>
                <li className="flex">
                    <Link to="/about" className="text-black">About</Link>
                </li>
                <li className="flex">
                    <Link to="/contact" className="text-black">Contect</Link>
                </li>
                
            </ul>
        </nav>



        {/* login-signup-logout-dashboard */}

        <div className="flex items-center gap-x-4">
{ 
    !isLoggedIn &&
    <Link to="/Login">
        <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
            Login
        </button>
    </Link>
}

{
    !isLoggedIn &&
    <Link to="/Signup">
        <button className="bg-richblack-800 text-richblack-100  py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
            Register
        </button>
    </Link>
}

{
    isLoggedIn &&
    <Link to="/">
        <button onClick={() =>{
            setIsLoggedIn(false);
            toast.success("Logged out");
        }}
        className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
            Logout
        </button>
    </Link>
}

{
    isLoggedIn &&
    <Link to="/Dashboard">
        <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
            Dashboard
        </button>
    </Link>
}

        </div>
        
        </div>
    )
}
export default Navbar 