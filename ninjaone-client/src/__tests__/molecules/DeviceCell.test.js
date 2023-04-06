import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeviceCell from '../../components/molecules/DeviceCell';

describe('DeviceCell molecule', () => {
  test('renders without crashing with the defaults values', () => {
    const { getByTestId, getByText } = render(
      <table className="w-full text-left">
        <tbody>
          <DeviceCell />
        </tbody>
      </table>
    );
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
      </table>
    );
    const workstationText = screen.getByText('Windows workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('windows-icon-id')).toBeInTheDocument();
  });

  test('renders with deviceType as "Mac" params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Mac';
    const { getByTestId } = render(
      <table className="w-full text-left">
        <tbody>
          <DeviceCell systemName={systemName} deviceType={deviceType} capacity={128} />
        </tbody>
      </table>
    );
    const workstationText = screen.getByText('Mac workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('mac-icon-id')).toBeInTheDocument();
  });
  test('renders with deviceType as "Linux" params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Linux';
    const { getByTestId } = render(
      <table className="w-full text-left">
        <tbody>
          <DeviceCell systemName={systemName} deviceType={deviceType} capacity={128} />
        </tbody>
      </table>
    );
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
      </table>
    );

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));

    const editText = screen.getByText('Edit');
    const deleteText = screen.getByText('Delete');
    expect(editText).toBeInTheDocument();
    expect(deleteText).toBeInTheDocument();
  });

  test('should open dropdown Menu button clicks and should hide it onMouseLeave ', () => {
    const { getByTestId, getByText } = render(
      <table className="w-full text-left">
        <tbody>
          <DeviceCell />
        </tbody>
      </table>
    );

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));

    const editText = screen.getByText('Edit');
    expect(editText).toBeInTheDocument();

    fireEvent.mouseLeave(getByText(/workstation/i));
    expect(editText).not.toBeInTheDocument();
  });

  test('should open dropdown Menu button clicks and should hide it if click outside menu ', () => {
    const { getByTestId, getByText } = render(
      <table className="w-full text-left">
        <tbody>
          <DeviceCell />
        </tbody>
      </table>
    );

    fireEvent.mouseEnter(getByText(/workstation/i));
    fireEvent.click(getByTestId('dots-icon-id'));

    const editText = screen.getByText('Edit');
    expect(editText).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(editText).not.toBeInTheDocument();
  });
});
