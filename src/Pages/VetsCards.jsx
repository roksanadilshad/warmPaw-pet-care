import React from 'react';

const VetsCards = ({vetsCard = []}) => {
    //console.log(vetsCard);

    const{bio, email, experience, image, name, phone, 
specialization
} = vetsCard
    
    return (
         <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden m-4 mx-auto w-full">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-500 mb-2">{specialization}</p>
        <p className="text-sm text-gray-700 mb-2">{bio}</p>
        <p className="text-sm text-gray-600"><strong>Experience:</strong> {experience}</p>
        <p className="text-sm text-gray-600"><strong>Email:</strong><span className='text-info'>{email}</span></p>
        <p className="text-sm text-gray-600"><strong>Phone:</strong> {phone}</p>
        <button className="mt-3 btn btn-success w-full text-white py-2 rounded-lg hover:btn-info transition">
          Contact
        </button>
      </div>
    </div>
    );
};

export default VetsCards;