import "./App.css";
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import CreateFoodItem from './features/createFoodItem/createForm.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/createFood" element={<CreateFoodItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
