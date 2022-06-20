import { formattedAPIResponse } from "../../types";

// create a new interface for prop types
interface CardProps{
    country: formattedAPIResponse;
 }
 

const SingleCard = ({country}: CardProps) => {
    return (
        <article className="card">
            <img src={country.flags.png} alt={`${country.name.official} flag.`} className="card__image" />
            <h2>{country.name.common}</h2>
            <div className="card__text-container">
                <p className="card__text-key">Population:</p>
                <p>{country.population}</p>
            </div>
            <div className="card__text-container">
                <p className="card__text-key">Region:</p>
                <p>{country.region}</p>
            </div>
            <div className="card__text-container">
                <p className="card__text-key">Capital:</p>
                <p>{country.capital}</p>
            </div>
        </article>
    )
}

export default SingleCard;