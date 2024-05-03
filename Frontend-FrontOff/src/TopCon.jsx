import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the faBars icon
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/pic2.png";

function TopCon() {
  return (
    <div className="relative">
      <div className="absolute top-24 right-52">
        <button className="mr-4 p-2">
          <FontAwesomeIcon icon={faPhone} className="text-white w-10 h-10" />
        </button>
        <button className="mr-4 p-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-white w-10 h-10"
          />
        </button>
      </div>
      <div className="absolute top-24 right-16">
        <button className="bg-white w-32 h-12 top-2 font-bold font-sans rounded-2xl p-1">
          BOOK NOW
        </button>
      </div>
      <div className="absolute top-12 right-16 flex">
        <button className="text-white font text-lg">SIGN UP</button>
        <h1 className="text-white p-2">|</h1>
        <button className="text-white text-lg">LOGIN</button>
      </div>
      <div className="absolute top-20 left-16">
        <button className="ml-4">
          <FontAwesomeIcon icon={faBars} className="text-white w-12 h-12" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src={logo} alt="Logo" className="w-68 h-auto" />
      </div>
    </div>
  );
}

export default TopCon;
