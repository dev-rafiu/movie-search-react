import React, { useEffect } from "react";

function Alert({ alert, hideAlert }) {
  useEffect(() => {
    setTimeout(() => {
      hideAlert();
    }, 2000);
  });

  return (
    <div className="alert-container">
      <p className="alert-text">{alert}</p>
    </div>
  );
}

export default Alert;
