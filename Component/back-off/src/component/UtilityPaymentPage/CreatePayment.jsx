import "./utility.css";
import ViewBill from "./images/CreateBill.png";
import { Link } from "react-router-dom";

function CreateBillPayment() {
  return (
    <div className="container-1">
      <h2>Create Payment</h2>
      <img className="Img" src={ViewBill} alt="ViewBill-Img"></img>
      <Link to="/utility-payment/create-payment">
        <button className="goBtn">Pay</button>
      </Link>
    </div>
  );
}

export default CreateBillPayment;
