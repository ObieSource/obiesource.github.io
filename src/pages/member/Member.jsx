import React from "react";
import "./member.css";
import members from "../../members.json";
import { useParams } from "react-router-dom";

const Socials = ({ socials }) => {
  if (!socials) return null;
  return (
    <ul>
      {socials.map((url) => (
        <li>
          <a href={url}>{url}</a>
        </li>
      ))}
    </ul>
  );
};

const Projects = ({ projects }) => {
  if (!projects) return null;
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.name}>
          <a href={project.website}>{project.name}</a> - {project.description}
        </li>
      ))}
    </ul>
  );
};

const Member = () => {
  const { name } = useParams();
  const member =
    members.members.find((member) => member.name === name) ||
    members.officers.find((officer) => officer.name === name);
  if (!member) {
    return <main className="color__text">Member not found: {name}</main>;
  }
  return (
    <main className="color__text">
      <h1>
        {member.name} {member.class}, {member.pronouns}
      </h1>
      <Socials socials={member.socials} />
      <p>{member.bio}</p>
      <Projects projects={member.projects} />
    </main>
  );
};

export default Member;
