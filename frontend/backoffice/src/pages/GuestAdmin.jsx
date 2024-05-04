import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Button from "../components/Button";
import AllRooms from "./AllRooms";

const GuestAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [guests, setGuests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingGuestId, setEditingGuestId] = useState(null);
  const [editedGuestData, setEditedGuestData] = useState({
    username: "",
    fullname: "",
    passportid: "",
    email: "",
    phone: "",
    country: "",
    language: "",
    contactmethod: "",
    health: "",
    payment: "",
    request: "",
  });

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/guest/");
      setGuests(response.data.Guests);
      console.log(response);
    } catch (error) {
      console.error("Error fetching guests:", error);
    }
  };

  const handleUpdate = (guestId) => {
    setEditingGuestId(guestId);
    const guestToUpdate = guests.find((guest) => guest._id === guestId);
    setEditedGuestData(guestToUpdate);
  };

  const cancelUpdate = () => {
    setEditingGuestId(null);
    setEditedGuestData({
      username: "",
      fullname: "",
      passportid: "",
      email: "",
      phone: "",
      country: "",
      language: "",
      contactmethod: "",
      health: "",
      payment: "",
      request: "",
    });
  };

  const updateGuest = async () => {
    try {
      await axios.put(
        `http://localhost:5000/guest/${editingGuestId}`,
        editedGuestData
      );
      fetchGuests();
      setEditingGuestId(null);
      setEditedGuestData({
        username: "",
        fullname: "",
        passportid: "",
        email: "",
        phone: "",
        country: "",
        language: "",
        contactmethod: "",
        health: "",
        payment: "",
        request: "",
      });
      console.log("Guest updated successfully.");
    } catch (error) {
      console.error("Error updating guest:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedGuestData({ ...editedGuestData, [name]: value });
  };

  const handleDelete = async (guestId) => {
    try {
      await axios.delete(`http://localhost:5000/guest/${guestId}`);
      fetchGuests();
      console.log("Guest deleted successfully.");
    } catch (error) {
      console.error("Error deleting guest:", error);
    }
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      // If search term is empty, fetch all guests
      fetchGuests();
    } else {
      // Filter guests based on the entered search term
      try {
        const response = await axios.get("http://localhost:5000/guest/");
        const allGuests = response.data.Guests;
        const filteredGuests = allGuests.filter((guest) =>
          guest.passportid.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setGuests(filteredGuests);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    }
  };

  const handleRefresh = () => {
    fetchGuests();
    setSearchTerm(""); // Reset search term upon refresh
  };

  const generatePDF = async () => {
    try {
      const response = await axios.post("http://localhost:5000/guest/generate-pdf", { guests: guests });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Guests</h1>
              <div className="flex mb-4">
                {/* Search input field */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by Passport/ID..."
                  className="border border-gray-300 p-2 rounded-md mr-2"
                />
                <Button onClick={handleSearch}>Search</Button>
                <Button onClick={generatePDF} className="ml-2">
                  Download PDF
                </Button>
                <Button onClick={handleRefresh} className="ml-2">
                  Refresh
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2">Username</th>
                      <th className="px-4 py-2">Full Name</th>
                      <th className="px-4 py-2">Passport ID</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Phone</th>
                      <th className="px-4 py-2">Country</th>
                      <th className="px-4 py-2">Language</th>
                      <th className="px-4 py-2">Contact Method</th>
                      <th className="px-4 py-2">Health</th>
                      <th className="px-4 py-2">Payment</th>
                      <th className="px-4 py-2">Request</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest) => (
                      <tr key={guest._id} className="border-b border-gray-300">
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="username"
                              value={editedGuestData.username}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.username
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="fullname"
                              value={editedGuestData.fullname}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.fullname
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="passportid"
                              value={editedGuestData.passportid}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.passportid
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="email"
                              value={editedGuestData.email}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.email
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="phone"
                              value={editedGuestData.phone}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.phone
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="country"
                              value={editedGuestData.country}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.country
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="language"
                              value={editedGuestData.language}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.language
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="contactmethod"
                              value={editedGuestData.contactmethod}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.contactmethod
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="health"
                              value={editedGuestData.health}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.health
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="payment"
                              value={editedGuestData.payment}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.payment
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingGuestId === guest._id ? (
                            <input
                              type="text"
                              name="request"
                              value={editedGuestData.request}
                              onChange={handleInputChange}
                            />
                          ) : (
                            guest.request
                          )}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex">
                            {editingGuestId === guest._id ? (
                              <div className="flex">
                                <Button onClick={updateGuest}>Save</Button>
                                <Button onClick={cancelUpdate} className="ml-2">
                                  Cancel
                                </Button>
                              </div>
                            ) : (
                              <div className="flex">
                                <Button onClick={() => handleUpdate(guest._id)}>Update</Button>
                                <Button onClick={() => handleDelete(guest._id)} className="ml-2" variant="danger">
                                  Delete
                                </Button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  
                </table>
              </div>
            </div>
          </div>
         
        </main>
        
      </div>
    </div>
  );
};

export default GuestAdmin;
