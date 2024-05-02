import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function NewStaff() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    sID: "",
    email: "",
    department: "",
    nic: "",
    position: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    // Check that all the required fields are defined
    if (
      !inputs.name ||
      !inputs.sID ||
      !inputs.email ||
      !inputs.department ||
      !inputs.nic ||
      !inputs.position
    ) {
      console.error("All fields are required");
      return;
    }

    try {
      await sendRequest();
      history("/allStaff");
    } catch (error) {
      console.error(error);
    }
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post("http://localhost:5000/staff", {
        name: String(inputs.name),
        sID: Number(inputs.sID),
        email: String(inputs.email),
        department: String(inputs.department),
        nic: Number(inputs.nic),
        position: String(inputs.position),
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header/>
        <main>
          <div className="absolute top-20 right-20 w-4/5 h-3/4 bg-white p-4 drop-shadow-xl rounded-xl">
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
                  htmlFor="sid"
                >
                  Staff ID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sID"
                  type="Number"
                  name="sID"
                  onChange={handleChange}
                  value={inputs.sID}
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

              <div className="mb-4 w-4/5 absolute top-1/2 translate-y-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="nic"
                >
                  NIC
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nic"
                  type="Number"
                  name="nic"
                  onChange={handleChange}
                  value={inputs.nic}
                  placeholder="Enter User NIC"
                />
              </div>

              <div className="mb-4 w-4/5 absolute top-3/4 -translate-y-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="position"
                >
                  Position
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="position"
                  type="text"
                  name="position"
                  onChange={handleChange}
                  value={inputs.position}
                  placeholder="Enter User Position"
                />
              </div>

              <div className="absolute top-3/4 translate-y-20 w-full flex items-center justify-between ">
                <button
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-10"
                  type="submit"
                >
                  Create Staff Member
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NewStaff;
