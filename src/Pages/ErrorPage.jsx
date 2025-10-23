import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='text-center'>
                <img className='lg:h-screen h-full' src="https://cdni.iconscout.com/illustration/premium/thumb/cat-with-404-flag-illustration-svg-download-png-7703208.png" alt="" />
                <button
      onClick={() => navigate(-1)}
      className="bg-amber-600 text-white my-4 py-2 px-4 text-center rounded hover:bg-amber-600"
    >
      Go Back
    </button>
                </div>
        </div>
    );
};

export default ErrorPage;