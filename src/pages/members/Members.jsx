import React from "react";
import "./members.css";
import members from "../../members";
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
    <main className="content color__text">
      <h1>Obiesource Members Directory</h1>
      <h2>Club Officers</h2>
      <ul className="diroff">
        {members
          .filter((member) => member.status === "officer")
          .map((member) => (
            <Member name={member.name} key={member.name} />
          ))}
      </ul>
      <h2>Members</h2>
      <ul className="dirmem">
        {members
          .filter((member) => member.status !== "officer")
          .map((member) => (
            <Member name={member.name} key={member.name} />
          ))}
      </ul>
    </main>
  );
};

export default Members;
