import React, { useState, useEffect, useContext } from 'react';
import SharedDashboardContext from '@context/SharedDashboardContext';

import useApi from '@hooks/useAPI';

import Modal from './Modal';
import Button from '@atoms/Button';
import LabeledInput from './LabeledInput';
import LabeledSelect from './LabeledSelect';

const AddModal = ({ isOpen, closeModal, errors, setErrors, ...props }) => {
  const { dispatch } = useContext(SharedDashboardContext);
  const [newDeviceValue, setNewDeviceValue] = useState({});

  const { post } = useApi('/api');

  const deviceType = [
    { value: 'windows', label: 'Windows' },
    { value: 'mac', label: 'Mac' },
    { value: 'linux', label: 'Linux' },
  ];

  const validateInputs = inputData => {
    let errors = {};
    if (!inputData.system_name) {
      errors.system_name = 'System name is required';
    }

    if (!inputData.type) {
      errors.type = 'Type is required';
    }

    if (!inputData.hdd_capacity) {
      errors.hdd_capacity = 'HDD capacity is required';
    } else if (isNaN(Number(inputData.hdd_capacity))) {
      errors.hdd_capacity = 'HDD capacity must be a number';
    }

    return errors;
  };

  useEffect(() => {
    return () => {
      setNewDeviceValue({});
      setErrors({});
    };
  }, []);

  useEffect(() => {
    setErrors({});
  }, [newDeviceValue]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setNewDeviceValue({ ...newDeviceValue, [name]: value });
  };

  const handleSelect = ({ value }) => {
    setNewDeviceValue({ ...newDeviceValue, type: value.toUpperCase() });
  };

  const onSubmit = async () => {
    const tempError = validateInputs(newDeviceValue);
    setErrors({ ...tempError });
    if (Object.keys(tempError).length > 0) {
      return;
    }
    const response = await post('/devices', newDeviceValue);
    dispatch({
      type: 'ADD_DEVICE',
      payload: { id: response.id, ...newDeviceValue },
    });
    closeModal();
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="Add device">
      <div className="flex flex-col space-y-4">
        <LabeledInput
          labelText="System name *"
          name="system_name"
          onChange={handleChange}
          error={errors.system_name}
        />
        <LabeledSelect
          placeholder="Select type"
          labelText="Device type *"
          options={deviceType}
          full={true}
          onChange={handleSelect}
          error={errors.type}
        />
        <LabeledInput
          labelText="HDD capacity (GB) *"
          name="hdd_capacity"
          onChange={handleChange}
          error={errors.hdd_capacity}
          type="number"
        />
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
        <Button buttonKind="primary" onClick={() => onSubmit()}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default AddModal;
