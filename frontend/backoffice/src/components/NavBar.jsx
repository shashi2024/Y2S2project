import React from 'react';
import logo from '../image/pic1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


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
        </div>

        <div className="absolute top-12 pl-2 text-left flex flex-col "> 

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faUser} className="pr-3"/>
                Profile
                <FontAwesomeIcon icon={faCaretDown} className="pl-32"/>
            </button>

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faUsers} className="pr-3"/>
                Users
                <FontAwesomeIcon icon={faCaretDown} className="pl-32"/>
            </button>
            
            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faPersonWalkingLuggage} className="pr-3"/>
                Guests
                <FontAwesomeIcon icon={faCaretDown} className="pl-30"/>
            </button>

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faBed} className="pr-3"/>
                Room Reservations
                <FontAwesomeIcon icon={faCaretDown} className="pl-8"/>
            </button>

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faUtensils} className="pr-3"/>
                Restaurant
                <FontAwesomeIcon icon={faCaretDown} className="pl-24"/>
            </button>

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faWarehouse} className="pr-3"/>
                Inventory
                <FontAwesomeIcon icon={faCaretDown} className="pl-24"/>
            </button>

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="pr-3"/>
                Maintenence
                <FontAwesomeIcon icon={faCaretDown} className="pl-20"/>
            </button>

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faCarSide} className="pr-3"/>
                Transport   
                <FontAwesomeIcon icon={faCaretDown} className="pl-24"/>        
            </button>

            <button className="text-left pb-2">
                <FontAwesomeIcon icon={faStar} className="pr-3"/>
                Feedback & Marketing
                <FontAwesomeIcon icon={faCaretDown} className="pl-2"/>
            </button>

            <button className="text-left">
                <FontAwesomeIcon icon={faChartLine} className="pr-3"/>
                Report
                <FontAwesomeIcon icon={faCaretDown} className="pl-30"/>
            </button>
            
        </div>
      </div>
    </div>
  )
}

export default NavBar