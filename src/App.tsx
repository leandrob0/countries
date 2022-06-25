import './App.css';

import { useAppSelector } from "./hooks/redux";
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import CountryPage from './components/CountryInfo/CountryPage';

function App() {
  const mode = useAppSelector((state) => state.mode.value);

  return (
    <div id="App" className={mode === 'dark' ? '' : 'light'}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:name" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
