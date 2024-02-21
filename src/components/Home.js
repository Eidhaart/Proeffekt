import React from "react";
import "./Home.css"; // Make sure to create a Home.css file for styling
import Button from "@mui/material/Button";

const Home = ({ onOpenContactForm }) => {
  return (
    <div id="home">
      <div className="home-container">
        {/* Add the Proeffekt text and the horizontal bar here */}

        <div className="text-container">
          <div className="proeffekt-title">Proeffekt</div>
          <div className="orange-bar"></div>
          <h1>
            <b>Din vision, vår expertis</b>
          </h1>
          <p>
            <i>
              Oöverträffad skicklighet, fantastiskt hantverk, punktlig leverans
              och öppen kommunikation
            </i>
          </p>
          <Button
            onClick={onOpenContactForm}
            className="contact-button"
            variant="contained"
          >
            Kontakta oss
          </Button>
        </div>
      </div>
      <div className="home-bottom-bar">
        <p>
          Letar du efter en kvalitets- och prisvärd entreprenör för ditt nästa
          projekt?
        </p>
        <Button
          onClick={onOpenContactForm}
          variant="contained"
          style={{ backgroundColor: "orange", color: "white" }}
          className="estimate-button"
        >
          Få en uppskattning
        </Button>
      </div>
    </div>
  );
};

export default Home;
