import React from 'react';

const Home = () => {
    return (
        <div className='relative w-full h-screen pt-40 px-20'>
            <div
            className='absolute inset-0 bg-cover bg-center bg-black bg-opacity-50'
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1608096299230-81c7b43d5dfc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869')"}}
            >
            </div>
            
         <section >
  <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'> 
    <h1 className='text-8xl font-bold '>Keeping your furry friends <span className='text-[#f7b62c]'>warm</span>, <span className='text-[#f38e5f]'>safe</span>, and <span className='text-[#5DADEC]'>loved</span> — <span>all winter lon</span>g</h1>
  <p className="text-lg md:w-2/3 mx-auto mb-6">
    Discover the best winter gear, grooming services, and safety tips for your furry family.
  </p>
  <button className="btn btn-secondary">Explore Now</button></div>
</section>

        {/* <div className='bg-[#bbc8eb22] bg-[url(https://images.unsplash.com/photo-1639029187205-8fc7e01b1a97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170)] h-full w-full '>
           */}

           
        </div>
       
    );
};

export default Home;