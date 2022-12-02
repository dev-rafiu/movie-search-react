import React from "react";
import Alert from "./Alert";

function Header({
  onSubmit,
  loading,
  movieName,
  alert,
  hideAlert,
  onNameChange,
}) {
  return (
    <header className="header">
      <div className="section-center">
        <h2 className="title">Movie Search</h2>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onNameChange}
            value={movieName}
            placeholder="type your movie name..."
          />
          <button type="submit" disabled={loading}>
            Search
          </button>
        </form>
        {alert && <Alert alert={alert} hideAlert={hideAlert} />}
      </div>
    </header>
  );
}

export default Header;
