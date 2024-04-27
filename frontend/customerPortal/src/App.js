import React from 'react';
import {Route, Routes} from "react-router";
import Main from "./main/Main.jsx";
import Login from "./login/Login.jsx";
import Home from "./home/Home.jsx";
import ForgetPassword from "./forgetPassword/ForgetPassword.jsx";


function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/forgetPassword' element={<ForgetPassword/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

