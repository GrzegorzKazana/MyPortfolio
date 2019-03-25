import React from "react";
import "./Buttons.css";

export const TextButton = ({ text, onClick }) => (
  <div className="TextButton" onClick={onClick}>
    <span>{text}</span>
    <div className="UnderLine" />
  </div>
);
