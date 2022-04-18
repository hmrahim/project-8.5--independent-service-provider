import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ForgotPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [email,setEmail] = useState("")
    const handleEmail = e=> {
        setEmail(e.target.value)
    }

    const handleSubmit = e=> {
        e.preventDefault()
        sendPasswordResetEmail(email)
        
        .then(()=> {
            toast("Check your email and reset password")
        })

    }
    return (
        <div className='w-full md:w-4/5 mx-auto'>
             <div className="w-full md:w-2/5 mx-auto my-9 shadow-xl p-5">
        <h1 className="text-4xl font-semibold text-center">Reset Password</h1>
            <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col my-5 ">
            <label htmlFor="">Email</label>
            <input
              onBlur={handleEmail}
              className="p-3 mt-2 border rounded w-full"
              placeholder="Email address"
              type="email"
              name=""
              id=""
            />
          </div>
         
          <button
            className="py-3 px-4 bg-orange-400 w-full rounded text-white text-xl my-4"
            type="submit"
          >
            Send
          </button>
          <ToastContainer></ToastContainer>
        </form>
        </div>
            
        </div>
    );
};

export default ForgotPass;