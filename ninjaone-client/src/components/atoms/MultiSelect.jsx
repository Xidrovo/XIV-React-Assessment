import React, { useState, useRef, useEffect } from 'react';

import ArrowIcon from '@icons/ArrowIcon';

import useOnClickOutside from '@hooks/useOnClickOutside';

const MultiSelect = ({
  prefixText = '',
  options = [{ value: 'default', label: 'default value' }],
  placeholder = '',
  name = '',
  error = '',
  defaultValue = null,
  unSelectedValue = null,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(defaultValue ? [defaultValue] : []);
  const selectRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(selectRef, () => {
    if (isOpen) {
      toggleDropdown();
    }
  });

  useEffect(() => {
    if (selectedOptions.length > 0) {
      props.onChange({ name, value: selectedOptions.map(option => option.value) });
    } else {
      setSelectedOptions([{ value: unSelectedValue, label: unSelectedValue }]);
    }
  }, [selectedOptions]);

  const handleOptionClick = option => {
    if (unSelectedValue === option.value) {
      setSelectedOptions([option]);
      props.onChange({ name: name, value: [option.value] });
      return;
    }
    const isOptionSelected = selectedOptions.some(selected => selected.value === option.value);
    const filteredOptions = selectedOptions.filter(option => option.value !== unSelectedValue);

    if (isOptionSelected) {
      setSelectedOptions(selectedOptions.filter(o => o.value !== option.value));
    } else {
      setSelectedOptions([...filteredOptions, option]);
    }
  };

  const selectedLabels = selectedOptions.map(o => o.label).join(', ');

  return (
    <div className="flex flex-col ">
      <div
        className="relative inline-block cursor-pointer select-none"
        onClick={toggleDropdown}
        ref={selectRef}
      >
        <div
          className={`px-4 py-2 border border-gray-300 rounded bg-white flex justify-between items-center  ${
            props.className
          } ${error ? ' border-warning' : ''}`}
        >
          <p className={`${selectedOptions.length ? ' ' : 'text-gray-500'}`}>
            {!placeholder && prefixText} {selectedLabels || placeholder}
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
                className={`px-4 py-2 hover:bg-gray-100 ${
                  selectedOptions.some(o => o.value === option.value) ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <span className=" text-xs text-warning pt-1">{error}</span>}
    </div>
  );
};

export default MultiSelect;
