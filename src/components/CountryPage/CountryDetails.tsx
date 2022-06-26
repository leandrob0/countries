import { formatCapitals, formatPopulation, formatCurrencies } from "../../helpers/formatters";
import { formattedAPIResponse } from "../../types";

import InfoDisplay from "./InfoDisplay";

// create a new interface for prop types
interface CountryProps {
  country: formattedAPIResponse | null;
}

function CountryDetails({ country }: CountryProps) {
  return (
    <main className="content-country">
      <img className="country-image" src={country?.flags.svg} alt={country?.name.common + " flag"} />
      <section className="country-information">
        <h1>{country?.name.common}</h1>
        <div className="information-container">
          <div>
            <InfoDisplay label="Official name" information={country?.name.official}/>
            <InfoDisplay label="Population" information={formatPopulation(country?.population)}/>
            <InfoDisplay label="Region" information={country?.region}/>
            <InfoDisplay label="Sub Region" information={country?.subregion}/>
            <InfoDisplay label="Capital" information={formatCapitals(country?.capital)}/>
          </div>
          <div>
            <InfoDisplay label="Top Level Domain" information={country?.name.official}/>
            <InfoDisplay label="Currencies" information={formatCurrencies(country?.currencies)}/>
            <InfoDisplay label="Languages" information=""/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CountryDetails;
