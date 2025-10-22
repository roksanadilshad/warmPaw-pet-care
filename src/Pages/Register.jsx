import React, { use, useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import {  updateProfile } from 'firebase/auth';
import { FaEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const Registration = () => {
     const {createUser, setUser} = use(AuthContext);
     const [nameError, setNameError] = useState('');
     const [success, setSuccess] = useState(false);
     const [error, setError] = useState('');
  const [showPass, setShoePass] = useState(false)
const navigate = useNavigate();
  

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const terms = e.target.terms.checked
        //console.log(email, password);

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]).{6,}$/;

         if(!passwordPattern.test(password)){
          setError('Passowerd must be contain at least 6 characters long, include one uppercase, one lowercase and special character')
          return
         }

        if(name.length < 5){
            setNameError('Name Should be more then 5 character');
            return;
        }
        else{
            setNameError('')
        };
        
        setError(null);
         setSuccess(false);

         if(!terms){
          setError('Please accept our terms and condition.');
          return;
         }

        createUser(email, password, terms)
        .then(result =>{
          const user = result.user;
          setSuccess(true)
          e.target.reset()
            //console.log(result.user);
             return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          setSuccess(true);
          setError('');
          e.target.reset();
          navigate('/');
        });
      })
         .catch((error) => {
            console.log(error);
            setError(error.message);
            setSuccess(false)
          });
    }

    const handlePasswordShow = e =>{
      e.preventDefault();
      setShoePass(!showPass)
    }
        
    
   
    return (
        <div className="hero bg-gradient-to-r from-[#f1dcaa] to-[#FFB347] bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body bg-gradient-to-r from-[#f1dcaa] to-[#FFB347]">
        <form onSubmit={handleSubmit}>
        <fieldset className="fieldset ">
             <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
         <div className='relative'>
          <input name='password' type={showPass ? 'text' : "password"} className="input" placeholder="Password" />
          <button onClick={handlePasswordShow} className='text-2xl top-2 text-center absolute z-10 right-5'>{showPass ? <FaEye></FaEye> : <LuEyeClosed></LuEyeClosed>}</button>
          </div>
         <div>
            <label className="label">
         <input name='terms' type="checkbox" className="checkbox" />
        Accept our terms and condition
        </label>
           </div>

          {
            success && <p className='text-green-500'>Account Crteated Sussessfully</p>
          }
           {
          error && <p className='text-red-500'>{error.message}! provide a valid email or passowerd</p>  
        }
          <button className="btn btn-success text-white mt-4">Registration</button>

          <p>Already have an account ? Please <Link className='text-amber-700' to='/login'>Sign in</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Registration;