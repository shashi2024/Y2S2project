import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const GuestAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [guestData, setGuestData] = useState([]);
    const [filteredGuests, setFilteredGuests] = useState([]);

    useEffect(() => {
        getGuestData();
    }, []);

    const getGuestData = async () => {
        try {
            const response = await Axios.get("http://localhost:5000/guest");
            console.log(response.data);
            setGuestData(response.data.response || []);
            setFilteredGuests(response.data.response || []);
        } catch (error) {
            console.error("Error fetching guest data:", error);
        }
    };

    const handleSearchInputChange = (event) => {
        const searchValue = event.target.value;
        setSearchInput(searchValue);
        const filtered = guestData.filter(guest => {
            return Object.values(guest).some(value =>
                value.toLowerCase().includes(searchValue.toLowerCase())
            );
        });
        setFilteredGuests(filtered);
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
                    <h1 className="text-2xl font-extrabold text-gray-800 mb-8">GUEST ADMIN DASHBOARD</h1>
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
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Field
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Details
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredGuests.map((guest, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {Object.keys(guest).map((key, index) => (
                                                <div key={index}>{key}</div>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {Object.values(guest).map((value, index) => (
                                                <div key={index}>{value}</div>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GuestAdmin;
