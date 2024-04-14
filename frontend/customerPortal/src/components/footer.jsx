import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="absolute w-full h-72 h-screen overflow-hidden bg-teal-400">
      <div>
        <div className="absolute top-14 left-40">
          <h1 className="text-lg tracking-widest font-bold font-sans">
            FOLLOW US
          </h1>
        </div>
        <div className="absolute top-28 left-32 space-x-4">
          <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
          <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
          <FontAwesomeIcon icon={faYoutube} className="w-8 h-8" />
        </div>
      </div>

      <div className="absolute top-14 right-1/2 -translate-x-16 flex flex-col w-52 text-left">
        <div>
          <h1 className="text-lg tracking-widest font-bold font-sans">
            QUICK LINKS
          </h1>
        </div>
        <div className="absolute top-12 text-left">
          <button className="text-left pb-2">HOME</button>
          <button className="text-left pb-2">ROOMS & RESERVATION</button>
          <button className="text-left pb-2">TRANSPOTATION</button>
          <button className="text-left">SPECIAL OFFERS</button>
        </div>
      </div>

      <div className="absolute top-14 left-1/2 translate-x-20 flex flex-col w-48 text-left">
        <div>
          <h1 className="text-lg tracking-widest font-bold font-sans">
            COMPANY
          </h1>
        </div>
        <div className="absolute top-12 text-left flex flex-col">
          <button className="text-left pb-2">ABOUT</button>
          <button className="text-left pb-2">CONTACT</button>
          <button className="text-left">FAQ</button>
        </div>
      </div>

      <div className="absolute top-14 right-28 flex flex-col w-72 text-left">
        <div>
          <h1 className="text-lg tracking-widest font-bold font-sans">
            GET IN TOUCH
          </h1>
        </div>
        <div className="absolute top-12 text-left">
          <h1 className="text-left pb-2">
            <FontAwesomeIcon icon={faHouse} className="pr-2" />
            452, BEACH AVENUE, WADDUWA
          </h1>
          <h1 className="text-left pb-2">
            <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
            HELLO@SUNRISERESORT.COM
          </h1>
          <h1 className="text-left pb-2">
            <FontAwesomeIcon icon={faPhone} className="pr-2" />
            +94 112 729 729
          </h1>
          <h1 className="text-left">
            <FontAwesomeIcon icon={faFax} className="pr-2" />
            +94 114 125 789
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
