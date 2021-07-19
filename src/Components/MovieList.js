import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export const MovieList = ({ movies, addWishlist, clickDetails }) => {
  return (
    <div className="movie-list">
      {movies.slice(0, 8).map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <img className="image-movie" src={movie.Poster} alt="movie" />
          <div className="overlay">
            <h5 className="movie-title">
              {movie.Title} ({movie.Year})
            </h5>
            <p onClick={() => clickDetails(movie.imdbID)}>See Details</p>
            <h6 onClick={() => addWishlist(movie)} className="wishlist">
              Add to Wishlist
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};
