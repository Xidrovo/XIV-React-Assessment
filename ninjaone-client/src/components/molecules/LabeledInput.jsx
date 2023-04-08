import React from 'react';

import Input from '@atoms/Input';

const LabeledInput = ({
  labelText = 'default value *',
  name = '',
  onChange = () => {},
  error = '',
  type = 'text',
  defaultValue = '',
}) => {
  return (
    <div className="flex flex-col">
      <label className="w-full text-gray-800 font-normal text-sm py-1">{labelText}</label>
      <Input
        className="w-full"
        name={name}
        onChange={onChange}
        error={error}
        type={type}
        defaultValue={defaultValue}
      ></Input>
    </div>
  );
};

export default LabeledInput;
