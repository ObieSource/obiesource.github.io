import React from "react";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="obs__introduction">
      <div className ="obs__introduction-terminal">
        <div className = "obs__introduction-terminal-buttons__container">
          <div className="obs__introduction-terminal-buttons red"></div>
          <div className="obs__introduction-terminal-buttons amber"></div>
          <div className="obs__introduction-terminal-buttons green"></div>
        </div>
        <div className="obs__introduction-terminal-body">
          <h1 className="obs__introduction-heading anim-typewriter">WHERE DEVELOPERS <br></br>BUILD TOGETHER</h1>
          <div className="obs__introduction-description__container">
            <div className="obs__introduction-description-buls">
              <div className="obs__introduction-description animate">
                <h3>Find your people</h3>
                <p>
                  () =&gt; &#123;Members can present about their projects and find their teammates.&#125;
                </p>
              </div>
              <div className="obs__introduction-description animate">
                <h3>Develop your skills</h3>
                <p>
                () =&gt; &#123;Hone your collaboration skills, as well as learn new technologies.&#125;
                </p>
              </div>
              <div className="obs__introduction-description animate">
                <h3>Contribute to projects</h3>
                <p>() =&gt; &#123;Hop in the development of an in-progress project.&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
