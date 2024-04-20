import GovImg from "./image/Tax.png";
import { Link } from "react-router-dom";

function GovernmentPaymentCard() {
  return (
    <div className="Card">
      <h2>Government Payments </h2>
      <Link to="/government-payment" className="Government-Payment-Page">
        <img className="Img_left" src={GovImg} alt="Tax-Img"></img>
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

export default GovernmentPaymentCard;
