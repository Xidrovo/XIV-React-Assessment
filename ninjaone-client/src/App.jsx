import React from 'react';
import Modal from '@molecule/Modal';
import useApi from './hooks/useAPI';
import Header from './components/organism/Header';
import WindowsIcon from '@icons/WindowsIcon';
import LinuxIcon from '@icons/LinuxIcon';
import MacIcon from '@icons/MacIcon';
import AddIcon from '@icons/AddIcon';
import MagnifierIcon from '@icons/MagnifierIcon';
import RefreshIcon from '@icons/RefreshIcon';

import './App.css';

const App = () => {
  const { get } = useApi('/api');

  return (
    <div className="App">
      <Header />
      <Modal></Modal>
      <WindowsIcon />
      <LinuxIcon />
      <MacIcon />
      <AddIcon fill="#000" />
      <MagnifierIcon />
      <RefreshIcon />
      <button
        className="p-3 bg-blue-800 text-white cursor-pointer"
        onClick={async () => {
          const data = await get('/devices');
          console.log(data);
        }}
      >
        click me!
      </button>
      <div>should be above this</div>
    </div>
  );
};

export default App;
