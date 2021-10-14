import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div id="home" style={{ position: "relative", zIndex: "-1" }}>
      {/* <Header theme={props.theme} setTheme={props.setTheme} /> */}
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      {/* <Footer theme={props.theme} /> */}
    </div>
  );
}

export default Home;
