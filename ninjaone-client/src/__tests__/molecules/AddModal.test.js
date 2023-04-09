import React, { useState } from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

import AddModal from '@molecules/AddModal';

import { render } from '../test-utils';

const RenderTestModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [errors, setErrors] = useState({});
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AddModal
      isOpen={isOpen}
      closeModal={() => closeModal()}
      errors={errors}
      setErrors={setErrors}
    />
  );
};
const providerProps = {
  value: {
    dispatch: jest.fn(),
  },
};

describe('AddModal Component Molecule', () => {
  const baseUrl = '/api';
  beforeEach(() => {
    fetch.mockClear();
  });

  let appRoot;

  beforeEach(() => {
    appRoot = document.createElement('div');
    appRoot.setAttribute('id', 'App-root');
    document.body.appendChild(appRoot);
  });
  afterEach(() => {
    document.body.removeChild(appRoot);
  });

  test('render that modal component has all label AND empty values', () => {
    const { getByText } = render(<RenderTestModal />, { providerProps });

    const modalElement = screen.queryByTestId('modal-test-id');
    expect(modalElement).toBeInTheDocument();

    const systemNameText = getByText(/System name/i);
    const deviceTypeText = getByText(/Device type/i);
    const capacityText = getByText(/HDD capacity/i);
    expect(systemNameText).toBeInTheDocument();
    expect(deviceTypeText).toBeInTheDocument();
    expect(capacityText).toBeInTheDocument();
  });

  test('error values when Modal does not have any input', () => {
    const { getByText } = render(<RenderTestModal />, { providerProps });

    const button = getByText('Submit');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const expectedSystemError = 'System name is required';
    const systemError = getByText(expectedSystemError);
    expect(systemError).toBeInTheDocument();

    const expectedTypeError = 'Type is required';
    const typeError = getByText(expectedTypeError);
    expect(typeError).toBeInTheDocument();

    const expectedCapacityError = 'HDD capacity is required';
    const capacityError = getByText(expectedCapacityError);
    expect(capacityError).toBeInTheDocument();
  });
});
