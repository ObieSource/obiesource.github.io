import React from "react";
import "./members-more.css";
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
    className="obs__members-more-member animate flip"
    key={name}
    >
      <div className="obs__members-more-member-heading">
        <div className="obs__members-more-member-heading-title">
          {name}
        </div>
      </div>
      <div className="obs__members-more-member-heading-description">
        {bio == "" ? "" : bio}
      </div>
  </div>
  );
};

const officers = members.filter((member) => member.status === "officer")
const regMembers = members.filter(
  (member) => member.status === "member" || member.status == null,)
const alumni = members.filter((member) => member.status === "alum")

const MembersMore = () => {
  return (
    <main className="obs__members-more">
      <div className="obs__members-more-heading">
          &#123;Meet the team&#125;
        </div>

        <div className="obs__members-more-subsection">
          <div className="obs__members-more-subheading">
            Club Officers
          </div>

          <div className="obs__members-more-members-more__container">
          {officers.map((member) => (
              <MemberCard member={member} key={member.filename} />
            ))}
          </div>
        </div>

        <div className="obs__members-more-subsection">
          <div className="obs__members-more-subheading">
            Members
          </div>

          <div className="obs__members-more-members-more__container">
          {regMembers.map((member) => (
              <MemberCard member={member} key={member.filename} />
            ))}
          </div>
        </div>

        <div className="obs__members-more-subsection">
          <div className="obs__members-more-subheading">
            Alumni
          </div>

          <div className="obs__members-more-members-more__container">
          {alumni.map((member) => (
              <MemberCard member={member} key={member.filename} />
              ))}
          </div>
        </div>
   </main>
  );
};

export default MembersMore;
