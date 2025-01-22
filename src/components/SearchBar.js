import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      className="search-bar"
    />
  );
};

export default SearchBar;
