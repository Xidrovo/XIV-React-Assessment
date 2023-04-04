import React from 'react';

const Button = props => {
  const defaultClass =
    'bg-primary text-white font-medium p-3 w-auto rounded text-sm';
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${defaultClass} ${props.className}`}
    >
      {props.children || 'Button component'}
    </button>
  );
};

export default Button;
