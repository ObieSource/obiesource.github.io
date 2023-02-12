import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <main className="color__text">
      <h1>Contact Us</h1>
      <p>
        To reach out about one of our projects, or if you want to collaborate
        with our club, contact{" "}
        <a href="mailto:opensource@oberlin.edu">opensource@oberlin.edu</a>.
      </p>
      <p>
        Want to get involved?{" "}
        <a href="/redirect/discord.html">Join our discord</a> or come to one of
        our meetings posted in{" "}
        <a href="/redirect/calendar.html">our calendar</a>.
      </p>
    </main>
  );
};

export default Contact;
