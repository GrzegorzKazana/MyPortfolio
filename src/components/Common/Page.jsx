import React from "react";
import "../../App.css";

const Page = props => (
  <div className={`Page ${props.className}`} ref={props.inputRef}>
    <h1 className="PageTitle">{props.title}</h1>
    <div className="PageContent">{props.children}</div>
  </div>
);

export default Page;
