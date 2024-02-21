import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";
import logo from "./logotypblank.png";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const yOffset = -270; // Adjust the offset value according to your needs
    const element = document.getElementById(sectionId);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false); // Close menu after selection on mobile
  };

  return (
    <nav className="navbar">
      <div className="logo-and-title">
        <div className="logo">
          <img src={logo} alt="Proeffekt AB Logo"></img>{" "}
          {/* Always provide alt attributes for accessibility */}
        </div>
        <span>PROEFFEKT AB</span>
      </div>
      <div className="hamburger-menu">
        <Hamburger
          onClick={() => setIsOpen(!isOpen)}
          toggled={isOpen}
          toggle={setIsOpen}
          size={20}
          color="#f8f3e9"
        />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li onClick={() => scrollToSection("home")}>Hem</li>
        <li onClick={() => scrollToSection("services")}>Tjanster</li>
        <li onClick={() => scrollToSection("calculator")}>Kalkylator</li>
        <li onClick={() => scrollToSection("about")}>Om oss</li>
        <li onClick={() => scrollToSection("contact")}>Kontakt</li>
      </ul>
    </nav>
  );
};

export default Navbar;
