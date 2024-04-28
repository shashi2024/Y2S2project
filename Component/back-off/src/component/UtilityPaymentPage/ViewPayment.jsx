import "./utility.css";
import SearchBill from "./images/SearchBill.png";
import { Link } from "react-router-dom";

function ViewBillPayment() {
  return (
    <div className="container-2">
      <h2>Search Payment</h2>
      <img className="Img" src={SearchBill} alt="SearchBill-Img"></img>

      <button className="goBtn">Search</button>
    </div>
  );
}

export default ViewBillPayment;
