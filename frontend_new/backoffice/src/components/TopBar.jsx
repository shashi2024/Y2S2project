import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-solid-svg-icons';
 
function TopBar() {
  return (
    <div className="absolute w-full h-36 bg-white drop-shadow-lg">
      <div className="relative">
        {/* <div className="absolute left-96 top-12 flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-red-400 mr-2 size-8"
          />
          <input
            type="search"
            id="search"
            className="w-40 h-8 px-2 py-1 border border-gray-300 rounded"
            placeholder="Search..."
          />
        </div> */}
      </div>

      <div className="absolute right-20 top-12 flex items-center">
      <FontAwesomeIcon icon={faBell} className="text-red-400 mr-2 size-8"/>
      <div>
      Anesthesia <br/> HR Assistant
      </div>
      </div>
    </div>
  );
}

export default TopBar;
