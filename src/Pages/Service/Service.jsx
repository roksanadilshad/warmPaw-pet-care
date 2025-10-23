import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';
import Aos from 'aos';

const Service = () => {
    const data = useLoaderData();
    //console.log(data);
    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
    return (
        <div data-aos='slide-right' >
            <div><title>WarmPaws Service</title></div>
            <div className='grid lg:grid-cols-2 gap-10 py-20'>
            {
                data.map(service => <ServiceCard service={service} key={service.serviceId}></ServiceCard>)
            }
            </div>
         
        </div>
    );
};

export default Service;