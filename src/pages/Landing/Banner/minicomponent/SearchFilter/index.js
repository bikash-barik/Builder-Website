import Filter from "./Filter";
import "./index.css";
import { useState } from "react";
const SearchFilter = () => {
  const [property, setProperty] = useState("ANY");
  const [bedroom, setBedroom] = useState("ANY");
  const [priceRange, setPriceRange] = useState("ANY");
  return (
    <div className="banner-search-filter ">
      <Filter
        title="PROPERTY"
        options={["Residential", "Comercial"]}
        state={property}
        setState={setProperty}
      />
      <Filter
        title="BEDROOM"
        options={["2 BHK", "3 BHK", "4 BHK"]}
        state={bedroom}
        setState={setBedroom}
      />
      <Filter
        title="PRICE RANGE"
        options={["60 - 80 Lakhs", "75 Lakhs - 2 Crore", "2 Crore & Above"]}
        state={priceRange}
        setState={setPriceRange}
      />
      <div className="banner-search">
        <div className="banner-search-button">SEARCH PROPERTIES</div>
      </div>
    </div>
  );
};

export default SearchFilter;
