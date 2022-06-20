import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import RegionList from "./RegionList";

const Region = () => {
  const [showRegions, setShowRegions] = useState<boolean>(false);

  const handleClick = () => {
    setShowRegions(!showRegions);
  }

  return (
    <div className="filter-region" onClick={handleClick}>
      <p className="filter-region__text">Filter by Region</p>
      <FontAwesomeIcon icon={faChevronDown} className="filter-region__icon"/>
      {showRegions && <RegionList />}
    </div>
  );
};

export default Region;
