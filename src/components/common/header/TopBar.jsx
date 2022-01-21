import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { BellIcon, ClockIcon } from "@heroicons/react/outline";

const TopBar = () => {
  return (
    <div className="hidden h-10 xl:flex justify-between bg-sky-900 xl:px-28">
      <div className="relative z-10 flex lg:py-2">
        <div className="flex-shrink-0 flex items-center space-x-3">
          <ul className="text-sm text-slate-50 flex items-center space-x-1">
            <li>
              <ClockIcon className="w-6 h-4 text-red-500" />
            </li>
            <li>
              <span>Monday - Friday</span>
            </li>
            <li>
              <span className="text-gray-400">8AM - 9PM</span>
            </li>
          </ul>
          <ul className="text-sm text-slate-50 flex items-center space-x-1">
            <li>
              <LocationMarkerIcon className="w-6 h-4 text-red-500" />
            </li>
            <li>
              <span>Office</span>
            </li>
            <li>
              <span className="text-gray-400">
                Bloomsbury Square, London WC1B 4EA
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
        <ul className="text-white text-sm flex items-center justify-items-end space-x-2">
          <li className="pr-2">Visit our social pages</li>
          <li>
            <a href="/">
              <FaFacebookF className="text-red-500" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter className="text-red-500" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaPinterestP className="text-red-500" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedinIn className="text-red-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
