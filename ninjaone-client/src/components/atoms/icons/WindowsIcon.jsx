import React from 'react';
import Icon from './Icon';

const WindowsIcon = ({ width = '14', height = '15' }) => {
  return (
    <Icon
      path="M0 2.4375L5.71875 1.65625V7.1875H0V2.4375ZM0 12.5938L5.71875 13.375V7.90625H0V12.5938ZM6.34375 13.4688L14 14.5V7.90625H6.34375V13.4688ZM6.34375 1.5625V7.1875H14V0.5L6.34375 1.5625Z"
      viewBox="0 0 14 15"
      width={width}
      height={height}
      fill="#595766"
      data-testid="windows-icon-id"
    />
  );
};

export default WindowsIcon;
