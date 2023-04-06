import React, { useState } from 'react';
import Button from '@atoms/Button';

import LabeledInput from '@molecules/LabeledInput';
import LabeledSelect from '@molecules/LabeledSelect';
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
      <Modal isOpen={openModal} closeModal={closeModal} title="Add device">
        <div className="flex flex-col space-y-4">
          <LabeledInput labelText="System name *" />
          <LabeledSelect placeholder="Select type" labelText="Device type *" />
          <LabeledInput labelText="HDD capacity (GB) *" />
        </div>
        <div className="w-full flex justify-end mt-8 space-x-4">
          <Button
            buttonKind="secondary"
            onClick={() => {
              closeModal();
            }}
          >
            Cancel
          </Button>
          <Button buttonKind="primary">Submit</Button>
        </div>
      </Modal>
    </article>
  );
};

export default DeviceToolbar;
