import React, { useEffect, useContext, useState } from 'react';
import DeviceCell from '@molecules/DeviceCell';

import SharedDashboardContext from '@context/SharedDashboardContext';

const DeviceTables = ({ devices = [] }) => {
  const { sharedData } = useContext(SharedDashboardContext);
  const [tempDevice, setTempDevice] = useState(devices);

  useEffect(() => {
    setTempDevice(devices);
  }, [devices]);

  useEffect(() => {
    console.log('I should filter device by ' + sharedData.filterType);
    setTempDevice(filterByType(sharedData.filterType));
  }, [sharedData.filterType]);

  const filterByType = type => {
    switch (type.toUpperCase()) {
      case 'WINDOWS':
        return devices.filter(device => {
          return device.type.toUpperCase() === type.toUpperCase();
        });
      case 'MAC':
        return devices.filter(device => {
          return device.type.toUpperCase() === type.toUpperCase();
        });
      case 'LINUX':
        return devices.filter(device => {
          return device.type.toUpperCase() === type.toUpperCase();
        });
      default:
        return devices;
    }
  };
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="py-4 pl-3 font-medium text-sm">Device</th>
        </tr>
      </thead>
      <tbody>
        {tempDevice.map(device => {
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
