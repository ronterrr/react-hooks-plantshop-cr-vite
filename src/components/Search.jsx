import React from "react";

function Search({ setSearchItem }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          console.log("Searching...");
          setSearchItem(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
