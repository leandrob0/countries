interface CountryProps {
  country: string;
}

function CountryButton({ country }: CountryProps) {
  return <div className="border-country-button">{country}</div>;
}

export default CountryButton;
