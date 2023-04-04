import React from 'react';

import Header from './components/organism/Header';
import DashboardContainer from './components/containers/DashboardContainer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DashboardContainer />
    </div>
  );
};

export default App;
