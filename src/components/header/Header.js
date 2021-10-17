import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";
import Headroom from "react-headroom";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    // marginRight: "5px",
    // marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Headroom>
      <Fade top duration={1000} distance="20px">
        <header
          className="header"
          style={{ background: theme.body, transition: "all .35s" }}
        >
          <a href="/" className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a
                className="homei"
                href="#home"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="xp"
                href="#experience"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="projects"
                href="#projects"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="ec"
                href="#education"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Education
              </a>
            </li>
            <li>
              <a
                className="cr"
                href="#contact"
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Contact
              </a>
            </li>
          </ul>
          <button {...styles} onClick={changeTheme}>
            {icon}
          </button>
        </header>
      </Fade>
    </Headroom>
  );
}

export default Header;
