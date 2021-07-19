import React from "react";
import { WishlistList } from "../Components/WishlistList";

export const WishListPage = ({ wishlist, removeWishlist, clickDetails }) => {
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <WishlistList
          wishlist={wishlist}
          removeWishlist={removeWishlist}
          clickDetails={clickDetails}
        />
      </div>
    </div>
  );
};
