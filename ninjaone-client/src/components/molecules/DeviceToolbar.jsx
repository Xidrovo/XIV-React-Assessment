import React from 'react';
import Button from '@atoms/Button';

import PlusIcon from '@icons/PlusIcon';

const DeviceToolbar = () => {
  return (
    <article className="w-full flex justify-between pb-6">
      <p className="font-medium text-2xl">Devices</p>
      <Button className="flex items-center justify-between">
        <PlusIcon className="font-normal" />
        <p className=" pl-2">Add devices</p>
      </Button>
    </article>
  );
};

export default DeviceToolbar;
