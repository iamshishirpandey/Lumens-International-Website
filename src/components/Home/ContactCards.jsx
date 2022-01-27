import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

const ContactCards = () => {
  const people = [
    {
      name: "Plan, then Do",
      title: "Staffing & Search",
      role: "Access to the nation largest, Most diverse network of healthcare professionals.",
      image: `url("bgn-boxes-01.jpeg")`,
    },
    {
      name: "SMALL TACTICS",
      title: "Technology",
      role: "Comprehensive stack of tools from analytics, scheduling and vendor management to leading video remote interpretation.",
      image: `url("bgn-boxes-02.jpeg")`,
    },
    {
      name: "PROOF,PROMISES",
      title: "Talent planning & acquisition",
      role: "Strategic consultation to optimize workforce and technology to improve patient outcomes",
      image: `url("bgn-boxes-03.jpeg")`,
    },
    {
      name: "PROOF,ROMISES",
      title: "managed Services Programs",
      role: "One program to handle all talent management need from acquisition to development.",
      image: `url("bgn-boxes-02.jpeg")`,
    },
  ];
  return (
    <div className="flex items-center">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full px-5 xl:px-28"
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
              className="z-2 h-96 mb-16 -mt-10 pt-24 flex flex-col bg-cover bg-top rounded-sm drop-shadow-2xl divide-y divide-gray-200"
            >
              <div className="flex-1 items-start flex flex-col  p-8 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-10 h-0.5 bg-red-500" />
                  <span className="uppercase text-left">{person.name}</span>
                </div>
                <div className="mt-1 text-2xl font-bold text-sky-900 capitalize">
                  {person.title}
                </div>
                <div className="text-sm text-left pb-4">{person.role}</div>
                <button className="px-5 py-3 bg-red-500 text-white rounded-sm">
                  Learn more
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
