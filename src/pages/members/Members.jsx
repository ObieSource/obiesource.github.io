import React from "react";
import "./members.css";
import members from "../../members";
import { Terminal } from "../../components";
import { Link } from "react-router-dom";

const MemberLink = ({ member: { name, filename } }) => {
  if (name == null) {
    return (
      <li>
        <strong className="invalid-member">
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
    <main id="about">
      <Terminal heading="Members" />
      <div className="obs__members color__text">
        {/* <h2 className="obs__members-heading">&#123;Meet the team&#125;</h2> */}
        <div className="obs__members-description">
          <div className="obs__members-columns">
            <div>
              <h2 className="obs__members-heading">Club Officers</h2>
              <ul className="diroff">
                {members
                  .filter((member) => member.status === "officer")
                  .map((member) => (
                    <MemberLink member={member} key={member.filename} />
                  ))}
              </ul>
            </div>
            <div>
              <h2 className="obs__members-heading">Members</h2>
              <ul className="dirmem">
                {members
                  .filter(
                    (member) =>
                      member.status === "member" || member.status == null,
                  )
                  .map((member) => (
                    <MemberLink member={member} key={member.filename} />
                  ))}
              </ul>
            </div>
            <div>
              <h2 className="obs__members-heading">Alumni</h2>
              <ul className="diralum">
                {members
                  .filter((member) => member.status === "alum")
                  .map((member) => (
                    <MemberLink member={member} key={member.filename} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Members;
