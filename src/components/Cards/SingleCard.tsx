import { formattedAPIResponse } from "../../types";

// create a new interface for prop types
interface CardProps {
  country: formattedAPIResponse;
}

const SingleCard = ({ country }: CardProps) => {
  return (
    <article className="card">
      <img
        src={country.flags.png}
        alt={`${country.name.official} flag.`}
        className="card__image"
      />
      <h2>{country.name.common}</h2>
      <div className="card__text-container">
        <p className="card__text-key">Population:&nbsp;</p>
        <p>{country.population || "Unknown"}</p>
      </div>
      <div className="card__text-container">
        <p className="card__text-key">Region:&nbsp;</p>
        <p>{country.region || "Unknown"}</p>
      </div>
      <div className="card__text-container">
        <p className="card__text-key">Capital:&nbsp;</p>
        <p className="card__text-capital">
          {country.capital !== undefined && country.capital.length !== 0
            ? country.capital.map((capital, index) => {
                return index + 1 === country.capital.length
                  ? capital
                  : capital + ", ";
              })
            : "Unknown"}
        </p>
      </div>
    </article>
  );
};

export default SingleCard;
