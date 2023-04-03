import React from 'react';
import Icon from './Icon';

const LinuxIcon = ({ width = '14', height = '17' }) => {
  return (
    <Icon
      path="M6.875 3.875C6.90625 3.875 6.9375 3.90625 6.96875 3.90625C7 3.90625 7.0625 3.90625 7.0625 3.875C7.0625 3.84375 7 3.8125 6.96875 3.78125C6.90625 3.75 6.84375 3.75 6.8125 3.78125C6.78125 3.78125 6.78125 3.8125 6.78125 3.8125C6.78125 3.84375 6.84375 3.84375 6.875 3.875ZM6.1875 3.90625C6.25 3.90625 6.25 3.875 6.28125 3.875C6.34375 3.84375 6.40625 3.84375 6.40625 3.8125C6.40625 3.8125 6.40625 3.78125 6.375 3.78125C6.34375 3.75 6.28125 3.75 6.21875 3.78125C6.1875 3.8125 6.09375 3.84375 6.125 3.875C6.125 3.90625 6.15625 3.9375 6.1875 3.90625ZM13.125 12.625C13 12.5 12.9375 12.2812 12.875 12.0312C12.8438 11.75 12.75 11.5 12.5625 11.3125C12.5312 11.2812 12.4688 11.25 12.4375 11.2188C12.4062 11.1875 12.3438 11.1875 12.3125 11.1562C12.5938 10.3125 12.4688 9.46875 12.1875 8.6875C11.8438 7.75 11.2188 6.9375 10.75 6.375C10.1875 5.6875 9.6875 5.0625 9.6875 4.125C9.71875 2.6875 9.84375 0.03125 7.3125 0C4.125 0 4.9375 3.25 4.875 4.25C4.84375 4.96875 4.6875 5.53125 4.1875 6.25C3.59375 6.96875 2.75 8.09375 2.375 9.28125C2.1875 9.84375 2.09375 10.4062 2.1875 10.9375C1.96875 11.125 1.8125 11.4062 1.65625 11.5938C1.53125 11.7188 1.34375 11.75 1.125 11.8438C0.90625 11.9062 0.6875 12.0312 0.5625 12.2812C0.46875 12.4062 0.46875 12.5312 0.46875 12.6875C0.46875 12.8125 0.46875 12.9375 0.5 13.0625C0.53125 13.3125 0.5625 13.5312 0.53125 13.6875C0.375 14.1562 0.34375 14.4688 0.46875 14.6875C0.5625 14.9062 0.8125 15.0312 1.09375 15.0625C1.625 15.1875 2.34375 15.1562 2.9375 15.4688C3.5625 15.7812 4.1875 15.9062 4.6875 15.7812C5.03125 15.7188 5.34375 15.5 5.5 15.1562C5.875 15.1562 6.3125 15 7 14.9375C7.46875 14.9062 8.0625 15.125 8.71875 15.0938C8.75 15.1562 8.78125 15.2188 8.8125 15.2812C9.0625 15.8125 9.53125 16.0625 10.0625 16C10.5938 15.9688 11.125 15.6562 11.5625 15.125C12 14.625 12.6875 14.4062 13.1562 14.125C13.4062 14 13.5938 13.8125 13.5938 13.5625C13.5938 13.3125 13.4688 13.0312 13.125 12.625ZM6.96875 2.75C7.28125 2.0625 8.03125 2.0625 8.34375 2.71875C8.5625 3.1875 8.46875 3.6875 8.21875 4C8.15625 3.96875 8.03125 3.90625 7.8125 3.84375C7.84375 3.8125 7.90625 3.75 7.9375 3.6875C8.09375 3.3125 7.9375 2.84375 7.65625 2.84375C7.4375 2.8125 7.21875 3.1875 7.28125 3.5625C7.15625 3.5 7 3.4375 6.875 3.4375C6.84375 3.21875 6.875 2.96875 6.96875 2.75ZM5.71875 2.375C6.03125 2.375 6.34375 2.8125 6.3125 3.4375C6.1875 3.46875 6.09375 3.5 5.96875 3.5625C6.03125 3.28125 5.875 2.9375 5.6875 2.96875C5.40625 2.96875 5.375 3.625 5.625 3.84375C5.65625 3.875 5.6875 3.84375 5.4375 4C4.96875 3.5625 5.125 2.375 5.71875 2.375ZM5.28125 4.28125C5.46875 4.125 5.71875 3.96875 5.71875 3.9375C5.875 3.8125 6.15625 3.5 6.59375 3.5C6.8125 3.5 7.09375 3.59375 7.40625 3.78125C7.59375 3.90625 7.75 3.9375 8.09375 4.0625C8.375 4.1875 8.53125 4.375 8.4375 4.65625C8.34375 4.875 8.09375 5.09375 7.71875 5.21875C7.375 5.3125 7.09375 5.71875 6.53125 5.6875C6.40625 5.65625 6.3125 5.65625 6.21875 5.625C5.96875 5.5 5.84375 5.28125 5.59375 5.15625C5.34375 5 5.1875 4.8125 5.15625 4.65625C5.09375 4.5 5.15625 4.375 5.28125 4.28125ZM5.375 14.7188C5.3125 15.8125 4 15.7812 3.03125 15.2812C2.09375 14.7812 0.875 15.0625 0.625 14.5938C0.5625 14.4375 0.5625 14.1875 0.71875 13.7812V13.75C0.78125 13.5312 0.75 13.25 0.6875 13.0312C0.65625 12.7812 0.65625 12.5625 0.71875 12.4062C0.84375 12.1875 1 12.0938 1.1875 12.0312C1.5 11.9375 1.5625 11.9375 1.8125 11.7188C1.96875 11.5625 2.09375 11.3125 2.25 11.1562C2.40625 11 2.5625 10.9062 2.8125 10.9375C3.0625 11 3.28125 11.1562 3.5 11.4375L4.09375 12.5625C4.40625 13.1875 5.4375 14.0625 5.375 14.7188ZM5.34375 13.9062C5.21875 13.6875 5.03125 13.4688 4.875 13.2812C5.125 13.2812 5.34375 13.2188 5.40625 13.0312C5.46875 12.8125 5.40625 12.5625 5.1875 12.25C4.75 11.6562 3.96875 11.2188 3.96875 11.2188C3.5625 10.9688 3.3125 10.625 3.21875 10.2812C3.09375 9.9375 3.125 9.5625 3.21875 9.1875C3.375 8.46875 3.78125 7.78125 4.0625 7.34375C4.125 7.28125 4.09375 7.4375 3.78125 8C3.53125 8.5 3.03125 9.65625 3.6875 10.5625C3.71875 9.90625 3.875 9.25 4.125 8.65625C4.5 7.78125 5.3125 6.3125 5.375 5.125C5.40625 5.15625 5.5 5.21875 5.5625 5.25C5.6875 5.34375 5.8125 5.46875 5.9375 5.5625C6.34375 5.875 6.84375 5.84375 7.28125 5.59375C7.46875 5.5 7.625 5.375 7.78125 5.3125C8.09375 5.21875 8.3125 5.0625 8.46875 4.84375C8.71875 5.8125 9.28125 7.1875 9.625 7.84375C9.8125 8.21875 10.1875 8.96875 10.375 9.875C10.4688 9.875 10.5938 9.875 10.7188 9.90625C11.125 8.78125 10.3438 7.59375 9.96875 7.25C9.84375 7.125 9.8125 7.0625 9.90625 7.0625C10.2812 7.40625 10.8125 8.09375 11 8.90625C11.0938 9.25 11.0938 9.625 11 10C11.5312 10.2188 12.125 10.5625 11.9688 11.0938C11.9062 11.0938 11.875 11.0938 11.8438 11.0938C11.9375 10.7812 11.7188 10.5625 11.125 10.2812C10.5 10.0312 10 10.0312 9.9375 10.6875C9.5625 10.8125 9.34375 11.125 9.25 11.5312C9.1875 11.875 9.15625 12.3125 9.125 12.7812C9.09375 13.0312 9 13.3438 8.90625 13.6875C7.90625 14.4062 6.5 14.7188 5.34375 13.9062ZM13.375 13.5625C13.3438 14.0625 12.0938 14.1562 11.4062 15C11 15.5 10.5 15.75 10.0312 15.8125C9.59375 15.8438 9.21875 15.6562 9 15.1875C8.84375 14.8438 8.90625 14.4688 9.03125 14.0625C9.15625 13.625 9.3125 13.1562 9.34375 12.7812C9.375 12.3125 9.375 11.9062 9.46875 11.5938C9.5625 11.25 9.6875 11.0312 9.90625 10.9375C9.90625 10.9062 9.90625 10.9062 9.9375 10.9062C9.9375 11.3125 10.1562 11.75 10.5 11.8438C10.9062 11.9375 11.4688 11.5938 11.7188 11.3125C12 11.3125 12.2188 11.2812 12.4062 11.4688C12.7188 11.75 12.6562 12.4375 12.9688 12.7812C13.2812 13.1562 13.4062 13.375 13.375 13.5625ZM5.40625 4.65625C5.46875 4.71875 5.5625 4.8125 5.65625 4.875C5.84375 5.03125 6.15625 5.21875 6.5 5.21875C6.875 5.21875 7.21875 5.03125 7.5 4.875C7.65625 4.78125 7.84375 4.65625 7.96875 4.5625C8.09375 4.4375 8.15625 4.34375 8.0625 4.34375C7.96875 4.34375 7.96875 4.4375 7.875 4.5C7.71875 4.59375 7.5625 4.75 7.4375 4.8125C7.21875 4.9375 6.8125 5.125 6.5 5.125C6.1875 5.125 5.90625 4.96875 5.71875 4.8125C5.625 4.75 5.53125 4.65625 5.46875 4.625C5.4375 4.5625 5.4375 4.46875 5.34375 4.46875C5.3125 4.46875 5.28125 4.5625 5.40625 4.65625Z"
      fill="#595766"
      viewBox="0 0 14 17"
      width={width}
      height={height}
    />
  );
};

export default LinuxIcon;
