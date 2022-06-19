import { useEffect } from "react";
import { getAllCountries } from "./services/fetchData";

function App() {

  useEffect(() => {
    getAllCountries()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Hola</h1>
    </>
  );
}

export default App;
