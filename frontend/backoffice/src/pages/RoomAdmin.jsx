import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Axios from 'axios';
import AllRooms from "./AllRooms";


const GuestAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [roomno, setRoomNo] = useState("");
  const [floor, setFloor] = useState("");
  const [type, setType] = useState("");
  const [noofbeds, setNoOfBeds] = useState("");
  const [balcony, setBalcony] = useState("");
  const [ac, setAC] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Now 'e' is defined as a parameter of the function
    if (!validateNumbersOnly(floor)) {
      setErrorMessage("Floor should contain only Numbers.");
      return;
    }
    if (!validateNumbersOnly(noofbeds)) {
      setErrorMessage("Number of Beds should contain only Numbers.");
      return;
    }
  
    try {
      console.log(
        roomno,
        floor,
        type,
        noofbeds,
        balcony,
        ac
      );
      const response = await Axios.post("http://localhost:5000/room", {
        roomno,
        floor,
        type,
        noofbeds,
        balcony,
        ac,
      });
      console.log(response.data);
      alert("Room created successfully");
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };
  
  const validateNumbersOnly = (input) => {
    return /^[0-9]+$/.test(input);
  };
  
   

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="bg-gray-100 min-h-screen flex flex-col  items-center">
          <br></br>

          <h1 className="text-2xl font-extrabold text-gray-800 my-8 ">
            ROOM ADMIN DASHBOARD
          </h1>

          <form action="#" method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
            
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="roomno"
              >
                Room Number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="roomno"
                name="roomno"
                type="text"
                placeholder="Enter room number"
                value={roomno}
                onChange={(e) => setRoomNo(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="floor"
            >
              Floor:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="floor"
              name="floor"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              required
            >
              <option value="">Select floor</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              
            </select>
            </div>

            <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="type"
            >
              Room Type:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Select Room Type</option>
              <option value="Single Room">Single Room</option>
              <option value="Double Room">Double Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Royal Room">Royal Room</option>
              
              
            </select>
            </div>

            <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="noofbeds"
            >
              No of Beds:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="noofbeds"
              name="noofbeds"
              value={noofbeds}
              onChange={(e) => setNoOfBeds(e.target.value)}
              required
            >
              <option value="">Select Beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              
              
            </select>
            </div>
            
            <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="balcony"
            >
              Balcony Avaliable:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="balcony"
              name="balcony"
              value={balcony}
              onChange={(e) => setBalcony(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
              
            </select>
            </div>

            <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ac"
            >
              A/C Avaliable:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ac"
              name="ac"
              value={ac}
              onChange={(e) => setAC(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
              
            </select>
            </div>


            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
          <AllRooms/>
        </main>
      </div>
      
    </div>
  );
};

export default GuestAdmin;
