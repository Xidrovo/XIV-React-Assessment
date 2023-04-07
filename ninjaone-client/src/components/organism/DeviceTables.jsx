import React, { useEffect, useContext, useState } from 'react';
import DeviceCell from '@molecules/DeviceCell';

import SharedDashboardContext from '@context/SharedDashboardContext';

const DeviceTables = ({ devices = [] }) => {
  const { sharedFilters } = useContext(SharedDashboardContext);
  const [tempDevice, setTempDevice] = useState(devices);

  useEffect(() => {
    setTempDevice(devices);
  }, [devices]);

  useEffect(() => {
    let filteredDevice = filterByType(sharedFilters.filterType);
    let sortedFilteredDevice = sortBy(sharedFilters.sortingBy, filteredDevice);
    setTempDevice(sortedFilteredDevice);
  }, [sharedFilters.filterType, sharedFilters.sortingBy]);

  const filterByType = type => {
    const upperType = type.toUpperCase();

    switch (type.toUpperCase()) {
      case 'WINDOWS':
        return devices.filter(device => {
          return device.type.toUpperCase() === upperType;
        });
      case 'MAC':
        return devices.filter(device => {
          return device.type.toUpperCase() === upperType;
        });
      case 'LINUX':
        return devices.filter(device => {
          return device.type.toUpperCase() === upperType;
        });
      default:
        return devices;
    }
  };

  const sortBy = (sortingBy, filteredDevice) => {
    switch (sortingBy.toUpperCase()) {
      case 'HDD-D':
        return filteredDevice.sort((a, b) => {
          if (parseInt(a.hdd_capacity, 10) > parseInt(b.hdd_capacity, 10)) {
            return 1;
          }
          if (parseInt(a.hdd_capacity, 10) < parseInt(b.hdd_capacity, 10)) {
            return -1;
          }
          return 0;
        });
      case 'HDD-A':
        return filteredDevice.sort((a, b) => {
          if (parseInt(a.hdd_capacity, 10) > parseInt(b.hdd_capacity, 10)) {
            return -1;
          }
          if (parseInt(a.hdd_capacity, 10) < parseInt(b.hdd_capacity, 10)) {
            return 1;
          }
          return 0;
        });
      case 'NAME-AZ':
        return [];
      case 'NAME-ZA':
        return [];

      default:
        return filteredDevice;
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
