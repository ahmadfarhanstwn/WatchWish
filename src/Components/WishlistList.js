import React from "react";

export const WishlistList = ({ wishlist, removeWishlist }) => {
  return (
    <div className="movie-list">
      {wishlist.map((wish, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <img className="image-movie" src={wish.Poster} alt="movie" />
          <div className="overlay">
            <h5 className="movie-title">{wish.Title}</h5>
            <p>{wish.Year}</p>
            <h6 onClick={() => removeWishlist(wish)} className="wishlist">
              Remove From Wishlist
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};
