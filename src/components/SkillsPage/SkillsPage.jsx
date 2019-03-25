import React from "react";
import Page from "../Common/Page";
import "./SkillsPage.css";
import SkillEntry from "./SkillEntry";

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
          <SkillEntry
            active={selectedSkill === 0}
            onClick={this.onSelectSkillEntry(0)}
          />
          <SkillEntry
            active={selectedSkill === 1}
            onClick={this.onSelectSkillEntry(1)}
          />
        </div>
        <div className="SkillDescription" />
      </Page>
    );
  }
}
export default SkillsPage;
