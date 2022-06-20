import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

const Search = () => {
  const [country, setCountry] = useState<string>("");

  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setCountry(evt.target.value);
  }

  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // Hace algo.
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-form__button">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-form__icon"
        />
      </button>
      <input
        onChange={handleChange}
        value={country}
        name='country-search'
        placeholder="Search for a country..."
        className="search-form__input"
      />
    </form>
  );
};

export default Search;
