import React, { use, useEffect } from 'react';
import PetsCards from '../PetsCards';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';
import Aos from 'aos';
import { AuthContext } from '../../Context/AuthContext';
import Loder from '../Loder';

const ServiceCard = ({service = []}) => {
    const {loading} = use(AuthContext)
    useEffect(() => {
            Aos.init({
              duration: 1500,
              once: true,
            });
          }, []);
    const {serviceName
,image, price, rating, 
serviceId
} =service
    return (
        <div>
            {
                loading ? (<Loder></Loder>) : (
<div data-aos='top-center' className="p-4 card shadow-lg bg-primary rounded-2xl w-full">
  <figure><img src={image} className='rounded-xl w-full h-60 md:h-72 lg:h-80 object-cover' alt="Dog Coat" /></figure>
  <div className="card-body">
    <h2 className="text-xl font-semibold">{serviceName}</h2>
    <div className='py-2 flex justify-evenly items-center'>
            <p className='font-semibold text-neutral'>{price}$</p>
            <p className='font-semibold text-neutral flex items-center justify-center gap-1'>{rating}<IoStar className='text-amber-400 text-xl mb-1' /></p>
    </div>
    <div className="card-actions justify-end">
        {
            loading ? (<Loder></Loder>) : (<Link to={`/petDetails/${serviceId}`}><button className="btn btn-warning w-full">View Details</button></Link>)
        }
        
     
    </div>
  </div>
</div>
                )
            }
            
        </div>
    );
};

export default ServiceCard;