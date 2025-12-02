import React from 'react';
import { FaPaw } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className='font-bold flex justify-center items-center gap-1'>
            <span className="text-success ">WarmPaws</span>
                        <FaPaw className="text-4xl text-amber-400 " />
        </div>
    );
};

export default Logo;