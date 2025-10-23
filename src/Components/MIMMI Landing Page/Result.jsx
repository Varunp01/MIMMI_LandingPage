import { useEffect, useState } from "react";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Result() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("results");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="results"
      className="relative bg-white py-20 px-6 overflow-hidden text-center"
    >
      {/* Soft background gradient bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-orange-200 rounded-full blur-3xl top-0 left-0 opacity-20 animate-pulse"></div>
        <div className="absolute w-[250px] h-[250px] bg-orange-300 rounded-full blur-3xl bottom-0 right-0 opacity-20 animate-pulse"></div>
      </div>

      <h2 className="text-4xl font-bold text-orange-500 mb-3">
        Proof is in the Purr-formance!
      </h2>
      <p className="text-gray-600 mb-12">
        Our clients didn’t just dream — they achieved results worth purring
        about.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div
          className={`bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all transform duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Website Traffic Increase
          </h3>
          <p className="text-3xl font-bold text-orange-500 mb-1">+120%</p>
          <p className="text-gray-600 text-sm">
            Client A saw +120% organic traffic in 6 months!
          </p>

          {/* Line Graph */}
          <div className="mt-6 relative h-24 flex items-end justify-center">
            <div className="absolute bottom-0 w-3/4 h-[2px] bg-orange-200"></div>
            <div
              className={`absolute bottom-0 w-3/4 h-[2px] bg-orange-400 transform origin-left ${
                visible ? "scale-x-100" : "scale-x-0"
              } transition-transform duration-[1500ms]`}
            ></div>
            <ArrowUpRight className="text-orange-500 absolute top-0 right-[15%]" />
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all transform duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Conversion Rate Boost
          </h3>
          <p className="text-3xl font-bold text-orange-500 mb-1">+45%</p>
          <p className="text-gray-600 text-sm">
            Client B achieved a +45% conversion rate improvement!
          </p>

          {/* Bar Chart */}
          <div className="mt-6 flex items-end justify-center gap-3 h-24">
            {[20, 45, 25].map((h, i) => (
              <div
                key={i}
                className={`w-6 rounded-t ${
                  i === 1 ? "bg-orange-500" : "bg-orange-200"
                } transition-all duration-1000 ease-out`}
                style={{
                  height: visible ? `${h}%` : "0%",
                  transitionDelay: `${i * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all transform duration-700 delay-400 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Social Media Roar
          </h3>
          <p className="text-3xl font-bold text-orange-500 mb-1">+75%</p>
          <p className="text-gray-600 text-sm">
            Client C's engagement grew by +75%!
          </p>

          {/* Hearts */}
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className={`${
                  i < 4
                    ? "fill-orange-500 text-orange-500"
                    : "text-orange-200"
                } transition-transform duration-500 ${
                  visible ? "scale-100" : "scale-0"
                }`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
