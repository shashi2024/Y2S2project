import myImage from "../image/pic2.jpeg";
import { Link } from "react-router-dom";
import React from "react";

function ForgetPassword() {
  return (
    <div>
        <div className="absolute top-16 left-96">
        <img
          src={myImage}
          alt="Illustration of a person logging into the system"
          className="w-2/3 h-auto rounded-xl shadow-lg drop-shadow-lg"
        />
      </div>

      <div className="absolute top-36 left-1/4 translate-x-20 w-2/5 h-3/5 bg-black bg-opacity-70 drop-shadow-xl rounded-2xl">
        <h1 className="text-white text-3xl font-serif font-bold absolute left-20 translate-x-3 top-8">
          CHENGE YOUR PASSWORD
        </h1>
        <div>
          <input
            className="bg-gray-900 bg-opacity-80 absolute top-24 left-28 h-12 w-2/3 rounded-xl"
            type="password"
            placeholder="    Enter Password"
            id="password1"
          ></input>
          <input
            className="bg-gray-900 bg-opacity-80 absolute top-48 left-28 h-12 w-2/3 rounded-xl"
            type="Password"
            placeholder="    Enter again Password"
            id="Password2"
          ></input>
          <Link to="/login">
            <div className="absolute bottom-16 left-1/3 translate-x-8 text-white">
              <button className="w-40 h-12 bg-white bg-opacity-65 text-black rounded-2xl">
                Submit Password
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
