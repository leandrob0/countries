import "./CountryPage.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import BackButton from "./BackButton";
import { useAppSelector } from "../../hooks/redux";
import { searchCountry } from "../../helpers/search";

function CountryPage() {
  const countries = useAppSelector((state) => state.countries.data);
  const { name } = useParams();

  useEffect(() => {
    console.log(searchCountry(name, countries));
  }, [name, countries]);

  return (
    <div className="country-page-container">
      <BackButton />
    </div>
  );
}

export default CountryPage;
