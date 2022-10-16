import React from "react";
import Movie from "./Movie";
import Status from "./Status";

function MoviesList({ movies, loading, loadingText }) {
  return (
    <main>
      {loading && <Status text={loadingText} />}
      <div className="section-center">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}

export default MoviesList;
