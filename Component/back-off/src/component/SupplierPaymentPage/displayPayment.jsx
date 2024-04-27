import "./../UtilityPaymentPage/utility.css";
import SearchSup from "./images/search.png";
import { Link } from "react-router-dom";

function DisplaySupplerPayment() {
  return (
    <div className="container-2">
      <h2>Search Supplier Payment</h2>

      <img className="Img" src={SearchSup} alt="SearchSupplier-Img"></img>
      <Link to="/supplier-payment/Display-Supplier-Payment-Details">
        <button className="goBtn">Search</button>
      </Link>
    </div>
  );
}

export default DisplaySupplerPayment;
