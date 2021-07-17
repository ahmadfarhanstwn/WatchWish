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
        <div className="header">
          <h5>
            <Link to="/">Find Movies</Link>
          </h5>
          <h5>
            <Link to="/wishlist">Your Wishlist</Link>
          </h5>
        </div>
        <Switch>
          <Route exact path="/">
            <SearchPage movies={movies} addWishlist={addWishlist} />
          </Route>
          <Route exact path="/wishlist">
            <WishListPage wishlist={wishlist} removeWishlist={removeWishlist} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
