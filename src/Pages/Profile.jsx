import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
    const {user, setUser} = use(AuthContext)
    console.log(user);
    
    return (
        <div>
            <div className="py-20 min-h-screen min-w-2xl text-center">
  <div className="items-center flex justify-center flex-col">
   <div> 
    <img
      src={user.photoURL} className=" rounded-4xl shadow-2xl"
    />
    </div>
    <div>
      <h1 className="text-5xl font-bold p-5">{user.displayName}</h1>
      <p><strong>Email:{user.email}</strong></p>
      <p className="py-6 text-[#777]">
        Cozy companion lover and creator of “Pawfect Winter” —
        <br /> a warm, friendly space where pet owners can explore seasonal care, fashion, and wellness for their furry friends. Dedicated to keeping tails wagging all winter long
      </p>
      <Link to='/' className="btn btn-success text-white">Get Started</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;