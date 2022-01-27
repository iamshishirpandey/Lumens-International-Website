import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { GiEarthAmerica } from "react-icons/gi";

const Headquarters = () => {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center space-x-2">
          <span className="w-5 h-0.5 bg-red-500" />
          <span className="font-semibold capitalize">Lumens</span>
        </div>
        <span className="text-red-500 text-xl font-bold">Headquarters</span>
      </div>
      <span className="text-sm">
        Organically grow the holistic world view of disruptive innovation via
        empowerment.
      </span>
      <ul className="space-y-1">
        <li>
          <span className="flex items-center space-x-2 hover:text-red-500">
            <FaPhone className="w-5" />
            <span>9898989898</span>
          </span>
        </li>
        <li>
          <span className="flex items-center space-x-2 hover:text-red-500">
            <HiMail className="w-5" />
            <span>info@lumens.com</span>
          </span>
        </li>
        <li>
          <span className="flex items-center space-x-2 hover:text-red-500">
            <GiEarthAmerica className="w-5" />
            <span>lumens.com.np</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Headquarters;
