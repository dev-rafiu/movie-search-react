function Movies(props) {
  const { movie } = props;
  return (
    <article key={movie.id} className="movie">
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className="movie__img"
      />

      <div className="movie__info">
        <h3 className="movie-name">{movie.title_long}</h3>
        <p className="genres">
          Genres:
          {movie.genres.map((genre, index) => (
            <span key={index} className="genre">
              #{genre}
            </span>
          ))}
        </p>
        <a href={movie.url} className="download-link">
          Download
        </a>
      </div>
    </article>
  );
}

export default Movies;
