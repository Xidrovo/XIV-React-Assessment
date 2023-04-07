import React, { useContext, useState, useEffect } from 'react';

import SharedDashboardContext from '@context/SharedDashboardContext';

import Select from '@atoms/Select';
import SearchInput from '@molecules/SearchInput';

import RefreshIcon from '@icons/RefreshIcon';

const DeviceFilterPanel = () => {
  const { setSharedFilters } = useContext(SharedDashboardContext);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

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

  const handleSelect = selectedOption => {
    setSharedFilters(prevData => ({
      ...prevData,
      [selectedOption.name]: selectedOption.value,
    }));
  };

  const handleInput = ({ target }) => {
    const { value } = target;

    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      setSharedFilters(prevData => ({
        ...prevData,
        searchQuery: value,
      }));
    }, 500);
    setTimerId(newTimerId);
  };

  return (
    <article className="flex justify-between items-center">
      <article className="flex justify-start space-x-2">
        <SearchInput placeholder="search" onChange={handleInput} />
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
