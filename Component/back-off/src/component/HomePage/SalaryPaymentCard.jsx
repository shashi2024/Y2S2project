import SalaryImg from "./image/Salary.png";

function SalaryPaymentCard() {
  return (
    <div className="Card">
      <h2 className="h2_right">Salary Remittance </h2>
      <img className="Img_right" src={SalaryImg} alt="Salary-Img"></img>
      <p>
        Embark on a journey of financial empowerment within our hotel system,
        where salary remittance flows seamlessly, nurturing a culture of
        prosperity and fulfillment for every valued employee.
      </p>
      <hr></hr>
    </div>
  );
}

export default SalaryPaymentCard;
