import React from "react";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import {Link} from "react-router-dom";

function StaffDetails() {
  return (
    <div>
      <div className="absolute top-40 right-8 w-3/4 h-12">
        <div className="absolute top-16 right-2 w-full h-auto bg-white p-2">
          <div className="pb-4">
            <h1 className="text-xl font-serif font-semibold">
              SASHINI SITHARA
            </h1>
            <p className=" text-xl font-serif ">Sashini Sithara</p>
          </div>

          <div className="pb-4">
            <h1 className="text-xl font-serif font-semibold">
              SASHINI SITHARA
            </h1>
            <p className=" text-xl font-serif ">Sashini Sithara</p>
          </div>

          <div className="pb-4">
            <h1 className="text-xl font-serif font-semibold">
              SASHINI SITHARA
            </h1>
            <p className=" text-xl font-serif ">Sashini Sithara</p>
          </div>

          <div className="pb-4">
            <h1 className="text-xl font-serif font-semibold">
              SASHINI SITHARA
            </h1>
            <p className=" text-xl font-serif ">Sashini Sithara</p>
          </div>

          <div className="pb-4">
            <h1 className="text-xl font-serif font-semibold">
              SASHINI SITHARA
            </h1>
            <p className=" text-xl font-serif ">Sashini Sithara</p>
          </div>
        </div>

        <div>
          <button
            class="absolute top-0 left-40 bg-red-400 w-40 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Detail Report
          </button>

          <button
            class="absolute top-0 right-40 bg-red-400 w-40 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Delete
          </button>

          <Link to="/updateStaff">
            <button
              class="absolute top-0 right-64 -translate-x-60 bg-red-400 w-40 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Update
            </button>
          </Link>
        </div>
      </div>
      <TopBar />
      <NavBar />
    </div>
  );
}

export default StaffDetails;
