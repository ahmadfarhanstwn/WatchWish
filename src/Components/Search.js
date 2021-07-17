import React from "react";
import "font-awesome/css/font-awesome.min.css";

export const Search = ({ searchValue, searchChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        value={searchValue}
        onChange={searchChange}
        placeholder="Search Movie, Series, Anime, etc"
      />
      <i className="fa fa-search"></i>
    </div>
  );
};
