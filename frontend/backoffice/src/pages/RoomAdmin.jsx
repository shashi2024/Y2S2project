import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import GuestNavBar from "../partials/GuestNavBar";
// import Button from "../components/Button";

const GuestAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
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
                type="text"
                placeholder="Enter room number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="floor"
              >
                Floor:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="floor"
                type="text"
                placeholder="Enter floor"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="type"
              >
                Type:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="type"
                type="text"
                placeholder="Enter type"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="noofbeds"
              >
                Number of Beds:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="noofbeds"
                type="text"
                placeholder="Enter number of beds"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="balcony"
              >
                Balcony:
              </label>
              <input
                className="mr-2 leading-tight"
                id="balcony"
                type="checkbox"
              />
              <span className="text-sm text-gray-700">Check if available</span>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ac"
              >
                AC:
              </label>
              <input className="mr-2 leading-tight" id="ac" type="checkbox" />
              <span className="text-sm text-gray-700">Check if available</span>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Save
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default GuestAdmin;
