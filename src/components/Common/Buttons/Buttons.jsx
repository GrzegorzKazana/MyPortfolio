import React from "react";
import "./Buttons.css";

export const TextButton = ({ text, onClick }) => (
  <div className="TextButton" onClick={onClick}>
    <span>{text}</span>
    <div className="UnderLine" />
  </div>
);

export const ArrowDownButton = ({ onClick, className }) => (
  <div className="ArrowButtonWrapper" onClick={onClick}>
    <span className={`ArrowButton Down ${className}`} />
  </div>
);

export const ArrowUpButton = ({ onClick, className }) => (
  <div className="ArrowButtonWrapper" onClick={onClick}>
    <span className={`ArrowButton Up ${className}`} />
  </div>
);
