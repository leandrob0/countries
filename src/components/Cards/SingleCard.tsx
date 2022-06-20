import { formattedAPIResponse } from "../../types";

// create a new interface for prop types
interface CardProps{
    country: formattedAPIResponse;
 }
 

const SingleCard = ({country}: CardProps) => {
    return (
        <article className="card">
            <img src={country.flags.png} alt={`${country.name.official} flag.`} className="card__image" />
        </article>
    )
}

export default SingleCard;