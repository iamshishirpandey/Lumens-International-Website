import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const LowerFooter = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
    { name: "blog", href: "/blog", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex space-y-8 lg:space-y-0 flex-col lg:flex-row justify-between items-center ">
      <span>
        copyright by <b>Prabidhilabs</b>.All rights reserved.
      </span>
      <div className="flex justify-between space-x-7">
        <ul className="flex items-center flex-wrap space-x-5 lg:space-x-3">
          {navigation.map((item) => (
            <li>
              <Link
                key={item.name}
                to={item.href}
                // className="inline-flex items-center uppercase"
                // aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="flex space-x-1 items-center">
          <FaArrowUp />
          <span>Back to Top</span>
        </button>
      </div>
    </div>
  );
};

export default LowerFooter;
