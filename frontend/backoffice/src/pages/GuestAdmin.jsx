import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
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
            <h1>GUEST ADMIN DASHBOARD</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuestAdmin;