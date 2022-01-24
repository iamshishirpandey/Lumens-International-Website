import React from "react";
import { MdLocationOn } from "react-icons/md";

export const FindUs = () => {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center space-x-2">
          <spam className="w-5 h-0.5 bg-red-500" />
          <spam className="font-semibold capitalize">Our Locations</spam>
        </div>
        <spam className="text-red-500 text-xl font-bold">
          Where to find us?
        </spam>
      </div>
      <div className="grid sm:grid-cols-2 space-y-5 h-auto">
        <img src="lumensWorld.png" alt="LumensWorld" className="h-36" />
        <div className="sm:flex flex-col justify-center items-center">
          <ul>
            <li>
              <spam className="flex items-center  space-x-2 ">
                <MdLocationOn className="h-6 text-red-500" />
                <spam>London: 020 7946 0020</spam>
              </spam>
            </li>
            <li>
              <spam className="flex items-center space-x-2 ">
                <MdLocationOn className="h-6 text-red-500" />
                <spam>Ontario: 613 285 5534</spam>
              </spam>
            </li>
            <li>
              <spam className="flex items-center space-x-2 ">
                <MdLocationOn className="h-6 text-red-500" />
                <spam>Tokyo: 0428 298 114</spam>
              </spam>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
