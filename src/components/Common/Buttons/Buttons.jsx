import React from "react";
import "./Buttons.css";

export const TextButton = ({ text, onClick }) => (
  <div className="TextButton" onClick={onClick}>
    <span>{text}</span>
    <div className="UnderLine" />
  </div>
);

export const ArrowDownButton = ({ onClick }) => (
  <span className="ArrowButton Down" onClick={onClick} />
);

export const ArrowUpButton = ({ onClick }) => (
  <span className="ArrowButton Up" onClick={onClick} />
);
