import {
  getCountriesByRegion,
  getAllCountries,
} from "../../services/fetchCountriesData";

import { useAppDispatch } from "../../hooks/redux";
import { setCountries } from "../../features/countriesSlice";

const RegionList = () => {
  const dispatch = useAppDispatch();

  const clickHandler = (evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const target = evt.target as HTMLParagraphElement;
    
    if(target.id === 'all') {
      getAllCountries()
        .then(res =>  dispatch(setCountries(res)))
        .catch(err => console.log(err));
    } else {
      getCountriesByRegion(target.id)
        .then(res =>  dispatch(setCountries(res)))
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="filter-options">
      <p onClick={clickHandler} id="all" className="filter-options__text">
        All
      </p>
      <p onClick={clickHandler} id="africa" className="filter-options__text">
        Africa
      </p>
      <p onClick={clickHandler} id="america" className="filter-options__text">
        America
      </p>
      <p onClick={clickHandler} id="asia" className="filter-options__text">
        Asia
      </p>
      <p onClick={clickHandler} id="europe" className="filter-options__text">
        Europe
      </p>
      <p onClick={clickHandler} id="oceania" className="filter-options__text">
        Oceania
      </p>
    </div>
  );
};

export default RegionList;
