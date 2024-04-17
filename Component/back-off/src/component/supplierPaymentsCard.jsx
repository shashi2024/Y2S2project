import supplierImg from "./HomePage/image/Supplier.png";

function SupplierPaymentCard() {
  return (
    <div className="Card">
      <h2>Supplier Payments </h2>
      <img className="Img_left" src={supplierImg} alt="Supplier-Img"></img>
      <p>
        Streamlined supplier payment web portal exclusively designed for hotel
        staff, optimizing financial transactions and enhancing operational
        efficiency behind the scenes.
      </p>
      <hr></hr>
    </div>
  );
}

export default SupplierPaymentCard;
