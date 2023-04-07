import React, { useReducer, useEffect, useState } from 'react';

import useApi from '@hooks/useAPI';
import SharedDashboardContext from '@context/SharedDashboardContext';

import DeviceToolbar from '@molecules/DeviceToolbar';
import DeviceFilterPanel from '../organism/DeviceFilterPanel';
import DeviceTables from '../organism/DeviceTables';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'PULL_DEVICES':
      return [...action.payload];
    case 'ADD_DEVICE':
      return [...state, action.payload];
    case 'DEL_DEVICE':
      return [...state]; //TODO
    case 'EDIT_DEVICE':
      console.log(action.payload);
      return [...state];
    default:
      return state;
  }
};

const DashboardContainer = () => {
  const [deviceState, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  const { get } = useApi('/api');

  const [sharedFilters, setSharedFilters] = useState({
    searchQuery: '',
    filterType: 'All',
    sortingBy: 'HDD-D',
  });

  const populateDevice = async () => {
    const devices = await get('/devices');
    dispatch({ type: 'PULL_DEVICES', payload: devices });
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      populateDevice();
    }
  }, []);

  return (
    <section className="p-6">
      <SharedDashboardContext.Provider
        value={{ sharedFilters, setSharedFilters, deviceState, dispatch }}
      >
        <DeviceToolbar />
        <DeviceFilterPanel />
        <DeviceTables devices={deviceState} />
      </SharedDashboardContext.Provider>
    </section>
  );
};

export default DashboardContainer;
