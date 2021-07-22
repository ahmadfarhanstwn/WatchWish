import { useState } from "react";

const localWishlistData = () => {
  return JSON.parse(localStorage.getItem("watchwish")) || [];
};

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [wishlist, setWishlist] = useState(localWishlistData);
  const [movieDetails, setMovieDetails] = useState({});
  const [open, setOpen] = useState(false);
  const [isSearchPages, setIsSearchPages] = useState(true);
  const [openSnackbarAdd, setOpenSnackbarAdd] = useState(false);
  const [openSnackbarRemove, setOpenSnackbarRemove] = useState(false);

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

  const getMovieDetails = async (imdbId) => {
    const url = `http://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=4ae3e8c0`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovieDetails(responseJson);
    } else {
      setMovieDetails({});
    }
  };

  const clickDetails = async (imdbID) => {
    await getMovieDetails(imdbID);
    setOpen(true);
    console.log(movieDetails);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const searchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const saveToLocalStorage = (watchwish) => {
    localStorage.setItem("watchwish", JSON.stringify(watchwish));
  };

  const addWishlist = (movie) => {
    const addedWishlistList = [...wishlist, movie];
    setWishlist(addedWishlistList);
    saveToLocalStorage(addedWishlistList);
    setOpenSnackbarAdd(true);
  };

  const removeWishlist = (movie) => {
    const removedWishlistList = wishlist.filter(
      (wish) => wish.imdbID != movie.imdbID
    );
    setWishlist(removedWishlistList);
    setOpenSnackbarRemove(true);
    saveToLocalStorage(removedWishlistList);
  };

  return {
    movies,
    searchValue,
    getMovieRequest,
    searchChange,
    addWishlist,
    removeWishlist,
    wishlist,
    clickDetails,
    movieDetails,
    open,
    handleClose,
    isSearchPages,
    setIsSearchPages,
    openSnackbarAdd,
    setOpenSnackbarAdd,
    openSnackbarRemove,
    setOpenSnackbarRemove,
    setWishlist,
  };
};
