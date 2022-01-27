import React from "react";
import Tabs from "../Tabs";

const Cases = () => {
  return (
    <div className="my-16 lg:my-24 px-5 lg:px-28">
      <div className="grid grid-cols-12">
        <div className="space-y-4 col-span-12 lg:col-span-8">
          <div className="flex items-center space-x-3">
            <span className="w-10 sm:w-16 h-0.5 bg-red-500" />
            <span className="uppercase text-sm text-left sm:text-lg">
              SEE WHAT WE DO
            </span>
          </div>
          <div className="text-3xl sm:text-6xl font-bold space-x-3">
            <span className="text-sky-900 text-left">Consultancy</span>
            <span className="text-red-600 text-left ">Cases</span>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Cases;
