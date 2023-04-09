import React, { useState } from 'react';

import PlusIcon from '@icons/PlusIcon';
import Button from '@atoms/Button';

import AddModal from './AddModal';

const DeviceToolbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setErrors({});
    setOpenModal(false);
  };

  return (
    <article className="w-full flex justify-between pb-6 " data-testid="device-toolbar">
      <p className="font-medium text-2xl">Devices</p>
      <Button className="flex items-center justify-between" onClick={() => toggleModal()}>
        <PlusIcon className="font-normal" />
        <p className=" pl-2">Add devices</p>
      </Button>
      <AddModal
        isOpen={openModal}
        closeModal={() => closeModal()}
        setErrors={setErrors}
        errors={errors}
      />
    </article>
  );
};

export default DeviceToolbar;
