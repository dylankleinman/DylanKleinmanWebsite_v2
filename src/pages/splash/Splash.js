import React from "react";
import "./Splash.css";
import Lottie from "react-lottie";
import animationData from "/Users/dylan/Desktop/code/github/PortfolioV2/src/assests/animatedJSON/splash.json";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Splash(props) {
  return <AnimatedSplash theme={props.theme} />;
}

export default Splash;
