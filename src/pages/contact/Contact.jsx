import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <main className="content color__text">
      <h1>Contact Us</h1>
      <p>
        To reach out about one of our projects, or if you want to collaborate
        with our club, contact{" "}
        <a href="mailto:opensource@oberlin.edu">opensource@oberlin.edu</a>.
      </p>
      <p>
        Want to get involved?{" "}
        <a href="https://discord.gg/z5R6QhBA64">Join our discord</a> or come to
        one of our meetings posted in{" "}
        <a href="https://calendar.google.com/calendar/r?cid=b2Jzb3VyY2VAb2Jlcmxpbi5lZHU">
          our calendar
        </a>
        .
      </p>
    </main>
  );
};

export default Contact;
