import React from "react";
import "./SkillsPage.css";
import Page from "../Common/Page";
import SkillEntry from "./SkillEntry";
import skillSetData from "./SkillSetData";

class SkillsPage extends React.Component {
  state = {
    selectedSkill: 0
  };

  onSelectSkillEntry = index => () => this.setState({ selectedSkill: index });

  render() {
    const { inputRef, ...pageProps } = this.props;
    const { selectedSkill } = this.state;
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
              onClick={this.onSelectSkillEntry(index)}
            />
          ))}
        </div>
        <div className="SkillDescription">
          {skillSetData && skillSetData[selectedSkill].description}
        </div>
      </Page>
    );
  }
}
export default SkillsPage;
