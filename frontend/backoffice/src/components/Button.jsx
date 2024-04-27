import React from 'react';

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`bg-button_color hover:bg-button_hover text-white font-bold py-2 px-4 border rounded-full ${className}`}>
      {children}
    </button>
  );
}

export default Button;