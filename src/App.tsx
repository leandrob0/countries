import './App.css';

import { useEffect } from "react";
import { getAllCountries } from "./services/fetchData";

import Header from './components/Header/Header';

function App() {

  useEffect(() => {
    getAllCountries()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="App" className=''>
      <Header />
      {/*<button onClick={() => {
        document.querySelector('#App')?.classList.toggle('light');
      </div>}}>Hola</button>*/}
    </div>
  );
}

export default App;
