import './App.css';

import { useAppSelector } from "./hooks/redux";

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const mode = useAppSelector((state) => state.mode.value);

  return (
    <div id="App" className={mode === 'dark' ? '' : 'light'}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
