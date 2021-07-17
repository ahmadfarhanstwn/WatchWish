import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieList } from "./Components/MovieList";
import { Search } from "./Components/Search";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="header">
        <div>
          <h1 className="app-title">WatchWish</h1>
        </div>
        <div>
          <Search searchValue={searchValue} searchChange={searchChange} />
        </div>
      </div>
      <h5>Find Movie, TV Series, Anime & etc</h5>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
