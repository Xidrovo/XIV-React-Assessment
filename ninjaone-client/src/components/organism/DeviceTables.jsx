import React from 'react';
import DeviceCell from '@molecules/DeviceCell';

const DeviceTables = () => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="py-4 pl-3 font-medium text-sm">Device</th>
        </tr>
      </thead>
      <tbody>
        <DeviceCell systemName="DESKTOP-0VCBIFF" deviceType="Windows" capacity={128} />
        <DeviceCell systemName="LINUX-SMITH-J" deviceType="Linux" capacity={64} />
        <DeviceCell systemName="WINXP-125498HQ" deviceType="Windows" capacity={64} />
        <DeviceCell systemName="MAC-SMITH-JOHN" deviceType="Mac" capacity={64} />
        {/* Add more table rows as needed */}
      </tbody>
    </table>
  );
};

export default DeviceTables;
