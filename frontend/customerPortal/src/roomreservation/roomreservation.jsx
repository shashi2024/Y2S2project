import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../../backoffice/src/components/Button";

// import Button from "../components/Button";

function RoomReservation() {
  const [rooms, setRooms] = useState([]);
  const [reservation, setReservations] = useState([]);
  //const [searchTerm, setSearchTerm] = useState("");
  //const [searchTermuser, setSearchTermuser] = useState("");

  const [searchTermRoom, setSearchTermRoom] = useState(""); // State for room search term
  const [searchTermReservation, setSearchTermReservation] = useState(""); // State for reservation search term

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
    fetchRooms();
    fetchReservations();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/room/");
      setRooms(response.data.Rooms);
      console.log(response);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reservation/");
      setReservations(response.data.Reservations);
      console.log(response);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const handleUpdate = (reservationId) => {
    setEditingReservationId(reservationId);
    const reservationToUpdate = reservation.find(
      (reservation) => reservation._id === reservationId
    );
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
      awaitaxios.put(
        `http://localhost:5000/reservation/${editingReservationId}`,
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
      console.log("Reservation updated successfully!");
    } catch (error) {
      console.error("Error updating reservation data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedReservationData({ ...editedReservationData, [name]: value });
  };

  const handleDelete = async (reservationId) => {
    try {
      await axios.delete(`http://localhost:5000/reservation/${reservationId}`);
      fetchReservations();
      console.log("Reservation deleted successfully!");
    } catch (error) {
      console.error("Error deleting reservation data:", error);
    }
  };

  // const handleSearch = async () => {
  //   if (searchTerm.trim() === "") {
  //     // If search term is empty, fetch all guests
  //     fetchRooms();
  //     fetchReservations();
  //   } else {
  //     // Filter guests based on the entered search term
  //     try {
  //       const response = await axios.get("http://localhost:5000/room/");
  //       const allRooms = response.data.Rooms;
  //       const filteredRooms = allRooms.filter((room) =>
  //       room.roomno.toLowerCase().includes(searchTerm.toLowerCase())

  //     );
  //       setRooms(filteredRooms);
  //     } catch (error) {
  //       console.error("Error fetching roomss:", error);
  //     }
  //   }

  // };

  const handleSearch = async () => {
    if (searchTermRoom.trim() === "") {
      // If search term is empty, fetch all rooms
      fetchRooms();
    } else {
      // Filter rooms based on the entered search term
      try {
        const response = await axios.get("http://localhost:5000/room/");
        const allRooms = response.data.Rooms;
        const filteredRooms = allRooms.filter((room) =>
          room.roomno.toLowerCase().includes(searchTermRoom.toLowerCase())
        );
        setRooms(filteredRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    }
  };

  // const handleSearchUser = async () =>{
  //   if (searchTermuser.trim() === "") {
  //     // If search term is empty, fetch all guests
  //     fetchReservations();
  //   } else {
  //     // Filter guests based on the entered search term
  //     try {
  //       const response = await axios.get("http://localhost:5000/reservation/");
  //       const allReservations = response.data.Reservations;
  //       const filteredReservations = allReservations.filter((reservation) =>
  //       reservation.reservationid.toLowerCase().includes(searchTerm.toLowerCase())

  //       );
  //       setRooms(filteredReservations);
  //     } catch (error) {
  //       console.error("Error fetching roomss:", error);
  //     }
  //   }

  // };

  // const handleSearchUser = async () => {
  //   if (searchTermReservation.trim() === "") {
  //     // If search term is empty, fetch all reservations
  //     fetchReservations();
  //   } else {
  //     // Filter reservations based on the entered search term
  //     try {
  //       const response = await axios.get("http://localhost:5000/reservation/");
  //       const allReservations = response.data.Reservations;
  //       const filteredReservations = allReservations.filter((reservation) =>
  //         reservation.reservationid
  //           .toLowerCase()
  //           .includes(searchTermReservation.toLowerCase())
  //       );
  //       setReservations(filteredReservations);
  //     } catch (error) {
  //       console.error("Error fetching reservations:", error);
  //     }
  //   }
  // };


  const handleSearchUser = async () => {
    if (searchTermReservation.trim() === "") {
      // If search term is empty, fetch all reservations
      fetchReservations();
    } else {
      // Filter reservations based on the entered search term
      try {
        const response = await axios.get("http://localhost:5000/reservation/");
        const allReservations = response.data.Reservations;
        const filteredReservations = allReservations.filter((reservation) =>
          reservation.passportid.toLowerCase().includes(searchTermReservation.toLowerCase())
        );
        setReservations(filteredReservations);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    }
  };
  

  const handleRefresh = () => {
    fetchRooms();
    fetchReservations();
    setSearchTermRoom(""); // Reset search term upon refresh
  };

  return (
    <div className="container mx-auto px-4">
      <br></br>
      <h1 className="text-5xl font-bold text-center mb-8">
        Reserve Your Rooms...
      </h1>

      {/* Date and Search Section */}
      <div className="bg-gray-200 p-8 rounded-md mb-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          {/* Search Box */}
          <div className="flex items-center mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 mr-4"
            />
            <button className="py-2 px-4 bg-yellow-400">SEARCH</button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:mr-4">
            <div className="flex flex-col items-center md:flex-row md:items-center md:mr-4">
              <label className="mr-2 md:mr-4">Check In</label>
              <input
                type="date"
                name="check-in"
                className="p-2 border border-gray-300 w-36"
                id="check-in"
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center md:mr-4">
              <label className="mr-2 md:mr-4">Check Out</label>
              <input
                type="date"
                name="check-out"
                className="p-2 border border-gray-300 w-36"
                id="check-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Room Section */}
      <div className="bg-gray-200 p-8 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Room 1 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img
              src="https://bit.ly/49ZinMm"
              className="w-full h-96 object-cover"
              alt="Room 1"
            />
            <div className="p-4">
              <p className="text-lg font-bold mb-2">Double Room</p>
              <p className="text-base">$89 / Night</p>
            </div>
          </div>

          {/* Room 2 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img
              src="https://bit.ly/3UD6zLF"
              className="w-full h-96 object-cover"
              alt="Room 2"
            />
            <div className="p-4">
              <p className="text-lg font-bold mb-2">Single Room</p>
              <p className="text-base">$99 / Night</p>
            </div>
          </div>

          {/* Room 3 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img
              src="https://bit.ly/3WmOEdd"
              className="w-full h-96 object-cover"
              alt="Room 3"
            />
            <div className="p-4">
              <p className="text-lg font-bold mb-2">Deluxe Room</p>
              <p className="text-base">$109 / Night</p>
            </div>
          </div>

          {/* Room 4 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img
              src="https://bit.ly/3Uk5IxT"
              className="w-full h-96 object-cover"
              alt="Room 4"
            />
            <div className="p-4">
              <p className="text-lg font-bold mb-2">Royal Room</p>
              <p className="text-base">$129 / Night</p>
            </div>
          </div>
        </div>
      </div>

      {/* //--------------------------Display Avaliable Rooms--------------------------------------------------- */}

      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Our Avaliable Rooms</h1>
            <div className="flex mb-4">
              {/* <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by Room No..."
                className="border border-gray-300 p-2 rounded-md mr-2"
              />
              <Button onClick={handleSearch} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                      Search
              </Button> */}

              <input
                type="text"
                value={searchTermRoom}
                onChange={(e) => setSearchTermRoom(e.target.value)}
                placeholder="Search by Room No..."
                className="border border-gray-300 p-2 rounded-md mr-2"
              />
              <Button
                onClick={handleSearch}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Search Rooms
              </Button>

              <Button
                onClick={handleRefresh}
                className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-yellow-600"
              >
                Refresh
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Room No</th>
                    <th className="px-4 py-2">Floor</th>
                    <th className="px-4 py-2">Room Type</th>
                    <th className="px-4 py-2">No of Beds</th>
                    <th className="px-4 py-2">Balcony Available</th>
                    <th className="px-4 py-2">A/C Available</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room._id} className="border-b border-gray-300">
                      <td className="px-4 py-2 text-center">{room.roomno}</td>
                      <td className="px-4 py-2 text-center">{room.floor}</td>
                      <td className="px-4 py-2 text-center">{room.type}</td>
                      <td className="px-4 py-2 text-center">{room.noofbeds}</td>
                      <td className="px-4 py-2 text-center">
                        {room.balcony ? "Yes" : "No"}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {room.ac ? "Yes" : "No"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Your Reservations</h1>
            <div className="flex mb-4">
              {/* Search input field */}
              {/* <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTermuser(e.target.value)}
                  placeholder="Search by Reservation ID..."
                  className="border border-gray-300 p-2 rounded-md mr-2"
                />
                <Button onClick={handleSearchUser}className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Search</Button>
                 */}
              <input
                type="text"
                value={searchTermReservation}
                onChange={(e) => setSearchTermReservation(e.target.value)}
                placeholder="Search by Reservation ID..."
                className="border border-gray-300 p-2 rounded-md mr-2"
              />
              <Button
                onClick={handleSearchUser}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Search Reservations
              </Button>
              <Button
                onClick={handleRefresh}
                className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-yellow-600"
              >
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
                  {reservation.map((reservation) => (
                    <tr
                      key={reservation.passportid}
                      className="border-b border-gray-300"
                    >
                      <td className="px-4 py-2">
                        {editingReservationId === reservation._id ? (
                          <input
                            type="text"
                            name="reservationid"
                            value={editedReservationData.reservationId}
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
                            value={editedReservationData.passportId}
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
                              <Button onClick={cancelUpdate}>Cancel</Button>
                            </div>
                          ) : (
                            <div className="flex">
                              <button
                                onClick={() => handleUpdate(reservation._id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                              >
                                Update
                              </button>
                              <button
                                onClick={() => handleDelete(reservation._id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Delete
                              </button>
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
  );
}

export default RoomReservation;
