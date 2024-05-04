// ReservationAdmin.jsx
import { useState, useEffect } from "react";
import Axios from 'axios';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Button from "../components/Button";

const ReservationAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [reservations, setReservations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingReservationId, setEditingReservationId] = useState(null);
    const [editedReservationData, setEditedReservationData] = useState({
        reservationId: "",
        passportId: "",
        noofdays: "",
        roomno: "",
        floor: "",
        type: "",
        noofbeds: "",
        balcony: "",
        ac: "",
        request: "",
        arrival: "",
        leave: "",
    });
    

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await Axios.get("http://localhost:5000/reservation/");
            setReservations(response.data.Reservations);
            console.log(response);
        } catch (error) {
            console.error("Error fetching reservations:", error);
        }
    };

    const handleUpdate = (reservationId) => {
        setEditingReservationId(reservationId);
        const reservationToUpdate = reservations.find((reservation) => reservation._id === reservationId);
        setEditedReservationData(reservationToUpdate);
    };

    const cancelUpdate = () => {
        setEditingReservationId(null);
        setEditedReservationData({
            reservationid: "",
            passportid: "",
            noofdays: "",
            roomno: "",
            floor: "",
            type: "",
            noofbeds: "",
            balcony: "",
            ac: "",
            request: "",
            arrival: "",
            leave: "",

        });
    };

    const updateReservation = async () => {
        try {
            await Axios.put(`http://localhost:5000/reservation/${editingReservationId}`, 
            editedReservationData
        );
            fetchReservations();
            setEditingReservationId(null);
            setEditedReservationData({
                reservationid: "",
                passportid: "",
                noofdays: "",
                roomno: "",
                floor: "",
                type: "",
                noofbeds: "",
                balcony: "",
                ac: "",
                request: "",
                arrival: "",
                leave: "",
            });
            console.log("Reservation updated successfully!")
        } catch (error) {
            console.error("Error updating reservation data:", error);        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedReservationData({ ...editedReservationData, [name]: value });
    };

    const handleDelete = async (reservationId) => {
        try {
            await Axios.delete(`http://localhost:5000/reservation/${reservationId}`);
            fetchReservations();
            console.log("Reservation deleted successfully!");
        } catch (error) {
            console.error("Error deleting reservation data:", error);
        }
    };

    const handleSearch = async () => {
        if (searchTerm.trim() === "") {
            fetchReservations();
            // If search term is empty, fetch all reservations 
        }else{
            // Filter reservation based on the entered search term
            try {
            const response = await Axios.get("http://localhost:5000/reservation/");
            const allReservations = response.data.Reservations;
            const filteredReservations = allReservations.filter((reservation) =>
                reservation.reservationid.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setReservations(filteredReservations);
        } catch (error) {
            console.error("Error fetching reservations:", error);
        }
            
      }
    };

    const handleRefresh = () => {
        fetchReservations();
        setSearchTerm("");//Reset search term 

    };

    const generatePDF = async () => {
        try {
            const response = await Axios.get("http://localhost:5000/reservation/generate-pdf", {reservations: reservations});
            const blob = new Blob([response.data], {type: "application/pdf"});
            console.log(response);
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
              <h1 className="text-2xl font-bold mb-4">Reservations</h1>
              <div className="flex mb-4">
                {/* Search input field */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by Reservation ID..."
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
                      <th className="px-4 py-2">Reservation ID</th>
                      <th className="px-4 py-2">passport ID</th>
                      <th className="px-4 py-2">NO of Days</th>
                      <th className="px-4 py-2">Room No</th>
                      <th className="px-4 py-2">Floor</th>
                      <th className="px-4 py-2">Room Type</th>
                      <th className="px-4 py-2">No of Beds</th>
                      <th className="px-4 py-2">Balcony Avaliable</th>
                      <th className="px-4 py-2">A/C Avaliable</th>
                      <th className="px-4 py-2">Special Requirement</th>
                      <th className="px-4 py-2">Check In</th>
                      <th className="px-4 py-2">Check Out</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation) => (
                      <tr key={reservation._id} className="border-b border-gray-300">
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="reservationid"
                              value={editedReservationData.reservationid}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.reservationid
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="passportid"
                              value={editedReservationData.passportid}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.passportid
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="noofdays"
                              value={editedReservationData.noofdays}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.noofdays
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="roomno"
                              value={editedReservationData.roomno}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.roomno
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="floor"
                              value={editedReservationData.floor}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.floor
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="type"
                              value={editedReservationData.type}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.type
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="noofbeds"
                              value={editedReservationData.noofbeds}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.noofbeds
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="balcony"
                              value={editedReservationData.balcony}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.balcony
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="ac"
                              value={editedReservationData.ac}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.ac
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="request"
                              value={editedReservationData.request}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.request
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="arrival"
                              value={editedReservationData.arrival}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.arrival
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingReservationId === reservation._id ? (
                            <input
                              type="text"
                              name="leave"
                              value={editedReservationData.leave}
                              onChange={handleInputChange}
                            />
                          ) : (
                            reservation.leave
                          )}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex">
                            {editingReservationId === reservation._id ? (
                              <div className="flex">
                                <Button onClick={updateReservation}>Save</Button>
                                <Button onClick={cancelUpdate} className="ml-2">
                                  Cancel
                                </Button>
                              </div>
                            ) : (
                              <div className="flex">
                                <Button onClick={() => handleUpdate(reservation._id)}>Update</Button>
                                <Button onClick={() => handleDelete(reservation._id)} className="ml-2" variant="danger">
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

export default ReservationAdmin;
