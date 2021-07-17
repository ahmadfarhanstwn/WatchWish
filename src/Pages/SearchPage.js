import React from "react";
import { Search } from "../Components/Search";
import { MovieList } from "../Components/MovieList";

export const SearchPage = ({ movies, addWishlist }) => {
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} addWishlist={addWishlist} />
      </div>
    </div>
  );
};
