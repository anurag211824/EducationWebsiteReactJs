import React from 'react';

const Button = ({ background, textColor, label }) => {
  return (
    <button className={`${background} ${textColor} py-2 px-4 rounded-full`}>
      {label}
    </button>
  );
};

export default Button;
