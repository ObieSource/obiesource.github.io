import React from "react";
import "./resources.css";

const Resources = () => {
  return (
    <main className="content color__text">
      <h1>ObieSource Resources</h1>
      <h2>Learning Git</h2>
      <h3>Learn Git in 15 Minutes</h3>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/USjZcfj8yxE"
      ></iframe>
      <br />
      <br />
      <a href="https://drive.google.com/file/d/15X0463G8FPsME3MNhICZDjRrpZsog6Tx/view?usp=sharing">
        ObieSource GitHub workshop slides
      </a>
      <br />
      <br />
      <a href="https://learngitbranching.js.org/">Git Branch Visualizer</a>

      <h2>Learning Godot</h2>
      <h3>2D Game Tutorial</h3>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/HvPTSZl2WCc"
      ></iframe>
    </main>
  );
};

export default Resources;
