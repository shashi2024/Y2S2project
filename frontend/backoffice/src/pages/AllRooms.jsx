import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Button from "../components/Button";

const AllRooms = () => {
  
  const [rooms, setRooms] = useState([]);
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [editedRoomData, setEditedRoomData] = useState({
    roomno: "",
    floor: "",
    type: "",
    noofbeds: "",
    balcony: "",
    ac: ""
  });

  useEffect(() => {
    fetchRooms();
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

  const handleUpdate = (RoomId) => {
    setEditingRoomId(RoomId);
    const roomToUpdate = rooms.find((room) => room._id === RoomId);
    setEditedRoomData(roomToUpdate);
  };

  const handleDelete = async (roomId) => {
    try {
      await axios.delete(`http://localhost:5000/room/${roomId}`);
      fetchRooms();
      console.log("Room deleted successfully.");
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

//   const handleUpdate = async (roomId) => {
//     try {
//       const roomToEdit = rooms.find(room => room._id === roomId);
//       setEditedRoomData({
//         roomno: roomToEdit.roomno,
//         floor: roomToEdit.floor,
//         type: roomToEdit.type,
//         noofbeds: roomToEdit.noofbeds,
//         balcony: roomToEdit.balcony,
//         ac: roomToEdit.ac
//       });
//       setEditingRoomId(roomId);
//       console.log("Editing room with ID:", roomId);
//     } catch (error) {
//       console.error("Error updating room:", error);
//     }
//   };


const updateGuest = async () => {
    try {
      await axios.put(
        `http://localhost:5000/room/${editingRoomId}`,
        editedRoomData
      );
      fetchRooms();
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
    setEditedRoomData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const cancelUpdate = () => {
    setEditingRoomId(null);
    setEditedRoomData({
      roomno: "",
      floor: "",
      type: "",
      noofbeds: "",
      balcony: "",
      ac: ""
    });
  };

  return (
    <div >
        <main>
          
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Rooms</h1>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2">Room Number</th>
                      <th className="px-4 py-2">Floor</th>
                      <th className="px-4 py-2">Type</th>
                      <th className="px-4 py-2">Number of Beds</th>
                      <th className="px-4 py-2">Balcony</th>
                      <th className="px-4 py-2">AC</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr key={room._id} className="border-b border-gray-300">
                        <td className="px-4 py-2">
                          {editingRoomId === room._id ? (
                            <input
                              type="text"
                              name="roomno"
                              value={editedRoomData.roomno}
                              onChange={handleInputChange}
                            />
                          ) : (
                            room.roomno
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingRoomId === room._id ? (
                            <input
                              type="text"
                              name="floor"
                              value={editedRoomData.floor}
                              onChange={handleInputChange}
                            />
                          ) : (
                            room.floor
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingRoomId === room._id ? (
                            <input
                              type="text"
                              name="type"
                              value={editedRoomData.type}
                              onChange={handleInputChange}
                            />
                          ) : (
                            room.type
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingRoomId === room._id ? (
                            <input
                              type="text"
                              name="noofbeds"
                              value={editedRoomData.noofbeds}
                              onChange={handleInputChange}
                            />
                          ) : (
                            room.noofbeds
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingRoomId === room._id ? (
                            <input
                              type="text"
                              name="balcony"
                              value={editedRoomData.balcony}
                              onChange={handleInputChange}
                            />
                          ) : (
                            room.balcony
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingRoomId === room._id ? (
                            <input
                              type="text"
                              name="ac"
                              value={editedRoomData.ac}
                              onChange={handleInputChange}
                            />
                          ) : (
                            room.ac
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {editingRoomId === room._id ? (
                            <div className="flex">
                              <Button onClick={() => handleUpdate(room._id)}>Save</Button>
                              <Button onClick={cancelUpdate} className="ml-2">
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <div className="flex">
                              <Button onClick={() => setEditingRoomId(room._id)}>Update</Button>
                              <Button onClick={() => handleDelete(room._id)} className="ml-2" variant="danger">
                                Delete
                              </Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        
        </main>
      </div>

  );
};

export default AllRooms;
