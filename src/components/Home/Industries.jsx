import React from "react";
import { FaCloudsmith } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Industries = () => {
  const consultancy = [
    {
      name: "Solicitory",
      icon: FaCloudsmith,
      text: " Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
    {
      name: "Solicitory",
      icon: FaCloudsmith,
      text: " Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
    {
      name: "Solicitory",
      icon: FaCloudsmith,
      text: " Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
    {
      name: "Solicitory",
      icon: FaCloudsmith,
      text: " Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
    {
      name: "Solicitory",
      icon: FaCloudsmith,
      text: " Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
    {
      name: "Solicitory",
      icon: FaCloudsmith,
      text: " Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
  ];
  return (
    <div className="my-16 lg:my-24">
      <div
        className="bg-cover bg-center px-5 lg:px-0 lg:mx-28 pb-10 mb-10 border-b border-gray-300"
        style={{
          backgroundImage: `url("bgn-industries.png")`,
        }}
      >
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeInUp"
          duration={0.5}
          delay={300}
        >
          <div className="grid grid-cols-12">
            <div className="space-y-4 col-span-12 lg:col-span-8">
              <div className="flex items-center space-x-3">
                <span className="w-10 sm:w-16 h-0.5 bg-red-500" />
                <span className="uppercase text-sm text-left sm:text-lg">
                  Offering You the Best Talent, When You Need It
                </span>
              </div>
              <div className=" text-3xl sm:text-6xl font-bold ">
                <p className="text-sky-900 text-left">Healthcare Staffing & </p>
                <p className="text-red-600 text-left ">Search Solutions</p>
              </div>
              <div className="text-left sm:text-lg sm:pb-10">
                Whatever the need, we have built the nation???s largest and most
                diverse network of talented and supported healthcare
                professionals. We offer a range of specialty recruitment and
                assignment lengths, including permanent placements, for nursing
                and allied professionals as well as physicians & advanced
                practice providers. We help organizations improve operations and
                efficiencies with executives & leaders, from managers to C-Suite
                executives, as well as revenue cycle professionals.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {consultancy.map((item, index) => (
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                duration={0.5}
                delay={(index + 1) * 300}
                className="col-span-12 md:col-span-4"
              >
                <div className="flex space-x-5">
                  <item.icon className="w-28 h-28 text-red-500" />
                  <div>
                    <h2 className="text-sky-900 font-bold text-2xl">
                      {item.name}
                    </h2>
                    <p className=" text-sm lg:text-base">{item.text}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
      {/* <div className="flex justify-center items-center">
        <button className="p-5  text-white bg-sky-900 font-semibold">
          View all Industrie
        </button>
      </div> */}
    </div>
  );
};

export default Industries;
