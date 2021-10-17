import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ProjectCard({ repo, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          // onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
            <div style={{ marginLeft: "auto", marginBottom: "auto" }}>
              {repo.github ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={repo.github}
                  style={{ marginRight: "1vw", color: "rgb(85, 26, 139)" }}
                >
                  <OverlayTrigger
                    key={repo.name}
                    placement={"top"}
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>View Code on Github</strong>
                      </Tooltip>
                    }
                  >
                    <i class="fab fa-github fa-2x"></i>
                  </OverlayTrigger>
                </a>
              ) : (
                ""
              )}
              {repo.url ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={repo.url}
                  style={{ color: "dimgray" }}
                >
                  <OverlayTrigger
                    key={repo.name}
                    placement={"top"}
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>View Project</strong>
                      </Tooltip>
                    }
                  >
                    <i class="fas fa-external-link-alt fa-2x"></i>
                  </OverlayTrigger>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
