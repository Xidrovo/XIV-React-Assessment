import React from 'react';
import { fireEvent } from '@testing-library/react';
import DeviceFilterPanel from '@organisms/DeviceFilterPanel';
import { render } from '../test-utils';

const providerProps = {
  value: {
    dispatch: jest.fn(),
  },
};
const cellRender = props => {
  return render(<DeviceFilterPanel {...props} />, { providerProps });
};

describe('Header component', () => {
  test('renders that an image with an alt description renders.', () => {
    const { getByTestId, getByText } = cellRender();

    expect(getByTestId('search-icon-id')).toBeInTheDocument();
    expect(getByText(/Device Type: All/i)).toBeInTheDocument();
    expect(getByText(/Sort By: HDD Capacity/i)).toBeInTheDocument();
  });

  test('renders select inside component has proper options', () => {
    const { getByText } = cellRender();
    const selectType = getByText(/Device Type: All/i);
    fireEvent.click(selectType);

    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Windows')).toBeInTheDocument();
    expect(getByText(/Mac/i)).toBeInTheDocument();
    expect(getByText(/Linux/i)).toBeInTheDocument();
  });

  test('renders select inside component has proper options', () => {
    const { getByText } = cellRender();
    const selectType = getByText(/Sort By: HDD Capacity/i);
    fireEvent.click(selectType);

    expect(getByText('HDD Capacity (Ascending)')).toBeInTheDocument();
    expect(getByText('Name (A-Z)')).toBeInTheDocument();
    expect(getByText('Name (Z-A)')).toBeInTheDocument();
  });
});

// data-testid="search-icon-id"
