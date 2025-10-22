import React from 'react';
import usePets from '../Hooks/usePets';

const PetsCard = ({petCard = []}) => {
    //const pets = useLoaderData();
//    
    //console.log(petCard);
    const {serviceName
,image, price, rating,} = petCard
    
    return (
        <div>

            <div className="card bg-base-100 shadow-lg rounded-2xl hover:scale-105 transition-all">
  <figure><img src={image} className='w-full' alt="Dog Coat" /></figure>
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p>{price}$</p>
    <p>{rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm">View Details</button>
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