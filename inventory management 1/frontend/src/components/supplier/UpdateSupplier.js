import {useParams,useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom';
import React, {useEffect,useState} from "react";




export default function UpdateSupplier(){

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [item, setItem] = React.useState("");
  const [snumber, setSNumber] = React.useState("");
  const [cname, setCName] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getSupplierDetails();
  },[])

  

  const getSupplierDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/supplier/get/${params.id}`);
    result = await result.json();
    setName(result.name);
    setEmail(result.email);
    setItem(result.item);
    setSNumber(result.snumber);
    setCName(result.cname);
  }



  const UpdateSupplier = async () =>{
    console.warn(name,email,item,snumber,cname)
    let result = await fetch(`http://localhost:8070/supplier/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,email,item,snumber,cname}),
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
        //class update form
        <div >
          

          <br></br>
          <br></br>
        
        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-warning"><b>UPDATE SUPPLIER</b></h1>
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
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Supplier Number:</b></label>
                  <input type="tel" class="form-control is-invalid" id="inputPassword4" value={snumber}
                  onChange={(e)=>{

                    setSNumber(e.target.value = e.target.value.slice(0, 10));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&snumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Supplier Number can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Company Name:</b></label>
                  <input type="name" class="form-control is-invalid " id="validationServer01" value={cname}
                  onChange={(e)=>{

                    setCName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&cname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Company Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-12">
              <br></br>
              <Link to='/allsuppliers'>
              <button type="submit" class="btn btn-warning" onClick={UpdateSupplier}>UPDATE DETAILS</button>
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


