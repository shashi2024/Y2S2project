import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function NewUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    rID: "",
    uID: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/registerUser"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/user", {
        name: String(inputs.name),
        rID: Number(inputs.rID),
        uID: Number(inputs.uID),
        email: String(inputs.email),
        department: String(inputs.department),
      })
      .then((res) => res.data);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header/>
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
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="department"
                  type="text"
                  name="department"
                  onChange={handleChange}
                  value={inputs.department}
                  placeholder="Enter Department"
                />
              </div>

              <div className="absolute top-2/5 top-96 w-full flex items-center justify-between ">
                <button
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-10"
                  type="submits"
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
