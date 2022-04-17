import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [
    signInWithEmailAndPassword,
    loginuser,
    loginloading,
    loginerror,
  ] = useSignInWithEmailAndPassword(auth);

  const naviget = useNavigate()
  const handleEmail = e=> {
    setEmail(e.target.value)
  }
  const handlePassword = e=> {
    setPassword(e.target.value)
  }
if(loginuser){
  naviget("/")
}
  const handleSubmit = e=> {
    e.preventDefault()
    signInWithEmailAndPassword(email,password)
    
    if(loginuser){
      toast.success("Login successfully")
     
     

    }else{
      toast.error(loginerror.message)
    }

  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="w-full md:w-2/5 mx-auto my-9 shadow-xl p-5">
        <h1 className="text-4xl font-semibold text-center">Login</h1>
        <form onSubmit={handleSubmit} action="">
            <div className="flex flex-col my-5 ">
                <label htmlFor="">Email</label>
                <input onBlur={handleEmail} className="p-3 mt-2 border rounded w-full" placeholder="Email address" type="email" name="" id="" />
            </div>
            <div className="flex flex-col my-5 ">
                <label htmlFor="">password</label>
                <input onBlur={handlePassword} className="p-3 mt-2 border rounded w-full" placeholder="Password" type="psssword" name="" id="" />
            </div>
            <button className="py-3 px-4 bg-orange-400 w-full rounded text-white text-xl my-4" type="submit">Login</button>
            <ToastContainer></ToastContainer>
        </form>
        <p>Are you new ? <Link className="text-blue-700" to="/signup"> Please Signup..</Link></p>
        <div className="flex items-center">
          <div className="h-[1px] w-2/4 bg-gray-700"></div>
          <div className="mx-3">Or</div>
          <div className="h-[1px] w-2/4 bg-gray-700"></div>
        </div>
        <div className=" flex justify-center items-center my-4">
          <p className="cursor-pointer mx-3 shadow p-3"><img width={50} height={50} src="https://i.ibb.co/kyXzxrD/Git-Hub-Mark-64px.png" alt="" /></p>
          <p className="cursor-pointer mx-3 shadow p-3"><img width={50} height={50} src="https://i.ibb.co/dBW15dR/google-logo-9824.png" alt="" /></p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
