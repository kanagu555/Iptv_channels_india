import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <div>Loading...</div>
    </div>
  );
}

export default LoadingSpinner