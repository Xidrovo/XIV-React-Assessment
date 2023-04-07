import React, { useState, useContext, useEffect } from 'react';
import Button from '@atoms/Button';

import SharedDashboardContext from '@context/SharedDashboardContext';

import LabeledInput from '@molecules/LabeledInput';
import LabeledSelect from '@molecules/LabeledSelect';
import PlusIcon from '@icons/PlusIcon';

import Modal from './Modal';

const DeviceToolbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newDeviceValue, setNewDeviceValue] = useState({});

  const deviceType = [
    { value: 'windows', label: 'Windows' },
    { value: 'mac', label: 'Mac' },
    { value: 'linux', label: 'Linux' },
  ];

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setNewDeviceValue({ ...newDeviceValue, [name]: value });
  };

  const handleSelect = ({ value }) => {
    setNewDeviceValue({ ...newDeviceValue, type: value });
  };

  const onSubmit = () => {
    console.log(newDeviceValue);
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
          <LabeledInput labelText="System name *" name="sysName" onChange={handleChange} />
          <LabeledSelect
            placeholder="Select type"
            labelText="Device type *"
            options={deviceType}
            full={true}
            onChange={handleSelect}
          />
          <LabeledInput labelText="HDD capacity (GB) *" name="capacity" onChange={handleChange} />
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
          <Button buttonKind="primary" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </article>
  );
};

export default DeviceToolbar;
