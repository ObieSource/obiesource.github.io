import React from "react";
import "./members.css";
import members from "../../members";
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

const MemberCard = ({ member: { name, filename, bio } }) => {
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
    <div
    className="obs__members-member animate flip"
    key={name}
    >
      <div className="obs__members-member-heading">
        <div className="obs__members-member-heading-title">
          {name}
        </div>
      </div>
      <div className="obs__members-member-heading-description">
        {bio == "" ? "" : bio}
      </div>
  </div>
  );
};

const Members = () => {
  return (
    <main className="obs__members">
      <div className="obs__members-heading">
          &#123;Meet the team&#125;
        </div>

        <div className="obs__members-subsection">
          <div className="obs__members-subheading">
            Club Officers
          </div>

          <div className="obs__members-members__container">
          {members
            .filter((member) => member.status === "officer")
            .map((member) => (
              <MemberCard member={member} key={member.filename} />
            ))}
          </div>
        </div>

        <div className="obs__members-subsection">
          <div className="obs__members-subheading">
            Members
          </div>

          <div className="obs__members-members__container">
          {members
            .filter(
              (member) => member.status === "member" || member.status == null,
            )
            .map((member) => (
              <MemberCard member={member} key={member.filename} />
            ))}
          </div>
        </div>

        <div className="obs__members-subsection">
          <div className="obs__members-subheading">
            Alumni
          </div>

          <div className="obs__members-members__container">
          {members
            .filter((member) => member.status === "alum")
            .map((member) => (
              <MemberCard member={member} key={member.filename} />
              ))}
          </div>
        </div>
   </main>
  );
};

export default Members;
