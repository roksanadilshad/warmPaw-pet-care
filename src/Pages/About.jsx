import React from "react";
import { IoPaw, IoSnow } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="w-11/12 mx-auto lg:py-16">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center shadow-xl rounded-3xl p-10 bg-secondary">

        {/* Left Image */}
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop"
            className="rounded-3xl shadow-lg object-cover w-full h-[450px]"
            alt="WarmPaws Pets"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            About WarmPaws
          </h2>

          <p className="text-gray-500 leading-relaxed mb-4">
            At <span className="font-semibold text-success">WarmPaws</span>, we are dedicated to
            keeping your furry companions safe, warm, and happy during the cold winter months.
            Our certified pet experts provide guidance, services, and seasonal care tips to help
            every pet stay comfortable all winter long.
          </p>

          <p className="text-gray-500 leading-relaxed mb-6">
            We believe every pet deserves warmth, love, and proper winter care—whether it's
            paw protection, grooming, winter nutrition, or seasonal checkups.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 text-center gap-4 mt-6">
            <div className="bg-primary p-4 rounded-xl shadow">
              <IoPaw className="text-3xl mx-auto text-success" />
              <h3 className="text-xl font-bold">1500+</h3>
              <p className="text-gray-500 text-sm">Pets Helped</p>
            </div>
            <div className="bg-primary p-4 rounded-xl shadow">
              <FaUserDoctor className="text-3xl mx-auto text-success" />
              <h3 className="text-xl font-bold">25+</h3>
              <p className="text-gray-500 text-sm">Expert Vets</p>
            </div>
            <div className="bg-primary p-4 rounded-xl shadow">
              <IoSnow className="text-3xl mx-auto text-success" />
              <h3 className="text-xl font-bold">10+</h3>
              <p className="text-gray-500 text-sm">Winter Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-gray-700" data-aos="fade-up">
          Our Mission
        </h2>
        <p
          className="mt-4 max-w-3xl mx-auto text-gray-500 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our mission is to educate, protect, and support pet owners during winter by providing
          top-quality services tailored to seasonal needs. We focus on safety, comfort, and
          long-term health for every furry friend.
        </p>
      </div>

      {/* Values */}
      <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-8 text-center">
        <div className="bg-primary shadow-lg rounded-2xl p-6" data-aos="zoom-in">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Compassion</h3>
          <p className="text-gray-500">We treat every pet with love, care, and respect.</p>
        </div>

        <div className="bg-primary shadow-lg rounded-2xl p-6" data-aos="zoom-in" data-aos-delay="100">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Safety First</h3>
          <p className="text-gray-500">All our winter services focus on pet well-being.</p>
        </div>

        <div className="bg-primary shadow-lg rounded-2xl p-6" data-aos="zoom-in" data-aos-delay="200">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Expert Care</h3>
          <p className="text-gray-500">Our vets ensure healthy, safe, and joyful winter living.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
