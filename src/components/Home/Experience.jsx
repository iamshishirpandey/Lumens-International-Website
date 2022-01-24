import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { GiSandsOfTime } from "react-icons/gi";

const Experience = () => {
  const contant = [
    {
      name: "Consistency",
      icon: GiSandsOfTime,
      text: "Podcasting operational change management inside of workflow.",
    },
    {
      name: "Consistency",
      icon: GiSandsOfTime,
      text: "Podcasting operational change management inside of workflow.",
    },
    {
      name: "Consistency",
      icon: GiSandsOfTime,
      text: "Podcasting operational change management inside of workflow.",
    },
  ];
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12 gap-10 px-5 lg:pr-28">
      <div className="col-span-6">
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeInLeft"
          duration={1}
          delay={300}
        >
          <img
            src="img-experience.png"
            alt="bgn-boxes-03.jpeg"
            className="w-full h-full"
          />
        </ScrollAnimation>
      </div>
      <div className="col-span-6 md:py-16 px-5 md:px-0">
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeInRight"
          duration={1}
          delay={300}
          className="space-y-8"
        >
          <div className="flex items-center space-x-3">
            <spam className="w-10 sm:w-16 h-0.5 bg-red-500" />
            <spam className="uppercase text-sm text-left sm:text-lg">
              GROWING WITH OUR CLIENTS
            </spam>
          </div>
          <div className=" text-3xl sm:text-6xl font-bold ">
            <p className="text-sky-900 text-left">30 Years of</p>
            <p className="text-red-600 text-left ">Experience</p>
          </div>
          <div className="text-left text-sm lg:text-lg sm:pb-10 grid grid-cols-6 md:grid-cols-12 gap-5">
            <p className="col-span-6 ">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line.
            </p>
            <p className="col-span-6">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              diversity.
            </p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-12 text-center gap-5">
            {contant.map((item, index) => (
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                duration={1}
                delay={index * 300}
                className="col-span-4"
              >
                <div className="justify-center flex items-center flex-col space-y-2">
                  <div className="border-8 border-red-500 rounded-full p-8">
                    <item.icon className="text-sky-900 w-16 h-16 " />
                  </div>
                  <p className="font-bold text-3xl text-sky-900">{item.name}</p>
                  <p className="">{item.text}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Experience;
