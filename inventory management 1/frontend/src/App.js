import Header from './components/Header';
import Home from './components/Home';
import Cookies from 'js-cookie'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import UpdateRequest from './components/UpdateRequest';
import Requests from './components/Requests';
import { useEffect, useState } from 'react';
import AllRequests from './components/AllRequests';
import AddSupplier from './components/supplier/AddSupplier';
import AllSuppliers from './components/supplier/AllSuppliers';
import UpdateSupplier from './components/supplier/UpdateSupplier';
import PurchaseOrder from './components/order/PurchaseOrder';
import AllOrders from './components/order/AllOrders';
import UpdateOrder from './components/order/UpdateOrder';



function App() {

  const[cookieVal,setCookieVal]=useState(Cookies.get("username"))

  useEffect(()=>{

    const interval=setInterval(() => {

      const updatedCookie=Cookies.get("username")
      if(updatedCookie!==cookieVal){
        setCookieVal(updatedCookie)
      }
      
    },1000)

    return()=>{clearInterval(interval)}

  },[cookieVal])

  return (
  <Router>
    <div>
    
      <Header/>
      
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/all" element={<AllRequests/>}/>
      <Route path="/requests" element={<Requests/>}/>
      <Route path="/update/:id" element={<UpdateRequest/>}/>
      <Route path="/get/:id" element={<UpdateRequest/>}/>
      <Route path="/home" element={<Home/>}/>

      <Route path="/addsupplier" element={<AddSupplier/>}/>
      <Route path="/allsuppliers" element={<AllSuppliers/>}/>
      <Route path="/getsupplier/:id" element={<UpdateSupplier/>}/>
      <Route path="/updatesupplier/:id" element={<UpdateSupplier/>}/>

      <Route path="/addorder" element={<PurchaseOrder/>}/>
      <Route path="/allorders" element={<AllOrders/>}/>
      <Route path="/getorder/:id" element={<UpdateOrder/>}/>
      <Route path="/updateorder/:id" element={<UpdateOrder/>}/>
      
      
      
      </Routes>
      
      
    </div>
    </Router>
  ); 
}

export default App;
 