import React from "react";
import {Terminal, AboutMore, Members} from "../../components"

const About = () => {
  return (
    <div id="about">
      <Terminal heading="About"/>
      <AboutMore/>
      <Members/>
    </div>
  );
};

export default About;
