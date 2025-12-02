import React, { use } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaw } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

const Contact = () => {
    const { user } = use(AuthContext)
  return (
    <div className="bg-secondary w-full py-8 lg:py-16">
      <div className="w-11/12 mx-auto">

        {/* Header */}
        <div className="text-center mb-7 lg:mb-14">
          <h1 className="lg:text-5xl text-3xl font-extrabold text-gray-700 flex justify-center items-center gap-2">
            Contact <span className="text-amber-400 ">WarmPaws</span>
            <FaPaw className="text-4xl text-amber-400 mt-2" />
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 mt-3">
            Have questions, need support, or want expert winter-care advice for your furry companion?
            We're here to help anytime!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">

          {/* Contact Form */}
          <div className="bg-primary lg:p-10 p-5 rounded-3xl shadow-xl border border-primary">
            <h2 className="lg:text-3xl text-2xl font-bold text-gray-700 mb-3 lg:mb-6">Get in Touch</h2>

            <form className="space-y-5">
              <div>
                <label className="block font-medium text-gray-500">Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Enter your full name"
                  className="w-full bg-secondary mt-1 lg:p-3 p-1  rounded-xl outline-none focus:border-[#8D77AB]"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-500">Email Address</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Enter your email"
                  className="w-full bg-secondary mt-1 lg:p-3 p-1 rounded-xl outline-none focus:border-[#8D77AB]"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-secondary mt-1 lg:p-3 p-1 rounded-xl outline-none focus:border-[#8D77AB]"
                ></textarea>
              </div>

              <button className="w-full lg:py-3 py-1rounded-xl bg-[#8D77AB] text-white text-lg font-semibold hover:bg-[#BAD8B6] transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">

            {/* Info Boxes */}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">

              <div className="bg-primary shadow-lg lg:p-6 p-3 rounded-2xl border border-primary">
                <FaPhoneAlt className="text-4xl text-[#8D77AB] mb-3" />
                <h3 className="font-bold text-xl text-gray-700">Phone</h3>
                <p className="text-gray-600 mt-1">+880 1234-567890</p>
              </div>

              <div className="bg-primary shadow-lg lg:p-6 p-3 rounded-2xl border border-primary">
                <FaEnvelope className="text-4xl text-[#8D77AB] mb-3" />
                <h3 className="font-bold text-xl text-gray-700">Email</h3>
                <p className="text-gray-600 mt-1">help@warmpaws.com</p>
              </div>

              <div className="bg-primary shadow-lg lg:p-6 p-3 rounded-2xl border border-primary">
                <FaMapMarkerAlt className="text-4xl text-[#8D77AB] mb-3" />
                <h3 className="font-bold text-xl text-gray-700">Location</h3>
                <p className="text-gray-600 mt-1">
                  Banani, Dhaka, Bangladesh
                </p>
              </div>

              <div className="bg-primary shadow-lg lg:p-6 p-3 rounded-2xl border border-primary">
                <FaPaw className="text-4xl text-[#8D77AB] mb-3" />
                <h3 className="font-bold text-xl text-gray-700">Service Hours</h3>
                <p className="text-gray-600 mt-1">10:00 AM – 8:00 PM (Everyday)</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Find Us on Map</h3>
              <iframe
                title="map"
                className="w-full h-64 rounded-3xl border-4 border-primary"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.997930947267!2d90.4066!3d23.7806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b9c3a0bf71%3A0xf49d32f0d06fe8d4!2sBanani%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
