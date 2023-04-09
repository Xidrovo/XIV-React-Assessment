import React, { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
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

const providerProps = {
  value: {
    dispatch: jest.fn(),
  },
};

const editModalRenderer = props => {
  return render(<RenderTestModal {...props} />, { providerProps });
};

describe('Modal Molecule', () => {
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

    const systemNameText = getByText(/System name/i);
    const deviceTypeText = getByText(/Device type/i);
    const capacityText = getByText(/HDD capacity/i);
    const modalElement = screen.queryByTestId('modal-test-id');

    expect(systemNameText).toBeInTheDocument();
    expect(deviceTypeText).toBeInTheDocument();
    expect(capacityText).toBeInTheDocument();

    expect(modalElement).toBeInTheDocument();
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
});
