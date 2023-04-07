import React from 'react';

const Input = props => {
  const className = `pl-3 bg-transparent border border-gray-300 rounded-sm py-2 focus:outline-none focus:border-gray-400 ${
    props.error ? ' border-warning' : ''
  }`;
  return (
    <div className="flex flex-col">
      <input
        className={`${className} ${props.className}`}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        type={props.type || 'text'}
      ></input>
      {props.error && <span className=" text-xs text-warning pt-1">{props.error}</span>}
    </div>
  );
};

export default Input;
