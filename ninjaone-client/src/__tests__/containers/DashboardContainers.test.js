import React from 'react';
import { render, screen, renderHook, waitFor } from '@testing-library/react';
import useApi from '@hooks/useAPI';

import DashboardContainer, { reducer } from '../../components/containers/DashboardContainer';

describe('DashboardContainer', () => {
  const baseUrl = '/api';
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: 'mocked data' }),
    })
  );
  const initialState = [];

  // test('renders DeviceToolbar component', async () => {
  //   render(<DashboardContainer />);
  //   const { result } = renderHook(() => useApi(baseUrl));
  //   await waitFor(() => {
  //     const toolbar = screen.getByTestId('device-toolbar');
  //     expect(toolbar).toBeInTheDocument();

  //     const filterPanel = screen.getByTestId('device-filter-panel');
  //     expect(filterPanel).toBeInTheDocument();

  //     const deviceTable = screen.getByTestId('device-tables');
  //     expect(deviceTable).toBeInTheDocument();
  //   });
  // });

  test('PULL_DEVICES action', () => {
    const action = {
      type: 'PULL_DEVICES',
      payload: [
        { id: 1, system_name: 'Device1' },
        { id: 2, system_name: 'Device2' },
      ],
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual(action.payload);
  });

  test('ADD_DEVICE action', () => {
    const initialState = [{ id: 1, system_name: 'Device1' }];
    const action = {
      type: 'ADD_DEVICE',
      payload: { id: 2, system_name: 'Device2' },
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual([...initialState, action.payload]);
  });

  test('DEL_DEVICE action', () => {
    const initialState = [
      { id: 1, system_name: 'Device1' },
      { id: 2, system_name: 'Device2' },
    ];
    const action = {
      type: 'DEL_DEVICE',
      payload: 1,
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual([{ id: 2, system_name: 'Device2' }]);
  });

  test('EDIT_DEVICE action', () => {
    const initialState = [
      { id: 1, system_name: 'Device1' },
      { id: 2, system_name: 'Device2' },
    ];
    const action = {
      type: 'EDIT_DEVICE',
      payload: { id: 1, system_name: 'Device1-updated' },
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual([
      { id: 1, system_name: 'Device1-updated' },
      { id: 2, system_name: 'Device2' },
    ]);
  });

  test('default action', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
