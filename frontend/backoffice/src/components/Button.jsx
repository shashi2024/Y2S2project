import React from 'react';

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="bg-button_color hover:second_background text-white font-bold py-2 px-4 border rounded-full">
      {children}
    </button>
  );
}

export default Button;