import React, { useContext, useState, useEffect } from 'react';

import SharedDashboardContext from '@context/SharedDashboardContext';
import useApi from '@hooks/useAPI';

import Select from '@atoms/Select';
import MultiSelect from '@atoms/MultiSelect';

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
    <article
      className="flex flex-col-reverse md:flex-row md:justify-between items-center"
      data-testid="device-filter-panel"
    >
      <article className="flex flex-col md:flex-row justify-start space-y-2 md:space-x-2 md:space-y-0">
        <SearchInput placeholder="search" onChange={handleInput} />
        <MultiSelect
          prefixText="Device Type: "
          options={deviceType}
          name="filterType"
          onChange={handleSelect}
          className="w-full md:w-80 "
          defaultValue={deviceType[0]}
          unSelectedValue={deviceType[0].value}
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
