import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import DeviceToolbar from '@molecules/DeviceToolbar';
import { render } from '../test-utils';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

const providerProps = {
  value: {
    dispatch: jest.fn(),
  },
};
describe('DeviceToolbar component', () => {
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

  test('Render device toolbar propertly', () => {
    const { getByText, getByTestId } = render(<DeviceToolbar />, { providerProps });

    const deviceText = getByText('Devices');
    expect(deviceText).toBeInTheDocument();

    const plusIcon = getByTestId('plus-icon');
    expect(plusIcon).toBeInTheDocument();
  });

  test('Render component modal, when Add Devices is pressed', () => {
    const { getByText } = render(<DeviceToolbar />, { providerProps });

    const button = getByText('Add devices');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const modalElement = screen.queryByTestId('modal-test-id');
    expect(modalElement).toBeInTheDocument();
  });

  test('Render modal get closes when cancel is pressed', () => {
    const { getByText } = render(<DeviceToolbar />, { providerProps });

    const button = getByText('Add devices');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const modalElement = screen.queryByTestId('modal-test-id');
    expect(modalElement).toBeInTheDocument();

    const cancelButton = getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
    fireEvent.click(cancelButton);

    expect(modalElement).not.toBeInTheDocument();
  });
});
