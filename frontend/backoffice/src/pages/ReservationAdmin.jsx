import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import GuestNavBar from "../partials/GuestNavBar";

const ReservationAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    // Dummy reservation data for demonstration
    const reservation = {
        reservationId: "123456789",
        passportId: "AB123456",
        numberOfDays: 5,
        roomNumber: "101",
        floor: "1",
        type: "Standard",
        numberOfBeds: 1,
        hasBalcony: true,
        hasAC: true,
        specialRequest: "N/A",
        checkIn: "2024-05-01",
        checkOut: "2024-05-06",
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
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
                {/* Site header */}
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
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Reservation ID:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.reservationId}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Passport ID:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.passportId}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Number of Days:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.numberOfDays}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Room Number:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.roomNumber}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Floor:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.floor}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Type:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.type}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Number of Beds:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.numberOfBeds}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Balcony:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.hasBalcony ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">AC:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.hasAC ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Special Request:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.specialRequest}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Check-in:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.checkIn}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Check-out:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{reservation.checkOut}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ReservationAdmin;
