import React from 'react';

import DeviceToolbar from '@molecules/DeviceToolbar';
import DeviceFilterPanel from '../organism/DeviceFilterPanel';

const DashboardContainer = () => {
  return (
    <section className="p-6">
      <DeviceToolbar />
      <DeviceFilterPanel />
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
