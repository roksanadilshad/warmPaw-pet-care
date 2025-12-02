import React from 'react';
import { GridLoader } from 'react-spinners';

const Loder = () => {
    return (
        <div className='flex justify-center  items-center h-screen'>
            <GridLoader className='text-primary' />
        </div>
    );
};

export default Loder;