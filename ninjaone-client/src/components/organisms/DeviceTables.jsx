import React, { useEffect, useContext, useState } from 'react';
import Fuse from 'fuse.js';

import DeviceCell from '@organisms/DeviceCell';
import SharedDashboardContext from '@context/SharedDashboardContext';

const DeviceTables = ({ devices = [] }) => {
  const { sharedFilters } = useContext(SharedDashboardContext);
  const [tempDevice, setTempDevice] = useState(devices);

  const options = {
    keys: ['system_name'],
    threshold: 0.4,
  };

  useEffect(() => {
    let filteredDevice = [...filterByType(sharedFilters.filterType)];
    let sortedFilteredDevice = [...sortBy(sharedFilters.sortingBy, filteredDevice)];
    let searchedSortedFilteredDevice = [...sortedFilteredDevice];

    if (sharedFilters.searchQuery.trim() !== '') {
      const fuse = new Fuse(searchedSortedFilteredDevice, options);
      const result = fuse.search(sharedFilters.searchQuery).map(item => item.item);
      searchedSortedFilteredDevice = [...result];
    }

    setTempDevice(searchedSortedFilteredDevice);
  }, [sharedFilters.searchQuery, sharedFilters.filterType, sharedFilters.sortingBy, devices]);

  const filterByType = type => {
    const filteredData = devices.filter(item =>
      type.some(filterType => item.type.toLowerCase() === filterType.toLowerCase())
    );
    if (filteredData.length > 0) {
      return filteredData;
    }
    return devices;
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
          return a.system_name.toUpperCase() > b.system_name.toUpperCase()
            ? 1
            : a.system_name.toUpperCase() < b.system_name.toUpperCase()
            ? -1
            : 0;
        });
      case 'NAME-ZA':
        return filteredDevice.sort((a, b) => {
          return a.system_name.toUpperCase() > b.system_name.toUpperCase()
            ? -1
            : a.system_name.toUpperCase() < b.system_name.toUpperCase()
            ? 1
            : 0;
        });
      default:
        return filteredDevice;
    }
  };
  return (
    <React.Fragment>
      {devices.length === 0 ? (
        <div className="text-4xl font-semibold text-gray-800 w-full flex justify-center items-center h-72">
          <div className="flex flex-col items-center">
            <p className="text-center"> Yikes! It's empty in here </p>
            <p className="text-center">no devices found! 🙈</p>
          </div>
        </div>
      ) : (
        <div className="max-h-72 md:max-h-xl overflow-y-auto">
          <table className="w-full text-left" data-testid="device-tables">
            <thead>
              <tr className="sticky top-0 bg-white">
                <th className="pb-2 pt-6 pl-3 font-medium text-sm">Device</th>
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
                    id={device.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </React.Fragment>
  );
};

export default DeviceTables;
