import React, { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
};

const AnimatedStatCard = ({ endValue, label, comment, suffix = "", prefix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentValue = Math.floor(percentage * endValue);
        setCount(currentValue);

        if (percentage < 1) {
          requestAnimationFrame(animate);
        } else {
          hasAnimated.current = true;
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, endValue, duration]);

  const cardClasses =
    "p-6 rounded-2xl bg-white border-2 border-orange-600 shadow-lg transition-all duration-500 transform hover:scale-[1.02] hover:shadow-orange-700 backdrop-blur-sm text-center";

  return (
    <div ref={cardRef} className={cardClasses}>
      {label === "Website Traffic Increase" ? (
        <>
          <div className="svg w-full">
            <svg className=" mx-auto" fill="#F54A00" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve" stroke="#F54A00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M59,55.5v-39H47v39h-3v-31H32v31h-3v-23H17v23h-3v-14H2v14H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1h12h3h12h3h12h3h12 c0.552,0,1-0.447,1-1S59.552,55.5,59,55.5z"></path> <path d="M8.03,27.83c0.169,0,0.342-0.043,0.499-0.134l36.269-20.94l-2.27,4.99c-0.229,0.503-0.007,1.096,0.496,1.324 c0.134,0.062,0.275,0.09,0.414,0.09c0.38,0,0.743-0.218,0.911-0.586l3.562-7.83c0.011-0.025,0.009-0.052,0.018-0.078 c0.019-0.053,0.034-0.104,0.044-0.16c0.005-0.028,0.021-0.051,0.023-0.08c0.001-0.012-0.004-0.022-0.003-0.034 c0.002-0.038-0.002-0.073-0.004-0.111c-0.003-0.055-0.012-0.107-0.024-0.162c-0.008-0.038-0.01-0.077-0.023-0.114 c-0.012-0.036-0.033-0.066-0.049-0.101C47.88,3.881,47.88,3.854,47.866,3.83c-0.014-0.024-0.038-0.038-0.054-0.061 c-0.021-0.031-0.037-0.064-0.062-0.092c-0.026-0.03-0.059-0.051-0.089-0.078c-0.041-0.037-0.082-0.071-0.128-0.101 c-0.031-0.02-0.059-0.042-0.093-0.059c-0.011-0.005-0.017-0.015-0.028-0.02c-0.025-0.011-0.052-0.009-0.077-0.018 c-0.055-0.02-0.109-0.034-0.166-0.044c-0.026-0.005-0.047-0.02-0.074-0.022l-8.562-0.83c-0.555-0.056-1.039,0.35-1.092,0.898 c-0.054,0.55,0.349,1.039,0.898,1.092l5.456,0.529L7.529,25.964C7.05,26.24,6.887,26.852,7.163,27.33 C7.348,27.651,7.684,27.83,8.03,27.83z"></path> </g> </g></svg>
          </div>
        </>
      ) : (<></>)}

      {label === "Conversion Rate Boost" ? (
        <>
          <div className="svg w-full">
            <svg className=" mx-auto" fill="#F54A00" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 318.996 318.996" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_5_66_"> <g> <g> <path d="M318.996,298.548c0,6.6-1.746,12-9.996,12H15c-8.25,0-15-6.75-15-15V18.446c0-8.25,5.4-9.998,12-9.998 s12,1.748,12,9.998v253.103c0,8.25,6.75,15,15,15h270C317.25,286.548,318.996,291.949,318.996,298.548z"></path> </g> <path d="M290.949,111.148c3.469,2.18,6.004,0.625,5.633-3.455l-5.801-63.897c-0.371-4.08-3.813-6.243-7.65-4.807l-60.088,22.492 c-3.836,1.437-4.139,4.395-0.67,6.575l11.141,7c3.469,2.18,4.465,6.763,2.211,10.185l-45.412,68.975 c-2.252,3.422-7.23,5.034-11.063,3.583l-70.58-26.725c-3.832-1.451-9.102-0.053-11.711,3.105l-44.324,53.66 c-2.609,3.159-4.762,9.095-4.783,13.191l-0.227,43.824c-0.02,4.097,2.146,4.905,4.814,1.797l57.084-66.487 c2.67-3.108,7.988-4.464,11.818-3.012l71.104,26.946c3.83,1.452,8.822-0.15,11.094-3.56l63.641-95.534 c2.271-3.41,6.967-4.415,10.436-2.236L290.949,111.148z"></path> </g> </g> </g> </g></svg>
          </div>
        </>
      ) : (<></>)}

      {label === "Social Media Roar" ? (
        <>
        <style>
        {`
          @keyframes pulse-effect {
              0% {
                  transform: scale(1.0);
              }
              50% {
                  transform: scale(1.05); 
              }
              100% {
                  transform: scale(1.0);
              }
          }

          .heart-pulse {
              animation: pulse-effect 1.5s infinite ease-in-out;
              transform-origin: center center; 
          }
        `}
      </style>
          <div className="svg w-full flex justify-center">
            <svg className="heart-pulse" height="50px" width="50px" viewBox="0 0 24 24" fill="#F54A00" xmlns="http://www.w3.org/2000/svg" stroke="#F54A00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" fill="#F54A00"></path> </g></svg>
            <svg className="heart-pulse" height="50px" width="50px" viewBox="0 0 24 24" fill="#F54A00" xmlns="http://www.w3.org/2000/svg" stroke="#F54A00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" fill="#F54A00"></path> </g></svg>
            <svg className="heart-pulse" height="50px" width="50px" viewBox="0 0 24 24" fill="#F54A00" xmlns="http://www.w3.org/2000/svg" stroke="#F54A00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" fill="#F54A00"></path> </g></svg>
            <svg className="heart-pulse" height="50px" width="50px" viewBox="0 0 24 24" fill="#F54A00" xmlns="http://www.w3.org/2000/svg" stroke="#F54A00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" fill="#F54A00"></path> </g></svg>
            <svg className="heart-pulse" height="50px" width="50px" viewBox="0 0 24 24" fill="#F54A00" xmlns="http://www.w3.org/2000/svg" stroke="#F54A00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" fill="#FFEDD4"></path> </g></svg>
          </div>
        </>
      ) : (<></>)}



      <h1 className=" fontHeadingMimmi md:w-3/4 text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mx-auto my-3">
        {suffix}{count.toLocaleString()}{prefix}
      </h1>
      <p className="fontInterMimmi text-base md:text-xl text-black font-bold mx-auto md:mx-0" >
        {label}
      </p>
      <p className="fontInterMimmi text-sm md:text-sm text-gray-500 mx-auto md:mx-0" >
        {comment}
      </p>
    </div>
  );
};

export default function Result() {
  const stats = [
    { id: 1, suffix: "+", endValue: 120, prefix: "%", label: "Website Traffic Increase", comment: "Client A saw +120% organic traffic in 6 months!" },
    { id: 2, suffix: "+", endValue: 45, prefix: "%", label: "Conversion Rate Boost", comment: "Client B achieved a +45% conversion rate improvement!" },
    { id: 3, suffix: "+", endValue: 75, prefix: "%", label: "Social Media Roar", comment: "Client C's engagement grew by +75%!" },
  ];

  return (
    <section className="w-full relative flex justify-center py-5 bg-orange-200">
      <div className="container px-6 relative ">

        <div className=" text-center w-full ">
          <h1 className=" fontHeadingMimmi md:w-3/4 text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mx-auto mb-6">
            Proof is in the Purr-formance!
          </h1>
          <p className="fontInterMimmi text-base md:text-xl text-gray-600 mx-auto md:mx-0" >
            Our clients didn’t just dream — they achieved results worth purring about.
          </p>
        </div>

        <div className="grid">
          <div className=" p-4 sm:p-8 font-sans">
            <div className="max-w-6xl mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {stats.map(stat => (
                  <AnimatedStatCard key={stat.id} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}