import { formattedAPIResponse } from "../../types";

// create a new interface for prop types
interface CountryProps {
  country: formattedAPIResponse | null;
}

function CountryDetails({ country }: CountryProps) {
  return <div>CountryDetails</div>;
}

export default CountryDetails;
