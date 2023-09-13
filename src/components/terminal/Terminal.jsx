import React from "react";
import "./terminal.css";

const Terminal = ({heading}) => {
  return (
    <div className="obs__terminal">
      <div className ="obs__terminal-terminal">
        <div className = "obs__terminal-terminal-buttons__container">
          <div className="obs__terminal-terminal-buttons red"></div>
          <div className="obs__terminal-terminal-buttons amber"></div>
          <div className="obs__terminal-terminal-buttons green"></div>
        </div>
        <div className="obs__terminal-terminal-body">
          <h1 className="obs__terminal-heading">{heading.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
