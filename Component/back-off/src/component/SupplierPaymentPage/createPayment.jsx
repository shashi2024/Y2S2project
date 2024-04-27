import "../UtilityPaymentPage/utility.css";
import createSup from "./images/supplier.png";
import { Link } from "react-router-dom";

function CreateSupplierPayment() {
  return (
    <div className="container-1">
      <h2>Create Supplier Payment</h2>
      <img className="Img" src={createSup} alt="supplierPayment-Img"></img>
      <Link to="/supplier-payment/create-payment">
        <button className="goBtn">Pay</button>
      </Link>
    </div>
  );
}

export default CreateSupplierPayment;
