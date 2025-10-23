import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-orange-100 relative overflow-hidden">
      <div className="container mx-auto lg:px-6 flex flex-col md:flex-row items-center items-stretch justify-around gap-12 relative">

        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-7">
          <h1 className=" fontHeadingMimmi text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mb-6">
            Paws-itive Results, Purr-fectly Crafted Strategies.
          </h1>
          <p className="fontInterMimmi text-base md:text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0" >
            We bring digital marketing and web development to life with creativity and precision.
          </p>
          <a href="#contact" className="fontInterMimmi bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg  hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1  focus:outline-none focus:ring-4 focus:ring-orange-300 active:bg-orange-700 inline-block" >
            🐾 Let's Get Started!
          </a>
        </div>

        {/* Right: Hero Image/Illustration */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-md md:max-w-lg">
            {/* Hero Image */}
            <img
              src="/CatWithLaptop.png"
              alt="Friendly cat peering from behind a laptop screen with marketing icons"
              className="filter drop-shadow-[10px_10px_20px_rgba(251,146,60,0.5)] hover:drop-shadow-[10px_10px_20px_rgba(251,146,60,0.8)] w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;