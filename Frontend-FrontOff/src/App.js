import React from 'react';
import backgroundImage from './images/pic1.png';
import TopCon from './TopCon';
import BarCon from './BarCon';
import FeedForm from './FeedForm';
import AllFeed from './AllFeed';

function App() {
  return (
    <div className="h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <TopCon/>
      <BarCon/>
      <FeedForm/>
      <AllFeed/>
    </div>
  );
}

export default App;
