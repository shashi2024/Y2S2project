// import React from "react";
// import { Link } from "react-router-dom";

// function LoginComp() {

//   return (
//     <div>
//       <div className="absolute top-36 left-1/4 translate-x-20 w-2/5 h-3/5 bg-black bg-opacity-70 drop-shadow-xl rounded-2xl">
//         <form> 
//           {/* onSubmit={handleSubmit}> */}
//           <h1 className="text-white text-3xl font-serif font-bold absolute left-60 translate-x-3 top-8">
//             LOGIN
//           </h1>
//           <div>
//             <input
//               className="bg-gray-900 bg-opacity-80 absolute top-24 left-28 h-12 w-2/3 rounded-xl p-2"
//               type="email"
//               // value={inputs.email}
//               // onChange={handleChange}
//               placeholder="Email"
//               id="email"
//             ></input>
//             <input
//               className="bg-gray-900 bg-opacity-80 absolute top-48 left-28 h-12 w-2/3 rounded-xl p-2"
//               type="password"
//               id="password"
//               // value={inputs.password}
//               // onChange={handleChange}
//               placeholder="Password"
//             ></input>
//           </div>
          // <Link to="/dashboard">
          //   <div className="absolute bottom-16 left-1/3 translate-x-8 text-white">
          //     <button
          //       className="w-32 h-12 bg-white bg-opacity-65 text-black rounded-2xl"
          //       type="submits"
          //     >
          //       Submit
          //     </button>
          //   </div>
          // </Link>
          // <Link to="/forgetPassword">
          //   <div className="absolute bottom-40 right-1/2 translate-x-48 text-white">
          //     <button className="text-white">Forgot Password?</button>
          //   </div>
          // </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginComp;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"; 

function LoginComp() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await sendRequest(); 
      if(response.status === "ok" ){
        alert("Login Successful");
        history("/dashboard");
      } else {
        alert("Login Failed");
      }
    } catch (error){
      alert("error" + error.message);
    }
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/user", {
        email: String(inputs.email),
        password: String(inputs.password),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <div className="absolute top-36 left-1/4 translate-x-20 w-2/5 h-3/5 bg-black bg-opacity-70 drop-shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit}>

          <div class="mb-4 w-2/5">
            <label
              class="text-white text-xl font-serif font-bold absolute left-60 translate-x-10 top-8"
              for="email"
            >
              Email
            </label>
            <input
              class="bg-gray-900 bg-opacity-80 absolute top-20 left-28 h-12 w-2/3 rounded-xl p-2"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              placeholder="Enter User Email"
            />
          </div>

          <div class="mb-4 w-2/5">
            <label
              class="text-white text-xl font-serif font-bold absolute left-60 translate-x-5 top-36"
              for="password"
            >
              Password
            </label>
            <input
              class="bg-gray-900 bg-opacity-80 absolute top-48 left-28 h-12 w-2/3 rounded-xl p-2"
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={inputs.password || ""}
              placeholder="Enter User Password"
            />
          </div>
          <Link to="/dashboard">
          <div className="absolute bottom-16 left-1/3 translate-x-8 text-white">
              <button
                className="w-32 h-12 bg-white bg-opacity-65 text-black rounded-2xl"
                type="submits"
              >
                Submit
              </button>
            </div>
          </Link>
          <Link to="/forgetPassword">
            <div className="absolute bottom-40 right-1/2 translate-x-48 text-white">
              <button className="text-white">Forgot Password?</button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginComp;
