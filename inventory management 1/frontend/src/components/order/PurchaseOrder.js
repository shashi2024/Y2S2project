import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";
import axios from "axios";


export default function PurchaseOrder(){

  const [inoid, setInOid] = useState("");
  const [sname, setSName] = useState("");
  const [oid, setOid] = useState("");
  const [oitem, setOItem] = useState("");
  const [qty, setQty] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newOrder ={
      sname,
      oid,
      oitem,
      qty
     
    }

    if(sname.length==0||oid.length==0||oitem.length==0||qty.length==0)
    setError(true)
    if(sname&&oid&&oitem&&qty)
    {
      console.log("SName:",sname,"Oid:",oid,"OItem:",oitem,"Qty:",qty)
    }

    axios.post("http://localhost:8070/order/add",newOrder).then(()=>{
      alert("Order Added")
      setSName("");
      setOid("");
      setOItem("");
      setQty("");

      navigate('/home')
      
    }).catch((err)=>{
      alert(err)
    })

    
    
  
  }

  useEffect(()=>{
    hadleSubmit()
  },[])

  const hadleSubmit=()=>{
    var range = "0123456789"
    var otpVal = ""
    for(var i=0;i<6;i++){
      otpVal +=range[Math.floor(Math.random()*10)]
    }
    setInOid(otpVal)
    
  }

  

    return(
        //class create form
        
        <div >
          
          
          <br></br>
          <br></br>

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-warning"><b>PURCHASE ORDER</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Supplier Name:</b></label>
                  <input type="name" class="form-control is-invalid" id="validationServer01"
                  onChange={(e)=>{

                    setSName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&sname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Supplier Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Order ID:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" min={0}
                  onChange={(e)=>{

                    setOid(e.target.value);
                  
                    }}required>
                    <option value=""></option>
                    <option value={inoid}>{inoid}</option>
                    
                  </select>
                  <div className="invalid-feedback">
                    {error&&oid.length<=0?<lable class="text" style={{color:'#FF0000'}}>Order ID can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{float: 'left'}}><b>Order Item:</b></label>
                  <input type="text" class="form-control is-invalid" id="inputCity"
                  onChange={(e)=>{

                    setOItem(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&oitem.length<=0?<lable class="text" style={{color:'#FF0000'}}>Order Item can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Quantity:</b></label>
                  <input type="number" class="form-control is-invalid" id="inputPassword4" min={0} max={50}
                  onChange={(e)=>{

                    setQty(e.target.value = e.target.value.slice(0, 2));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&qty.length<=0?<lable class="text" style={{color:'#FF0000'}}>Quantity can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
              <br></br>
              <button type="submit" class="btn btn-warning" onClick={sendData}>SUBMIT ORDER</button>
    
              </div>
  
          </form>
          
        <br></br>

        </div>
        </div>

        

      </div>
      <br></br>
      <br></br>

      


      
      </div>
      
      
    )
    
}