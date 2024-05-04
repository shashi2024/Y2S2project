import React, { useState } from "react";
import axios from "axios";

function ReservationForm() {
  const [formData, setFormData] = useState({
    reservationid: generateReservationId(),
    passportid: localStorage.getItem("passportid") || "",
    noofdays: 0,
    roomno: "",
    floor: 1, // Default floor is 1
    type: "Single", // Default type is Single
    noofbeds: 0,
    balcony: "No", // Default balcony is No
    ac: "No", // Default AC is No
    request: "",
    arrival: "",
    leave: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isNaN(value) && value >= 1 && value <= 2) {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    // Update formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // If either arrival or leave date changes, calculate the number of days
    if (name === "arrival" || name === "leave") {
      const arrivalDate =
        name === "arrival" ? new Date(value) : new Date(formData.arrival);
      const leaveDate =
        name === "leave" ? new Date(value) : new Date(formData.leave);
      const timeDiff = leaveDate.getTime() - arrivalDate.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
      // Update formData with the calculated number of days
      setFormData((prevData) => ({
        ...prevData,
        noofdays: diffDays,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    const requiredFields = ["roomno", "arrival", "leave"];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      console.error("Please fill in all required fields.");
      alert("Please fill in all required fields.");
      return;
    }

    if (new Date(formData.arrival) >= new Date(formData.leave)) {
      console.error("Arrival date must be before leave date.");
      alert("Arrival date must be before leave date.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/reservation",
        formData
      );
      console.log("Reservation added:", response.data);
      alert("Successfully Added")
      // Reset form fields after successful submission
      setFormData({
        reservationid: generateReservationId(),
        passportid: "",
        noofdays: 0,
        roomno: "",
        floor: 1,
        type: "Single",
        noofbeds: 0,
        balcony: "No",
        ac: "No",
        request: "",
        arrival: "",
        leave: "",
      });
    } catch (error) {
      console.error("Error adding reservation:", error);
    }
  };

  // Function to generate a random reservation ID
  function generateReservationId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    const length = 8;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return "Res-" + result;
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg font-semibold mb-4">Add Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Reservation ID
            </label>
            <input
              type="text"
              name="reservationid"
              value={formData.reservationid}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Passport ID
            </label>
            <input
              type="text"
              name="passportid"
              value={formData.passportid}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
              disabled={!!formData.passportid} // Disables input if passportid exists
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              No. of Beds
            </label>
            <input
              type="number"
              name="noofbeds"
              value={formData.noofbeds}
              onChange={handleChange}
              max={2}
              min={1}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Room Number
            </label>
            <input
              type="text"
              name="roomno"
              value={formData.roomno}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Request
            </label>
            <input
              type="text"
              name="request"
              value={formData.request}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Arrival Date
            </label>
            <input
              type="date"
              name="arrival"
              value={formData.arrival}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Leave Date
            </label>
            <input
              type="date"
              name="leave"
              value={formData.leave}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              No. of Days
            </label>
            <input
              type="number"
              name="noofdays"
              value={formData.noofdays}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Floor
            </label>
            <select
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            >
              {[...Array(5)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            >
              {["Single", "Double", "Deluxe", "Royal"].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Balcony
            </label>
            <select
              name="balcony"
              value={formData.balcony}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            >
              {["Yes", "No"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              AC
            </label>
            <select
              name="ac"
              value={formData.ac}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 px-3 py-2"
            >
              {["Yes", "No"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Add Reservation
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ReservationForm />
    </div>
  );
}

export default App;
