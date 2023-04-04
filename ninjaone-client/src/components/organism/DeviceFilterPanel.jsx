import React from 'react';
import SearchInput from '@molecules/SearchInput';
const DeviceFilterPanel = () => {
  return (
    <article>
      <SearchInput placeholder="search" />
      <select placeholder="Device Type"></select>
      <select placeholder="Sort by"></select>
    </article>
  );
};

export default DeviceFilterPanel;
