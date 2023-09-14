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

      const dataFiltered = []

      for (let i = 0; i < data.length; i++) {
        if (data[i].full_name != "ObieSource/.github") {
          dataFiltered.push(data[i])
        }
      }
      

      const dataSorted = dataFiltered.sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      const dataSortedTuples = []
      var curTuple = []

      for (let i = 0; i < dataSorted.length; i++) {
        if (curTuple.length == 3) {
          dataSortedTuples.push(curTuple)
          curTuple = []
        }
        curTuple.push(dataSorted[i])
        if (i == dataSorted.length - 1) { 
          dataSortedTuples.push(curTuple)
        }
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

      <div className="obs__projects-carousel__container">

        <Carousel interval={null} controls={false} activeIndex={index} onSelect={handleSelect} className="obs__projects-carousel">
          {projects.map((projectTuples, index) => {
            return (
              <Carousel.Item key={index}> 
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
                          {project.description != null ? project.description.indexOf(' Project') != -1 ? project.description.substring(0, project.description.indexOf(' Project')) : project.description : ""}
                          <div className="obs__projects-project-heading-description-leader">
                          {project.description != null ? project.description.indexOf(' Project') == -1 ? "" : project.description.substring(project.description.indexOf(' Project') + 9) : ""}
                          </div>
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
