import React from 'react';

import DeviceToolbar from '@molecules/DeviceToolbar';
import DeviceFilterPanel from '../organism/DeviceFilterPanel';
import DeviceTables from '../organism/DeviceTables';

const DashboardContainer = () => {
  return (
    <section className="p-6">
      <DeviceToolbar />
      <DeviceFilterPanel />
      <DeviceTables />
    </section>
  );
};

export default DashboardContainer;
