import React from "react";
import { Link } from "react-router-dom";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="obs__introduction">
      <div className="obs__introduction-heading">
        <h1>Where developers build togeher</h1>
      </div>
      <div className="obs__introduction-description__container">
        <div className="obs__introduction-description-buls">
          <div className="obs__introduction-description description_first-bul">
            <h3>Find your people</h3>
            <p>
              Members can present about their projects and find their teammates.
            </p>
          </div>
          <div className="obs__introduction-description description_second-bul">
            <h3>Contribute to projects</h3>
            <p>Hop in the development of an in-progress project.</p>
          </div>
          <div className="obs__introduction-description description_third-bul">
            <h3>Develop your skills</h3>
            <p>
              Hone your collaboration skills, as well as learn new technologies.
            </p>
          </div>
          <div className="obs__introduction-links">
            <Link to="/about">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="obs__introduction"></div>
    </div>
  );
};

export default Introduction;
