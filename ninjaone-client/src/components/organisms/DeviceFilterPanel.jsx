import React, { useContext, useState, useEffect } from 'react';

import SharedDashboardContext from '@context/SharedDashboardContext';
import useApi from '@hooks/useAPI';

import Select from '@atoms/Select';
import SearchInput from '@molecules/SearchInput';

import RefreshIcon from '@icons/RefreshIcon';

const DeviceFilterPanel = () => {
  const { setSharedFilters, dispatch } = useContext(SharedDashboardContext);
  const [timerId, setTimerId] = useState(null);

  const { get } = useApi('/api');

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

  const onRefresh = async () => {
    const devices = await get('/devices');
    dispatch({ type: 'PULL_DEVICES', payload: devices });
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
          className="w-80 sm:full"
        />
        <Select
          prefixText="Sort by: "
          options={options}
          name="sortingBy"
          onChange={handleSelect}
          className="w-80 sm:full"
        />
      </article>
      <article className="p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={onRefresh}>
        <RefreshIcon />
      </article>
    </article>
  );
};

export default DeviceFilterPanel;
