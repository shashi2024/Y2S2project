import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-solid-svg-icons';
 
function TopBar() {
  return (
    <div className="absolute w-full h-24 bg-white shadow-md shadow-gray-600">
      <div className="relative">
        
      </div>

      <div className="absolute right-96 top-8 flex items-center">
        <FontAwesomeIcon icon={faBell} className="text-red-400 mr-2 size-8"/>
        <div>
          Anesthesia <br/> Marketing Manager
        </div>
      </div>
    </div>
  );
}

export default TopBar;
