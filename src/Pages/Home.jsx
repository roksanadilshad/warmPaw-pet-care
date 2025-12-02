import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import HeroSlider from './HeroSlider';
import TipsCards from './TipsCards';
import PetsCards from './PetsCards';
import VetsCards from './VetsCards';
import Title from './Title';
import Aos from 'aos';
import Loder from './Loder';
import 'animate.css';
import ServiceCard from './Service/ServiceCard';

const Home = () => {
  const { pets, tips, vets, loading } = useLoaderData();

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  if (loading) return <Loder />;

  return (
    <div className="w-11/12 mx-auto">

      {/* Hero Slider */}
      <HeroSlider />

      {/* Popular Winter Care Services */}
      <section className="lg:py-12 mt-12">
        <Title
          title="Popular Winter Care Services"
          description="As the chilly season approaches, keep your pets safe, warm, and happy with our top services."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pets.slice(0, 8).map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/service"
            className="btn btn-warning text-secondary px-8 py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Winter Care Tips */}
      <section className="lg:py-12 mt-12">
        <Title
          title="Winter Care Tips for Pets"
          description="Helpful tips to keep your furry friends healthy, warm, and comfortable this winter."
        />
        <div className=" py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 ">
            {tips.map((tipsCard) => (
              <TipsCards key={tipsCard.tipId} tipsCard={tipsCard} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-primary lg:py-12 mt-12 rounded-xl p-6 text-gray-700 shadow-md">
        <Title
          title="Why Choose WarmPaws?"
          description="We provide exceptional winter care services for your pets with love and professionalism."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-center">
          <div className="p-6 bg-secondary rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">Expert Care</h3>
            <p>Our trained professionals provide high-quality care for all pets.</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">Premium Services</h3>
            <p>From grooming to heated bedding, we ensure your pets are comfortable.</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">Trusted Vets</h3>
            <p>Skilled veterinarians ensure the health and well-being of your pets.</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">Safe & Reliable</h3>
            <p>All our services follow strict safety and hygiene protocols.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Expert Vets */}
      <section className="lg:py-12 mt-12">
        <Title
          title="Meet Our Expert Vets"
          description="Our team of skilled veterinarians are dedicated to keeping your pets healthy and happy."
        />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {vets.map((vetsCard) => (
            <VetsCards key={vetsCard.vetId} vetsCard={vetsCard} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#BAD8B6] text-secondary py-12 my-12 rounded-xl text-center  shadow-md">
        <h2 className="text-4xl font-bold mb-4">Book a Winter Care Service Now</h2>
        <p className="text-lg mb-6">Keep your furry friends warm and safe this winter with our expert services.</p>
        <Link
          to="/service"
          className="btn btn-warning text-secondary  px-8 py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition "
        >
          Book Now
        </Link>
      </section>

    </div>
  );
};

export default Home;
