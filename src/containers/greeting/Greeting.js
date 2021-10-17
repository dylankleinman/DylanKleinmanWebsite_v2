import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { Typewriter } from "react-simple-typewriter";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>&nbsp;</span>
                <span style={{ color: theme.accentColor }}>
                  <Typewriter
                    words={[
                      "Web Developer",
                      "Web3 Engineer",
                      "Defi Enthusiast",
                      "Video Game Developer",
                      "Surfer",
                      "Street Artist",
                    ]}
                    loop={false}
                  />
                </span>
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
