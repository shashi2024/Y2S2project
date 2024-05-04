import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [userReservations, setUserReservations] = useState([]);
  const [error, setError] = useState(false); // State to track if error occurred

  useEffect(() => {
    // Fetch userId from localStorage
    const userId = localStorage.getItem("userId");
    const passportid = localStorage.getItem("passportid");

    if (!userId || !passportid) {
      // If userId or passportid is not present, redirect to 404 page
      setError(true);
      return;
    }

    // Fetch user data using userId
    axios
      .get(`http://localhost:5000/guest/${userId}`)
      .then((response) => {
        setUserData(response.data.guest);
        // Fetch reservations for the logged-in user
        axios
          .get(`http://localhost:5000/guest/${passportid}/reservations`)
          .then((res) => {
            setUserReservations(res.data.reservations);
          })
          .catch((error) => {
            console.error("Error fetching reservations:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []); // Empty dependency array to run the effect only once

  const navigateReservation = () => {
    window.location.href = '/addreservation';
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("userId");
    localStorage.removeItem("passportid");
    // Redirect to login page or any other desired page
    window.location.href = '/login';
  };

  if (error) {
    // Redirect to 404 page if error occurred (userId or passportid not found)
    window.location.href = '/404';
    return null; // Return null to prevent rendering of the dashboard
  }

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="max-w-lg w-full px-6">
        <div className="bg-white shadow-md rounded-md p-8">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          {userData ? (
            <div>
              <h2 className="text-lg font-semibold mb-4">User Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Username:</p>
                  <p>{userData.username}</p>
                </div>
                <div>
                  <p className="font-semibold">Full Name:</p>
                  <p>{userData.fullname}</p>
                </div>
                <div>
                  <p className="font-semibold">Passport ID:</p>
                  <p>{userData.passportid}</p>
                </div>
                {/* Add other profile details here */}
              </div>
              <h2 className="text-lg font-semibold mb-4 mt-8">Reservations</h2>
              {userReservations.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">Reservation ID</th>
                        <th className="border border-gray-400 px-4 py-2">Passport ID</th>
                        <th className="border border-gray-400 px-4 py-2">No. of Days</th>
                        <th className="border border-gray-400 px-4 py-2">Room Number</th>
                        <th className="border border-gray-400 px-4 py-2">Floor</th>
                        <th className="border border-gray-400 px-4 py-2">Type</th>
                        <th className="border border-gray-400 px-4 py-2">No. of Beds</th>
                        <th className="border border-gray-400 px-4 py-2">Balcony</th>
                        <th className="border border-gray-400 px-4 py-2">AC</th>
                        <th className="border border-gray-400 px-4 py-2">Request</th>
                        <th className="border border-gray-400 px-4 py-2">Arrived Date</th>
                        <th className="border border-gray-400 px-4 py-2">Leave Date</th>
                        {/* Add other reservation details here */}
                      </tr>
                    </thead>
                    <tbody>
                      {userReservations.map((reservation, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                          <td className="border border-gray-400 px-4 py-2">{reservation.reservationid}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.passportid}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.noofdays}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.roomno}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.floor}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.type}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.noofbeds}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.balcony}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.ac}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.request}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.arrival}</td>
                          <td className="border border-gray-400 px-4 py-2">{reservation.leave}</td>
                          {/* Add other reservation details here */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No reservations found.</p>
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={navigateReservation}>
          Add Reservation
        </button>
        <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
