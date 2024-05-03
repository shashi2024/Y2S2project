import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx"; // Corrected import path for Navbar
import Footer from "./components/footer.jsx"; // Corrected import path for Footer
import GuestRegister from "./guest/GuestRegister.jsx";
import RoomReservation from "./roomreservation/roomreservation.jsx";
import GuestLogin from "./guest/GuestLogin.jsx"; // Added import for GuestLogin

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/guestregister" element={<GuestRegister />} />
          <Route path="/roomreservation" element={<RoomReservation />} />
          <Route path="/guestlogin" element={<GuestLogin />} /> // Added route for GuestLogin
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
