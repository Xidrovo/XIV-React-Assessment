import React, { useState } from 'react';
import { screen, fireEvent, renderHook, act, waitFor } from '@testing-library/react';
import useApi from '@hooks/useAPI';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

import EditModal from '@molecules/EditModal';

import { render } from '../test-utils';

const RenderTestModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <EditModal
      isOpen={isOpen}
      closeModal={() => closeModal()}
      title="modal test"
      systemName="Test-PC"
      deviceType={{ label: 'Windows', value: 'Windows' }}
      capacity={40}
      id="test-id"
    />
  );
};

const RenderEmptyEditModal = props => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <EditModal
      isOpen={isOpen}
      closeModal={() => closeModal()}
      title="modal test"
      systemName=""
      deviceType={{}}
      id="test-id"
      capacity={props.capacity || null}
    />
  );
};

const providerProps = {
  value: {
    dispatch: jest.fn(),
  },
};

const editModalRenderer = props => {
  return render(<RenderTestModal {...props} />, { providerProps });
};

const editEmptyModalRenderer = props => {
  return render(<RenderEmptyEditModal {...props} />, { providerProps });
};

describe('Modal Molecule', () => {
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

  test('render the Modal component with title as "modal test"  ', () => {
    const { getByText } = editModalRenderer();

    const modalElement = screen.queryByTestId('modal-test-id');
    expect(modalElement).toBeInTheDocument();

    const systemNameText = getByText(/System name/i);
    const deviceTypeText = getByText(/Device type/i);
    const capacityText = getByText(/HDD capacity/i);
    expect(systemNameText).toBeInTheDocument();
    expect(deviceTypeText).toBeInTheDocument();
    expect(capacityText).toBeInTheDocument();
  });

  test('render Modal and unmount when "cancel" button is pressed  ', () => {
    const { getByText } = editModalRenderer();

    const modalElement = screen.queryByTestId('modal-test-id');
    expect(modalElement).toBeInTheDocument();

    const button = getByText('Cancel');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(modalElement).not.toBeInTheDocument();
  });

  test('render the EditModal component with the cell Values  ', () => {
    const expectedValue = 'Test-PC';
    const capacity = '40';

    const { getByDisplayValue } = editModalRenderer();
    const input = getByDisplayValue('Test-PC');
    const inputCapacity = getByDisplayValue(40);

    expect(input.value).toBe(expectedValue);
    expect(inputCapacity.value).toBe(capacity);
  });

  test('render the EditModal component with the cell Values  ', () => {
    const expectedValue = 'Test-PC';
    const capacity = '40';

    const { getByDisplayValue } = editModalRenderer();
    const input = getByDisplayValue('Test-PC');
    const inputCapacity = getByDisplayValue(40);

    expect(input.value).toBe(expectedValue);
    expect(inputCapacity.value).toBe(capacity);
  });

  test('error values when Modal does not have any input', () => {
    const { getByText } = editEmptyModalRenderer();

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

  test('numeric error when HDD capacity is not a number', () => {
    const { getByText } = editEmptyModalRenderer({ capacity: 'hola' });

    const button = getByText('Submit');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const expectedCapacityError = 'HDD capacity must be a number';
    const capacityError = getByText(expectedCapacityError);
    expect(capacityError).toBeInTheDocument();
  });

  test('render the EditModal component with the cell Values  ', async () => {
    const expectedId = 'test-id';
    const expectedBody = {
      system_name: 'Test-PC',
      type: 'Windows',
      hdd_capacity: 40,
    };
    const { getByText } = editModalRenderer();

    const button = getByText('Submit');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/devices/${expectedId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expectedBody),
      });
      const modalElement = screen.queryByTestId('modal-test-id');
      expect(modalElement).not.toBeInTheDocument();
    });
  });
});
