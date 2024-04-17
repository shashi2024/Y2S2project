import "./App.css";
import Home from "./component/HomePage/Home.js";
import TopBar from "./TopBar.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <div className="bg-red-100 h-screen">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
