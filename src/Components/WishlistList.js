import React from "react";

export const WishlistList = ({ wishlist, removeWishlist, clickDetails }) => {
  return (
    <div className="movie-list">
      {wishlist.map((wish, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <img
            className="image-movie"
            onClick={() => clickDetails(wish.imdbID)}
            src={wish.Poster}
            alt="movie"
          />
          <div className="overlay">
            <h5 className="movie-title">
              {wish.Title} ({wish.Year})
            </h5>
            <p onClick={() => clickDetails(wish.imdbID)}>See Details</p>
            <h6 onClick={() => removeWishlist(wish)} className="wishlist">
              Remove From Watchwish
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};
