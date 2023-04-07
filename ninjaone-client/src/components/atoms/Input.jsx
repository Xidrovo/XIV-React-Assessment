import React from 'react';

const Input = props => {
  const className =
    'pl-3 bg-transparent border border-gray-300 rounded-sm py-2 focus:outline-none focus:border-gray-400';
  return (
    <input
      className={`${className} ${props.className}`}
      onChange={props.onChange}
      placeholder={props.placeholder}
      name={props.name}
    ></input>
  );
};

export default Input;
