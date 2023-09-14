import React from "react";
import "./members.css";
import members from "../../members";
import { Terminal } from "../../components";
import { Link } from "react-router-dom";

const MemberLink = ({ member: { name, filename } }) => {
  if (name == null) {
    return (
      <li>
        <strong class="invalid-member">
          The member in the file <code>{filename}</code> doesn't have a "name"
          attribute!
        </strong>
      </li>
    );
  }
  return (
    <li>
      <Link to={name}>{name}</Link>
    </li>
  );
};

const Members = () => {
  return (
    <div id="about">
      <Terminal heading="Members" />
      <main className="content color__text">
        <h2>Club Officers</h2>
        <ul className="diroff">
          {members
            .filter((member) => member.status === "officer")
            .map((member) => (
              <MemberLink member={member} key={member.filename} />
            ))}
        </ul>
        <h2>Members</h2>
        <ul className="dirmem">
          {members
            .filter(
              (member) => member.status === "member" || member.status == null,
            )
            .map((member) => (
              <MemberLink member={member} key={member.filename} />
            ))}
        </ul>
        <h2>Alumni</h2>
        <ul className="diralum">
          {members
            .filter((member) => member.status === "alum")
            .map((member) => (
              <MemberLink member={member} key={member.filename} />
            ))}
        </ul>
      </main>
    </div>
  );
};

export default Members;
