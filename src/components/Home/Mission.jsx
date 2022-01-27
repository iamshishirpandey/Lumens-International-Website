import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import YoutubeEmbed from "./YoutubeEmbed";

const Mission = () => {
  return (
    <div
      className="grid grid-cols-6 lg:grid-cols-12 gap-10 px-5 lg:pr-28 bg-cover bg-center"
      style={{
        backgroundImage: `url("bgn-industries.png")`,
      }}
    >
      <div className="col-span-6 py-10 md:py-20">
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeInLeft"
          duration={1}
          delay={400}
        >
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </ScrollAnimation>
      </div>
      <div className="col-span-6 lg:py-16 px-5 md:px-0">
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeInRight"
          duration={1}
          delay={300}
          className="space-y-8"
        >
          <div className="flex items-center space-x-3">
            <span className="w-10 sm:w-16 h-0.5 bg-red-500" />
            <span className="uppercase text-sm text-left sm:text-lg">
              GROWING WITH OUR CLIENTS
            </span>
          </div>
          <div className=" text-xl sm:text-5xl font-bold ">
            <p className="text-sky-900 text-left">
              Talent Strategies that Deliver on the Mission of Healthcare
            </p>
          </div>
          <div>
            <h2 className="text-sky-900 text-2xl text-bold">
              Empowering the Future of Care
            </h2>
            People are at the heart of everything you do. We help you plan,
            acquire and onboard talent to provide broad patient care coverage in
            innovative ways.
          </div>
          <ul className="text-left text-sm lg:text-lg sm:pb-10">
            <li>
              <b>Shared Goals:</b> Achieve your goals with people who know you
              and take on your priorities{" "}
            </li>
            <li>
              <b>Precise Solutions:</b> Apply the right solution, at the right
              time through precision and scale{" "}
            </li>
            <li>
              <b>Innovative Technology:</b> Get things done in new and more
              effective ways with the latest technology{" "}
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Mission;
