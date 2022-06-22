import './Cards.css';

import { useEffect } from "react";
import { setCountries } from "../../features/countriesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { getAllCountries } from "../../services/fetchCountriesData";

import SingleCard from "./SingleCard";

const Cards = () => {
  const countries = useAppSelector((state) => state.countries.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllCountries()
      .then((res) => dispatch(setCountries(res)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <section className="cards-container">
      {countries.map(country => <SingleCard key={country.name.official} country={country}/>)}
    </section>
  );
};

export default Cards;
