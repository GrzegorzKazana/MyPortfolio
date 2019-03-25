import React, { Component } from "react";
import "./App.css";
import HelloPage from "./components/HelloPage/HelloPage";
import AboutPage from "./components/AboutPage/AboutPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.helloPageRef = React.createRef();
    this.aboutPageRef = React.createRef();
    this.skillsPageRef = React.createRef();
    this.projectsPageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.helloPageRef.current);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <HelloPage inputRef={this.helloPageRef} />
        <AboutPage inputRef={this.aboutPageRef} />
        <SkillsPage inputRef={this.skillsPageRef} />
        <ProjectsPage inputRef={this.projectsPageRef} />
      </div>
    );
  }
}

export default App;
