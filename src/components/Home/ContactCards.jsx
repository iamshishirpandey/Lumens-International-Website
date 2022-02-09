import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

const ContactCards = () => {
  const people = [
    {
      name: "Plan Before Execution",
      title: "Staffing & Search",
      role: "Lumens offers medical staff as per your time requirement. Providing excellent patient care according to your necessity is what we will guide you to. Our staffing services include nurses and physicians for you- permanent, temporary, per day, travel, substitute of another, and more.",
      image: `url("bgn-boxes-01.jpeg")`,
    },
    {
      name: "Tech-based Strategies for Efficiency",
      title: "Technology",
      role: "Backed up with workforce technology, Lumens brings innovative technology-based solutions to efficiently match the patient’s needs. This streamlines with appropriate staff management and recruitment as well as automating processes to conserve time.",
      image: `url("bgn-boxes-02.jpeg")`,
    },
    {
      name: "Consult and Inquire Optimum Workforce",
      title: "Talent planning & acquisition",
      role: "We constantly work on planning, acquiring and creating the best Talent Management System. Lumens steadily focuses on reinventing the talent supply chain of patient care. While we manage service programs, we are also on top of our work while we recruit patient care solutions.",
      image: `url("bgn-boxes-03.jpeg")`,
    },
    {
      name: "Execution through Workforce, Workflow and TechnologyS",
      title: "managed Services Programs",
      role: "This is where the execution of your workflow happens. You could let us manage the process for you or have control of your staffing. Our program handles the entire process from recruiting the best talent out there to managing the service programs at its best cost.",
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
              className="z-2 h-full mb-16 -mt-10 pt-24 flex flex-col bg-cover bg-top rounded-sm drop-shadow-2xl divide-y divide-gray-200"
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
              </div>
            </li>
          </ScrollAnimation>
        ))}
      </ul>
    </div>
  );
};

export default ContactCards;
