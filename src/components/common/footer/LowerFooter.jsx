import React from "react";
import { FaArrowUp } from "react-icons/fa";

const LowerFooter = () => {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "About Us", href: "#", current: false },
    { name: "Service", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
    { name: "Blog", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex space-y-8 lg:space-y-0 flex-col lg:flex-row justify-between items-center ">
      <spam>
        copyright by <b>Prabidhilabs</b>.All rights reserved.
      </spam>
      <div className="flex justify-between space-x-7">
        <ul className="flex items-center flex-wrap space-x-5 lg:space-x-3">
          {navigation.map((item) => (
            <li>
              <a
                key={item.name}
                href={item.href}
                className="inline-flex items-center uppercase"
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="flex space-x-1 items-center">
          <FaArrowUp />
          <spam>Back to Top</spam>
        </button>
      </div>
    </div>
  );
};

export default LowerFooter;
