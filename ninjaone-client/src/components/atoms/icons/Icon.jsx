import React from 'react';

const Icon = ({ path, viewBox, width, height, className, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
