import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function NewUser() {
  const history = useNavigate();
  const departments = [
    "HR Department",
    "Merketing Department",
    "Finance Department",
    "Transport Department",
    "Inventory and Supplier Management Department",
    "Restaurent Management Department",
    "Maintenance Department",
    "Guest Services Department",
  ];
  const roles = [
    "Admin",
    "Maintenance",
    "Guest",
    "Restaurent",
    "Marketing",
    "Transport",
    "Finance",
    "Inventory",
  ];
  const [inputs, setInputs] = useState({
    name: "",
    rID: roles[0],
    uID: "",
    email: "",
    department: departments[0],
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      console.log(inputs);
      sendRequest();
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  const [error, setError] = useState(null);

  const sendRequest = async () => {
    console.log(inputs); 
    try {
      await axios.post("http://localhost:5000/user", {
        name: String(inputs.name),
        rID: String(inputs.rID),
        uID: Number(inputs.uID),
        email: String(inputs.email),
        department: String(inputs.department),
      });
      history("/registerUser"); // Only navigate when the request is successful
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message); // Set the error message when the request fails
      }
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="absolute top-40 right-20 w-4/5 h-3/5 bg-white p-4 drop-shadow-xl rounded-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-4/5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  placeholder="Enter User Name"
                />
              </div>

              <div className="mb-4 w-4/5 absolute top-60">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={inputs.email}
                  placeholder="Enter User Email"
                />
                
              </div>

              <div className="mb-4 w-4/5 absolute top-40">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="uid"
                >
                  User ID
                </label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="uID"
                  type="Number"
                  name="uID"
                  onChange={handleChange}
                  value={inputs.uID}
                  placeholder="Enter User ID"
                />
                
              </div>

              <div className="mb-4 w-4/5 absolute top-20 translate-y-3 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="department"
                >
                  Department
                </label>
                <select
                required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="department"
                  type="text"
                  name="department"
                  onChange={handleChange}
                  value={inputs.department}
                >
                  {departments.map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4 w-4/5 absolute top-64 translate-y-16 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="rID"
                >
                  User Role
                </label>
                <select
                required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="rID"
                  name="rID"
                  onChange={handleChange}
                  value={inputs.rID}
                >
                  {roles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="absolute top-96 translate-y-8 w-full flex items-center justify-between ">
              {error && <div className="error text-red-700 text-left">{error}</div>}
                <button
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-10"
                  type="submit"
                >
                  Create User Registration
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NewUser;
