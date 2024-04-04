import React from 'react';
import bimg from './image/pic1.jpg';

function Top() {
  return (
    <div className="w-screen h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bimg})`}}>
    </div>
  );
}

export default Top;
