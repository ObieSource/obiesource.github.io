import React, { useEffect, useState } from "react";
import "./projects.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("https://api.github.com/orgs/ObieSource/repos")
      ).json();
      
      const dataSorted = data.sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      const dataSortedTuples = []
      var curTuple = []

      for (var i in dataSorted) {
        if (curTuple.length == 3) {
          dataSortedTuples.push(curTuple)
          curTuple = []
        }
        curTuple.push(dataSorted[i])
      }

      // set state when the data received
      setProjects(
        dataSortedTuples
      );
    };

    dataFetch();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (!projects) return <div>Loading...</div>;

  return (
    <div className="obs__projects">
        <div className="obs__projects-header">
        &#123;See Our Projects&#125;
        </div>

      {/* <div className="obs__projects-container"> */}
      <div className="obs__projects-carousel__container">

        <Carousel interval={null} controls={false} activeIndex={index} onSelect={handleSelect} className="obs__projects-carousel">
          {projects.map((projectTuples, index) => {
            return (
              <Carousel.Item> 
                <div className="obs__projects-container">
                {projectTuples.map((project, index) => {
                  return (
                      <div
                        className="obs__projects-project animate flip"
                        key={project.name}
                        style={{ animationDelay: 2 + index * 0.25 + "s" }}
                      >
                        <div className="obs__projects-project-heading">
                          <div className="obs__projects-project-heading-title">
                            <a href={project.html_url}>{project.name}</a>
                          </div>
                          <div className="obs__projects-project-heading-status">
                            {project.license?.spdx_id}
                          </div>
                        </div>
                        <div className="obs__projects-project-heading-description">
                          {project.description}
                        </div>
                    </div>
                  )
                })}
                </div>
              </Carousel.Item>
            )})}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
