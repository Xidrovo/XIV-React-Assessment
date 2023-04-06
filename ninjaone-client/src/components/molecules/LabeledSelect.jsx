import React from 'react';
import Select from '@atoms/Select';

const LabeledSelect = ({ placeholder, labelText }) => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <div className="flex flex-col">
      <label className="w-full text-gray-800 font-normal text-sm py-1">{labelText}</label>
      <Select className="w-full" options={options} placeholder={placeholder}></Select>
    </div>
  );
};

export default LabeledSelect;
