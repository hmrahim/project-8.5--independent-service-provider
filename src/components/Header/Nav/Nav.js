import React from "react";
import { Link } from "react-router-dom";
import logo from "./w_logo.png"
import { BeakerIcon,MenuIcon } from '@heroicons/react/solid'

const Nav = () => {
  return (
   <div>
       <div className="flex justify-between flex-row-reverse">
         <p className="block md:hidden mx-3 cursor-pointer" style={{height:"50px",width:"50px"}}><MenuIcon ></MenuIcon></p>
         <div className="mx-3 md:hidden block my-2"><img height={50} width={100} src={logo} alt="" /></div>

       </div>
        <nav className="w-full md:w-4/5 mx-auto bg-orange-400 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mx-3 hidden md:block"><img height={50} width={100} src={logo} alt="" /></div>
      <ul className=" flex flex-col md:flex-row justify-center items-center">
        <li>
          <a className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" href="">Home</a>
        </li>
        <li>
          <a className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" href="">About us</a>
        </li>
        <li>
          <a className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" href="">Services</a>
        </li>
        <li>
          <a className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" href="">Blog</a>
        </li>
      
      </ul>
      <div className=" my-4 md:my-0 md:mx-3">
          <a className="text-xl bg-white py-2 px-4 rounded hover:text-black   text-orange-400 " href="">Login</a>
      </div>
    </nav>
    
   </div>
  );
};

export default Nav;
