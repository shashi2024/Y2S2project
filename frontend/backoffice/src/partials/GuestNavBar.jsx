import React, { useState } from 'react';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="hidden md:block">
                    <a href="http://localhost:5173/guest/admin" className="text-white mx-4">Manage Guest Data</a>
                    <a href="http://localhost:5173/reservation/admin" className="text-white mx-4">Manage Reservation Data</a>
                    <a href="http://localhost:5173/room/admin" className="text-white mx-4">Manage Room Data</a>
                    
                </div>
                <div className="md:hidden">
                    {/* Mobile menu button */}
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu (hidden by default) */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <a href="#" className="block py-2 px-4 text-white">Home</a>
                    <a href="#" className="block py-2 px-4 text-white">About</a>
                    <a href="#" className="block py-2 px-4 text-white">Services</a>
                    <a href="#" className="block py-2 px-4 text-white">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;
