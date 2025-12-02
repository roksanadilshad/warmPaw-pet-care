import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { RiEdit2Fill } from "react-icons/ri";
import { FaPaw, FaCalendarCheck, FaUserShield } from "react-icons/fa";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile(name, photoURL)
      .then(() => {
        setMessage("✅ Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(error);
        toast("❌ Failed to update profile.");
      });
  };

  return (
    <div className="bg-secondary min-h-screen py-16">
      <div className="w-11/12 mx-auto space-y-10">

        {/* Header */}
        <div data-aos="fade-down" className="bg-[#BAD8B6] rounded-3xl p-8 shadow-xl flex flex-col lg:flex-row items-center gap-6">
          <img
            src={user?.photoURL || "https://images.unsplash.com/photo-1747592771443-e15f155b1faf?ixlib=rb-4.1.0"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-[#BAD8B6] shadow-md"
          />
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-3xl font-bold text-gray-700">{user?.displayName || "Your Name"}</h2>
            <p className="text-gray-700 mt-1">{user?.email}</p>
            <p className="text-gray-600 mt-1 flex items-center gap-1">
              <FaUserShield /> Member
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn btn-success text-white flex items-center gap-2"
          >
            <RiEdit2Fill /> {isEditing ? "Close Edit" : "Update Profile"}
          </button>
        </div>
        {/* Profile Edit Form */}
        {isEditing && (
          <div data-aos="fade-up" className="bg-primary p-8 rounded-3xl shadow-xl border border-primary">
            <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Edit Profile</h3>
            <form onSubmit={handleUpdate} className="flex flex-col gap-4 max-w-xl mx-auto">
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || ""}
                  className="input input-bordered rounded-xl focus:border-success outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">Photo URL</label>
                <input
                  type="url"
                  name="photoURL"
                  defaultValue={user?.photoURL || ""}
                  className="input input-bordered rounded-xl focus:border-success outline-none"
                  required
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button type="submit" className="btn btn-success flex-1 text-white">Save</button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn btn-info flex-1 text-white"
                >
                  Cancel
                </button>
              </div>
              {message && <p className="text-center mt-2 text-green-600">{message}</p>}
            </form>
          </div>
        )}

        {/* Additional Sections */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Change Password Placeholder */}
          <div data-aos="fade-right" className="bg-primary p-6 rounded-2xl shadow-md border border-primary">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Change Password</h3>
            <p className="text-gray-600">Coming soon…</p>
          </div>

          {/* Activity Log Placeholder */}
          <div data-aos="fade-left" className="bg-primary p-6 rounded-2xl shadow-md border border-primary">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Recent Activity</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Logged in from desktop</li>
              <li>Updated profile picture</li>
              <li>Booked a vet appointment</li>
            </ul>
          </div>

          {/* Stats Section */}
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-primary p-6 rounded-2xl shadow-md flex flex-col items-center gap-2">
            <FaPaw className="text-4xl text-success" />
            <h3 className="text-xl font-bold">12 Pets</h3>
            <p className="text-gray-600">Added to your account</p>
          </div>
          <div className="bg-primary p-6 rounded-2xl shadow-md flex flex-col items-center gap-2">
            <FaCalendarCheck className="text-4xl text-success" />
            <h3 className="text-xl font-bold">5 Appointments</h3>
            <p className="text-gray-600">Completed with vets</p>
          </div>
          <div className="bg-primary p-6 rounded-2xl shadow-md flex flex-col items-center gap-2">
            <FaUserShield className="text-4xl text-success" />
            <h3 className="text-xl font-bold">Premium Member</h3>
            <p className="text-gray-600">Exclusive benefits</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
