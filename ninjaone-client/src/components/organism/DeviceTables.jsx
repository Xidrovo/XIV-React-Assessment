import React from 'react';
import DeviceCell from '@molecules/DeviceCell';

const DeviceTables = ({ devices = [] }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="py-4 pl-3 font-medium text-sm">Device</th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => {
          return (
            <DeviceCell
              systemName={device.system_name}
              deviceType={device.type}
              capacity={device.hdd_capacity}
              key={device.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default DeviceTables;
