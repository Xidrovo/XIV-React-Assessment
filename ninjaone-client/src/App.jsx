import { useState } from 'react';
import Modal from './components/common/Modal';

import WindowsIcon from './components/Icons/WindowsIcon';
import LinuxIcon from './components/Icons/LinuxIcon';
import MacIcon from './components/Icons/MacIcon';
import AddIcon from './components/Icons/AddIcon';
import MagnifierIcon from './components/Icons/MagnifierIcon';
import RefreshIcon from './components/Icons/RefreshIcon';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

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

      <div>should be above this</div>
    </div>
  );
}

export default App;
