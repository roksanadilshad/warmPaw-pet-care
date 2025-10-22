import React from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const PetsCard = ({petCard = []}) => {
    //const pets = useLoaderData();
//    
    //console.log(petCard);
    const {serviceName
,image, price, rating,} = petCard
    
    return (
        <div>

            <div className="bg-amber-50 card shadow-lg rounded-2xl hover:scale-105 transition-all">
  <figure><img src={image} className='rounded-xl w-full h-96 object-cover' alt="Dog Coat" /></figure>
  <div className="card-body">
    <h2 className="text-xl font-semibold">{serviceName}</h2>
    <table>
        <tbody>
        <tr>
            <td className='font-semibold text-neutral'>Price</td>
            <td>{price}$</td>
        </tr>
        <tr>
            <td className='font-semibold text-neutral'>Ratings</td>
            <td className='flex items-center gap-1'>{rating}<IoStar className='text-amber-400' /></td>
        </tr>
        </tbody>
    </table>
    <div className="card-actions justify-end">
      <button className="btn btn-warning w-full">View Details</button>
    </div>
  </div>
</div>

            <div>
        <div>
          <img />
        </div>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
        </div>
       </div>
        </div>
    );
};

export default PetsCard;