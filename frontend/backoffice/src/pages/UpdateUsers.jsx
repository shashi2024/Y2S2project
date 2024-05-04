import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function UpdateUsers() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchHandler = useCallback(async () => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    const user = response.data.users;
    if (user) {
      setInputs({
        name: user.name,
        email: user.email,
        uID: user.uID,
        department: user.department,
        message: user.message, // assuming user has a message field
      });
    } else {
      console.log("User not found");
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/user/${id}`, inputs);
    navigate("/allUsers");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="absolute top-40 right-40 w-3/4 h-1/2 bg-white p-2 drop-shadow-xl rounded-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-4/5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  value={inputs ? inputs.name : ""}
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={inputs ? inputs.email : ""}
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="uID"
                  type="Number"
                  name="uID"
                  onChange={handleChange}
                  value={inputs ? inputs.uID : ""}
                  placeholder="Enter User ID"
                />
              </div>

              <div className="mb-4 w-4/5 absolute top-20 translate-y-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="department"
                >
                  Department ID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="department"
                  type="text"
                  name="department"
                  onChange={handleChange}
                  value={inputs ? inputs.department : ""}
                  placeholder="Enter Department ID"
                />
              </div>

              <div className="absolute top-3/4 translate-y-16 w-full flex items-center justify-between">
                <button
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-10"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UpdateUsers;
