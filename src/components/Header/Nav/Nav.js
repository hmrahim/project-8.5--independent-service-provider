import React,{ useState }  from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
import logo from "./w_logo.png"
import { BeakerIcon,MenuIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import {signOut} from "firebase/auth"

const Nav = () => {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  const logout = ()=> {
    signOut(auth)
    navigate("/login")
  }
  const [open,setOpen] = useState(false)

  const navToggle = ()=> {
    setOpen(!open)
  }
  return (
   <div>
       <div className="flex justify-between flex-row-reverse">
         <p  onClick={navToggle} className="block md:hidden mx-3 cursor-pointer text-white" style={{height:"50px",width:"50px"}}><MenuIcon ></MenuIcon></p>
         <div className="mx-3 md:hidden block my-2"><img height={50} width={100} src={logo} alt="" /></div>

       </div>
        <nav style={{transition:"1s"}} className={`w-full md:w-4/5 mx-auto ${open ? "hidden" : ""} bg-orange-400 py-4 flex flex-col md:flex-row justify-between items-center`}>
        <div className="mx-3 hidden md:block"><img height={50} width={100} src={logo} alt="" /></div>
      <ul className=" flex flex-col md:flex-row justify-center items-center">
        <li>
          <NavLink activeClassName="active" className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" to="/">Home</NavLink>
        </li>
      
        <li>
          <NavLink activeClassName="active" className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" to="/service">Services</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" to="/trainer">My Team</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" to="/pricing">Pricing</NavLink>
        </li>
       
        <li>
          <NavLink activeClassName="active" className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" to="/blogs">Blog</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="py-3 my-3 md:my-0 px-2 text-base hover:text-white" to="/about">About</NavLink>
        </li>
      
      </ul>
      <div className=" my-4 md:my-0 md:mx-3">
        {
          user ? 
         <a onClick={logout} className="text-xl bg-white py-2 px-4 rounded hover:text-black   text-orange-400 cursor-pointer" >Logout</a>
          : 
          <Link className="text-xl bg-white py-2 px-4 rounded hover:text-black   text-orange-400 " to="/login">Login</Link>
        }
      </div>
    </nav>
    
   </div>
  );
};

export default Nav;
