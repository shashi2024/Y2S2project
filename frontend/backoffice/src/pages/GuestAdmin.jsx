import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import GuestNavBar from "../partials/GuestNavBar";

const GuestAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    // Dummy guest data for demonstration
    const guest = {
        fullName: "John Doe",
        userName: "johndoe123",
        passportId: "AB123456",
        password: "********",
        phone: "123-456-7890",
        email: "johndoe@example.com",
        country: "USA",
        paymentMethod: "Credit Card",
        healthIssues: "None",
        specialRequest: "N/A",
        language: "English",
        contactMethod: "Email",
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
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Full Name:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.fullName}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">User Name:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.userName}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Passport ID:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.passportId}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Password:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.password}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Phone:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.phone}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Email:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.email}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Country:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.country}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Payment Method:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.paymentMethod}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Health Issues:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.healthIssues}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Special Request:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.specialRequest}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Language:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.language}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">Contact Method:</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{guest.contactMethod}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GuestAdmin;
