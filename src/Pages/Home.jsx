import React from 'react';
import HeroSlider from './HeroSlider';
import { useLoaderData } from 'react-router';
import PetsCard from './PetsCard';

const Home = () => {
  const pets = useLoaderData();
  //console.log(pets);
  
    return (
        <div className='relative w-full home'>
           <HeroSlider></HeroSlider>
    <section>
      <div>
        <div>
         <h2 className='text-4xl text-center font-bold w-full mx-auto py-20'>Popular Winter Care Services</h2>
        </div>
        <div className='grid grid-cols-3 w-11/12 mx-auto'>
          {
            pets.map(petCard => <PetsCard key={petCard.serviceId
} petCard={petCard}></PetsCard>)
          }
        </div>
      

      </div>
      </section>       
        </div>
       
    );
};

export default Home;