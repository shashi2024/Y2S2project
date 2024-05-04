import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const URL = "http://localhost:5000/user";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();

  const handleprint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "user report",
    onafterprint: () => alert("User Report Successfully Download!"),
  });

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredUsers([]);
    } else {
      fetchHandler().then((data) => {
        const filtered = data.users.filter((user) =>
          user.name.toLowerCase().startsWith(query.toLowerCase())
        );
        setFilteredUsers(filtered);
      });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <div className="absolute top-20 right-28 w-4/5 h-24 bg-white p-2">
          <div className="absolute top-4 left-12 flex items-center border-b w-1/2 border-b-2 border-red-400 py-2">
            <input
              onChange={handleSearch}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Users...."
            />
            <button
              onClick={handleSearch}
              className="flex-shrink-0 bg-red-400 hover:bg-red-500 border-red-400 hover:border-red-500 text-sm border-4 text-white py-1 px-2 rounded "
              type="button"
            >
              Search
            </button>
          </div>

          {filteredUsers.length > 0 && (
            <div className="absolute top-20 right-28 w-4/5 h-24 bg-white p-2">
              {filteredUsers.map((user) => (
                <div key={user._id}>
                  <Link to={`/showUser/${user._id}`}>{user.name}</Link>
                </div>
              ))}
            </div>
          )}

          <div>
            <Link to="/newUser">
              <button className="absolute top-20 top-4 right-56 w-40 h-12 bg-red-400 hover:bg-red-500 text-white border-2 border-red-400 rounded-lg translate-y-1">
                Add new User
              </button>
            </Link>
            <button
              onClick={handleprint}
              className="px-2 absolute top-4 right-12 w-40 h-12 bg-red-400 hover:bg-red-500 text-white border-2 border-red-400 rounded-lg translate-y-1"
            >
              Detail Report
            </button>
          </div>
        </div>

        {noResults ? (
          <div>
            <p>no user found</p>
          </div>
        ) : (
          <div ref={ComponentsRef}>
            {loading ? (
              <div>Loading..</div>
            ) : (
              <>
                <table className="absolute right-28 w-full  border-separate border-spacing-2">
                  <table className="absolute top-36 right-1 w-4/5  border-separate border-spacing-2 p-2 text-lg">
                    <thead>
                      <tr>
                        <th className="border border-black rounded-md p-2">
                          No.
                        </th>
                        <th className="border border-black rounded-md">Name</th>
                        <th className="border border-black rounded-md">
                          User ID
                        </th>
                        <th className="border border-black rounded-md">
                          Email
                        </th>
                        <th className="border border-black rounded-md">
                          Operations
                        </th>
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
                              </Link>
                              <Link to={`/showUser/${user._id}`}>
                                <button className="px-2">
                                  <FontAwesomeIcon icon={faFolderOpen} />
                                </button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </table>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllUsers;
