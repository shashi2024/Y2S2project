import UtilityImg from "./image/Utility.png";
import { Link } from "react-router-dom";

function UtilityPaymentCard() {
  return (
    <div className="Card">
      <h2 className="h2_right">Utility Payments </h2>
      <Link to="/utility-payment" className="Utility-Payment-Page">
        <img className="Img_right" src={UtilityImg} alt="Utility-Img"></img>
      </Link>
      <p>
        Discover a fortified realm within hotel finance, where efficiency and
        security converge to streamline utility payments, empowering seamless
        operations and ensuring peace of mind
      </p>
      <hr></hr>
    </div>
  );
}

export default UtilityPaymentCard;
