import React, { useState } from 'react';
import Button from '@atoms/Button';

import PlusIcon from '@icons/PlusIcon';

import Modal from './Modal';

const DeviceToolbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <article className="w-full flex justify-between pb-6">
      <p className="font-medium text-2xl">Devices</p>
      <Button className="flex items-center justify-between" onClick={() => toggleModal()}>
        <PlusIcon className="font-normal" />
        <p className=" pl-2">Add devices</p>
      </Button>
      <Modal isOpen={openModal} closeModal={closeModal} />
    </article>
  );
};

export default DeviceToolbar;
