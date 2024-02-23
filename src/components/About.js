import React from "react";
import "./About.css"; // Make sure to create and link the CSS file for styling
// Placeholder image path, replace with your actual image path

const About = () => {
  return (
    <div className="about-us-container" id="about">
      {/* <img src={aboutImage} alt="About Us" className="about-us-image" /> */}
      <div className="about-us-text">
        <h2>OM OSS</h2>
        <p>
          Here you can add your text about the company. This section is designed
          to introduce your company to visitors, share your history, core
          values, or any other information you find relevant.
        </p>
      </div>
    </div>
  );
};

export default About;
