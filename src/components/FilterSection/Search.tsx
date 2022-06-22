import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

import { getCountriesByQuery } from "../../services/fetchCountriesData";
import { useAppDispatch } from "../../hooks/redux";
import { setCountries } from "../../features/countriesSlice";

const Search = () => {
  const [country, setCountry] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLFormElement;
    const inputValue = target['country-search'].value;

    if(inputValue !== undefined && inputValue !== "") {
      getCountriesByQuery(inputValue)
        .then(res => dispatch(setCountries(res)));
    } else {
      return;
    }
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
        autoComplete="off"
        placeholder="Search for a country..."
        className="search-form__input"
      />
    </form>
  );
};

export default Search;
