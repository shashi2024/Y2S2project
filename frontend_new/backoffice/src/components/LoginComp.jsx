import { useState } from "react";
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
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Login Successful");
        history("/dashboard");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      alert("error" + error.message);
    }
  };

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        email: String(inputs.email),
        password: String(inputs.password),
      })
      .then((response) => response.data);
  };

  return (
    <div>
      <div className="absolute top-36 left-1/4 translate-x-20 w-2/5 h-3/5 bg-black bg-opacity-70 drop-shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-2/5">
            <label
              className="text-white text-xl font-serif font-bold absolute left-52 translate-x-10 top-8"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={inputs.email}
              onChange={handleChange}
              className="bg-gray-900 bg-opacity-80 absolute top-20 left-28 h-12 w-2/3 rounded-xl p-2"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="mb-4 w-2/5">
            <label
              className="text-white text-xl font-serif font-bold absolute left-60 translate-x-5 top-36"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={inputs.password}
              onChange={handleChange}
              className="bg-gray-900 bg-opacity-80 absolute top-48 left-28 h-12 w-2/3 rounded-xl p-2"
              type="password"
              name="password"
              required
            />
          </div>

          <div className="absolute bottom-16 left-1/3 translate-x-8 text-white">
            <button
              className="w-32 h-12 bg-white bg-opacity-65 text-black rounded-2xl"
              type="submit"
            >
              Submit
            </button>
          </div>
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
