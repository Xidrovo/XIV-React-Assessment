import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import DeviceCell from '@organisms/DeviceCell';

import { render } from '../test-utils';

const providerProps = {
  value: {
    dispatch: jest.fn(),
  },
};

const cellRender = props => {
  return render(
    <table className="w-full text-left">
      <tbody>
        <DeviceCell {...props} />
      </tbody>
    </table>,
    { providerProps }
  );
};

let appRoot;

beforeEach(() => {
  appRoot = document.createElement('div');
  appRoot.setAttribute('id', 'App-root');
  document.body.appendChild(appRoot);
});
afterEach(() => {
  document.body.removeChild(appRoot);
});

describe('DeviceCell molecule', () => {
  test('renders without crashing with the defaults values', () => {
    const { getByTestId, getByText } = cellRender();
    const workstationText = getByText(/workstation/i);

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('windows-icon-id')).toBeInTheDocument();
  });

  test('renders with custom params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Windows';
    const { getByTestId } = render(
      <table className="w-full text-left">
        <tbody>
          <DeviceCell systemName={systemName} deviceType={deviceType} capacity={128} />
        </tbody>
      </table>,
      { providerProps }
    );
    const workstationText = screen.getByText('Windows workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('windows-icon-id')).toBeInTheDocument();
  });

  test('renders with deviceType as "Mac" params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Mac';
    const { getByTestId } = cellRender({
      systemName: systemName,
      deviceType: deviceType,
      capacity: 128,
    });
    const workstationText = screen.getByText('Mac workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('mac-icon-id')).toBeInTheDocument();
  });
  test('renders with deviceType as "Linux" params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Linux';
    const { getByTestId } = cellRender({
      systemName: systemName,
      deviceType: deviceType,
      capacity: 128,
    });
    const workstationText = screen.getByText('Linux workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('linux-icon-id')).toBeInTheDocument();
  });

  test('should open dropdown Menu with Edit and Delete options ', () => {
    const { getByTestId, getByText } = render(
      <table className="w-full text-left">
        <tbody>
          <DeviceCell />
        </tbody>
      </table>,
      { providerProps }
    );

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));

    const editText = screen.getByText('Edit');
    const deleteText = screen.getByText('Delete');
    expect(editText).toBeInTheDocument();
    expect(deleteText).toBeInTheDocument();
  });

  test('should open dropdown Menu button clicks and should hide it onMouseLeave ', () => {
    const { getByTestId, getByText } = cellRender();

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));

    const editText = screen.getByText('Edit');
    expect(editText).toBeInTheDocument();

    fireEvent.mouseLeave(getByText(/workstation/i));
    expect(editText).not.toBeInTheDocument();
  });

  test('should open dropdown Menu button clicks and should hide it if click outside menu ', () => {
    const { getByTestId, getByText } = cellRender();

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));

    const editText = screen.getByText('Edit');
    expect(editText).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(editText).not.toBeInTheDocument();
  });

  test('should open delete Modal when clicking "Delete" from dropdown menu ', () => {
    const { getByTestId, getByText } = cellRender({ systemName: 'test-name' });

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));
    fireEvent.click(getByText(/Delete/i));

    const deleteMessage = screen.getByText((_, node) => {
      const hasText = node =>
        node.textContent ===
        'You are about to delete the device test-name. This action cannot be undone.';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(child => !hasText(child));
      return nodeHasText && childrenDontHaveText;
    });

    expect(deleteMessage).toBeInTheDocument();
  });
  test('should open edit Modal when clicking "Edit" from dropdown menu ', () => {
    const { getByTestId, getByText } = cellRender({ systemName: 'test-name' });

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));
    fireEvent.click(getByText(/Edit/i));

    const editText = screen.getByText(/Edit device/i);

    expect(editText).toBeInTheDocument();
  });
});
