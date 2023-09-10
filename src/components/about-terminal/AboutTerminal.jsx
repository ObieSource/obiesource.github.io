import React from "react";
import "./about-terminal.css";

const AboutTerminal = () => {
  return (
    <div className="obs__about-terminal">
      <div className ="obs__about-terminal-terminal">
        <div className = "obs__about-terminal-terminal-buttons__container">
          <div className="obs__about-terminal-terminal-buttons red"></div>
          <div className="obs__about-terminal-terminal-buttons amber"></div>
          <div className="obs__about-terminal-terminal-buttons green"></div>
        </div>
        <div className="obs__about-terminal-terminal-body">
          <h1 className="obs__about-terminal-heading">ABOUT</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutTerminal;
