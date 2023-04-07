import React, { useState, useRef } from 'react';

import ArrowIcon from '@icons/ArrowIcon';

import useOnClickOutside from '@hooks/useOnClickOutside';

const Select = ({
  prefixText = '',
  options = [{ value: 'default', label: 'default value' }],
  placeholder = '',
  name = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    placeholder ? { label: placeholder, value: placeholder } : options[0]
  );
  const [hadSelected, setHadSelected] = useState(!placeholder);
  const selectRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(selectRef, () => {
    if (isOpen) {
      toggleDropdown();
    }
  });

  const handleOptionClick = option => {
    if (!hadSelected) {
      setHadSelected(true);
    }
    setSelectedOption(option);
    props.onChange({ name, ...option });
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block cursor-pointer select-none"
      onClick={toggleDropdown}
      ref={selectRef}
    >
      <div className="px-4 py-2 border border-gray-300 rounded bg-white flex justify-between items-center w-64">
        <p className={`${hadSelected ? ' ' : 'text-gray-500'}`}>
          {!placeholder && prefixText} {selectedOption.label}
        </p>
        <ArrowIcon
          className={` ml-4 transition-transform duration-300 ${isOpen && 'rotate-180'}`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 z-10 w-full border border-gray-300 rounded bg-white">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
