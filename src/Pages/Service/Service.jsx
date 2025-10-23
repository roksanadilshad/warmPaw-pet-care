import React, { use, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';
import Aos from 'aos';
import { AuthContext } from '../../Context/AuthContext';
import Loder from '../Loder';

const Service = () => {
    const {loading} = use(AuthContext)
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
            {
                loading ? (<Loder></Loder>) : (
<div className='grid lg:grid-cols-2 gap-10 py-20'>
            { 
                data.map(service => <ServiceCard service={service} key={service.serviceId}></ServiceCard>)
            }
            </div>
                )
            }
            
         
        </div>
    );
};

export default Service;