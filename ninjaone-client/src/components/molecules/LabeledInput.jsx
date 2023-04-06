import React from 'react';

import Input from '@atoms/Input';

const LabeledInput = ({ labelText = 'default value *' }) => {
  return (
    <div className="flex flex-col">
      <label className="w-full text-gray-800 font-normal text-sm py-1">{labelText}</label>
      <Input className="w-full"></Input>
    </div>
  );
};

export default LabeledInput;
