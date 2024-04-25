import React, { useState } from "react";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewStaff() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    rID: "",
    uID: "",
    email: "",
    dID: "",
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
    sendRequest().then(() => history("/allStaffs"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/staff", {
        name: String(inputs.name),
        rID: Number(inputs.rID),
        uID: Number(inputs.uID),
        email: String(inputs.email),
        dID: Number(inputs.dID),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <div className="absolute top-40 right-8 w-3/4 h-auto bg-white p-2 drop-shadow-xl rounded-xl">
        <form onSubmit={handleSubmit}>
          <div class="mb-4 w-2/5">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Enter Staff Name"
            />
          </div>

          <div class="mb-4 w-2/5">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              placeholder="Enter Staff Email"
            />
          </div>

          <div class="mb-4 w-2/5 absolute top-2 right-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="uid">
              Staff ID
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="uID"
              type="Number"
              name="uID"
              onChange={handleChange}
              value={inputs.uID}
              placeholder="Enter Staff ID"
            />
          </div>

          <div class="mb-4 w-2/5 absolute top-20 translate-y-3 right-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="did">
              Department ID
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dID"
              type="Number"
              name="dID"
              onChange={handleChange}
              value={inputs.dID}
              placeholder="Enter Department ID"
            />
          </div>

          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div class="w-3/4 bg-white shadow-md rounded px-8 mb-4">
            <h2 class="text-xl font-semibold mb-4">Select Option</h2>
            <form className="flex flex-colomn p-4">
              <div class="mb-4 px-4">
                <input type="radio" id="option1" name="options" class="mr-2" />
                <label for="option1" class="text-gray-700">
                  Option 1
                </label>
              </div>

              <div class="mb-4 px-4">
                <input type="radio" id="option2" name="options" class="mr-2" />
                <label for="option2" class="text-gray-700">
                  Option 2
                </label>
              </div>

              <div class="mb-4 px-4">
                <input type="radio" id="option3" name="options" class="mr-2" />
                <label for="option3" class="text-gray-700">
                  Option 3
                </label>
              </div>

              <div class="mb-4 px-4">
                <input type="radio" id="option4" name="options" class="mr-2" />
                <label for="option4" class="text-gray-700">
                  Option 4
                </label>
              </div>

              <div class="mb-4 px-4">
                <input type="radio" id="option5" name="options" class="mr-2" />
                <label for="option5" class="text-gray-700">
                  Option 5
                </label>
              </div>

              <div class="mb-4 px-4">
                <input type="radio" id="option6" name="options" class="mr-2" />
                <label for="option6" class="text-gray-700">
                  Option 6
                </label>
              </div>
            </form>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submits"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <TopBar />
      <NavBar />
    </div>
  );
}

export default NewStaff;
