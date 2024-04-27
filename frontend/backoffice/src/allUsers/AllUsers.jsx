import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Spining from "../components/Spining.jsx";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const URL = "http://localhost:5000/user";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();

  const handleprint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "user report",
    onafterprint: () => alert("User Report Successfully Download!"),
  });

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        user.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  return (
    <div>
      <TopBar />

      <div className="absolute top-8 right-60 w-3/5 h-24 bg-white p-2">
        <div className="absolute top-4 left-12 flex items-center border-b w-1/2 border-b-2 border-red-400 py-2">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Users...."
          />
          <Link to="/userDetails">
            <button
              onClick={handleSearch}
              className="flex-shrink-0 bg-red-400 hover:bg-red-500 border-red-400 hover:border-red-500 text-sm border-4 text-white py-1 px-2 rounded "
              type="button"
            >
              Search
            </button>
          </Link>
        </div>
        <div>
          <Link to="/newUser">
            <button className="absolute top-4 right-12 w-1/3 h-12 bg-red-400 text-white border-2 border-red-400 rounded-lg translate-y-1">
              Add new User
            </button>
          </Link>
        </div>
      </div>

      {noResults ? (
        <div>
          <p>no user found</p>
        </div>
      ) : (
        <div ref={ComponentsRef}>
          {loading ? (
            <Spining />
          ) : (
            <table className="absolute top-48 right-8 w-3/4  border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="border border-black rounded-md">No.</th>
                  <th className="border border-black rounded-md">Name</th>
                  <th className="border border-black rounded-md">User ID</th>
                  <th className="border border-black rounded-md">Roll ID</th>
                  <th className="border border-black rounded-md">Department</th>
                  <th className="border border-black rounded-md">Email</th>
                  <th className="border border-black rounded-md">Operations</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="h-8">
                    <td className="border border-black rounder-md text-center">
                      {index + 1}
                    </td>
                    <td className="border border-black rounder-md text-center">
                      {user.name}
                    </td>
                    <td className="border border-black rounder-md text-center">
                      {user.uID}
                    </td>
                    <td className="border border-black rounder-md text-center">
                      {user.rID}
                    </td>
                    <td className="border border-black rounder-md text-center">
                      {user.dID}
                    </td>
                    <td className="border border-black rounder-md text-center">
                      {user.email}
                    </td>
                    <td className="border border-black rounder-md text-center">
                      <div>
                        <Link to={`/updateUser/${user._id}`}>
                        <button className="px-2">
                           <FontAwesomeIcon icon={faPen} />
                        </button>
                        </Link>
                        <Link to={`/deleteUser/${user._id}`}>
                        <button className="px-2">
                           <FontAwesomeIcon icon={faTrash} />
                        </button>
                        </Link >
                        <button onClick={handleprint} className="px-2">
                           <FontAwesomeIcon icon={faFolderOpen} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      <NavBar />
    </div>
  );
}

export default AllUsers;

