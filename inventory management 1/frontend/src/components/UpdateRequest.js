import {useParams,useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom';
import React, {useEffect,useState} from "react";




export default function UpdateRequest(){

  const [name, setName] = React.useState("");
  const [onumber, setONumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [item, setItem] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getRequestDetails();
  },[])

  

  const getRequestDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/request/get/${params.id}`);
    result = await result.json();
    setName(result.name);
    setONumber(result.onumber);
    setEmail(result.email);
    setItem(result.item);
    setMessage(result.message);
  }



  const UpdateRequest = async () =>{
    console.warn(name,onumber,email,item,message)
    let result = await fetch(`http://localhost:8070/request/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,onumber,email,item,message}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      
      alert("Update Successfully")
      
    }
    
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
        <h1 class="card-title text-warning"><b>UPDATE YOUR RETURN REQUEST</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Name:</b></label>
                  <input type="name" class="form-control is-invalid " id="validationServer01" value={name}
                  onChange={(e)=>{

                    setName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&name.length<=0?<lable class="text" style={{color:'#FF0000'}}>Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Order Number:</b></label>
                  <input type="tel" class="form-control is-invalid" id="inputPassword4" value={onumber}
                  onChange={(e)=>{

                    setONumber(e.target.value = e.target.value.slice(0, 12));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&onumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Order Number can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Email:</b></label>
                  <input type="email" class="form-control is-invalid" id="inputAddress" placeholder="" value={email}
                  onChange={(e)=>{

                    setEmail(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&email.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{float: 'left'}}><b>Item:</b></label>
                  <input type="text" class="form-control is-invalid" id="inputCity" value={item}
                  onChange={(e)=>{

                    setItem(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&item.length<=0?<lable class="text" style={{color:'#FF0000'}}>Item can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
                  <label for="inputAddress2" class="form-label" style={{float: 'left'}}><b>Reason:</b></label>
                  <textarea class="form-control is-invalid" id="inputAddress2" placeholder="Apartment, studio, or floor" value={message}
                  onChange={(e)=>{

                    setMessage(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&message.length<=0?<lable class="text" style={{color:'#FF0000'}}>Reason can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
              <br></br>
              <Link to='/all'>
              <button type="submit" class="btn btn-warning" onClick={UpdateRequest}>UPDATE REQUEST</button>
              </Link>
    
              </div>
  
          </form>
          
        <br></br>

        </div>
        </div>
        <br></br>
        <br></br>
        

      </div>
      

      </div>
      
    )
    
}


