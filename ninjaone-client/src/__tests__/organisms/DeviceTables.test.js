import React, { useMemo } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import DeviceTables from '@organisms/DeviceTables';

import { render } from '../test-utils';

let defaultFilters = {
  searchQuery: '',
  filterType: 'All',
  sortingBy: 'HDD-D',
};
const defaultDevices = [
  { id: 'e8okoP2l5', system_name: 'DESKTOP-SMART', type: 'WINDOWS', hdd_capacity: '10' },
  { id: 'Th3ngERn9', system_name: 'MAC-LEADER', type: 'MAC', hdd_capacity: '2048' },
  { id: 'Q1JdBnE12', system_name: 'ARMANDO', type: 'LINUX', hdd_capacity: '256' },
];
const testCases = [
  { type: 'Windows', expected: 'windows-icon-id' },
  { type: 'Mac', expected: 'mac-icon-id' },
  { type: 'Linux', expected: 'linux-icon-id' },
];

let providerProps = {
  value: {
    sharedFilters: defaultFilters,
  },
};

const cleanDefault = () => {
  defaultFilters = {
    searchQuery: '',
    filterType: 'All',
    sortingBy: 'HDD-D',
  };
};

const DeviceTable = props => {
  const devices = useMemo(() => props.defaultDevices, []);
  return <DeviceTables devices={devices} />;
};

describe('DeviceTables component', () => {
  afterEach(() => {
    cleanDefault();
  });
  test('renders that Devices are correctly displayed.', () => {
    const { getByText, getByTestId } = render(<DeviceTable defaultDevices={defaultDevices} />, {
      providerProps,
    });
    expect(getByText('DESKTOP-SMART')).toBeInTheDocument();
    expect(getByTestId('windows-icon-id')).toBeInTheDocument();

    expect(getByText('MAC-LEADER')).toBeInTheDocument();
    expect(getByTestId('mac-icon-id')).toBeInTheDocument();

    expect(getByText('ARMANDO')).toBeInTheDocument();
    expect(getByTestId('linux-icon-id')).toBeInTheDocument();
  });

  test('render that order of values are correctly displayed.', () => {
    const { getAllByTestId } = render(<DeviceTable defaultDevices={defaultDevices} />, {
      providerProps,
    });
    const sortedItems = getAllByTestId('cell-item');

    expect(sortedItems[0].textContent).toContain('MAC-LEADER');
    expect(sortedItems[1].textContent).toContain('ARMANDO');
    expect(sortedItems[2].textContent).toContain('DESKTOP-SMART');
  });
  test('render that order values are displayed according to Ascendent filters', () => {
    defaultFilters = { ...defaultFilters, sortingBy: 'HDD-A' };
    providerProps.value.sharedFilters = { ...defaultFilters };
    const { getAllByTestId } = render(<DeviceTable defaultDevices={defaultDevices} />, {
      providerProps,
    });
    const sortedItems = getAllByTestId('cell-item');

    expect(sortedItems[0].textContent).toContain('DESKTOP-SMART');
    expect(sortedItems[1].textContent).toContain('ARMANDO');
    expect(sortedItems[2].textContent).toContain('MAC-LEADER');
  });

  test('render that order values are displayed according to AZ name filters', () => {
    defaultFilters = { ...defaultFilters, sortingBy: 'NAME-AZ' };
    providerProps.value.sharedFilters = { ...defaultFilters };
    const { getAllByTestId } = render(<DeviceTable defaultDevices={defaultDevices} />, {
      providerProps,
    });
    const sortedItems = getAllByTestId('cell-item');

    expect(sortedItems[0].textContent).toContain('ARMANDO');
    expect(sortedItems[1].textContent).toContain('DESKTOP-SMART');
    expect(sortedItems[2].textContent).toContain('MAC-LEADER');
  });

  test('render that order values are displayed according to ZA name filters', () => {
    defaultFilters = { ...defaultFilters, sortingBy: 'NAME-ZA' };
    providerProps.value.sharedFilters = { ...defaultFilters };
    const { getAllByTestId } = render(<DeviceTable defaultDevices={defaultDevices} />, {
      providerProps,
    });
    const sortedItems = getAllByTestId('cell-item');

    expect(sortedItems[0].textContent).toContain('MAC-LEADER');
    expect(sortedItems[1].textContent).toContain('DESKTOP-SMART');
    expect(sortedItems[2].textContent).toContain('ARMANDO');
  });

  test('render results according to fuzzy search', () => {
    defaultFilters = { ...defaultFilters, searchQuery: 'Lead' };
    providerProps.value.sharedFilters = { ...defaultFilters };
    const { getByText } = render(<DeviceTable defaultDevices={defaultDevices} />, {
      providerProps,
    });
    expect(getByText('MAC-LEADER')).toBeInTheDocument();
  });

  test('render that does not sort if sortingBy is not set', () => {
    defaultFilters = { ...defaultFilters, sortingBy: '' };
    providerProps.value.sharedFilters = { ...defaultFilters };
    const { getAllByTestId } = render(<DeviceTable defaultDevices={defaultDevices} />, {
      providerProps,
    });

    const sortedItems = getAllByTestId('cell-item');

    expect(sortedItems[0].textContent).toContain('DESKTOP-SMART');
    expect(sortedItems[1].textContent).toContain('MAC-LEADER');
    expect(sortedItems[2].textContent).toContain('ARMANDO');
  });

  testCases.forEach(({ type, expected }) => {
    test(`Test render only the values with the ${type} OS`, () => {
      defaultFilters = { ...defaultFilters, filterType: type };
      providerProps.value.sharedFilters = { ...defaultFilters };
      const { getByTestId } = render(<DeviceTable defaultDevices={defaultDevices} />, {
        providerProps,
      });
      const OSicon = getByTestId(expected);

      expect(OSicon).toBeInTheDocument();
    });
  });
});
