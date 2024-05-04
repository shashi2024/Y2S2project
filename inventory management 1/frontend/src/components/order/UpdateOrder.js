import {useParams,useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom';
import React, {useEffect,useState} from "react";




export default function UpdateOrder(){

  const [sname, setSName] = React.useState("");
  const [oid, setOid] = React.useState("");
  const [oitem, setOItem] = React.useState("");
  const [qty, setQty] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getOrderDetails();
  },[])

  

  const getOrderDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/order/get/${params.id}`);
    result = await result.json();
    setSName(result.sname);
    setOid(result.oid);
    setOItem(result.oitem);
    setQty(result.qty);
  }



  const UpdateOrder = async () =>{
    console.warn(sname,oid,oitem,qty)
    let result = await fetch(`http://localhost:8070/order/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({sname,oid,oitem,qty}),
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
        <h1 class="card-title text-danger"><b>UPDATE YOUR REQUEST</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Supplier Name:</b></label>
                  <input type="name" class="form-control is-invalid " id="validationServer01" value={sname}
                  onChange={(e)=>{

                    setSName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&sname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Supplier Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Order ID:</b></label>
                  <input type="tel" class="form-control is-valid" id="inputPassword4" value={oid} disabled
                  onChange={(e)=>{

                    setOid(e.target.value = e.target.value.slice(0, 6));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&oid.length<=0?<lable class="text" style={{color:'#FF0000'}}>Order ID can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{float: 'left'}}><b>Order Item:</b></label>
                  <input type="text" class="form-control is-invalid" id="inputCity" value={oitem}
                  onChange={(e)=>{

                    setOItem(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&oitem.length<=0?<lable class="text" style={{color:'#FF0000'}}>Order Item can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Quantity:</b></label>
                  <input type="tel" class="form-control is-invalid" id="inputPassword4" value={qty} min={0} max={50}
                  onChange={(e)=>{

                    setQty(e.target.value = e.target.value.slice(0, 2));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&qty.length<=0?<lable class="text" style={{color:'#FF0000'}}>Quantity can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
              <br></br>
              <Link to='/allorders'>
              <button type="submit" class="btn btn-danger" onClick={UpdateOrder}>UPDATE REQUEST</button>
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


