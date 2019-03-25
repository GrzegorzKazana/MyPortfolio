import React from "react";
import "../../App.css";
import { ArrowDownButton } from "./Buttons/Buttons";

const Page = props => (
  <div className={`Page ${props.className}`} ref={props.inputRef}>
    <h1 className="PageTitle">{props.title}</h1>
    <div className="PageContent">{props.children}</div>
    {props.onScrollDown && <ArrowDownButton onClick={props.onScrollDown} />}
  </div>
);

export default Page;
