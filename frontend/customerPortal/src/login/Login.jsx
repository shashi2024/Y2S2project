import React from "react";
import backgroundImage from "../images/pic1.png";
import LoginComp from "../components/LoginComp.jsx";

function Login() {
  return (
    <div
      className="h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <LoginComp/>
    </div>
  );
}

export default Login;
