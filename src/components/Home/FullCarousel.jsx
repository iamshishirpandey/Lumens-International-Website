import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "animate.css";

const FullCarousel = () => {
  const contant = [
    {
      title: "What's Missing in your business ?",
      name: "Find that",
      name2: "Missing piece",
      description:
        "Override the digital divide with additional clickthroughs from devOps. Nanotechnology immersion along the information highway.",
      button1: "Find out more",
      button2: "Our Services",
      img: `url("img-slider-01.jpeg")`,
    },
    {
      title: "What's Missing in your business ?",
      name: "Find that",
      name2: "Missing piece",
      description:
        "Override the digital divide with additional clickthroughs from devOps. Nanotechnology immersion along the information highway.",
      button1: "Find out more",
      button2: "Our Services",
      img: `url("img-slider-02.jpeg")`,
    },
    {
      title: "What's Missing in your business ?",
      name: "Find that",
      name2: "Missing piece",
      description:
        "Override the digital divide with additional clickthroughs from devOps. Nanotechnology immersion along the information highway.",
      button1: "Find out more",
      button2: "Our Services",
      img: `url("img-slider-03.jpeg")`,
    },
  ];
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={false}
        showArrows={false}
        showStatus={false}
        interval={5000}
        axis={"horizontal"}
      >
        {contant.map((item) => (
          <div
            style={{
              backgroundImage: `${item.img}`,
            }}
            className="h-screen bg-cover bg-center bg-no-repeat"
          >
            <div className="flex items-center justify-start px-5 xl:px-28 h-full w-full animate__animated animate__fadeInUp">
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center space-x-3">
                  <spam className="w-10 sm:w-16 h-0.5 bg-red-500" />
                  <spam className="uppercase text-sm text-left sm:text-lg">
                    {item.title}
                  </spam>
                </div>
                <div className=" text-5xl sm:text-7xl">
                  <p className=" font-bold text-sky-900 text-left">
                    {item.name1}
                  </p>
                  <p className=" font-bold text-red-600 text-left ">
                    {item.name2}
                  </p>
                </div>
                <div className="text-left sm:text-lg sm:pb-10 md:w-1/2">
                  {item.description}
                </div>
                <div className="space-y-2 sm:space-y-0 sm:space-x-3 text-left flex flex-col sm:flex-row justify-start items-start">
                  <spam>
                    <button className="py-4 px-5  rounded-sm text-white font-semibold bg-red-500">
                      {item.button1}
                    </button>
                  </spam>
                  <spam>
                    <button className="py-4 px-5 rounded-sm text-white font-semibold bg-sky-900">
                      {item.button2}
                    </button>
                  </spam>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FullCarousel;
