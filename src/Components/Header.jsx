import React, { use } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
    const {user, signOutUser} = use(AuthContext);
    //console.log(user);
    
    const handleSignout = () =>{
        signOutUser()
        .then()
        .catch()
    }
    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/service'>Service</NavLink></li>
    <li><NavLink to='/profile'>My Profile</NavLink></li>
    </>
    return (
        <div className=" bg-gradient-to-r from-[#FFF8E7] to-[#FFB347] px-20 mx-auto navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
   <img src="https://templates.sparklethings.com/opet/wp-content/uploads/sites/133/2025/10/logo-opet.png" alt=""  className='w-20 h-12'/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? 
        (<>
        <a className=""><img src={user.photoURL} className='w-12 h-12 rounded-full' title={user.displayName} /></a>
        <button onClick={handleSignout} className='btn btn-secondary ml-2'>Log Out</button>
        </>) : (<>
         <NavLink className='btn mr-1 btn-success' to='/register'>Register</NavLink>
       <NavLink className='btn mr-1 btn-warning' to='/login'>Login</NavLink>
        </>)

    }
  </div>
</div>
    );
};

export default Header;