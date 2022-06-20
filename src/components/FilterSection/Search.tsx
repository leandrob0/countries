import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <form className="search-form">
      <button className="search-form__button">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-form__icon"
        />
      </button>
      <input
        placeholder="Search for a country..."
        className="search-form__input"
      />
    </form>
  );
};

export default Search;
