import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';

const Service = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='grid grid-cols-1 gap-10 py-20'>
            {
                data.map(service => <ServiceCard service={service} key={service.serviceId}></ServiceCard>)
            }
         
        </div>
    );
};

export default Service;