import React from 'react';

const BrandStory = () => {
  return (
    <section className="bg-orange-200 relative overflow-hidden">
      <div className="container mx-auto lg:px-6 flex flex-col md:flex-row items-center items-stretch justify-around md:gap-12 relative">

        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-7">
          <h1 className=" fontHeadingMimmi text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mb-6">
            The Tail of MIMMI 🐈🐅🐈🐅🐅🐈
          </h1>
          <p className="fontInterMimmi text-base md:text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0" >
            Born from a passion for both digital excellence and our feline friends, MIMMI believes in precision, agility, and a touch of playful creativity. Just like a cat meticulously stalks its prey, we meticulously craft strategies to capture your audience. We're not just about making noise; we're about making an impact, purr-fecting every detail from your brand's digital presence to your customer's journey. <span className="text-orange-600 font-bold" >Let us help you unleash your brand's inner lion, with the grace and intelligence of a cat.</span>
          </p>
        </div>

        {/* Right: Hero Image/Illustration */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-md md:max-w-lg">
            {/* Hero Image */}
            <img
              src="/CatFamily.png"
              alt="CatFamily"
              className="filter drop-shadow-[10px_10px_20px_rgba(251,146,60,0.5)] hover:drop-shadow-[10px_10px_20px_rgba(251,146,60,0.8)] w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;