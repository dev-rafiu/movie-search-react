import React from "react";
import Movie from "./Movie";

function MoviesList({ movies, isLoading, loadingText }) {
  return (
    <main>
      <section className="movies-list">
        {isLoading && <p className="status-text">{loadingText}</p>}
        <div className="section-center">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default MoviesList;
