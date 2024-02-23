import React from "react";
import "./ContactComponent.css";

function ContactComponent() {
  return (
    <div className="contact-backdrop" id="contact">
      <div className="contact-bar">
        <h2>Kontakta Oss</h2>
        <div className="contact-info">
          <div className="contact-person">
            <h3>Jakub Binkowski</h3>
            <p>Telefon: +46 70 557 76 20</p>
            <p>Email: proeffektab@gmail.com</p>
          </div>
          <div className="contact-person">
            <h3>Marcin Swieczkowski</h3>
            <p>Telefon: +46 73 635 05 65</p>
            <p>Email: proeffektab@gmail.com</p>
          </div>
        </div>
        <p className="contact-address">
          Renstiernas gata 46 A, 11631 Stockholm
        </p>
      </div>
    </div>
  );
}

export default ContactComponent;
