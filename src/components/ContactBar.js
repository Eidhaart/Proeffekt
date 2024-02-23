import React from "react";
import "./Home.css";

function ContactBar({ onOpenContactForm }) {
  return (
    <div>
      <div className="home-bottom-bar">
        <p>
          Letar du efter en kvalitets- och prisvärd entreprenör för ditt nästa
          projekt?
        </p>
        <button onClick={onOpenContactForm} className="contact-button">
          Få en uppskattning
        </button>
      </div>
    </div>
  );
}

export default ContactBar;
