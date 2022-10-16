import React, { useState, useReducer, useContext } from "react";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { reducer } from "./components/reducer";
import { options } from "./components/fetchOptions";

const initialState = {
  loading: false,
  alert: "",
  loadingText: "",
};

const AppContext = React.createContext();

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

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
    } catch {
      dispatch({ type: "ERROR" });
    }
  };

  // useEffect(() => {}, []);

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

  const handleChange = (e) => {
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
        handleChange={handleChange}
      />

      <MoviesList
        movies={movies}
        loading={state.loading}
        loadingText={state.loadingText}
      />
    </>
  );
}

export default App;
