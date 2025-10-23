import { useEffect, useState, useRef } from "react";

export default function CustomCarouselSection() {
  const slides = [
    {
      id: 1,
      title: "Jewellery Brand",
      color: "text-orange-600 bg-orange-100/80",
      bg: "/Jewellery.png",
      cat: "/CatWithJewellery.png",
    },
    {
      id: 2,
      title: "Restaurants Brands",
      color: "text-pink-600 bg-pink-100/80",
      bg: "/Food2.png",
      cat: "/CatWithFood.png",
    },
    {
      id: 3,
      title: "Real Estate",
      color: "text-yellow-600 bg-yellow-100/80",
      bg: "/RealEstate.png",
      cat: "/CatWithNothing.png",
    },
    {
      id: 4,
      title: "Clothing Brand",
      color: "text-blue-600 bg-blue-100/80",
      bg: "/Clothes.png",
      cat: "/CatWithClothes.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ✅ Auto-slide loop (resets correctly)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ Handlers for navigation buttons
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ✅ Swipe gesture
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide(); // swipe left
      else prevSlide(); // swipe right
    }
  };

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden bg-orange-100"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute bg-repeat-x inset-0 flex flex-col justify-between items-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Title */}
          <div className="heading w-full text-center mt-5">
            <h1
              className={`fontHeadingMimmi text-4xl md:text-6xl font-extrabold leading-tight ${slide.color} p-5 inline-block rounded-lg shadow-lg`}
            >
              {slide.title}
            </h1>
          </div>

          {/* Cat Image */}
          <div className="cat w-full relative top-0 mb-10">
            <img
              src={slide.cat}
              alt={slide.title}
              className="mx-auto md:h-[50vh] transition-transform duration-700 hover:scale-105 drop-shadow-xl"
            />
          </div>
        </div>
      ))}

      {/* ✅ Navigation Buttons — fixed with z-index */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-3xl p-2 rounded-full transition-all z-30"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-3xl p-2 rounded-full transition-all z-30"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30 bg-orange-100 p-2 rounded-4xl">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentSlide
                ? "bg-orange-900 scale-125"
                : "bg-orange-500/50 hover:bg-orange-600/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
