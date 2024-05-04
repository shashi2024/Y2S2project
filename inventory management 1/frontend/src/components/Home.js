import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function Home(){

 
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  
    

  

  

    return(
        
        <div >

        <br></br>

        <h1><b>Inventory & Supplier Management</b></h1>
    


    <br></br>
    <br></br>
    

    <div >
    <br></br>
    <br></br>

    <div class="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '40px'}}>
    
    

    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-dark bg-warning" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-truck-fast fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-dark">Supplier Details</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/allsuppliers'>
    <button type="button" class="btn btn-outline-dark" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>


    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-dark bg-warning" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-list-check fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-dark">Inventory Levels</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to=''>
    <button type="button" class="btn btn-outline-dark" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>


    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-dark bg-warning" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-box fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-dark">Purchase Orders</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/allorders'>
    <button type="button" class="btn btn-outline-dark" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>


    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-dark bg-warning" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-boxes-packing fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-dark">Return/Exchange</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/all'>
    <button type="button" class="btn btn-outline-dark" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>

    


    
    </div>





    </div>
    <br></br>
    <br></br>

    




    </div>
      
      
    )
    
}