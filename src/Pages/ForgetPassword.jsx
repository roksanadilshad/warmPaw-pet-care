import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const ForgetPassword = () => {
   const {passwordReset} = use(AuthContext);
   const [email,setEmail] = useState("");
   const emailRef = useRef();

    const handleReset = (e) =>{
        e.preventDefault();
    const email = emailRef.current.value;
    if(!email) {
      toast.error('Please Enter Your Email First');
      return
    }
         passwordReset(email)
         .then(() => {
      toast.success('Password reset email sent! Check your inbox 📩')
     })
     .catch((err) =>{
         toast.error(err.message);
         
     })
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card bg-base-100 w-96 p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
            className="input input-bordered w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-neutral w-full">Send Reset Email</button>
        </form>
        <p className="text-center mt-4">
          <Link to="/login" className="text-amber-500 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default ForgetPassword;