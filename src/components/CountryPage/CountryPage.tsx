import "./CountryPage.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";

import { searchCountry } from "../../helpers/search";
import { formattedAPIResponse } from "../../types";

import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";

function CountryPage() {
  const [actualCountry, setActualCountry] = useState<formattedAPIResponse | null>(null);
  const countries = useAppSelector((state) => state.countries.data);
  const { name } = useParams();

  useEffect(() => {
    setActualCountry(searchCountry(name, countries));
  }, [name, countries]);

  return (
    <div className="country-page-container">
      <BackButton />
      <CountryDetails country={actualCountry} />
    </div>
  );
}

export default CountryPage;
