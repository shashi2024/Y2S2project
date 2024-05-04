import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function AllRequests(){

    const conponentPDF = useRef();
    const[requests, setRequests] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    

    useEffect(()=>{
        function getRequests() {
            axios.get("http://localhost:8070/request/all").then((res)=>{
               setRequests(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getRequests();

        
    
    } ) 

    


  
    
   const deleteRequest= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8070/request/delete/${id}`,{
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

            <h1><b>ALL RETURN REQUESTS</b></h1>

            <br></br>
            <Link to='/requests'>
                <button type="button" class="btn btn-warning" style={{}}><i class="fa-solid fa-boxes-packing"></i><b>&nbsp;&nbsp;ADD RETURN REQUEST</b></button>
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
                    <th scope="col">Order Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Item</th>
                    <th scope="col">Reason</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {requests.filter((requests) => {
                return search.toString().toLowerCase() === '' ? requests: requests.name.toString().toLowerCase().includes(search);
                
            }).map((requests, index) => {
                return(
                <tr key={requests._id}>
                    <th scoop="row">{index+1}</th>
                    <td><a href={`/get/${requests._id}`} style={{textDecoration:'none',color:'black'}}>{requests.name} </a> </td> 
                    <td>{requests.onumber}</td>
                    <td>{requests.email}</td>
                    <td>{requests.item}</td>
                    <td>{requests.message}</td>
                    <td>
                        <a className="btn btn-warning" href={`/update/${requests._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                        </a>

                        <h>    </h>
                        
                        <a className="btn btn-secondary" href="#" onClick={()=>deleteRequest(requests._id)}>
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