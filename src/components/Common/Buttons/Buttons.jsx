import React from "react";
import "./Buttons.css";

export const TextButton = props => (
  <div className="TextButton" onClick={props.onClick}>
    <span>{props.text}</span>
    <div className="UnderLine" />
  </div>
);
