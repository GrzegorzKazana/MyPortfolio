import React from "react";
import Page from "../Common/Page";
import "./SkillsPage.css";

const SkillsPage = ({ inputRef, ...pageProps }) => (
  <Page
    title="Skills"
    className="SkillsPage"
    inputRef={inputRef}
    {...pageProps}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero
    metus, porta in nisl non, congue feugiat nisi. Morbi a elit semper mi
    blandit tincidunt. Fusce nec venenatis lectus. Nullam aliquet vel erat at
    semper. Vivamus a ullamcorper ipsum. Proin rhoncus tempus facilisis. Mauris
    at metus vitae purus lobortis imperdiet vitae et felis. Morbi fringilla nibh
    eu venenatis laoreet. Integer a lacinia lorem, eget feugiat sapien. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
    himenaeos. Nullam molestie urna at rhoncus consectetur. Vivamus sapien
    metus, fringilla auctor auctor vel, semper sit amet metus. Orci varius
    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Praesent aliquet enim eu lorem fermentum, ut pellentesque turpis mollis.
    Vivamus vestibulum odio est, eget aliquet nisl pharetra a.
  </Page>
);
export default SkillsPage;
