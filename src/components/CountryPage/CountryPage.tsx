import "./CountryPage.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { formattedAPIResponse } from "../../types";
import { getCountryByName } from "../../services/fetchCountriesData";

import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

function CountryPage() {
  const [actualCountry, setActualCountry] = useState<formattedAPIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { name } = useParams();

  useEffect(() => {
    getCountryByName(name ? name : 'Argentina')
      .then((res) => {
        setActualCountry(res);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [name]);

  return (
    <div className="country-page-container">
      <BackButton />
      {error && <Error />}
      {loading ? <Spinner /> : <CountryDetails country={actualCountry} />}
    </div>
  );
}

export default CountryPage;
