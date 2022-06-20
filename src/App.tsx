import './App.css';

import { useEffect } from "react";
import { useAppSelector } from "./hooks/redux";

import { getAllCountries } from "./services/fetchData";

import Header from './components/Header/Header';
import FilterSection from './components/FilterSection/FilterSection';

function App() {
  const mode = useAppSelector((state) => state.mode.value);

  useEffect(() => {
    getAllCountries()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="App" className={mode === 'dark' ? '' : 'light'}>
      <Header />
      <FilterSection />
    </div>
  );
}

export default App;
