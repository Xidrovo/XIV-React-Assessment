import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '@atoms/Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select component', () => {
  test('renders Select', () => {
    const { getByText } = render(<Select options={options} onChange={() => {}} />);
    const selectedOption = getByText('Option 1');
    expect(selectedOption).toBeInTheDocument();
  });

  test('toggles dropdown menu', () => {
    const { getByText, queryByText } = render(<Select options={options} onChange={() => {}} />);
    fireEvent.click(getByText('Option 1'));
    expect(queryByText('Option 2')).toBeInTheDocument();
  });

  test('selects an option and calls onChange', () => {
    const handleChange = jest.fn();
    const { getByText } = render(<Select options={options} onChange={handleChange} />);

    fireEvent.click(getByText('Option 1'));
    fireEvent.click(getByText('Option 2'));

    expect(getByText('Option 2')).toBeInTheDocument();

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });
});
