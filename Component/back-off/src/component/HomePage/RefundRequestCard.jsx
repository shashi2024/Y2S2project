import RefundReqImg from "./image/Refund.png";
import { Link } from "react-router-dom";

function RefundRequestCard() {
  return (
    <div className="Card">
      <h2>Manage Refund Request </h2>
      <Link to="/refund-request" className="Refund-Request-Page">
        <img className="Img_left" src={RefundReqImg} alt="Refund-Img"></img>
      </Link>
      <p>
        Effortlessly manage refund requests within our hotel system, ensuring
        swift resolution and customer satisfaction, while maintaining financial
        integrity and operational efficiency
      </p>
      <hr></hr>
    </div>
  );
}

export default RefundRequestCard;
