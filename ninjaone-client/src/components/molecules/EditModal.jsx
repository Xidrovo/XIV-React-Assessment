import React, { useState, useEffect, useContext } from 'react';
import SharedDashboardContext from '@context/SharedDashboardContext';

import useApi from '@hooks/useAPI';

import Modal from './Modal';
import Button from '@atoms/Button';
import LabeledInput from './LabeledInput';
import LabeledSelect from './LabeledSelect';

const EditModal = ({
  isOpen,
  closeModal,
  title,
  systemName,
  deviceType,
  capacity,
  id,
  ...props
}) => {
  const { dispatch } = useContext(SharedDashboardContext);

  const [newDeviceValue, setNewDeviceValue] = useState({
    system_name: systemName,
    type: deviceType?.value,
    hdd_capacity: capacity,
  });
  const [errors, setErrors] = useState({});

  const { put } = useApi('/api');

  useEffect(() => {
    setErrors({});
  }, [newDeviceValue]);

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

  const handleSelect = ({ value }) => {
    setNewDeviceValue({ ...newDeviceValue, type: value.toUpperCase() });
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setNewDeviceValue({ ...newDeviceValue, [name]: value });
  };

  const onEdit = async () => {
    const tempError = validateInputs(newDeviceValue);
    setErrors({ ...tempError });
    if (Object.keys(tempError).length > 0) {
      return;
    }
    await put(`/devices/${id}`, newDeviceValue);

    dispatch({
      type: 'EDIT_DEVICE',
      payload: { id: id, ...newDeviceValue },
    });
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title={title}>
      <div className="flex flex-col space-y-4">
        <LabeledInput
          labelText="System name *"
          name="system_name"
          onChange={handleChange}
          defaultValue={systemName}
          error={errors.system_name}
        />
        <LabeledSelect
          labelText="Device type *"
          full={true}
          options={props.options}
          onChange={handleSelect}
          defaultValue={deviceType}
          error={errors.type}
        />
        <LabeledInput
          labelText="HDD capacity (GB) * "
          name="hdd_capacity"
          onChange={handleChange}
          defaultValue={capacity}
          type="number"
          error={errors.hdd_capacity}
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
        <Button buttonKind="primary" onClick={onEdit}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default EditModal;
