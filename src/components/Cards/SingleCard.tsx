import { formattedAPIResponse } from "../../types";

// create a new interface for prop types
interface CardProps{
    country: formattedAPIResponse;
 }
 

const SingleCard = ({country}: CardProps) => {
    return <h1>{country.name.official}</h1>
}

export default SingleCard;