import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Region = () => {
  return (
    <div className="filter-region">
      <p className="filter-region__text">Filter by Region</p>
      <FontAwesomeIcon icon={faChevronDown} className="filter-region__icon"/>
    </div>
  );
};

export default Region;
