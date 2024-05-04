import myImage from "../images/pic2.jpeg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/forgot-password", {
        email,
        newPassword: password,
        confirmPassword,
      });

      if (response.data.Status === "Success") {
        navigate("/login");
      } else {
        alert("Failed to change password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="absolute top-16 left-96">
        <img
          src={myImage}
          alt="Illustration of a person logging into the system"
          className="w-2/3 h-auto rounded-xl shadow-lg drop-shadow-lg"
        />
      </div>

      <div className="absolute top-36 left-1/4 translate-x-20 w-2/5 h-3/5 bg-black bg-opacity-70 drop-shadow-xl rounded-2xl">
        <h1 className="text-white text-3xl font-serif font-bold absolute left-20 translate-x-3 top-8">
          PLEASE ENTER YOUR EMAIL
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-gray-900 bg-opacity-80 absolute top-20 left-28 h-12 w-2/3 rounded-xl p-2"
            type="text"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-gray-900 bg-opacity-80 absolute top-40 left-28 h-12 w-2/3 rounded-xl p-2"
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <input
            className="bg-gray-900 bg-opacity-80 absolute top-60 left-28 h-12 w-2/3 rounded-xl p-2"
            type="password"
            placeholder="Enter again Password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="submit"
            className="w-40 absolute top-2/3 translate-y-6 left-56 h-12 bg-white bg-opacity-65 text-black rounded-2xl"
          >
            Submit Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
