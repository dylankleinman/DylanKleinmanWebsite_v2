import React, { useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "/Users/dylan/Desktop/code/github/PortfolioV2/src/assests/animatedJSON/splash.json";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        {/* <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div> */}
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
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2500);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
