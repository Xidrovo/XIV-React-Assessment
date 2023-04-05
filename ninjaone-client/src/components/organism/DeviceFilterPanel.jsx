import React from 'react';
import SearchInput from '@molecules/SearchInput';
import Select from '@atoms/Select';
import RefreshIcon from '@icons/RefreshIcon';

const DeviceFilterPanel = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <article className="flex justify-between items-center">
      <article className="flex justify-start space-x-2">
        <SearchInput placeholder="search" />
        <Select prefixText="Device Type: " options={options} />
        <Select prefixText="Sort by: " options={options} />
      </article>
      <RefreshIcon />
    </article>
  );
};

export default DeviceFilterPanel;
