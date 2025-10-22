import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const PetDetails = () => {
  const { id } = useParams();
  const details = useLoaderData();

//   console.log("useParams id:", id);
//   console.log("Loader data:", details);
  console.log("First item keys:", Object.keys(details[0] || {}));

  
  const singlePet = details.find((pet) => pet.serviceId == id);

  console.log(singlePet);

  if (!singlePet) return <h2>Pet not found</h2>;

                  const {
                 category
                 ,
                 providerEmail,
                 providerName
                 , slotsAvailable,
                 rating,  serviceName, description, image, price } =  singlePet;

                 const handleOnSubmit = (e) =>{
                    e.preventDefault();
                    alert('Submited')
                 }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{serviceName}</h2>
      <img src={image} alt={serviceName} className="rounded-lg mb-4" />
      <p className="text-[16px] pb-2">{description}</p>
     
      <p><strong>ProviderName:</strong> {providerName}</p>
      <p><strong>ProviderEmail:</strong> <span className="text-info">{providerEmail}</span></p>
      <div className="flex items-center justify-between">

      <p className="flex items-center gap-1"><strong>Rating:</strong> {rating}<FaStar className="text-amber-600"></FaStar></p>
      <p><strong>Price:</strong> {price}</p>
      </div>
      <div className="flex items-center  justify-between">

       <p><strong>Category:</strong> {category}</p>
      <p><strong>SlotsAvailable:</strong> {slotsAvailable}</p>
      </div>
      <form onSubmit={handleOnSubmit}>

       <fieldset className="fieldset border-[1px] p-5 m-5 border-amber-600 rounded-xl">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Your Name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Youir Email" />
          <button className="btn text-white mt-4 btn-success">Book Now</button>
        </fieldset>
      </form>
    </div>
  );
};

export default PetDetails;
