import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the faBars icon
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/pic2.png";
import backgroundImage from "../assets/images/pic1.png";

const Navbar = () => {
  return (
    <div
      className="h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative">
        <div className="absolute top-24 right-52">
          <button className="mr-4 p-2">
            <FontAwesomeIcon icon={faPhone} className="text-white w-10 h-10" />
          </button>
          <button className="mr-4 p-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-white w-10 h-10"
            />
          </button>
        </div>
        <div className="absolute top-24 right-16">
          <button className="bg-white w-32 h-12 top-2 font-bold font-sans rounded-2xl p-1">
            BOOK NOW
          </button>
        </div>
        <div className="absolute top-12 right-12 flex">
          <button className="text-white font text-lg">MY ACCOUNT</button>
          <h1 className="text-white p-2">|</h1>
          <button className="text-white text-lg">LOGOUT</button>
        </div>
        <div className="absolute top-20 left-16">
          <button className="ml-4">
            <FontAwesomeIcon icon={faBars} className="text-white w-12 h-12" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-68 h-auto" />
        </div>
        <div className="absolute top-68 left-80">
          <h1 className="text-6xl text font-serif font-bold text-center text-white tracking-wider uppercase space-x-1 drop-shadow-md">
            Awaken to Paradise at <br /> Sunrise Resort
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
