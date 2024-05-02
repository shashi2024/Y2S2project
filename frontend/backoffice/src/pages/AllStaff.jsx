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

const URL = "http://localhost:5000/staff";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function AllStaffs() {
  const [staffs, setStaffs] = useState([]);
  const [loading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => {
      if (Array.isArray(data.staff)) {
        setStaffs(data.staff);
      } else {
        console.error("API response does not contain an array:", data);
      }
    });
  }, []);

  const ComponentsRef = useRef();

  const handleprint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "staff report",
    onafterprint: () => alert("Staff Report Successfully Download!"),
  });

  const handleSearch = () => {
    setNoResults(false);
    fetchHandler().then((data) => {
      const staff = data.staff.find(
        (staff) =>
          staff.sID.toString().toLowerCase() === searchQuery.toLowerCase()
      );
      if (staff) {
        navigate(`/showStaff/${staff._id}`);
      } else {
        setNoResults(true);
      }
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="absolute top-20 right-28 w-4/5 h-24 bg-white p-2">
            <div className="absolute top-4 left-12 flex items-center border-b w-1/2 border-b-2 border-red-400 py-2">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search Staff...."
              />
              <button
                onClick={handleSearch}
                className="flex-shrink-0 bg-red-400 hover:bg-red-500 border-red-400 hover:border-red-500 text-sm border-4 text-white py-1 px-2 rounded "
                type="button"
              >
                Search
              </button>
            </div>
            <div>
              <Link to="/newStaff">
                <button className="absolute top-20 top-4 right-56 w-40 h-12 bg-red-400 hover:bg-red-500 text-white border-2 border-red-400 rounded-lg translate-y-1">
                  Add new staff
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
              <p>no staff found</p>
            </div>
          ) : (
            <div ref={ComponentsRef}>
              {loading ? (
                <div>Loding...</div>
              ) : (
                <>
                  <div className="absolute right-28 w-full  border-separate border-spacing-2">
                    <table
                      className="absolute top-36 right-1 w-4/5  border-separate border-spacing-2 p-2 text-lg">
                      <thead>
                        <tr>
                          <th className="border border-black rounded-md p-2">
                            No.
                          </th>
                          <th className="border border-black rounded-md">
                            Name
                          </th>
                          <th className="border border-black rounded-md">
                            Staff ID
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
                        {staffs &&
                          staffs.map((staff, index) => (
                            <tr key={staff._id} className="h-8">
                              <td className="border border-black rounder-md text-center">
                                {index + 1}
                              </td>
                              <td className="border border-black rounder-md text-center">
                                {staff.name}
                              </td>
                              <td className="border border-black rounder-md text-center">
                                {staff.sID}
                              </td>
                              <td className="border border-black rounder-md text-center">
                                {staff.email}
                              </td>
                              <td className="border border-black rounder-md text-center">
                                <div>
                                  <Link to={`/updateStaff/${staff._id}`}>
                                    <button className="px-2">
                                      <FontAwesomeIcon icon={faPen} />
                                    </button>
                                  </Link>
                                  <Link to={`/deleteStaff/${staff._id}`}>
                                    <button className="px-2">
                                      <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                  </Link>
                                  <Link to={`/showStaff/${staff._id}`}>
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
                  </div>
                </>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
    // <div>
    //   <Sidebar/>
    //   <Header/>

    //   <div className="absolute top-20 right-60 w-3/5 h-24 bg-white p-2">
    //     <div className="absolute top-4 left-12 flex items-center border-b w-1/2 border-b-2 border-red-400 py-2">
    //       <input
    //         onChange={(e) => setSearchQuery(e.target.value)}
    //         className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    //         type="text"
    //         placeholder="Search Staff...."
    //       />
    //         <button
    //           onClick={handleSearch}
    //           className="flex-shrink-0 bg-red-400 hover:bg-red-500 border-red-400 hover:border-red-500 text-sm border-4 text-white py-1 px-2 rounded "
    //           type="button"
    //         >
    //           Search
    //         </button>
    //     </div>
    //     <div>
    //       <Link to="/newStaff">
    //         <button className="absolute top-20 top-4 right-56 w-40 h-12 bg-red-400 hover:bg-red-500 text-white border-2 border-red-400 rounded-lg translate-y-1">
    //           Add new staff
    //         </button>
    //       </Link>
    //       <button
    //         onClick={handleprint}
    //         className="px-2 absolute top-4 right-12 w-40 h-12 bg-red-400 hover:bg-red-500 text-white border-2 border-red-400 rounded-lg translate-y-1"
    //       >
    //         Detail Report
    //       </button>
    //     </div>
    //   </div>

    //   {noResults ? (
    //     <div>
    //       <p>no staff found</p>
    //     </div>
    //   ) : (
    //     <div ref={ComponentsRef}>
    //       {loading ? (
    //         <div>Loding...</div>
    //       ) : (
    //         <>
    //           <div className="absolute top-20 right-8 w-3/4  border-separate border-spacing-2">
    //             <table className="absolute top-48 right-8 w-3/4  border-separate border-spacing-2">
    //               <thead>
    //                 <tr>
    //                   <th className="border border-black rounded-md">No.</th>
    //                   <th className="border border-black rounded-md">Name</th>
    //                   <th className="border border-black rounded-md">Staff ID</th>
    //                   <th className="border border-black rounded-md">Email</th>
    //                   <th className="border border-black rounded-md">Operations</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {staffs && staffs.map((staff, index) => (
    //                   <tr key={staff._id} className="h-8">
    //                     <td className="border border-black rounder-md text-center">
    //                       {index + 1}
    //                     </td>
    //                     <td className="border border-black rounder-md text-center">
    //                       {staff.name}
    //                     </td>
    //                     <td className="border border-black rounder-md text-center">
    //                       {staff.sID}
    //                     </td>
    //                     <td className="border border-black rounder-md text-center">
    //                       {staff.email}
    //                     </td>
    //                     <td className="border border-black rounder-md text-center">
    //                       <div>
    //                         <Link to={`/updateStaff/${staff._id}`}>
    //                           <button className="px-2">
    //                             <FontAwesomeIcon icon={faPen} />
    //                           </button>
    //                         </Link>
    //                         <Link to={`/deleteStaff/${staff._id}`}>
    //                           <button className="px-2">
    //                             <FontAwesomeIcon icon={faTrash} />
    //                           </button>
    //                         </Link>
    //                         <Link to={`/showStaff/${staff._id}`}>
    //                           <button className="px-2">
    //                             <FontAwesomeIcon icon={faFolderOpen} />
    //                           </button>
    //                         </Link>
    //                       </div>
    //                     </td>
    //                   </tr>
    //                 ))}
    //               </tbody>
    //             </table>
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   )}

    // </div>
  );
}

export default AllStaffs;
