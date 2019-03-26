import React from "react";
import Page from "../Common/Page";
import "./AboutPage.css";

const AboutPage = ({ inputRef, ...pageProps }) => (
  <Page title="About" className="AboutPage" inputRef={inputRef} {...pageProps}>
    <div>
      <p>
        I am a third year undergraduate student in Computer Science in Silesian
        University Of Technology.
      </p>
      <p>
        I am really into learning new things and broadening my current
        experience.
      </p>
      <p>
        My craft is forging awesome websites with ReactJS. In my free time I
        also like to dive deep into the world of Machine Learning. Not scared of
        math.
      </p>
      <p>The following page was built in pure React.</p>
    </div>
  </Page>
);
export default AboutPage;
