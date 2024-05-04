import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function AllOrders(){

    const conponentPDF = useRef();
    const[orders, setOrders] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    

    useEffect(()=>{
        function getOrders() {
            axios.get("http://localhost:8070/order/all").then((res)=>{
               setOrders(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getOrders();

        
    
    } ) 

    


  
    
   const deleteOrder= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8070/order/delete/${id}`,{
        method:"Delete"
    });
    result = await result.json();
    if(result)
    {
        
        alert("Delete Successfully")
        
    }
   }

   const generatePDF = useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: ()=> alert("Download Successfully")
   });
  

    return(
        //class create form

        <div>

            <br></br>

        <h1><b>ALL ORDERS</b></h1>

        <br></br>
           <Link to='/addorder'>
            <button type="button" class="btn btn-warning" style={{}}><i class="fa-solid fa-box"></i><b>&nbsp;&nbsp;PURCHASE ORDER</b></button>
            </Link>




        
        <div style={{width:'1350px'}} >
        <br></br>
        <br></br>
        <br></br>
        <form class="d-flex">
        <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Name" aria-label="Search"/>
        </form>
        <br></br>
        <div>
        <div ref={conponentPDF} style={{width:'100%'}}>
        <table class="table table-warning table-striped">
            <thead class="table table-dark table-striped">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Supplier Name</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Order Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {orders.filter((orders) => {
                return search.toString().toLowerCase() === '' ? orders: orders.sname.toString().toLowerCase().includes(search);
                
            }).map((orders, index) => {
                return(
                <tr key={orders._id}>
                    <th scoop="row">{index+1}</th>
                    <td><a href={`/get/${orders._id}`} style={{textDecoration:'none',color:'black'}}>{orders.sname} </a> </td> 
                    <td>{orders.oid}</td>
                    <td>{orders.oitem}</td>
                    <td>{orders.qty}</td>
                    <td>
                        <a className="btn btn-warning" href={`/updateorder/${orders._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                        </a>

                        <h>    </h>
                        
                        <a className="btn btn-secondary" href="#" onClick={()=>deleteOrder(orders._id)}>
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        

                    </td>
                </tr>
                )
                
            
            
           
        })}

            </tbody>
        </table>

        </div>

        <br></br>

            <a className="btn btn-outline-warning" href="#" onClick={generatePDF}>
                <i className="fas fa-download"></i>&nbsp;Download
            </a>

            <br></br>
        

        
    </div>
    </div>

    <br></br>
    <br></br>
    <br></br>


    



    </div>
    
)



    
}