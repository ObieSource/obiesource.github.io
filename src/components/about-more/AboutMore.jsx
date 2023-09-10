import React from "react";
import "./about-more.css";

const AboutMore = () => {
  return (
    <div className="obs__about-more">
        <div className="obs__about-more-heading">
          &#123;What do we do?&#125;
        </div>

        <div className="obs__about-more-description">
        Oberlin Open Source Club (ObieSource) is a club in which students can interact with Oberlin-specific open source projects.<span className="emph-text"> Anyone can join, and anyone can contribute to our projects.</span> To see what we're working on, checkout our <a href="https://github.com/ObieSource" className="link-text">GitHub Page</a>, and explore our website to learn more about our club!
        </div>

        <div className="obs__about-more-heading">
          &#123;What is Open Source?&#125;
        </div>

        <div className="obs__about-more-description">
        Open Source is a programming philosophy that work and ownership of projects should be decentralized and community-based. Open Source Software (OSS) is software which is publically visible and modifiable. Some OSS projects that you may know or have used include Mozilla Firefox, Linux, Audacity, and Wordpress.
        </div>

    </div>
  );
};

export default AboutMore;
