import React, { Component } from "react";
import "./App.css";
import HelloPage from "./components/HelloPage/HelloPage";
import AboutPage from "./components/AboutPage/AboutPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.helloPageRef = React.createRef();
    this.aboutPageRef = React.createRef();
    this.skillsPageRef = React.createRef();
    this.projectsPageRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <HelloPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
      </div>
    );
  }
}

export default App;
