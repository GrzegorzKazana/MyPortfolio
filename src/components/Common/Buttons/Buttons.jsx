import React from "react";
import "./Buttons.css";

export const TextButton = ({ text, onClick }) => (
  <div className="TextButton" onClick={onClick}>
    <span>{text}</span>
    <div className="UnderLine" />
  </div>
);

export const ArrowDownButton = ({ onClick, className }) => (
  <span className={`ArrowButton Down ${className}`} onClick={onClick} />
);

export const ArrowUpButton = ({ onClick, className }) => (
  <span className={`ArrowButton Up ${className}`} onClick={onClick} />
);
