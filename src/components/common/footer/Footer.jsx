import React from "react";
import { FindUs } from "./FindUs";
import GetInTouch from "./GetInTouch";
import Headquarters from "./Headquarters";
import LowerFooter from "./LowerFooter";

const Footer = () => {
  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-12 gap-8 lg:gap-16 bg-sky-900 px-5 py-10 sm:p-10 xl:px-28 xl:py-20 text-white">
        <div className=" md:col-span-3 w-full border-b pb-5 md:border-none border-sky-800 ">
          <Headquarters />
        </div>
        <div className=" md:col-span-6 w-full border-b pb-5 md:border-none border-sky-800 ">
          <FindUs />
        </div>
        <div className=" md:col-span-3 w-full  pb-5 ">
          <GetInTouch />
        </div>
      </div>
      <div className="bg-red-500 text-white p-8 xl:px-28 text-sm">
        <LowerFooter />
      </div>
    </>
  );
};

export default Footer;
