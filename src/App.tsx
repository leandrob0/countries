import './App.css';

import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from './store';

import { getAllCountries } from "./services/fetchData";

import Header from './components/Header/Header';

function App() {
  const mode = useSelector((state: RootState) => state.mode.value);

  useEffect(() => {
    getAllCountries()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="App" className={mode === 'dark' ? '' : 'light'}>
      <Header />
    </div>
  );
}

export default App;
