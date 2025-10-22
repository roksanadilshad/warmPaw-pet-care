import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import { RiEdit2Fill } from 'react-icons/ri';

const Profile = () => {
    const {user, updateUserProfile} = use(AuthContext)
    const [isEditing, setIsEditing] = useState(false);

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
        <div className="max-w-3xl  mx-auto bg-gradient-to-r from-[#f1dcaa] to-[#FFB347] p-6 rounded-2xl shadow-lg mt-20">
             {user && (
        <div className="mt-6 text-center">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-2"
          />
          <h3 className="text-lg font-semibold">{user.displayName}</h3>
          <p>{user.email}</p>
        </div>
      )}
      <div  className='border-[1px] rounded-xl my-4 border-[#b6761d8c] py-4'>
        <div className='flex justify-center items-center'>
      <button onClick={() => setIsEditing(true)} className="text-2xl font-bold text-center mb-4">Update Profile</button>
       <RiEdit2Fill />

        </div>
        {
            isEditing && (
                    <form onSubmit={handleUpdate} className="flex flex-col gap-4 items-center ">
            <input
          type="text"
          placeholder="Enter new name"
          name='name'
          defaultValue={user.displayName || "Un Known"}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Enter new photo URL"
          name='photoURL'
          className="input input-bordered"
           defaultValue={user.photoURL || "https://images.unsplash.com/photo-1747592771443-e15f155b1faf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"}
        />
        <div className="flex gap-2">
      <button type="submit" className="btn btn-success flex-1">
        Save
      </button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        className="btn btn-error flex-1"
      >
        Cancel
      </button>
    </div>
        </form>
            )
        }
        
      </div>

     
    </div>
</div>
    );
};

export default Profile;