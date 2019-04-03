import React, { useState } from "react";
import "./SkillsPage.css";
import Page from "../Common/Page/Page";
import SkillEntry from "./SkillEntry";
import skillSetData from "./SkillSetData";

const SkillsPage = ({ inputRef, ...pageProps }) => {
  const [selectedSkill, setSkill] = useState(0);
  return (
    <Page
      title="Skills"
      className="SkillsPage"
      inputRef={inputRef}
      {...pageProps}
    >
      <div className="SkillList">
        {skillSetData.map((skill, index) => (
          <SkillEntry
            key={index}
            active={selectedSkill === index}
            skill={skill}
            onClick={() => setSkill(index)}
          />
        ))}
      </div>
      <div className="SkillDescription">
        {skillSetData && skillSetData[selectedSkill].description}
      </div>
    </Page>
  );
};

export default SkillsPage;
