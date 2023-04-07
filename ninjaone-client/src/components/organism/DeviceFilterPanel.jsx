import React, { useContext } from 'react';

import SharedDashboardContext from '@context/SharedDashboardContext';

import Select from '@atoms/Select';
import SearchInput from '@molecules/SearchInput';

import RefreshIcon from '@icons/RefreshIcon';

const DeviceFilterPanel = () => {
  const { sharedFilters, setSharedFilters } = useContext(SharedDashboardContext);

  const options = [
    { value: 'HDD-D', label: 'HDD Capacity (Descending)' },
    { value: 'HDD-A', label: 'HDD Capacity (Ascending)' },
    { value: 'Name-AZ', label: 'Name (A-Z)' },
    { value: 'Name-ZA', label: 'Name (Z-A)' },
  ];

  const deviceType = [
    { value: 'All', label: 'All' },
    { value: 'windows', label: 'Windows' },
    { value: 'mac', label: 'Mac' },
    { value: 'linux', label: 'Linux' },
  ];

  const handleSelect = val => {
    setSharedFilters(prevData => ({
      ...prevData,
      [val.name]: val.value,
    }));
  };
  return (
    <article className="flex justify-between items-center">
      <article className="flex justify-start space-x-2">
        <SearchInput placeholder="search" />
        <Select
          prefixText="Device Type: "
          options={deviceType}
          name="filterType"
          onChange={handleSelect}
        />
        <Select prefixText="Sort by: " options={options} name="sortingBy" onChange={handleSelect} />
      </article>
      <RefreshIcon />
    </article>
  );
};

export default DeviceFilterPanel;
