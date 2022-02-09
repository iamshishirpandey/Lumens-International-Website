import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "animate.css";

const FullCarousel = () => {
  const contant = [
    {
      title: "CUSTOM, SCALABLE, TECH-ENABLED?",
      name1: "Reliable Staffing, ",
      name2: "Healthcare Workforce Management",
      description:
        "Everything you could possibly need to onboard talent and to cover patient care. Your need for a healthcare professional, or you being one-we are one-stop for it all. Healthcare Total Talent Solutions is who we are.",
      button1: "Get In Touch",

      img: `url("img-slider-01.jpeg")`,
    },
    {
      title: "CUSTOM, SCALABLE, TECH-ENABLED?",
      name1: "Reliable Staffing, ",
      name2: "Healthcare Workforce Management",
      description:
        "Everything you could possibly need to onboard talent and to cover patient care. Your need for a healthcare professional, or you being one-we are one-stop for it all. Healthcare Total Talent Solutions is who we are.",
      button1: "Get In Touch",

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
        swipeable={false}
        showIndicators={false}
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
                  <span className="w-10 sm:w-16 h-0.5 bg-red-500" />
                  <span className="uppercase text-sm text-left sm:text-lg">
                    {item.title}
                  </span>
                </div>
                <div className=" text-5xl sm:text-6xl">
                  <p className=" font-bold text-sky-900 text-left">
                    {item.name1}
                  </p>
                  <p className=" font-bold text-red-600 text-left ">
                    {item.name2}
                  </p>
                </div>
                <div className="text-left sm:text-lg md:w-1/2">
                  {item.description}
                </div>
                <div className="space-y-2 sm:space-y-0 sm:space-x-3 text-left">
                  <a href="/contact">
                    <button className="py-4 px-5  rounded-sm text-white font-semibold bg-red-500">
                      {item.button1}
                    </button>
                  </a>
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
