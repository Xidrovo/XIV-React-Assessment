import React from 'react';
import Icon from './Icon';

const ArrowIcon = ({ width = '9', height = '5', fill = '#6E6D7A', className }) => {
  return (
    <Icon
      path="M1.09766 0C0.605469 0 0.359375 0.601562 0.714844 0.957031L4.21484 4.45703C4.43359 4.67578 4.78906 4.67578 5.00781 4.45703L8.50781 0.957031C8.86328 0.601562 8.61719 0 8.125 0H1.09766Z"
      fill={fill}
      viewBox="0 0 9 5"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ArrowIcon;
