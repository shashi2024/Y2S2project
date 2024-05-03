import './App.css';
import NavBar from './NavBar.jsx';
import TopBar from './TopBar.jsx';
import CampForm from './CampForm.jsx';
import CampList from './CampList.jsx';
import DeletedCamp from './DeletedCamp.jsx';
import Report from './Report.jsx';
import Dash from './Dash.jsx';
import SearchForm from './SearchForm.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link,useNavigate} from 'react-router-dom';
import UpdateCamp from './UpdateCamp.jsx';


function App() {
  
  return (
    <Router>
      <div className="bg-red-100 h-screen ">

       

        <TopBar/>
        <NavBar/><br/><br/><br/><br/><br/>
        <Routes>
          <Route path="/camplist" element={<CampList/>}/>
        </Routes>

        <Routes>
          <Route path="/campform" element={<CampForm/>}/>
        </Routes>

        <Routes>
          <Route path="/delcamp" element={<DeletedCamp/>}/>
        </Routes>

        <Routes>
         <Route path="/report" element={<Report/>}/>
        </Routes>   

        <Routes>
         <Route path="/dash" element={<Dash/>}/>
        </Routes>  


        <Routes>
          <Route path="/updatecamp/:id" element={<UpdateCamp/>}/>
        </Routes>

        <Routes>
         <Route path="/searchform" element={<SearchForm/>}/>
        </Routes>

      
        
      </div>
    </Router>
  );
}

export default App;

