import "./CountryPage.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { formattedAPIResponse } from "../../types";
import { getCountryByName } from "../../services/fetchCountriesData";

import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";
import Spinner from "../Spinner/Spinner";

function CountryPage() {
  const [actualCountry, setActualCountry] = useState<formattedAPIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { name } = useParams();

  useEffect(() => {
    getCountryByName(name ? name : 'Argentina')
      .then((res) => {
        setActualCountry(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className="country-page-container">
      <BackButton />
      {loading ? <Spinner /> : <CountryDetails country={actualCountry} />}
    </div>
  );
}

export default CountryPage;
