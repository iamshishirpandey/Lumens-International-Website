import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { GiEarthAmerica } from "react-icons/gi";

const Headquarters = () => {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center space-x-2">
          <spam className="w-5 h-0.5 bg-red-500" />
          <spam className="font-semibold capitalize">Lumens</spam>
        </div>
        <spam className="text-red-500 text-xl font-bold">Headquarters</spam>
      </div>
      <spam className="text-sm">
        Organically grow the holistic world view of disruptive innovation via
        empowerment.
      </spam>
      <ul className="space-y-1">
        <li>
          <spam className="flex items-center space-x-2 hover:text-red-500">
            <FaPhone className="w-5" />
            <spam>9898989898</spam>
          </spam>
        </li>
        <li>
          <spam className="flex items-center space-x-2 hover:text-red-500">
            <HiMail className="w-5" />
            <spam>info@lumens.com</spam>
          </spam>
        </li>
        <li>
          <spam className="flex items-center space-x-2 hover:text-red-500">
            <GiEarthAmerica className="w-5" />
            <spam>lumens.com.np</spam>
          </spam>
        </li>
      </ul>
    </div>
  );
};

export default Headquarters;
