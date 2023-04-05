import React from 'react';
import { render, screen } from '@testing-library/react';
import DeviceCell from '../../components/molecules/DeviceCell';

describe('DeviceCell molecule', () => {
  test('renders without crashing with the defaults values', () => {
    const { getByTestId } = render(<DeviceCell />);
    const workstationText = screen.getByText(/workstation/i);

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('windows-icon-id')).toBeInTheDocument();
  });

  test('renders with custom params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Windows';
    const { getByTestId } = render(
      <DeviceCell systemName={systemName} deviceType={deviceType} capacity={128} />
    );
    const workstationText = screen.getByText('Windows workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('windows-icon-id')).toBeInTheDocument();
  });

  test('renders with deviceType as "Mac" params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Mac';
    const { getByTestId } = render(
      <DeviceCell systemName={systemName} deviceType={deviceType} capacity={128} />
    );
    const workstationText = screen.getByText('Mac workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('mac-icon-id')).toBeInTheDocument();
  });
  test('renders with deviceType as "Linux" params', () => {
    const systemName = 'DESKTOP-0VCBIFF';
    const deviceType = 'Linux';
    const { getByTestId } = render(
      <DeviceCell systemName={systemName} deviceType={deviceType} capacity={128} />
    );
    const workstationText = screen.getByText('Linux workstation - 128 GB');

    expect(workstationText).toBeInTheDocument();
    expect(getByTestId('linux-icon-id')).toBeInTheDocument();
  });
});
