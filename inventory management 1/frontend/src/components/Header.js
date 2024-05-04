
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

function Header(){

   const cookieVal=Cookies.get("username")

    const navigate = useNavigate();

    const logOut=()=>{
         Cookies.remove("username") 
         navigate('/home')
    }

    

    


    return(

      

      <nav>
      <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand" href="#">
      <img src="inlogo.png" alt="" style={{width: '125px', height: '75px', marginLeft:'40px'}}/>
      </a>
      <ul class="nav nav-pills bg-dark justify-content-end ">

      <li class="nav-item">
           <Link to="/home" className="nav-link " > <b>HOME</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="" className="nav-link "> <b>NOTIFICATION</b> </Link>
        </li>
        
        
      <li class="nav-item" id='logout' style={{color:'#dc3545', marginTop:'6px', marginRight:'15px'}}>
        <h><i class="fa-solid fa-circle-user fa-xl"></i>&nbsp;&nbsp;<Link to="" style={{color:'white'}}>{cookieVal}</Link>&nbsp;&nbsp;&nbsp;&nbsp;</h>
        <button  class="btn btn-warning" onClick={logOut}>Logout</button>
      </li>
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginRight:'15px'}}>
      <Link to=""><button  class="btn btn-warning">Login</button></Link>
      </li>

      </ul>
        
      
      </nav>

      

   

      </nav>

      

      

      


      
  
    )
}
export default Header;
