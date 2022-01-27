import React, { useEffect, useState } from "react";
import { FaPhone, FaSearch, FaShoppingBag } from "react-icons/fa";
import Nav from "./Nav";
import SideBar from "./SideBar";

const MainNav = () => {
  const [screen, setScreen] = useState(false);
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About Us", href: "/about", current: false },
    { name: "Contact us", href: "/contact", current: false },
    { name: "Blog", href: "/blog", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) setScreen(true);
      else setScreen(false);
    });
  }, []);
  return (
    <>
      <nav
        style={{ zIndex: "900", transition: "all ease-in-out 0.5s" }}
        className={`${
          screen ? "fixed  w-full h-16" : "h-16 xl:h-36"
        } px-5 top-0 left-0 right-0 xl:px-28 flex xl:justify-between items-center  space-x-3 xl:space-x-8  overflow-hidden bg-white shadow-xl`}
        aria-label="Global"
      >
        <div className="block xl:hidden">
          <SideBar />
        </div>

        <h1
          className={`${
            screen ? "text-4xl " : "text-4xl"
          } "alt="mainLogo uppercase font-bold text-sky-900`}
        >
          {" "}
          Lumens
        </h1>

        <div className="hidden xl:flex justify-between space-x-16 items-center">
          <Nav />
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
                <button className="text-white rounded-sm text-sm font-semibold py-3 px-5  flex items-center space-x-3  bg-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300">
                  <FaPhone className="rotate-90 " />
                  <span>9898989898</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
