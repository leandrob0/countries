import "./FilterSection.css";

import Search from "./Search";
import Region from "./Region";

const FilterSection = () => {
  return (
    <section className="filter-section">
      <Search />
      <Region />
    </section>
  );
};

export default FilterSection;
