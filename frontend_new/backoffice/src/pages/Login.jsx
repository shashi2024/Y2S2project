import React from "react";
import LoginComp from "../components/LoginComp";
import myImage from "../images/pic2.jpeg";

function Login() {
  return (
    <div>
      <div className="absolute top-16 left-96">
        <img
          src={myImage}
          alt="Illustration of a person logging into the system"
          className="w-2/3 h-auto rounded-xl shadow-lg drop-shadow-lg"
        />
      </div>
      <LoginComp />
    </div>
  );
}

export default Login;
