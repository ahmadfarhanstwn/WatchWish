import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { SearchPage } from "./Pages/SearchPage";
import { WishListPage } from "./Pages/WishlistPage";
import { Search } from "./Components/Search";
import { DescriptionPage } from "./Pages/DescriptionPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const {
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
  } = useMovies();

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="header">
        <div>
          <h1 className="app-title">WatchWish</h1>
        </div>
        <div>
          {isSearchPages ? (
            <Search searchValue={searchValue} searchChange={searchChange} />
          ) : (
            ""
          )}
        </div>
      </div>
      <Router>
        <div className="link-header">
          <a
            className="link link--eirene"
            onClick={() => setIsSearchPages(true)}
          >
            <span>
              <Link to="/">Find Movies/Series/Anime</Link>
            </span>
          </a>
          <a
            className="link link--eirene"
            onClick={() => setIsSearchPages(false)}
          >
            <span>
              <Link to="/watchwish">Your Watchwish</Link>
            </span>
          </a>
        </div>
        <Switch>
          <Route exact path="/">
            <SearchPage
              movies={movies}
              addWishlist={addWishlist}
              clickDetails={clickDetails}
              openSnackbarAdd={openSnackbarAdd}
              setOpenSnackbarAdd={setOpenSnackbarAdd}
            />
          </Route>
          <Route exact path="/watchwish">
            <WishListPage
              wishlist={wishlist}
              removeWishlist={removeWishlist}
              clickDetails={clickDetails}
              openSnackbarRemove={openSnackbarRemove}
              setOpenSnackbarRemove={setOpenSnackbarRemove}
            />
          </Route>
        </Switch>
      </Router>
      <DescriptionPage
        handleClose={handleClose}
        open={open}
        movieDetails={movieDetails}
      />
    </>
  );
};

export default App;
