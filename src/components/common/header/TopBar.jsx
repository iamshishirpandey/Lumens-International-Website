import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";

const TopBar = () => {
  return (
    <div className="p-5 xl:h-10 xl:flex justify-between items-center bg-sky-900 xl:px-28">
      <div className="relative z-10 flex justify-center  xl:py-2 py-5 border-y xl:border-y-0">
        <div className="flex-shrink-0 xl:flex items-center space-x-3 space-y-5 xl:space-y-0 ">
          <ul className="text-sm text-slate-50 xl:flex justify-center xl:justify-start items-center xl:space-x-1 space-y-2 xl:space-y-0">
            <li className="flex xl:inline justify-center">
              <ClockIcon className="h-8 xl:w-6 xl:h-4 text-red-500" />
            </li>
            <li className="flex xl:inline justify-center">
              <span>Monday - Friday</span>
            </li>
            <li className="flex xl:inline justify-center">
              <span className="text-gray-400">8AM - 9PM</span>
            </li>
          </ul>
          <ul className="text-sm text-slate-50 xl:flex justify-center xl:justify-start items-center xl:space-x-1 space-y-3 xl:space-y-0">
            <li className="flex xl:inline justify-center">
              <LocationMarkerIcon className="h-8 xl:w-6 xl:h-4 text-red-500" />
            </li>
            <li className="flex xl:inline justify-center">
              <span>Office</span>
            </li>
            <li className="flex xl:inline justify-center">
              <span className="text-gray-400">
                Bloomsbury Square, London WC1B 4EA
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="xl:relative py-10 xl:px-0 xl:z-10 xl:ml-4 grid grid-cols-1 xl:flex items-center justify-center space-y-5 xl:space-y-0 xl:space-x-5">
        <span className="pr-2 text-white w-full text-center">
          Visit our social pages
        </span>
        <ul className="text-sm flex items-center justify-center xl:justify-items-end space-x-2">
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebookF className="h-5 w-6 xl:w-6 xl:h-4 text-red-500" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <FaTwitter className="h-5 w-6 xl:w-6 xl:h-4 text-red-500" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <FaPinterestP className="h-5 w-6 xl:w-6 xl:h-4 text-red-500" />
            </a>
          </li>
          <li>
            <a href="https://np.linkedin.com/">
              <FaLinkedinIn className="h-5 w-6 xl:w-6 xl:h-4 text-red-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
