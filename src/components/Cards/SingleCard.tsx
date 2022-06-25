import { formattedAPIResponse } from "../../types";
import { formatCapitals, formatPopulation } from "../../helpers/formatters";
import { Link } from "react-router-dom";

// create a new interface for prop types
interface CardProps {
  country: formattedAPIResponse;
}

const SingleCard = ({ country }: CardProps) => {
  return (
    <Link to={country.name.official}>
      <article className="card">
        <img
          src={country.flags.png}
          alt={`${country.name.official} flag.`}
          className="card__image"
        />
        <h2 title={country.name.common}>{country.name.common}</h2>
        <div className="card__text-container">
          <p className="card__text-key">Population:&nbsp;</p>
          <p>{formatPopulation(country.population)}</p>
        </div>
        <div className="card__text-container">
          <p className="card__text-key">Region:&nbsp;</p>
          <p>{country.region || "Unknown"}</p>
        </div>
        <div className="card__text-container">
          <p className="card__text-key">Capital:&nbsp;</p>
          <p
            className="card__text-capital"
            title={formatCapitals(country.capital)}
          >
            {formatCapitals(country.capital)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default SingleCard;
