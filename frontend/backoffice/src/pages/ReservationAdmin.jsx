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
        <main>
          <div>
            <GuestNavBar />
            <br></br>
            <div className="bg-gray-100 min-h-screen flex flex-col  items-center">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-8">RESERVATION ADMIN DASHBOARD</h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuestAdmin;