import React from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import 'animate.css';


const PetsCards = ({petCard = []}) => {
    //const pets = useLoaderData();
//    
    //console.log(petCard);
    const {serviceName
,image, price, rating, 
serviceId
} = petCard
    
    return (
        <div>

            <div className="bg-amber-50 card shadow-lg rounded-2xl flex flex-col h-full hover:scale-105 transition-all">
  <figure>
    <img src={image} className='rounded-xl w-full h-96 object-cover' alt="Dog Coat" />
    </figure>
  <div className="card-body flex-grow ">
    <h2 className="text-xl font-semibold">{serviceName}</h2>
    <table>
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
    <div className="animate__animated animate__backInDown  card-actions justify-end">
        <Link to={`/petDetails/${serviceId}`}><button className="btn btn-warning text-white w-full ">View Details</button></Link>
    </div>
  </div>
</div>

        </div>
    );
};

export default PetsCards;