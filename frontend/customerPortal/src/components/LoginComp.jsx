import React from "react";
import { Link } from "react-router-dom";

function LoginComp() {
  return (
    <div>
      <div className="absolute top-36 left-1/4 translate-x-20 w-2/5 h-3/5 bg-black bg-opacity-70 drop-shadow-xl rounded-2xl">
        <h1 className="text-white text-3xl font-serif font-bold absolute left-60 translate-x-3 top-8">
          LOGIN
        </h1>
        <div>
          <input
            className="bg-gray-900 bg-opacity-80 absolute top-24 left-28 h-12 w-2/3 rounded-xl"
            type="email"
            placeholder="    Email"
            id="search"
          ></input>
          <input
            className="bg-gray-900 bg-opacity-80 absolute top-48 left-28 h-12 w-2/3 rounded-xl"
            type="Password"
            placeholder="    Password"
            id="Password"
          ></input>
          <Link to="/home">
            <div className="absolute bottom-16 left-1/3 translate-x-8 text-white">
              <button className="w-32 h-12 bg-white bg-opacity-65 text-black rounded-2xl">
                Submit
              </button>
            </div>
          </Link>
          <Link to="/forgetPassword">
            <div className="absolute bottom-40 right-1/2 translate-x-48 text-white">
              <button className="text-white">Forgot Password?</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
