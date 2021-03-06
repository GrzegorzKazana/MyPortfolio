import React, { Component } from "react";
import "./App.css";
import HelloPage from "./components/HelloPage/HelloPage";
import AboutPage from "./components/AboutPage/AboutPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import NavBar from "./components/Common/NavBar/NavBar";
import { TextButton } from "./components/Common/Buttons/Buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.helloPageRef = React.createRef();
    this.aboutPageRef = React.createRef();
    this.skillsPageRef = React.createRef();
    this.projectsPageRef = React.createRef();
    this.contactPageRef = React.createRef();
  }

  scrollTo = top => window.scrollTo({ top, behavior: "smooth" });
  scrollToHello = () => this.scrollTo(this.helloPageRef.current.offsetTop);
  scrollToAbout = () => this.scrollTo(this.aboutPageRef.current.offsetTop);
  scrollToSkills = () => this.scrollTo(this.skillsPageRef.current.offsetTop);
  scrollToProjects = () =>
    this.scrollTo(this.projectsPageRef.current.offsetTop);
  scrollToContact = () => this.scrollTo(this.contactPageRef.current.offsetTop);

  render() {
    return (
      <div className="App">
        <NavBar>
          <TextButton text="About" onClick={this.scrollToAbout} />
          <TextButton text="Skills" onClick={this.scrollToSkills} />
          <TextButton text="Projects" onClick={this.scrollToProjects} />
        </NavBar>
        <HelloPage
          inputRef={this.helloPageRef}
          onScrollDown={this.scrollToAbout}
        />
        <AboutPage
          inputRef={this.aboutPageRef}
          onScrollDown={this.scrollToSkills}
        />
        <SkillsPage
          inputRef={this.skillsPageRef}
          onScrollDown={this.scrollToProjects}
        />
        <ProjectsPage
          inputRef={this.projectsPageRef}
          onScrollDown={this.scrollToContact}
        />
        <ContactPage
          inputRef={this.contactPageRef}
          onScrollUp={this.scrollToHello}
        />
      </div>
    );
  }
}

export default App;
