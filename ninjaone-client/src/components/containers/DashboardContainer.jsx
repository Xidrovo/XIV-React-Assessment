import React from 'react';

import DeviceToolbar from '@molecules/DeviceToolbar';

const DashboardContainer = () => {
  return (
    <section className="p-6">
      <DeviceToolbar />
      <article>
        <input placeholder="search"></input>
        <select placeholder="Device Type"></select>
        <select placeholder="Sort by"></select>
      </article>
      <article>
        <table>
          <th>Device</th>
          <tr>Win - desktop</tr>
          <tr>Mac - desktop</tr>
          <tr>Win - desktop</tr>
        </table>
      </article>
    </section>
  );
};

export default DashboardContainer;
