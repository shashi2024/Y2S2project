import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function AllSuppliers(){

    const conponentPDF = useRef();
    const[suppliers, setSuppliers] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    

    useEffect(()=>{
        function getSuppliers() {
            axios.get("http://localhost:8070/supplier/all").then((res)=>{
               setSuppliers(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getSuppliers();

        
    
    } ) 

    


  
    
   const deleteSupplier= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8070/supplier/delete/${id}`,{
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

            <h1><b>ALL SUPPLIERS</b></h1>

           <br></br>
           <Link to='/addsupplier'>
            <button type="button" class="btn btn-warning" style={{}}><i class="fa-solid fa-truck-fast"></i><b>&nbsp;&nbsp;ADD SUPPLIER</b></button>
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
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Item</th>
                    <th scope="col">Supplier Number</th>
                    <th scope="col">Company NAME</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {suppliers.filter((suppliers) => {
                return search.toString().toLowerCase() === '' ? suppliers: suppliers.name.toString().toLowerCase().includes(search);
                
            }).map((suppliers, index) => {
                return(
                <tr key={suppliers._id}>
                    <th scoop="row">{index+1}</th>
                    <td><a href={`/get/${suppliers._id}`} style={{textDecoration:'none',color:'black'}}>{suppliers.name} </a> </td> 
                    <td>{suppliers.email}</td>
                    <td>{suppliers.item}</td>
                    <td>{suppliers.snumber}</td>
                    <td>{suppliers.cname}</td>
                    <td>
                        <a className="btn btn-warning" href={`/updatesupplier/${suppliers._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                        </a>

                        <h>    </h>
                        
                        <a className="btn btn-secondary" href="#" onClick={()=>deleteSupplier(suppliers._id)}>
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