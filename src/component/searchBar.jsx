import React from "react";

function SearchBar(props) {
  return (
    <>
      <input
        className="form-control mr-sm-2"
        name="query"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        value={props.value}
        onChange ={e => props.onChange(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
