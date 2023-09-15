import React from "react";
import "./contact-more.css";

const ContactMore = () => {
  return (
    <div className="obs__contact-more">
        <div className="obs__contact-more-heading">
          &#123;Reach out to us!&#125;
        </div>

        <div className="obs__contact-more-description">
        To reach out about one of our projects, or if you want to collaborate
        with our club, contact{" "}<a href="mailto:opensource@oberlin.edu">opensource@oberlin.edu</a>.
        </div>

        <div className="obs__contact-more-heading">
          &#123;Come hang!&#125;
        </div>

        <div className="obs__contact-more-description">
        Want to get involved?{" "}
        <a href="https://discord.gg/z5R6QhBA64">Join our discord</a> or come to
        one of our meetings posted in{" "}
        <a href="https://calendar.google.com/calendar/r?cid=b2Jzb3VyY2VAb2Jlcmxpbi5lZHU">
        our calendar</a>!
        </div>

    </div>
  );
};

export default ContactMore;
