import { useState } from 'react'
import { Target, Megaphone, Award, Search, Monitor, Mail, Users, DollarSign, Feather } from 'lucide-react';

const servicesData = [
  {
    title: "Google Ads",
    Icon: Target, // Icon for specific targeting and goal setting
    description: "Targeted campaigns for maximum reach.",
  },
  {
    title: "Meta Ads",
    Icon: Megaphone, // Icon representing broadcasting and advertising
    description: "Engage your audience across social platforms.",
  },
  {
    title: "Brand Management",
    Icon: Award, // Icon signifying quality, prestige, and brand identity
    description: "Crafting a memorable brand identity.",
  },
  {
    title: "SEO",
    Icon: Search, // Icon for search optimization and ranking
    description: "Climb the search engine ranks with ease.",
  },
  {
    title: "Website & App Dev",
    Icon: Monitor, // Icon representing screens and digital products
    description: "Beautiful, functional, and user-friendly designs.",
  },
  {
    title: "Email Marketing",
    Icon: Mail, // Icon clearly indicating email services
    description: "Nurture leads with compelling campaigns.",
  },
  {
    title: "Social Media",
    Icon: Users, // Icon symbolizing community building and audience
    description: "Build communities and boost engagement.",
  },
  {
    title: "USA Affiliate Marketing",
    Icon: DollarSign, // Icon representing financial/monetary focus
    description: "Expand your reach in the US market.",
  },
  {
    title: "Social Media Posts",
    Icon: Feather, // Icon for content creation and writing
    description: "Creative and engaging content that stands out.",
  },
];

function Services() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="w-full relative flex justify-center py-5 bg-orange-200">
        <div className="container px-6 relative ">

          {/* Left: Text Content */}
          <div className=" text-center w-full ">
            <h1 className=" fontHeadingMimmi md:w-3/4 text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mb-6 mx-auto">
              Tail-Wagging Digital Marketing Services
            </h1>
          </div>

          <div className="grid">
            <div className=" p-4 sm:p-8 font-sans">
              <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                  {servicesData.map((service, index) => {
                    const Icon = service.Icon;

                    return (
                      <div
                        key={index}
                        className="w-80 bg-white mx-auto shadow-xl p-6 pt-0 space-y-4 relative overflow-hidden rounded-2xl border-2 border-[#F54A00]"
                      >
                        {/* Absolute positioned element for the background shape/index number */}
                        <div className="absolute -top-8 right-0 transform w-28 h-28">
                          <svg
                            className="block w-full h-full"
                            viewBox="0 0 412 412"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#FFD7A8"
                            stroke="#808285"
                            strokeMiterlimit="10"
                            strokeWidth="7"
                          >
                            <g id="SVGRepo_iconCarrier">
                              <path d="M324.5,282.26c-11.49-19.8-36.22-33.5-64.9-33.5s-53.41,13.7-64.9,33.5c-20.53,9.58-33.5,23.62-33.5,39.28,0,28.87,44.05,52.27,98.4,52.27s98.4-23.4,98.4-52.27c0-15.66-12.97-29.7-33.5-39.28Z" />
                              <ellipse cx="295.77" cy="176.77" rx="38.75" ry="29.72" transform="translate(55.53 423.78) rotate(-76.66)" />
                              <ellipse cx="212.93" cy="176.77" rx="29.72" ry="38.75" transform="translate(-35.04 53.89) rotate(-13.34)" />
                              <ellipse cx="148.91" cy="240.32" rx="26.12" ry="34.05" transform="translate(-100.21 106.65) rotate(-30)" />
                              <ellipse cx="363.09" cy="231.51" rx="34.05" ry="26.12" transform="translate(-18.94 430.2) rotate(-60)" />
                              {/* Number centered within the SVG's viewBox */}
                              <text
                                x="256"
                                y="315"
                                fontSize="100"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                stroke="#808285"
                                strokeWidth="7"
                                fontWeight="bold"
                                style={{ userSelect: 'none' }}
                              >
                                {index + 1}
                              </text>
                            </g>
                          </svg>
                        </div>

                        <div className="w-fit mx-auto relative">
                          {/* The Image element. It defines the boundaries of the space. */}
                          <img
                            src="/CatShowingLogo.png"
                            alt="Cat with Logo"
                            className="object-cover "
                          />

                          {/* The Icon element, now positioned absolutely OVER the image. */}
                          <div className="absolute top-[74%] left-[37%] flex items-center justify-center">
                            <Icon className="w-16 h-16 p-2 text-orange-600 " />
                          </div>
                        </div>

                        {/* Title (centered) */}
                        <h1 className="fontHeadingMimmi text-2xl text-center font-bold text-orange-600 pt-1">
                          {/* Removed mt-2, using space-y-4 on the parent for vertical spacing */}
                          {service.title}
                        </h1>

                        {/* Description (centered) */}
                        <p className="fontInterMimmi text-base text-gray-600 text-center">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services




