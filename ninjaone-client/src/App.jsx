import React from 'react';

import Header from '@organisms/Header';
import DashboardContainer from './components/containers/DashboardContainer';

import './App.css';

const App = () => {
  return (
    <div className="App" id="App-root">
      <Header />
      <DashboardContainer />
    </div>
  );
};

export default App;
