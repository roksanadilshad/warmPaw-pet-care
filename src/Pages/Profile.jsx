import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
    const {user, updateUserProfile} = use(AuthContext)
    //console.log(user);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateUserProfile(name, photoURL)
      .then(() => {
        alert("✅ Profile updated successfully!");
      })
      .catch(error => {
        console.error(error);
        alert("❌ Failed to update profile.");
      });
  };
    
    return (
<div className='h-screen'>
        <div className="max-w-md  mx-auto bg-gradient-to-r from-[#f1dcaa] to-[#FFB347] p-6 rounded-2xl shadow-lg mt-10">
             {user && (
        <div className="mt-6 text-center">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <h3 className="text-lg font-semibold">{user.displayName}</h3>
          <p>{user.email}</p>
        </div>
      )}
      <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
      <div className="flex flex-col gap-4">
        <form onSubmit={handleUpdate}>
            <input
          type="text"
          placeholder="Enter new name"
          name='name'
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Enter new photo URL"
          name='photoURL'
          className="input input-bordered"
        />
        <button className="btn btn-success text-white">
          Update Profile
        </button>
        {message && <p className="text-center mt-2">{message}</p>}
        </form>
      </div>

     
    </div>
</div>
    );
};

export default Profile;