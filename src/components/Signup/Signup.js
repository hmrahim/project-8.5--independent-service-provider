import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
const Signup = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [
    createUserWithEmailAndPassword,
    Signupuser,
    Signuploading,
    Signuperror,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const handleName= e=> {
    setEmail(e.target.value)
  }
  const handleEmail = e=> {
    setEmail(e.target.value)
  }
  const handlePassword = e=> {
    setPassword(e.target.value)
  }

  const handleSubmit =  e=> {
    e.preventDefault()
    createUserWithEmailAndPassword(email,password)
    .then(async ()=> {
      await sendEmailVerification()
      
    })

    if(Signupuser){
      toast("Signup successfully and verifiaction email sent")

    }else{
      toast(Signuperror.message)
    }

  }


    return (
        <div className="w-4/5 mx-auto">
        <div className="w-full md:w-2/5 mx-auto my-9 shadow-xl p-5">
          <h1 className="text-4xl font-semibold text-center">Signup</h1>
          <form onSubmit={handleSubmit} action="">
              <div className="flex flex-col my-5 ">
                  <label htmlFor="">Name</label>
                  <input onBlur={handleName} className="p-3 mt-2 border rounded w-full" placeholder="Name" type="text" name="" id="" />
              </div>
              <div className="flex flex-col my-5 ">
                  <label htmlFor="">Email</label>
                  <input onBlur={handleEmail} className="p-3 mt-2 border rounded w-full" placeholder="Email address" type="email" name="" id="" />
              </div>
              <div className="flex flex-col my-5 ">
                  <label htmlFor="">Password</label>
                  <input  onBlur={handlePassword} className="p-3 mt-2 border rounded w-full" placeholder="Password" type="psssword" name="" id="" />
              </div>
              <button className="py-3 px-4 bg-orange-400 w-full rounded text-white text-xl my-4" type="submit">Login</button>
              <ToastContainer></ToastContainer>
          </form>
          <p>Already have an account ? <Link className="text-blue-700" to="/login"> Please Login..</Link></p>
         
          
          
        </div>
      </div>
    );
};

export default Signup;