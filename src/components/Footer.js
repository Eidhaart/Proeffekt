import React from "react";
import "./Footer.css"; // Ensure the CSS file is linked
import { IoLogoFacebook, IoMailOutline, IoCallOutline } from "react-icons/io5";
import logo from "./logo512.png"; // Update the path as needed

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="left-column">
          <div className="footer-left">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <div className="company-info">
              <h1>Proeffekt AB</h1>
              <p>Jakub Binkowski - VD</p>
              <p>
                <IoCallOutline /> +46 70 557 76 20
              </p>
              <p>
                <IoMailOutline /> proeffektab@gmail.com
              </p>
              <a href="https://facebook.com">
                <IoLogoFacebook /> Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="links-column">
            <a href="#home">Hem</a>
            <a href="#calculator">Kalkylator</a>
            <a href="#about">Om oss</a>
            <a href="#contact">Kontakt</a>
            <a href="#privacy-policy">Dataskyddspolicy</a>
          </div>
          <a href="#design" className="design-credit">
            Designed By Eidhaart
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2024 Proeffekt AB</p>
      </div>
    </footer>
  );
};

export default Footer;
