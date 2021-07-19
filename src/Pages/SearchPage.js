import React from "react";
import { MovieList } from "../Components/MovieList";

export const SearchPage = ({ movies, addWishlist, clickDetails }) => {
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList
          movies={movies}
          addWishlist={addWishlist}
          clickDetails={clickDetails}
        />
      </div>
    </div>
  );
};
