import React from "react";
import { FaPhone, FaSearch, FaShoppingBag } from "react-icons/fa";
import { SideBar } from "./SideBar";

const MainNav = () => {
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
  function openFunction() {
    return false;
  }

  return (
    <nav
      className=" xl:px-28 flex xl:justify-between items-center space-x-3 xl:space-x-8 "
      aria-label="Global"
    >
      <button className="block xl:hidden" onClick={openFunction}>
        <SideBar />
      </button>

      <img src="avantage.png" className=" w-36 xl:w-64" alt="mainLogo" />

      <div className="hidden xl:flex justify-between space-x-16 items-center">
        <div className="flex items-center space-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="inline-flex  items-center font-semibold"
              aria-current={item.current ? "page" : undefined}
            >
              <spam
                className={classNames(
                  item.current ? "w-2.5 h-0.5 bg-red-500 mr-1" : "hidden"
                )}
              ></spam>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <button>
                <FaSearch className="h-10 pt-1" />
              </button>
            </li>
            <li>
              <a href="/">
                <FaShoppingBag className="h-10" />
              </a>
            </li>
            <li>
              <button className="text-white text-sm font-semibold py-3 px-5  flex items-center space-x-3  bg-red-500 hover:-translate-y-1.5 hover:shadow-sm hover:shadow-gray-600">
                <FaPhone className="rotate-90 " />
                <spam>9898989898</spam>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
