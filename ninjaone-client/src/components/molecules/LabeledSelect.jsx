import React from 'react';
import Select from '@atoms/Select';

const LabeledSelect = ({
  placeholder,
  labelText,
  full = false,
  onChange,
  options = [],
  error = '',
  defaultValue = {},
}) => {
  return (
    <div className="flex flex-col">
      <label className="w-full text-gray-800 font-normal text-sm py-1">{labelText}</label>
      <Select
        className={`${full ? 'w-full' : 'w-80'}`}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
        defaultValue={defaultValue}
      ></Select>
    </div>
  );
};

export default LabeledSelect;
