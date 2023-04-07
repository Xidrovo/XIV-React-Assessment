import React, { useContext } from 'react';

import SharedDashboardContext from '@context/SharedDashboardContext';

import Select from '@atoms/Select';
import SearchInput from '@molecules/SearchInput';

import RefreshIcon from '@icons/RefreshIcon';

const DeviceFilterPanel = () => {
  const { sharedData, setSharedData } = useContext(SharedDashboardContext);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const deviceType = [
    { value: 'All', label: 'All' },
    { value: 'windows', label: 'Windows' },
    { value: 'mac', label: 'Mac' },
    { value: 'linux', label: 'Linux' },
  ];

  const handleSelect = val => {
    setSharedData(prevData => ({
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
