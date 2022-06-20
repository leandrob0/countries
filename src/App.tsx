import './App.css';

import { useAppSelector } from "./hooks/redux";

import Header from './components/Header/Header';
import FilterSection from './components/FilterSection/FilterSection';
import Cards from './components/Cards/Cards';

function App() {
  const mode = useAppSelector((state) => state.mode.value);

  return (
    <div id="App" className={mode === 'dark' ? '' : 'light'}>
      <Header />
      <FilterSection />
      <Cards />
    </div>
  );
}

export default App;
