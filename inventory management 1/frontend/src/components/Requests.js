import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function Requests(){

  const [name, setName] = useState("");
  const [onumber, setONumber] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newRequest ={
      name,
      onumber,
      email,
      item,
      message
     
    }

    if(name.length==0||onumber.length==0||email.length==0||item.length==0||message.length==0)
    setError(true)
    if(name&&onumber&&email&&item&&message)
    {
      console.log("Name:",name,"ONumber:",onumber,"Email:",email,"Item:",item,"Message:",message)
    }

    axios.post("http://localhost:8070/request/add",newRequest).then(()=>{
      alert("Request Added")
      setName("");
      setONumber("");
      setEmail("");
      setItem("");
      setMessage("");

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
        <h1 class="card-title text-warning"><b>MAKE YOUR RETURN REQUEST</b></h1>
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
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Order Number:</b></label>
                  <input type="number" class="form-control is-invalid" id="inputPassword4"
                  onChange={(e)=>{

                    setONumber(e.target.value = e.target.value.slice(0, 12));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&onumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Order Number can't be empty!</lable>:""}
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
              <div class="col-12">
                  <label for="inputAddress2" class="form-label" style={{float: 'left'}}><b>Reason:</b></label>
                  <textarea class="form-control is-invalid" id="inputAddress2" placeholder="Apartment, studio, or floor"
                  onChange={(e)=>{

                    setMessage(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&message.length<=0?<lable class="text" style={{color:'#FF0000'}}>Reason can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
              <br></br>
              <button type="submit" class="btn btn-warning" onClick={sendData}>SUBMIT REQUEST</button>
    
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