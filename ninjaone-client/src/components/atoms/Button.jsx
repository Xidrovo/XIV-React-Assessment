import React from 'react';

const Button = props => {
  const selectButtonKind = () => {
    let returnClass = 'font-medium p-3 w-auto rounded text-sm min-w-xs ';
    switch (props.buttonKind?.toLowerCase()) {
      case 'primary':
        return returnClass + 'bg-primary text-white';
      case 'secondary':
        return returnClass + 'bg-white text-primary border-gray-300';
      case 'third':
        return returnClass + 'bg-white text-primary underline border-none';
      case 'warning':
        return returnClass + 'bg-warning text-white';
      default:
        return returnClass + 'bg-primary text-white';
    }
  };
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${selectButtonKind()} ${props.className}`}
    >
      {props.children || 'Button component'}
    </button>
  );
};

export default Button;
