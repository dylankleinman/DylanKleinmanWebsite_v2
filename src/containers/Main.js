import React, { useState } from "react";
// import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Header from "../components/header/Header";

export default function Main(props) {
  const [splashShow, showSplash] = useState(true);
  setTimeout(() => showSplash(false), 2500);

  if (settings.isSplash) {
    return (
      <div>
        {splashShow ? (
          <div>
            <Splash {...props}></Splash>
          </div>
        ) : (
          <div>
            <Header theme={props.theme} setTheme={props.setTheme} />
            <Home {...props}></Home>
            <Experience {...props}></Experience>
            <Projects {...props}></Projects>
            <Education {...props}></Education>
            <Contact {...props}></Contact>
          </div>
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
}
