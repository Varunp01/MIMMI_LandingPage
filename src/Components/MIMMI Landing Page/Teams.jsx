import React, { useState, useEffect, useRef } from "react";

const carouselData = [
    {
        id: 1,
        mainUrl: 'https://placehold.co/800x450/1e3a8a/ffffff?text=Sultan',
        thumbUrl: 'https://placehold.co/60x30/1e3a8a/ffffff?text=S',
        alt: 'FOUNDER'
    },
    {
        id: 2,
        mainUrl: 'https://placehold.co/800x450/065f46/ffffff?text=Varun+Pandey',
        thumbUrl: 'https://placehold.co/60x30/065f46/ffffff?text=VP',
        alt: 'DEVELOPER'
    },
    {
        id: 3,
        mainUrl: 'https://placehold.co/800x450/065f46/ffffff?text=Varun+Pandey',
        thumbUrl: 'https://placehold.co/60x30/065f46/ffffff?text=VP',
        alt: 'DEVELOPER'
    },,
    {
        id: 4,
        mainUrl: 'https://placehold.co/800x450/065f46/ffffff?text=Varun+Pandey',
        thumbUrl: 'https://placehold.co/60x30/065f46/ffffff?text=VP',
        alt: 'DEVELOPER'
    },
];

export default function Teams() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle clicking on a custom navigation dot
    const handleNavClick = (index) => {
        setCurrentIndex(index);
    };

    // The currently displayed image object
    const currentImage = carouselData[currentIndex];

    return (
        <section className=" mx-auto px-6 bg-orange-100 py-5" >
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="lg:w-1/2 w-full order-2 lg:order-1">
                    <div className="w-full rounded-xl overflow-hidden py-6 md:py-8">
                        {/* --- Custom Image Navigation Dots --- */}
                        <div className="flex flex-wrap justify-start gap-2 py-1 rounded-lg mx-2">
                            {carouselData.map((item, index) => (
                                <div key={item.id} onClick={() => handleNavClick(index)} className={` cursor-pointer  transition-all  duration-300  p-1  rounded-lg  flex-shrink-0 hover:shadow-lg
                ${index === currentIndex
                                        ? 'border-3 w-30 h-12 border-orange-500 transform scale-110 shadow-xl'
                                        : 'border-2 w-10 h-12 border-gray-300 hover:border-orange-600'
                                    }
              `}
                                >
                                    <img src={item.thumbUrl} alt={`Thumbnail for ${item.alt}`} className="w-full h-full object-cover rounded-md" />
                                </div>
                            ))}
                        </div>
                        {/* --- Main Image Display Area --- */}
                        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden border-2 border-orange-300 transition duration-500">
                            <img key={currentImage.id} src={currentImage.mainUrl} alt={currentImage.alt} className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/800x450/ef4444/ffffff?text=Error+Loading+Image";
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-black bg-opacity-40 text-orange-100 text-base font-semibold">
                                {currentImage.alt}
                            </div>
                        </div>


                    </div>
                </div>
                <div className=" lg:w-1/2 w-full md:text-left order-1 lg:order-2 md:px-2 text-center">
                    <h1 className=" fontHeadingMimmi text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mb-6">
                        The MIMMI Marketing Pack
                    </h1>
                    <p className="fontInterMimmi text-base md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0" >
                        Meet the Pride - Our Team
                    </p>
                    <p className="fontInterMimmi text-base md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0" >
                        The Paw-sitively Brilliant Minds Driving Our Purr-fect Strategies
                    </p>
                </div>
            </div>
        </section>
    );
}