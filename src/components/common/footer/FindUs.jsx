import React from "react";
import { MdLocationOn } from "react-icons/md";

export const FindUs = () => {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center space-x-2">
          <span className="w-5 h-0.5 bg-red-500" />
          <span className="font-semibold capitalize">Our Locations</span>
        </div>
        <span className="text-red-500 text-xl font-bold">
          Where to find us?
        </span>
      </div>
      <div className="grid sm:grid-cols-2 space-y-5 h-auto">
        <img src="lumensWorld.png" alt="LumensWorld" className="h-36" />
        <div className="sm:flex flex-col justify-center items-center">
          <ul>
            <li>
              <span className="flex items-center  space-x-2 ">
                <MdLocationOn className="h-6 text-red-500" />
                <span>London: 020 7946 0020</span>
              </span>
            </li>
            <li>
              <span className="flex items-center space-x-2 ">
                <MdLocationOn className="h-6 text-red-500" />
                <span>Ontario: 613 285 5534</span>
              </span>
            </li>
            <li>
              <span className="flex items-center space-x-2 ">
                <MdLocationOn className="h-6 text-red-500" />
                <span>Tokyo: 0428 298 114</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
