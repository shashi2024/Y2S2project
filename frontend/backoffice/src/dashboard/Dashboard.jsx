import React from "react";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

function Dashboard() {
  return (
    <div>
      <div className="absolute top-40 right-8 w-3/4 h-auto bg-white p-2 drop-shadow-xl rounded-xl">profile</div>
      <TopBar />
      <NavBar />
    </div>
  );
}

export default Dashboard;
