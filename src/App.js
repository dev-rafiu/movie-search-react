import React, { useState, useReducer } from "react";

import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { reducer } from "./components/reducer";

const initialState = {
  isLoading: false,
  alert: "",
  loadingText: "",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "38dd258aebmshec9cdf190c739c7p13ae03jsne258e0911332",
      "X-RapidAPI-Host": "movies-and-serials-torrent.p.rapidapi.com",
    },
  };

  // fetch movies from api
  const getMovies = async (name) => {
    try {
      const response = await fetch(
        `https://movies-and-serials-torrent.p.rapidapi.com/movies/search/${name}`,
        options
      );

      const data = await response.json();
      const { movie_count, movies } = data.data;

      if (data && movie_count > 0) {
        dispatch({ type: "DATA" });
        setMovies(movies);
        setMovieName("");
      } else {
        dispatch({ type: "NO_DATA" });
        setMovies([]);
        setMovieName("");
      }
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieName) {
      dispatch({ type: "VALUE" });
      setMovies([]);
      getMovies(movieName);
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setMovieName(value);
  };

  const hideAlert = () => {
    dispatch({ type: "HIDE_ALERT" });
  };

  return (
    <>
      <Header
        onSubmit={handleSubmit}
        movieName={movieName}
        alert={state.alert}
        hideAlert={hideAlert}
        onNameChange={handleNameChange}
      />

      <MoviesList
        movies={movies}
        isLoading={state.isLoading}
        loadingText={state.loadingText}
      />
    </>
  );
}

export default App;
