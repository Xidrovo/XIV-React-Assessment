import React from 'react';

import DotsIcon from '@icons/DotsIcon';
import WindowsIcon from '@icons/WindowsIcon';
import MacIcon from '@icons/MacIcon';
import LinuxIcon from '@icons/LinuxIcon';

const DeviceCell = ({ systemName = '', deviceType = '', capacity = 0 }) => {
  const getIconByType = deviceType => {
    switch (deviceType.toUpperCase()) {
      case 'WINDOWS':
        return <WindowsIcon />;
      case 'MAC':
        return <MacIcon />;
      case 'LINUX':
        return <LinuxIcon />;
      default:
        return <WindowsIcon />;
    }
  };
  return (
    <tr className="hover:bg-table-hover group">
      <td className="py-2 pl-3 flex justify-between items-center">
        <div>
          <div className="flex justify-start items-center">
            {getIconByType(deviceType)}
            <p className="ml-1 text-gray-800 font-medium">{systemName}</p>
          </div>
          <p className="text-gray-500 text-xs font-normal">
            {deviceType} workstation - {capacity} GB
          </p>
        </div>
        <div className="rounded cursor-pointer p-2 py-3 opacity-0 group-hover:opacity-100 transition-opacity mr-2 hover:bg-hover-button">
          <DotsIcon />
        </div>
      </td>
    </tr>
  );
};

export default DeviceCell;
