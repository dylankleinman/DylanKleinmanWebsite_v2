import React from "react";
import "./FeelingProud.css";
import Lottie from "react-lottie";
import workingDark from "../../assests/animatedJSON/Working_dark.json";
import workingLight from "../../assests/animatedJSON/Working_light.json";

const lightOption = {
  loop: true,
  autoplay: true,
  animationData: workingLight,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const darkOption = {
  loop: true,
  autoplay: true,
  animationData: workingDark,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function FeelingProud(props) {
  const theme = props.theme;
  return (
    <div>
      {theme.name === "light" ? (
        <Lottie options={lightOption} height={400} width={450} />
      ) : (
        <Lottie options={darkOption} height={400} width={450} />
      )}
    </div>
  );
}

export default FeelingProud;
