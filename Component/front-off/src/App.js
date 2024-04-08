import React from 'react';
import backgroundImage from './images/pic1.png';
import TopCon from './TopCon';
import BarCon from './BarCon';

function App() {
  return (
    <div className="h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <TopCon/>
      <BarCon/>
    </div>
  );
}

export default App;
