import React, { use, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';
import Aos from 'aos';
import { AuthContext } from '../../Context/AuthContext';
import Loder from '../Loder';
import Title from '../Title';

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
            <Title
            title='Our Services'
            description='This service provides secure user authentication for the Travel Guru platform, enabling users to register, log in, and manage their accounts easily.'
            ></Title>
            {
                loading ? (<Loder></Loder>) : (
<div className='grid lg:grid-cols-2 gap-10 pb-5 lg:mb-20'>
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