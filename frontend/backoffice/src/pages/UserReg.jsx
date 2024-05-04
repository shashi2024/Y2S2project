import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function UserReg() {
  const history = useNavigate();
  const roles = [
    "admin",
    "marketing",
    "guest",
    "inventory",
    "finance",
    "transport",
    "restaurent",
    "maintenance",
  ];
  const [inputs, setInputs] = useState({
    userRoll: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Registration Successful");
        history("/allUsers");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      alert("error" + error.message);
    }
  };

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/register", {
        userRoll: String(inputs.userRoll),
        email: String(inputs.email),
        password: String(inputs.password),
      })
      .then((response) => response.data);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="flex flex-col items-center justify-center h-screen">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="userRoll"
                >
                  User Roll
                </label>
                <select
                  value={inputs.userRoll}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="userRoll"
                  required
                >
                  {roles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  value={inputs.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  value={inputs.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Create new User
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserReg;
