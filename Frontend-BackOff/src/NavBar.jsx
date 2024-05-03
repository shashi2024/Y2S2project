import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from './image/pic1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faUser, faFileAlt, faTrashAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="absolute h-full w-80 bg-yellow-400">
      <div>
        <img src={logo} alt="logo" className="absolute w-56 h-auto left-12"/>
      </div>

      <div className="absolute top-48 left-12 flex flex-col w-56 text-left">
        <div>
          <h1 className="text-lg tracking-widest font-bold font-serif text-gray-600">
            MENU
          </h1>
        </div><br/><br/>
        <div className="absolute top-12 pl-2 text-left flex flex-col "> 
          <Link to="/dash" className="text-left pb-2">
            <FontAwesomeIcon icon={faBorderAll} className="pr-3 "/>
            Dashboard
          </Link><br/>         
          <Link to="/campform" className="text-left pb-2">
            <FontAwesomeIcon icon={faFileAlt} className="pr-3"/>
            Create New Campaign
          </Link><br/>
         
          <Link to="/camplist" className="text-left pb-2">
            <FontAwesomeIcon icon={faFileAlt} className="pr-3"/>
            All Campaign 
          </Link><br/>

          <Link to="/searchform" className="text-left pb-2">
            <FontAwesomeIcon icon={faFileAlt} className="pr-3"/>
            Search Campaigns
          </Link><br/>
         
          <Link to="/report" className="text-left pb-2">
            <FontAwesomeIcon icon={faChartLine} className="pr-3"/>
            Report
          </Link><br/>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
