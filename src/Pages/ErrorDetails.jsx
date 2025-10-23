import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router';

const ErrorDetails = () => {
   
  const navigate = useNavigate();
    
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen w-11/12 mx-auto text-center'>
            <div>
            <img className='h-full w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkIDztdS4v4bKXCm6S0NVgtNAjKhWvvtOHw&s" alt="" />
            <h3 className='text-4xl font-bold pt-4'>Page Details Not Found</h3>
          <button
      onClick={() => navigate(-1)}
      className="bg-amber-600 text-white my-4 py-2 px-4 text-center rounded hover:bg-amber-600"
    >
      Go Back
    </button>
            </div>
            </div>
        </div>
    );
};

export default ErrorDetails;