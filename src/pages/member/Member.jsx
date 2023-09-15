import React from "react";
import "./member.css";
import members from "../../members";
import { useParams } from "react-router-dom";

const Socials = ({ socials }) => {
  if (!socials) return null;
  if (
    !Array.isArray(socials) ||
    !socials.every((social) => typeof social === "string")
  ) {
    return (
      <p className="invalid-member">
        The "socials" field must be an array of strings (URLs)! Instead, we got{" "}
        <code>{JSON.stringify(socials)}</code>.
      </p>
    );
  }
  return (
    <ul>
      {socials.map((url) => (
        <li key={url}>
          <a href={url}>{url}</a>
        </li>
      ))}
    </ul>
  );
};

const Projects = ({ projects }) => {
  if (!projects) return null;
  if (
    !Array.isArray(projects) ||
    !projects.every((project) => typeof project === "object")
  ) {
    return (
      <p className="invalid-member">
        The "socials" field should be an array of objects with <code>name</code>
        , <code>website</code>, and <code>description</code> fields. Instead, we
        got <code>{JSON.stringify(projects)}</code>.
      </p>
    );
  }
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.name || project.website || project.description}>
          <a href={project.website}>{project.name}</a> - {project.description}
        </li>
      ))}
    </ul>
  );
};

const Member = () => {
  const { name } = useParams();
  const member =
    members.find((member) => member.name === name) ||
    members.find((officer) => officer.name === name);
  if (!member) {
    return (
      <main className="content invalid-member">Member not found: {name}</main>
    );
  }
  return (
    <main className="content color__text">
      <h1>
        {member.name} {member.class}
        {member.pronouns && `, ${member.pronouns}`}
      </h1>
      <Socials socials={member.socials} />
      <p>{member.bio}</p>
      <Projects projects={member.projects} />
    </main>
  );
};

export default Member;
