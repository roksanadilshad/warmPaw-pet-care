import React, { useEffect } from 'react';
import HeroSlider from './HeroSlider';
import { useLoaderData } from 'react-router';
import TipsCards from './TipsCards';
import Title from './Title';
import PetsCards from './PetsCards';
import VetsCards from './VetsCards';
import Lottie from 'lottie-react';
import Aos from 'aos';


const Home = () => {
  const { pets, tips , vets} = useLoaderData();
  //console.log(vets);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
    return (
        <div className='relative w-full home'>
           <HeroSlider></HeroSlider>
    <section>
      <div>
        <Title 
        title="Popular Winter Care Services"
        description=' As the chilly season approaches, keeping yourself, your home, and your pets safe and comfortable is essential. '></Title>

        <div data-aos="slide-left" className='grid grid-cols-3 gap-10 w-11/12 mx-auto'>
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
      <div data-aos="fade-up-right" className='grid grid-cols-3 gap-10 w-11/12 mx-auto'>
        {
          tips.map(tipsCard => <TipsCards tipsCard={tipsCard} key={tipsCard.tipId}></TipsCards>)
        }
      </div>
        </section>      
     
        <section data-aos='zoom-in' className=' w-11/12 mx-auto lg:text-left mt-10'>
          <div className='flex items-center lg:justify-between lg:flex-row flex-col-reverse'>
            <div>

            <div className=''>
              <img className='rounded-2xl relative left-10 top-10' src="https://images.unsplash.com/photo-1627507109388-51995a21c3f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400" alt="" />

              <img className=' rounded-3xl' src="https://plus.unsplash.com/premium_photo-1664371674699-f9f70eab10b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBldCUyMGxvdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400" alt="" />
            </div>
            </div>
            <div className=' flex flex-col text-center lg:text-left items-center'>
              <h2 className='text-2xl font-medium py-2'>We love our job!</h2>
              <h2 className='text-6xl font-bold py-4'>We'll Make Your Pets Really Happy</h2>
              <p className='text-[#777] py-2'>Hundreds of pet owners trust us to take care
                 of their beloved family members. <br /> You won’t be disappointed.</p>
              <button className='bg-[#B4C408] btn border-2 border-[#B4C408] text-white'>Learn More</button>
            </div>
          </div>
          </section> 
           <section>
         <Title 
         title='Meet Our Expert Vets'
         description='introduces our team of skilled veterinarians who are dedicated to providing top-quality care for your pets. Learn about their expertise, experience, and compassionate approach to keeping your furry friends healthy and happy.'
         ></Title>
      <div data-aos='slide-up' className='grid grid-cols-2 w-11/12 mx-auto'>
        {
          vets.map(vetsCard => <VetsCards vetsCard={vetsCard} key={vetsCard.vetId}></VetsCards>)
        }
      </div>
        </section>     
        </div>
       
    );
};

export default Home;