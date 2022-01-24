import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FaStar } from "react-icons/fa";

const Names = () => {
  const contant = [
    {
      title: "Absolutely spot-on!",
      name: "JAMES BRISK",
      img: `http://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-quote-01.jpg`,
      post: "HSBC Bank",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals",
    },
    {
      title: "Absolutely spot-on!",
      name: "JAMES BRISK",
      img: `http://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-quote-02.jpg`,
      post: "HSBC Bank",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals",
    },
    {
      title: "Absolutely spot-on!",
      name: "JAMES BRISK",
      img: `http://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-quote-03.jpg`,
      post: "HSBC Bank",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url("bgn-quotes.jpeg")`,
        clipPath: "polygon(0 100%, 0 0, 100% 9%, 100% 97%)",
      }}
      className="py-32 px-5 xl:px-28 bg-cover bg-left"
    >
      <div className="grid grid-cols-12">
        <div className="space-y-4 text-white col-span-12 md:col-span-9 lg:col-span-6">
          <div className="flex items-center space-x-3">
            <spam className="w-10 sm:w-16 h-0.5 bg-red-500" />
            <spam className="uppercase text-sm text-left sm:text-lg">
              WHERE CAN WE HELP YOU
            </spam>
          </div>
          <div className=" text-3xl sm:text-6xl font-bold ">
            <p className="text-white text-left">Consultancy</p>
            <p className="text-red-600 text-left ">Industries</p>
          </div>
          <div className="text-left sm:text-lg sm:pb-10">
            Nanotechnology immersion along the information highway will close
            the loop on focusing solely on the bottom line. Nanotechnology
            immersion along the information highway.
          </div>
        </div>
      </div>
      <div className="grid grid-col-4 md:grid-cols-12">
        {contant.map((item, index) => (
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeInUp"
            duration={0.5}
            delay={(index + 1) * 300}
            className="col-span-4 p-5 text-white"
          >
            <div className="flex flex-col justify-center items-center space-y-5">
              <img
                src={`${item.img}`}
                alt={index}
                className="w-48 h-48 rounded-full text-red-500 bg-center"
              />

              <h2 className="text-red-500 font-bold text-3xl text-center">
                {item.title}
              </h2>
              <p className=" text-sm lg:text-base">{item.description}</p>
              <spam className="flex items-center">
                <FaStar className="w-5 h-5 text-red-500" />
                <FaStar className="w-5 h-5 text-red-500" />
                <FaStar className="w-5 h-5 text-red-500" />
                <FaStar className="w-5 h-5 text-red-500" />
                <FaStar className="w-5 h-5 text-red-500" />
              </spam>
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold text-2xl">{item.post}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Names;
