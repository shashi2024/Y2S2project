import  { useEffect, useState, useCallback} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStaff() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  // const fetchHandler = async () => {
  //   const response = await axios.get(`http://localhost:5000/user/${id}`);
  //   const user = response.data.user;
  //   if (user) {
  //     setInputs({
  //       name: user.name,
  //       email: user.email,
  //       uID: user.uID,
  //       dID: user.department,
  //       message: user.message, // assuming user has a message field
  //     });
  //   } else {
  //     console.log("User not found");
  //   }
  // };

  const fetchHandler = useCallback(async () => {
    const response = await axios.get(`http://localhost:5000/staff/${id}`);
    const staff = response.data.staff;
    if (staff) {
      setInputs({
        name: staff.name,
        email: staff.email,
        sID: staff.sID,
        department: staff.department,
        nic: staff.nic,
        position: staff.position,
      });
    } else {
      console.log("Staff not found");
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
    await axios.put(`http://localhost:5000/staff/${id}`, inputs);
    navigate("/allStaff");
  };

  return (
    <div>
      <div className="absolute top-40 right-8 w-3/4 h-3/5 translate-y-5 bg-white p-2 drop-shadow-xl rounded-xl">
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
              placeholder="Enter Staff Name"
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
              placeholder="Enter Staff Email"
            />
          </div>

          <div className="mb-4 w-4/5 absolute top-20 translate-y-3 ">
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

          <div className="mb-4 w-4/5 absolute top-40 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="nic"
            >
              NIC ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nic"
              type="Number"
              name="nic"
              onChange={handleChange}
              value={inputs ? inputs.nic : ""}
              placeholder="Enter NIC ID"
            />
          </div>

          <div className="mb-4 w-4/5 absolute top-2/3 translate-y-5">
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
              value={inputs ? inputs.position : ""}
              placeholder="Enter Position"
            />
          </div>

          <div className="absolute top-3/4 translate-y-20 w-full flex items-center justify-between">
            <button
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-10"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateStaff;
