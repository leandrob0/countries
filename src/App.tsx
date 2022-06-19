import './App.css';

import { useEffect } from "react";
import { getAllCountries } from "./services/fetchData";

function App() {

  useEffect(() => {
    getAllCountries()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="App" className='light'>
      <button onClick={() => {
        document.querySelector('#App')?.classList.toggle('light');
      }}>Hola</button>
    </div>
  );
}

export default App;
