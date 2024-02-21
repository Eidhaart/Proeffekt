import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { Button } from "@mui/material";

const ContactForm = ({ onBackdropClick, onPolicyClick }) => {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptedPolicy: false,
  });

  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with your actual EmailJS values
    emailjs
      .send(
        "service_1qq6e96",
        "template_5n7zpwd",
        formData,
        "23xJ5Xb-wiLc97JpP"
      )
      .then(
        (result) => {
          console.log(result.text);

          setFormData({
            from_name: "",
            from_mail: "",
            from_number: "",
            message: "",
            acceptedPolicy: false,
          });
          setIsSubmittedSuccessfully(true); // Set success message to be visible
          // Optionally, hide the success message after a few seconds
          setTimeout(() => setIsSubmittedSuccessfully(false), 5000);
          setTimeout(() => onBackdropClick(), 2000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <>
      <div className="backdrop" onClick={() => onBackdropClick()}>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          {isSubmittedSuccessfully && (
            <div className="success-message">
              <span
                role="img"
                aria-label="checkmark"
                style={{ color: "green" }}
              >
                ✅
              </span>
              Ditt meddelande har skickats framgångsrikt!
            </div>
          )}
          <div className="form-header">
            <h1>Kontakta Oss</h1>
            <button className="close-button" onClick={() => onBackdropClick()}>
              Stäng
            </button>
          </div>

          <input
            type="text"
            name="from_name"
            placeholder="Namn"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_mail"
            placeholder="Email"
            value={formData.from_mail}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="from_number"
            placeholder="Telefon Nummer"
            value={formData.from_number}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Meddelande"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="policy-box">
            <div class="privacy-policy-box">
              <input
                type="checkbox"
                name="acceptedPolicy"
                id="policyCheckbox"
                required
              />
              <label for="policyCheckbox">Jag accepterar</label>
              <div class="policy-link">
                <a href="#" class="policy-button" onClick={onPolicyClick}>
                  Säkerhetspolicy
                </a>
              </div>
            </div>
          </div>
          <Button className="submit-button" type="submit" variant="contained">
            skicka
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
