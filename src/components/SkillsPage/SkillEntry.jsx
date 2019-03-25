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

const SkillEntry = ({ active, skill, onClick }) => (
  <div className={`SkillEntry ${active ? "active" : ""}`} onClick={onClick}>
    <i className={skill.icon} />
    <SkillRank level={skill.level} maxLevel={5} />
  </div>
);
export default SkillEntry;
