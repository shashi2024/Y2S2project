import GenarateReportsImg from "./image/Genarate Reports.png";
import { Link } from "react-router-dom";

function GenarateRportsCard() {
  return (
    <div>
      <div className="Card">
        <h2 className="h2_right">Genarate Monthly Reports</h2>
        <Link to="/generate-reports" className="Generate-Reports-Page">
          <img
            className="Img_right"
            src={GenarateReportsImg}
            alt="Reports-Img"
          ></img>
        </Link>
        <p>
          Discover a fortified realm within hotel finance, where efficiency and
          security converge to streamline utility payments, empowering seamless
          operations and ensuring peace of mind
        </p>
        {/* <hr></hr> */}
      </div>
      <hr></hr>
    </div>
  );
}

export default GenarateRportsCard;
