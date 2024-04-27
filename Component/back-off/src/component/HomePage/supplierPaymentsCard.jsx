import supplierImg from "./image/Supplier.png";
import { Link } from "react-router-dom";

function SupplierPaymentCard() {
  return (
    <div>
      <div className="Card">
        <h2>Supplier Payments </h2>
        <Link to="/supplier-payment" className="Supplier-Payment-Page">
          <img className="Img_left" src={supplierImg} alt="Supplier-Img"></img>
        </Link>
        <p>
          Streamlined supplier payment web portal exclusively designed for hotel
          staff, optimizing financial transactions and enhancing operational
          efficiency behind the scenes.
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default SupplierPaymentCard;
