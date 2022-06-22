import './Cards.css';

import { useEffect } from "react";
import { setCountries } from "../../features/countriesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { getAllCountries } from "../../services/fetchCountriesData";

import SingleCard from "./SingleCard";
import Spinner from '../Spinner/Spinner';

const Cards = () => {
  const countries = useAppSelector((state) => state.countries.data);
  const loading = useAppSelector((state) => state.countries.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllCountries()
      .then((res) => dispatch(setCountries(res)))
      .catch(() => dispatch(setCountries([])));
  }, [dispatch]);

  return (
    <section className="cards-container">
      {loading && <Spinner />}
      {countries.length === 0 && 'No results found.'}
      {countries.length > 0 && countries.map(country => <SingleCard key={country.name.official} country={country}/>)}
    </section>
  );
};

export default Cards;
