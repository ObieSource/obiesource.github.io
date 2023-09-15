import React from "react";
import "./resources-more.css";

const ResourcesMore = () => {
  return (
    <div className="obs__resources-more">
      <div className="obs__resources-more-heading">
        &#123;
        <a href="https://drive.google.com/file/d/15X0463G8FPsME3MNhICZDjRrpZsog6Tx/view?usp=sharing">
          ObieSource GitHub workshop slides
        </a>
        &#125;
      </div>
      <div className="obs__resources-more-heading">
        &#123;
        <a href="https://learngitbranching.js.org/">Git branch Visualizer</a>
        &#125;
      </div>

      <div className="obs__resources-more-heading">
        &#123;Learn Git in 15 minutes&#125;
      </div>

      <div className="obs__resources-more-description">
        <iframe
          title="Video: Learn Git in 15 Minutes"
          width="max-width"
          height="max-height"
          src="https://www.youtube.com/embed/USjZcfj8yxE"
        ></iframe>
      </div>

      <div className="obs__resources-more-heading">
        &#123;2D Game Tutorial with Godot&#125;
      </div>

      <div className="obs__resources-more-description">
        <iframe
          title="Video: Godot 2D Game Tutorial"
          width="max-width"
          height="max-height"
          src="https://www.youtube.com/embed/HvPTSZl2WCc"
        ></iframe>
      </div>
    </div>
  );
};

export default ResourcesMore;
