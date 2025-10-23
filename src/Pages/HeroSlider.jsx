import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    img: "https://images.unsplash.com/photo-1603515171529-e9da7ecbd7d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031", 
    title: "Warm Hearts, Cozy Paws",
    subtitle: "Keep your furry friends snug this winter ❄️",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1739421968032-e5f036a25c19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    title: "Winter Wardrobe Wonders",
    subtitle: "Discover stylish comfort for your pets 🧣",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1723601193263-6b022f5c8eb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1083",
    title: "Cuddle Season is Here",
    subtitle: "Explore coats, beds, and accessories 🐕‍🦺",
  },
];

const HeroSlider = () => {
    return (
        <div>
             <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl font-light mb-6 max-w-2xl">
                  {slide.subtitle}
                </p>
                <button className="btn text-white btn-warning text-black font-semibold rounded-full shadow-lg hover:scale-105 transition">
                  Explore Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  

        </div>
    );
};

export default HeroSlider;