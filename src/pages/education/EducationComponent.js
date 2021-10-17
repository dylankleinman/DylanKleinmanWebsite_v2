import React from "react";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import educationJSON from "../../assests/animatedJSON/education.json";
import Lottie from "react-lottie";

const education = {
  loop: true,
  autoplay: true,
  animationData: educationJSON,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main" id="education">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <Lottie options={education} width={400} height={400}></Lottie>
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I am a full time employed college graduate with a Bachelors
                Degree in Computer Science.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
    </div>
  );
}

export default Education;
