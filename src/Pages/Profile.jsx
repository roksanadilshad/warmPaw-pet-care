import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import { RiEdit2Fill } from 'react-icons/ri';
import Aos from 'aos';
import toast from 'react-hot-toast';

const Profile = () => {
    const {user, updateUserProfile} = use(AuthContext)
    const [isEditing, setIsEditing] = useState(false);
    const [massege, setMassege] = useState('')
     useEffect(() => {
                Aos.init({
                  duration: 1500,
                  once: true,
                });
              }, []);

    //console.log(user);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateUserProfile(name, photoURL)
      .then(() => {
       setMassege("✅ Profile updated successfully!");
        setIsEditing(false)
      })
      .catch(error => {
        console.error(error);
        toast("❌ Failed to update profile.");
      });
  };
    
    return (
<div data-aos='fade-up' className='h-screen'>
  <div><title>WarmPaws Profile</title></div>
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
                      <div>

                      <label htmlFor="">User Name</label>
            <input
          type="text"
          placeholder="Enter new name"
          name='name'
          // defaultValue={user.displayName || ""}
          className="input text-[#777] rounded-xl input-bordered"
          required
        />
                      </div>
                      <div>

        <label htmlFor="">Photo URL</label>
        <input
          type='url'
          placeholder="Enter new photo URL"
          name='photoURL'
          required
          className="input text-[#777] rounded-xl input-bordered"
          //  defaultValue={user.photoURL || ""}
        />
                      </div>
        <div className="flex gap-2">
      <button type="submit" className="btn text-white btn-success border-success flex-1 ">
        Save
      </button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        className="btn text-white btn-error flex-1"
      >
        Cancel
      </button>
    </div>
     {massege && <p className="text-center mt-2">{massege}</p>}
        </form>
            )
        }
        
      </div>

     
    </div>
</div>
    );
};

export default Profile;