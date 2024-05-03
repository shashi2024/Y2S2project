import React from "react";
import "./roomreservation.css";

function RoomReservation() {
  return (
    <div className="container mx-auto px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Room 1 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img src="https://bit.ly/49ZinMm" className="w-full h-64 object-cover" alt="Room 1" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Double Room</p>
              <p className="text-lg">$89 / Night</p>
            </div>
          </div>

          {/* Room 2 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img src="https://bit.ly/3UD6zLF" className="w-full h-64 object-cover" alt="Room 2" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Single Room</p>
              <p className="text-lg">$99 / Night</p>
            </div>
          </div>

          {/* Room 3 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img src="https://bit.ly/3WmOEdd" className="w-full h-64 object-cover" alt="Room 3" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Deluxe Room</p>
              <p className="text-lg">$109 / Night</p>
            </div>
          </div>

          {/* Room 4 */}
          <div className="border rounded-md overflow-hidden hover:shadow-lg">
            <img src="https://bit.ly/3Uk5IxT" className="w-full h-64 object-cover" alt="Room 4" />
            <div className="p-4">
              <p className="text-xl font-bold mb-2">Royal Room</p>
              <p className="text-lg">$129 / Night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomReservation;
