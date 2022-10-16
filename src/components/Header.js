import React from "react";
import Alert from "./Alert";

function Header({
  onSubmit,
  loading,
  movieName,
  alert,
  hideAlert,
  handleChange,
}) {
  return (
    <header className="header">
      <div className="section-center">
        {alert && <Alert alert={alert} hideAlert={hideAlert} />}
        <h2>Movie Search</h2>

        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={movieName}
            placeholder="type your movie name..."
          />
          <button type="submit" disabled={loading}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
