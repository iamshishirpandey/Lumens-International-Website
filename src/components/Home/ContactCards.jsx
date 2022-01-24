import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

const ContactCards = () => {
  const people = [
    {
      name: "Plan, then Do",
      title: "Our Services",
      role: "Avantage Group is all about strategy, were here to inform which tactics need funding and which are drains on resources.",
      button: "Avantage Service",
      image: `url("bgn-boxes-01.jpeg")`,
    },
    {
      name: "SMALL TACTICS",
      title: "Our Approach",
      role: "Business we operate in is like an intricate game of chess, where every move counts and you keep score with money.",
      button: "More about Avantage",
      image: `url("bgn-boxes-02.jpeg")`,
    },
    {
      name: "PROOF, NOT PROMISES",
      title: "Avantage Results",
      role: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
      button: "Explor Our Solution",
      image: `url("bgn-boxes-03.jpeg")`,
    },
  ];
  return (
    <div className="flex items-center ">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full px-5 xl:px-28"
      >
        {people.map((person, index) => (
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeInUp"
            duration={1}
            delay={index * 300}
          >
            <li
              key={person.title}
              style={{
                backgroundImage: `${person.image}`,
              }}
              className="col-span-1 z-2 mb-16 -mt-10 pt-24 flex flex-col text-center bg-cover bg-top md:bg-center rounded-sm drop-shadow-2xl divide-y divide-gray-200"
            >
              <div className="flex-1 items-start flex flex-col  p-8 space-y-3">
                <div className="flex items-center space-x-2">
                  <spam className="w-10 h-0.5 bg-red-500" />
                  <spam className="uppercase">{person.name}</spam>
                </div>
                <div className="mt-1 text-3xl font-bold text-sky-900   ">
                  {person.title}
                </div>
                <div className="text-sm text-left pb-4">{person.role}</div>
                <button className="px-5 py-3 bg-red-500 text-white rounded-sm">
                  {person.button}
                </button>
              </div>
            </li>
          </ScrollAnimation>
        ))}
      </ul>
    </div>
  );
};

export default ContactCards;
