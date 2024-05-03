// ReservationAdmin.jsx

import { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import GuestNavBar from "../partials/GuestNavBar";
import Axios from 'axios';

const ReservationAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [reservation, setReservation] = useState(null);

    useEffect(() => {
        getReservation();
    }, []);


    const getReservation = async () => {
        try {
            const response = await Axios.get("http://localhost:5000/reservation");
            console.log(response.data);
            setReservation(response.data.response || null);
        } catch (error) {
            console.error("Error fetching reservation data:", error);
            // Handle error if needed
        }
    };

    const handleSearchInputChange = (event) => {
        const searchValue = event.target.value;
        setSearchInput(searchValue);
        const filtered = reservationData.filter(reservation => {
            return Object.values(reservation).some(value =>
                value.toLowerCase().includes(searchValue.toLowerCase())
            );
        });
        setFilteredReservations(filtered);
    };

    const handleUpdateButtonClick = () => {
        // Implement update functionality here
    };

    const handleDeleteButtonClick = () => {
        // Implement delete functionality here
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="bg-gray-100 min-h-screen flex flex-col items-center">
                    <br />
                    <h1 className="text-2xl font-extrabold text-gray-800 mb-8">RESERVATION ADMIN DASHBOARD</h1>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            className="border border-gray-300 px-4 py-2 mr-4 rounded-lg"
                            placeholder="Search..."
                            value={searchInput}
                            onChange={handleSearchInputChange}
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
                            onClick={handleUpdateButtonClick}
                        >
                            Update
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            onClick={handleDeleteButtonClick}
                        >
                            Delete
                        </button>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Field</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {reservation && (
                                    <>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Reservation ID:</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.reservationId}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Passport ID:</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.passportId}</td>
                                        </tr>
                                        {/* Add more rows for other fields */}
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ReservationAdmin;
