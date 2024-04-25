import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Spining from "../components/Spining.jsx";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const URL = "http://localhost:5000/staff";

const fetchHandler = async()=> {
  return await axios.get(URL).then((res) => res.data);
}

function AllStaff () {

  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(()=> {
    fetchHandler().then((data) => setStaffs(data.staffs));
  },[])

  const ComponentsRef = useRef();
  const handleprint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle:"staff report",
    onafterprint: ()=> alert("staff Report Successfully Download!")
  })

  return (
    <div>
      <TopBar />

      <div className="absolute top-8 right-60 w-3/5 h-24 bg-white p-2">
        <div className="absolute top-4 left-12 flex items-center border-b w-1/2 border-b-2 border-red-400 py-2">
          <input
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search staffs...."
          />
          <Link to="/staffDetails">
            <button
              // onClick={handleSearch}
              className="flex-shrink-0 bg-red-400 hover:bg-red-500 border-red-400 hover:border-red-500 text-sm border-4 text-white py-1 px-2 rounded "
              type="button"
            >
              Search
            </button>
          </Link>
        </div>
        <div>
          <Link to="/newStaff">
            <button className="absolute top-4 right-12 w-1/3 h-12 bg-red-400 text-white border-2 border-red-400 rounded-lg translate-y-1">
              Add new staff
            </button>
          </Link>
        </div>
      </div>

      <div ref={ComponentsRef}>
        {loading ? (
          <Spining/>
        ) : (
          <div>
            {staffs.map((staff, index) => (
              <div
                key={staff._id}
                className="absolute top-48 right-8 w-3/4 h-12"
              >
                <div className="absolute top-0 right-2 w-full h-auto bg-white p-2 rounded-xl drop-shadow-lg">
                  <div className="pb-4">
                    <h1 className="text-xl font-serif font-semibold">Name</h1>
                    <p className="text-xl font-serif">{staff.name}</p>
                  </div>

                  <div className="pb-4">
                    <h1 className="text-xl font-serif font-semibold">
                      staff ID
                    </h1>
                    <p className="text-xl font-serif">{staff.uID}</p>
                  </div>

                  <div className="pb-4">
                    <h1 className="text-xl font-serif font-semibold">
                      Roll ID
                    </h1>
                    <p className="text-xl font-serif">{staff.rID}</p>
                  </div>

                  <div className="pb-4">
                    <h1 className="text-xl font-serif font-semibold">
                      Department ID
                    </h1>
                    <p className="text-xl font-serif">{staff.dID}</p>
                  </div>

                  <div className="pb-4">
                    <h1 className="text-xl font-serif font-semibold">Email</h1>
                    <p className="text-xl font-serif">{staff.email}</p>
                  </div>
                </div>

                <div>
                  <button
                    className="absolute top-96 left-40 bg-red-400 w-40 hover:bg-red-500 drop-shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleprint}
                  >
                    Detail Report
                  </button>

                  <Link to={`/deleteStaff/${staff._id}`}>
                    <button
                      className="absolute top-96 right-40 bg-red-400 w-40 hover:bg-red-500 drop-shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Delete
                    </button>
                  </Link>

                  <Link to={`/updateStaff/${staff._id}`}>
                    <button
                      className="absolute top-96 right-64 -translate-x-60 bg-red-400 w-40 hover:bg-red-500 drop-shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <NavBar />
    </div>
  );
}

export default AllStaff;
