// src/App.js
import React, { useState } from "react";
import Home from "./components/Home";
import Services from "./components/Services";
// Import other sections as needed
import "./App.css";
import Navbar from "./components/Navbar";
import SecurityPolicy from "./components/SecurityPolicy";
import Modal from "./components/modals/Modal";
import ContactForm from "./components/modals/ContactForm";

import CalculatorInfo from "./components/CalculatorInfo";
import ContactBar from "./components/ContactBar";
import ContactComponent from "./components/ContactComponent";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);
  const togglePolicyVisibility = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="app">
      <Navbar />
      <Home onOpenContactForm={toggleFormVisibility} />
      {/* <CalculatorInfo /> */}
      {isFormVisible && (
        <ContactForm
          onPolicyClick={togglePolicyVisibility}
          onBackdropClick={toggleFormVisibility}
          isVisible={isFormVisible}
          onClose={() => setIsFormVisible(false)}
        />
      )}
      <Services />
      <ContactBar />
      <About />
      <ContactComponent />
      {isModalOpen && (
        <Modal
          title={"Säkerhetspolicy"}
          Component={SecurityPolicy}
          onClose={togglePolicyVisibility}
        />
      )}
      <Footer />

      {/* Include other components here as needed */}
    </div>
  );
}

export default App;
