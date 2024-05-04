import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function AddSupplier(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [snumber, setSNumber] = useState("");
  const [cname, setCName] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newSupplier ={
      name,
      email,
      item,
      snumber,
      cname
     
    }

    if(name.length==0||email.length==0||item.length==0||snumber.length==0||cname.length==0)
    setError(true)
    if(name&&email&&item&&snumber&&cname)
    {
      console.log("Name:",name,"Email:",email,"Item:",item,"SNumber:",snumber,"CName:",cname)
    }

    axios.post("http://localhost:8070/supplier/add",newSupplier).then(()=>{
      alert("Supplier Added")
      setName("");
      setEmail("");
      setItem("");
      setSNumber("");
      setCName("");

      navigate('/home')
      
    }).catch((err)=>{
      alert(err)
    })

    
    
  
  }

  const hadleSubmit=(e)=>{
    e.preventDefault();
    
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
        <h1 class="card-title text-warning"><b>ADD SUPPLIER</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Name:</b></label>
                  <input type="name" class="form-control is-invalid" id="validationServer01"
                  onChange={(e)=>{

                    setName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&name.length<=0?<lable class="text" style={{color:'#FF0000'}}>Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-md-6">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Email:</b></label>
                  <input type="email" class="form-control is-invalid" id="inputAddress" placeholder=""
                  onChange={(e)=>{

                    setEmail(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&email.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{float: 'left'}}><b>Item:</b></label>
                  <input type="text" class="form-control is-invalid" id="inputCity"
                  onChange={(e)=>{

                    setItem(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&item.length<=0?<lable class="text" style={{color:'#FF0000'}}>Item can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Supplier Number:</b></label>
                  <input type="number" class="form-control is-invalid" id="inputPassword4"
                  onChange={(e)=>{

                    setSNumber(e.target.value = e.target.value.slice(0, 10));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&snumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Supplier Number can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Company Name:</b></label>
                  <input type="name" class="form-control is-invalid" id="validationServer01"
                  onChange={(e)=>{

                    setCName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&cname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Company Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-12">
              <br></br>
              <button type="submit" class="btn btn-warning" onClick={sendData}>SUBMIT DETAILS</button>
    
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