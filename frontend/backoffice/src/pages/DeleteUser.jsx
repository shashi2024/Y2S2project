import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function DeleteUser() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteUser = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/user/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/allUsers"); // Redirect to the page displaying all users after deletion
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Please check console.");
        console.log(error);
      });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header/>
        <main>
          {loading ? <div>loading..</div> : null}
          <div className="flex flex-col item-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3 className="text-2xl">
              Are you sure you want to delete this user?
            </h3>
            <button
              className="p-4 bg-red-400 hover:bg-red-500 text-white m-8 w-full"
              onClick={handleDeleteUser}
            >
              Yes, Delete it
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DeleteUser;
