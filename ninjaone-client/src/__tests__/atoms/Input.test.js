import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../components/atoms/Input';

describe('Input component', () => {
  test('renders without crashing', () => {
    const { getByRole } = render(<Input />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('updates the input value when the user types', () => {
    const { getByRole } = render(<Input />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(input).toHaveValue('New value');
  });

  test('triggers the provided callback function on input change', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Input onChange={handleChange} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Changed value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
