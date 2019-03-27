import React from "react";
import "./Page.css";
import { ArrowDownButton, ArrowUpButton } from "../Buttons/Buttons";

const Page = props => (
  <div className={`Page ${props.className}`} ref={props.inputRef}>
    {props.title && <h1 className="PageTitle">{props.title}</h1>}
    <div className="PageContent">{props.children}</div>
    {props.onScrollDown && <ArrowDownButton onClick={props.onScrollDown} />}
    {props.onScrollUp && <ArrowUpButton onClick={props.onScrollUp} />}
  </div>
);

export default Page;
