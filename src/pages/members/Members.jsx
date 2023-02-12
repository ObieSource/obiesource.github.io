import React from "react";
import "./members.css";
import members from "../../members.json";
import { Link } from "react-router-dom";

const Member = ({ name }) => {
  return (
    <li>
      <Link to={name}>{name}</Link>
    </li>
  );
};

const Members = () => {
  return (
    <main className="color__text">
      <h2>Obiesource Members Directory</h2>
      <h3>Club Officers</h3>
      <ul className="diroff">
        {members.officers.map((officer) => (
          <Member name={officer.name} />
        ))}
      </ul>
      <h3>Members</h3>
      <ul className="dirmem">
        {members.members.map((member) => (
          <Member name={member.name} />
        ))}
      </ul>
    </main>
  );
};

export default Members;
