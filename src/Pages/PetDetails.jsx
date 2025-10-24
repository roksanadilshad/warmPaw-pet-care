import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import ErrorDetails from "./ErrorDetails";
import toast from "react-hot-toast";
import Aos from "aos";
import { AuthContext } from "../Context/AuthContext";

const PetDetails = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const {user} = use(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

   useEffect(() => {
                     Aos.init({
                       duration: 1000,
                       once: true,
                     });
                   }, []);

//   console.log("useParams id:", id);
//   console.log("Loader data:", details);
  console.log("First item keys:", Object.keys(details[0] || {}));

  
  const singlePet = details.find((pet) => pet.serviceId == id);

  console.log(singlePet);

  if (!singlePet) return <ErrorDetails></ErrorDetails>;

                  const {
                 category
                 ,
                 providerEmail,
                 providerName
                 , slotsAvailable,
                 rating,  serviceName, description, image, price } =  singlePet;

                 const handleOnSubmit = (e) =>{
                    e.preventDefault();
                   toast.success('Booked Successfully');
                    setFormData({ name: "", email: "" });
                 }

                 

  return (
    <div>
<div><title>WarmPaws pet details</title></div>
    <div className="flex justify-center items-center ">
    <div className="card my-20 shadow-sm">
      
      <div className="px-4 flex justify-between items-center flex-col lg:flex-row">
       <div data-aos="fade-up-right">
      <img src={image} alt={serviceName} className="rounded-lg mb-4" />
       </div>
<div data-aos="fade-up-left" className="card-body">
      <h2 className=" lg:text-5xl text-3xl text-center font-bold mb-4">{serviceName}</h2>
      <p className="text-xl pb-2">{description}</p>
     
      <p className="lg:text-[18px] text-[16px]"><strong>ProviderName:</strong> {providerName}</p>
      <p className="lg:text-[18px] text-[16px]"><strong>ProviderEmail:</strong> <span className="text-info">{providerEmail}</span></p>
      <div className="flex items-center justify-between">

      <p className="flex text-[16px] items-center gap-1"><strong>Rating:</strong> {rating}<FaStar className="text-amber-600"></FaStar></p>
      <p className="lg:text-[18px] text-[16px]"><strong>Price:</strong> {price}$</p>
      </div>
      <div className="flex items-center  justify-between">

       <p className="lg:text-[18px] text-[16px]"><strong>Category:</strong> {category}</p>
      <p className="lg:text-[18px] text-[16px]"><strong>SlotsAvailable:</strong> {slotsAvailable}</p>
      </div>

     
      <form onSubmit={handleOnSubmit}>

       <fieldset className="fieldset border-[1px] p-5 m-5 border-amber-600 rounded-xl">
          <label className="label">Name</label>
          <input onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  } value={formData.name} required type="text" name="name" className="input w-full" placeholder="Your Name" />
          <label className="label">Email</label>
          <input onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  } value={formData.email} required type="email" name="email" className="input w-full" placeholder="Youir Email" />
          <button className="btn text-white mt-4 btn-success ">Book Now</button>
        </fieldset>
      </form>
       </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PetDetails;
