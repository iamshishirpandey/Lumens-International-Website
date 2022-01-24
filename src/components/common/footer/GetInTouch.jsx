import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center space-x-2">
          <spam className="w-5 h-0.5 bg-red-500" />
          <spam className="font-semibold capitalize">Get In Touch</spam>
        </div>
        <spam className="text-red-500 text-xl font-bold">
          Avantage Social links
        </spam>
      </div>
      <spam className="text-sm">
        Taking seamless key performance indicators offline to maximise the long
        tail.
      </spam>
      <ul className="flex items-center flex-wrap">
        <li className="rounded-full bg-red border-2 text-white  m-1 border-red-500 p-3 bg-red-500 hover:bg-white hover:ease-linear hover:transition-all hover:duration-1000  hover:text-red-500 ">
          <a href="/">
            <FaFacebookF className=" w-6 h-6" />
          </a>
        </li>
        <li className="rounded-full bg-red border-2 text-white  m-1 border-red-500 p-3 bg-red-500 hover:bg-white  hover:text-red-500 hover:ease-linear hover:transition-all hover:duration-1000 ">
          <a href="/">
            <FaTwitter className=" w-6 h-6" />
          </a>
        </li>
        <li className="rounded-full bg-red border-2 text-white  m-1 border-red-500 p-3 bg-red-500 hover:bg-white  hover:text-red-500 hover:ease-linear hover:transition-all hover:duration-1000 ">
          <a href="/">
            <FaPinterestP className=" w-6 h-6" />
          </a>
        </li>
        <li className="rounded-full bg-red border-2 text-white  m-1 border-red-500 p-3 bg-red-500 hover:bg-white  hover:text-red-500 hover:ease-in-out hover:transition-all hover:duration-1000 ">
          <a href="/">
            <FaLinkedinIn className=" w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default GetInTouch;
