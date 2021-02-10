import React from "react";
import Typed from "react-typed";
const Header = () => {
  return (
    <div id="header" className="header-wrapper">
      <div className="main-info">
        <h1>Full Stack Developer</h1>
        <Typed
          className="typed-text"
          strings={["MERN Stack", "MongoDB", "Express", "ReactJS", "NodeJS"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
