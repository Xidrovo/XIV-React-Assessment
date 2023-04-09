import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '@atoms/Button';

describe('Button component', () => {
  test('renders with default text', () => {
    const { getByText } = render(<Button />);
    expect(getByText('Button component')).toBeInTheDocument();
  });

  test('renders with custom text', () => {
    const { getByText } = render(<Button> Custom Text </Button>);
    expect(getByText('Custom Text')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} />);
    fireEvent.click(getByText('Button component'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} disabled />);
    fireEvent.click(getByText('Button component'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
