import React from "react";
import Page from "../Common/Page/Page";
import "./AboutPage.css";

const AboutPage = ({ inputRef, ...pageProps }) => (
  <Page title="About" className="AboutPage" inputRef={inputRef} {...pageProps}>
    <div>
      <p>
        I am a third-year undergraduate student of Computer Science in The
        Silesian University Of Technology.
      </p>
      <p>
        I am all about learning new things and broadening my current experience.
      </p>
      <p>
        My craft is creating attractive websites with React. I'm into minimalism
        and smart design. In my free time I enjoy diving deep into the world of
        Machine Learning. Not scared of math.
      </p>
    </div>
  </Page>
);
export default AboutPage;
