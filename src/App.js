import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useMovies } from "./Hooks/useMovies";
import { SearchPage } from "./Pages/SearchPage";
import { WishListPage } from "./Pages/WishlistPage";
import { Search } from "./Components/Search";
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
          <Search searchValue={searchValue} searchChange={searchChange} />
        </div>
      </div>
      <Router>
        <div className="link-header">
          <a className="link link--eirene">
            <span>
              <Link to="/">Find Movies/Series/Anime</Link>
            </span>
          </a>
          <a className="link link--eirene">
            <span>
              <Link to="/wishlist">Your Watchwish</Link>
            </span>
          </a>
        </div>
        <Switch>
          <Route exact path="/">
            <SearchPage
              movies={movies}
              addWishlist={addWishlist}
              clickDetails={clickDetails}
            />
          </Route>
          <Route exact path="/wishlist">
            <WishListPage
              wishlist={wishlist}
              removeWishlist={removeWishlist}
              clickDetails={clickDetails}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
