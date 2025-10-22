import React, { useEffect } from 'react';
import PetsCards from '../PetsCards';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';
import Aos from 'aos';

const ServiceCard = ({service = []}) => {
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
            <div data-aos='top-center' className="max-w-4xl mx-auto p-6 card shadow-lg rounded-2xl">
  <figure><img src={image} className='rounded-xl w-full h-96 object-cover' alt="Dog Coat" /></figure>
  <div className="card-body">
    <h2 className="text-xl font-semibold">{serviceName}</h2>
    <table className='w-28'>
        <tbody>
        <tr>
            <td className='font-semibold text-neutral'>Price:</td>
            <td>{price}$</td>
        </tr>
        <tr>
            <td className='font-semibold text-neutral'>Ratings:</td>
            <td className='flex items-center gap-1'>{rating}<IoStar className='text-amber-400' /></td>
        </tr>
        </tbody>
    </table>
    <div className="card-actions justify-end">
        <Link to={`/petDetails/${serviceId}`}><button className="btn btn-warning w-full">View Details</button></Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;