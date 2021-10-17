import React, { useState } from "react";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Header from "../components/header/Header";

export default function Main(props) {
  const [splashShow, showSplash] = useState(true);
  setTimeout(() => showSplash(false), 2500);

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
}
