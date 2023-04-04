import React from 'react';
import Modal from './components/common/Modal';
import useApi from './hooks/useAPI';

import WindowsIcon from './components/Icons/WindowsIcon';
import LinuxIcon from './components/Icons/LinuxIcon';
import MacIcon from './components/Icons/MacIcon';
import AddIcon from './components/Icons/AddIcon';
import MagnifierIcon from './components/Icons/MagnifierIcon';
import RefreshIcon from './components/Icons/RefreshIcon';

import './App.css';

const App = () => {
  const { get } = useApi('/api');

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-700 bg-slate-800">
        Hello world!
      </h1>
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
