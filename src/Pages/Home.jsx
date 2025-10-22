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
        <div className='w-full mx-auto py-20'>
         <h2 className='text-4xl text-center font-bold pb-4'>Popular Winter Care Services</h2>
         <p class="text-gray-700 text-center max-w-2xl mx-auto mb-8">
  As the chilly season approaches, keeping yourself, your home, and your pets safe and comfortable is essential. 
</p>
        </div>
        <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto'>
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