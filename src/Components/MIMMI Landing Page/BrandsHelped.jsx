import { useState } from 'react'
import { Target, Megaphone, Award, Search, Monitor, Mail, Users, DollarSign, Feather } from 'lucide-react';

const BrandsData = [
  {
    title: "Jewellery Brand",
  },
  {
    title: "Clothing Brand",
  },
  {
    title: "Restaurants",
  },
  {
    title: "Real Estate",
  }
];

function BrandsHelped() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="w-full relative flex justify-center py-5 bg-orange-100">
        <div className="container px-6 relative ">

          {/* Left: Text Content */}
          <div className=" text-center w-full ">
            <h1 className=" fontHeadingMimmi md:w-3/4 text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mx-auto mb-6">
            Purr-fect Partnerships - Brands We've Helped
          </h1>
          <p className="fontInterMimmi text-base md:text-xl text-gray-600 mx-auto md:mx-0" >
            We bring digital marketing and web development to life with creativity and precision.
          </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandsHelped




