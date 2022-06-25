import './Homepage.css'; 

import FilterSection from "../FilterSection/FilterSection";
import Cards from "../Cards/Cards";

function Homepage() {
  return (
    <div className="homepage-container">
      <FilterSection />
      <Cards />
    </div>
  );
}

export default Homepage;
