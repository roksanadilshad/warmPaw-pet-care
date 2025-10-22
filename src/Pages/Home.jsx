import React from 'react';
import HeroSlider from './HeroSlider';
import { useLoaderData } from 'react-router';
import TipsCards from './TipsCards';
import Title from './Title';
import PetsCards from './PetsCards';
import VetsCards from './VetsCards';

const Home = () => {
  const { pets, tips , vets} = useLoaderData();
  //console.log(vets);
  
    return (
        <div className='relative w-full home'>
           <HeroSlider></HeroSlider>
    <section>
      <div>
        <Title 
        title="Popular Winter Care Services"
        description=' As the chilly season approaches, keeping yourself, your home, and your pets safe and comfortable is essential. '></Title>

        <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto'>
          {
            pets.map(petCard => <PetsCards key={petCard.serviceId
} petCard={petCard}></PetsCards>)
          }
        </div>
      </div>
      </section> 
      <section>
         <Title 
         title='Winter Care Tips for Pets'
         description='Winter Care Tips helps pet owners keep their furry friends healthy, warm, and comfortable during the cold season.'
         ></Title>
      <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto'>
        {
          tips.map(tipsCard => <TipsCards tipsCard={tipsCard} key={tipsCard.tipId}></TipsCards>)
        }
      </div>
        </section>      
      <section>
         <Title 
         title='Meet Our Expert Vets'
         description='introduces our team of skilled veterinarians who are dedicated to providing top-quality care for your pets. Learn about their expertise, experience, and compassionate approach to keeping your furry friends healthy and happy.'
         ></Title>
      <div className='grid grid-cols-2 w-11/12 mx-auto'>
        {
          vets.map(vetsCard => <VetsCards vetsCard={vetsCard} key={vetsCard.vetId}></VetsCards>)
        }
      </div>
        </section>      
        </div>
       
    );
};

export default Home;