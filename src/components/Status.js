import React from "react";

function Loader({ text }) {
  return (
    <div className="status-container">
      <p className="status-text">{text}</p>;
    </div>
  );
}

export default Loader;
