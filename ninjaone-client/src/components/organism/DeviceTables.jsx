import React, { useEffect, useContext, useState } from 'react';
import DeviceCell from '@molecules/DeviceCell';

import SharedDashboardContext from '@context/SharedDashboardContext';

const DeviceTables = ({ devices = [] }) => {
  const { sharedFilters } = useContext(SharedDashboardContext);
  const [tempDevice, setTempDevice] = useState(devices);

  useEffect(() => {
    let filteredDevice = [...filterByType(sharedFilters.filterType)];
    let sortedFilteredDevice = [...sortBy(sharedFilters.sortingBy, filteredDevice)];
    console.log(sharedFilters);
    setTempDevice(sortedFilteredDevice);
  }, [sharedFilters.searchQuery, sharedFilters.filterType, sharedFilters.sortingBy, devices]);

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
          const parsedA = parseInt(a.hdd_capacity, 10);
          const parsedB = parseInt(b.hdd_capacity, 10);
          return parsedA > parsedB ? -1 : parsedA < parsedB ? 1 : 0;
        });
      case 'HDD-A':
        return filteredDevice.sort((a, b) => {
          const parsedA = parseInt(a.hdd_capacity, 10);
          const parsedB = parseInt(b.hdd_capacity, 10);
          return parsedA > parsedB ? 1 : parsedA < parsedB ? -1 : 0;
        });
      case 'NAME-AZ':
        return filteredDevice.sort((a, b) => {
          return a.system_name > b.system_name ? 1 : a.system_name < b.system_name ? -1 : 0;
        });
      case 'NAME-ZA':
        return filteredDevice.sort((a, b) => {
          return a.system_name > b.system_name ? -1 : a.system_name < b.system_name ? 1 : 0;
        });
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
