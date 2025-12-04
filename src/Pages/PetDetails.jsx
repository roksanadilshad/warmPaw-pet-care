import React, { useEffect, useState, useContext } from "react";
import { FaStar, FaEnvelope, FaUser, FaClock, FaDog } from "react-icons/fa";
import { useLoaderData, useParams, Link } from "react-router";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Context/AuthContext";
import ErrorDetails from "./ErrorDetails";

const PetDetails = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  const singlePet = details.find((pet) => pet.serviceId == id);

  if (!singlePet) return <ErrorDetails />;

  const {
    serviceName,

    providerEmail,
    providerName,
    slotsAvailable,
    rating,
    description,
    image,
    price,
    duration,
    ageSuitability,
    petType,
    temperatureSuitability,
    toolsUsed,
    materialsUsed,
    safetyGuidelines,
    benefits,
    location,
    isCertified,
    maxPetsPerSession,
    shortTitle,
  } = singlePet;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    toast.success("Booked Successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src={image}
          alt={serviceName}
          className="object-cover w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold">{serviceName}</h1>
          <p className="text-lg mt-2">{shortTitle}</p>
          <div className="flex items-center gap-6 mt-4">
            <span className="text-2xl font-bold">${price}</span>
            <span className="flex items-center gap-1">
              {rating} <FaStar className="text-amber-400" />
            </span>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto px-4 lg:px-0 mt-12 space-y-12">

        {/* About Service */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">About This Service</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
          <div className="mt-4 text-green-700 font-semibold">
            <p>Benefits: {benefits}</p>
          </div>
        </section>

        {/* Provider Info */}
        <section data-aos="fade-left" className="lg:w-[67%]">
          <h2 className="text-2xl font-semibold mb-4">Provider Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><FaUser className="inline mr-2" /> <strong>Name:</strong> {providerName}</p>
            <p><FaEnvelope className="inline mr-2" /> <strong>Email:</strong> {providerEmail}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Certified:</strong> {isCertified ? "Yes" : "No"}</p>
          </div>
        </section>

        {/* Core Details */}
        <section data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-4">Service Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            <p><FaClock className="inline mr-2" /> <strong>Duration:</strong> {duration}</p>
            <p><FaDog className="inline mr-2" /> <strong>Pet Type:</strong> {petType}</p>
            <p><strong>Age Suitability:</strong> {ageSuitability}</p>
            <p><strong>Temperature:</strong> {temperatureSuitability}</p>
            <p><strong>Tools Used:</strong> {toolsUsed}</p>
            <p><strong>Materials:</strong> {materialsUsed}</p>
            <p><strong>Safety Guidelines:</strong> {safetyGuidelines}</p>
            <p><strong>Max Pets/Session:</strong> {maxPetsPerSession}</p>
            <p><strong>Slots Available:</strong> {slotsAvailable}</p>
          </div>
        </section>

        {/* Gallery / Additional Images */}
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* You can replace these with more images */}
            <img src={image} alt="Gallery" className="rounded-lg w-full h-48 object-cover" />
            <img src={image} alt="Gallery" className="rounded-lg w-full h-48 object-cover" />
            <img src={image} alt="Gallery" className="rounded-lg w-full h-48 object-cover" />
          </div>
        </section>

        {/* Booking Form */}
       {/* Booking Form */}
<section data-aos="fade-up">
  <h2 className="text-2xl font-semibold mb-4">Book This Service</h2>

  {/* If user is not logged in */}
  {!user ? (
    <div className="bg-primary p-8 rounded-xl text-center">
      <p className="text-white text-lg mb-4">
        You must be logged in to book this service.
      </p>
      <Link to="/login" className="btn btn-success text-secondary">
        Login to Continue
      </Link>
    </div>
  ) : user.email === providerEmail ? (
    // If logged-in user is the provider
    <div className="bg-primary p-8 rounded-xl text-center">
      <p className="text-white text-lg mb-2">
        You cannot book your own service.
      </p>
    </div>
  ) : (
    // If logged-in and not the provider → show form
    <form
      onSubmit={handleOnSubmit}
      className="bg-primary shadow-lg rounded-xl p-8 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
          value={formData.email}
          required
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>

      <textarea
        placeholder="Additional Notes (Optional)"
        className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
        rows={3}
      ></textarea>

      <button className="btn text-secondary btn-success w-full mt-2">
        Book Now
      </button>
    </form>
  )}
</section>


        {/* FAQ / Tips */}
        <section data-aos="fade-up" >
          <h2 className="text-2xl font-semibold mb-4">Winter Pet Care Tips</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Always keep your pet warm with coats or blankets.</li>
            <li>Protect paws with balm or booties on ice/snow.</li>
            <li>Provide heated bedding for comfort during cold nights.</li>
            <li>Adjust nutrition to boost immunity in winter.</li>
            <li>Groom regularly to prevent matting and maintain health.</li>
          </ul>
        </section>

        {/* Related Services (Optional) */}
        <section data-aos="fade-up" className="mb-5 ">
          <h2 className="text-2xl font-semibold mb-4">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.slice(0, 6).map((service) => (
              <Link key={service.serviceId} to={`/petDetails/${service.serviceId}`}>
                <div className="bg-primary rounded-xl shadow hover:shadow-lg transition p-4">
                  <img src={service.image} alt={service.serviceName} className="rounded-lg h-40 w-full object-cover mb-2"/>
                  <h3 className="font-semibold text-lg">{service.serviceName}</h3>
                  <p className="text-gray-500">${service.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PetDetails;
