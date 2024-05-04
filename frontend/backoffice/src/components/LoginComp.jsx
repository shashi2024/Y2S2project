import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function LoginComp() {
  const history = useNavigate();
  const { setRole } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendRequest();
      console.log(response);
      if (response.status === "ok") {
        setRole(response.rID);
        alert("Login Successful");
        history("/dashboard");
      } else {
        setError("Login Failed");
      }
    } catch (error) {
      setError("Error: " + error.message);
    } finally {
      setLoading(false);
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

  // Rest of your component...

  return (
    <div>
      <div className="absolute top-36 left-1/4 translate-x-20 w-2/5 h-3/5 bg-black bg-opacity-70 drop-shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-2/5">
            <label
              className="text-white text-xl font-serif font-bold absolute left-60 translate-x-10 top-8"
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
              type={showPassword ? "text" : "password"}
              name="password"
              required
            />
          </div>

          <div className="mb-4 w-2/5">
            <input
              className="form-checkbox h-5 w-5 absolute top-64 right-28 text-gray-600 absolute"
              id="showPassword"
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="absolute bottom-16 left-1/3 translate-x-8 text-white">
            {error && <div className="absolute bottom-12">{error}</div>}
            <button
              className="w-32 h-12 bg-white bg-opacity-65 text-black rounded-2xl"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComp;
