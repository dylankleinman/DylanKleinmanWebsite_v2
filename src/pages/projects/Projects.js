import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import { style } from "glamor";
import projectJSON from "../../assests/animatedJSON/projects.json";
import Lottie from "react-lottie";

const projectOptions = {
  loop: true,
  autoplay: true,
  animationData: projectJSON,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main" id="projects">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <Lottie options={projectOptions}></Lottie>
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/dylankleinman"
      >
        View All Projects
      </a>
      <br />
      <br />
    </div>
  );
}

export default Projects;
