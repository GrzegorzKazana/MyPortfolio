import React from "react";
import "./SkillsPage.css";

const SkillRank = ({ level, maxLevel }) => (
  <div className="SkillRank">
    {new Array(maxLevel).fill(0).map((_, index) => (
      <div
        key={index}
        className={index < level ? "SkillRankMarkActive" : "SkillRankMark"}
      />
    ))}
  </div>
);

const SkillEntry = props => (
  <div className="SkillEntry">
    <i className="devicon-javascript-plain" />
    <SkillRank level={3} maxLevel={5} />
  </div>
);
export default SkillEntry;
