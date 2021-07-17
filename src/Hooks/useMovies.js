import { useState } from "react";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4ae3e8c0`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
  };

  const searchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const addWishlist = (movie) => {
    const addedWishlistList = [...wishlist, movie];
    setWishlist(addedWishlistList);
    console.log(wishlist);
  };

  const removeWishlist = (movie) => {
    const removedWishlistList = wishlist.filter(
      (wish) => wish.imdbID != movie.imdbID
    );
    setWishlist(removedWishlistList);
  };

  return {
    movies,
    searchValue,
    getMovieRequest,
    searchChange,
    addWishlist,
    removeWishlist,
    wishlist,
  };
};
